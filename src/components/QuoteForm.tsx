import { useState, useRef, useEffect } from 'react';
import { X, AlertCircle, Upload, Send } from 'lucide-react';
import { useGooglePlacesAutocomplete } from '../hooks/useGooglePlacesAutocomplete';
import { supabase } from '../lib/supabase';
import emailjs from '@emailjs/browser';

interface QuoteFormProps {
  variant?: 'hero' | 'section' | 'modal';
  onClose?: () => void;
  onSubmitSuccess?: () => void;
}

const VALID_ZIP_CODES = new Set([
  '20124', '20147', '20148', '20149', '20164', '20165', '20166', '20175', '20176', '20177', '20178',
  '20703', '20704', '20707', '20708', '20709', '20715', '20716', '20717', '20718', '20719', '20723',
  '20724', '20725', '20726', '20740', '20788', '20810', '20811', '20813', '20814', '20815', '20816',
  '20817', '20824', '20825', '20827', '20832', '20854', '20859', '20874', '20892', '21044', '21045',
  '21046', '21075', '21113', '21401', '22041', '22042', '22043', '22044', '22046', '22066', '22081',
  '22082', '22102', '22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22210',
  '22213', '22214', '22215', '22216', '22217', '22219', '22303', '22306', '22307', '22308', '22309',
  '22310', '22315'
]);

export function QuoteForm({ variant = 'section', onClose, onSubmitSuccess }: QuoteFormProps) {
  const addressInputRef = useRef<HTMLInputElement>(null);
  const placeDetails = useGooglePlacesAutocomplete(addressInputRef);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    serviceType: '',
    message: '',
    honeypot: ''
  });

  const [formStartTime] = useState(Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [zipCodeError, setZipCodeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (placeDetails) {
      setFormData(prev => ({
        ...prev,
        address: placeDetails.fullAddress,
        zipCode: placeDetails.zipCode
      }));

      if (placeDetails.zipCode.length >= 5 && !VALID_ZIP_CODES.has(placeDetails.zipCode)) {
        setZipCodeError(true);
      } else {
        setZipCodeError(false);
      }
    }
  }, [placeDetails]);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');

    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const numbers = phone.replace(/\D/g, '');
    return numbers.length === 10;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      console.log('Bot detected: honeypot field filled');
      setIsSubmitting(false);
      return;
    }

    // Timestamp check - if submitted too fast (< 3 seconds), likely a bot
    const submissionTime = Date.now();
    const timeDiff = (submissionTime - formStartTime) / 1000;
    if (timeDiff < 3) {
      console.log('Bot detected: form submitted too quickly');
      setIsSubmitting(false);
      return;
    }

    if (!VALID_ZIP_CODES.has(formData.zipCode)) {
      setZipCodeError(true);
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError(true);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setPhoneError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('=== FORM SUBMISSION STARTED ===');
      console.log('Form data:', formData);

      let attachmentUrl = '';

      if (selectedFile) {
        try {
          console.log('Uploading file:', selectedFile.name);
          const fileExt = selectedFile.name.split('.').pop();
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

          const { error: uploadError } = await supabase.storage
            .from('quote-attachments')
            .upload(fileName, selectedFile);

          if (uploadError) {
            console.error('Upload error:', uploadError);
            console.log('Continuing without attachment...');
            attachmentUrl = 'File upload failed - stored in database without attachment';
          } else {
            const { data: { publicUrl } } = supabase.storage
              .from('quote-attachments')
              .getPublicUrl(fileName);

            attachmentUrl = publicUrl;
            console.log('File uploaded successfully:', publicUrl);
          }
        } catch (uploadErr) {
          console.error('File upload exception:', uploadErr);
          attachmentUrl = 'File upload failed - stored in database without attachment';
        }
      }

      console.log('Saving to database...');
      const { error: dbError } = await supabase
        .from('quote_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          zip_code: formData.zipCode,
          material: formData.serviceType,
          project_type: formData.serviceType,
          comments: formData.message,
          attachment_url: attachmentUrl
        });

      if (dbError) {
        console.error('Database error:', dbError);
        throw new Error(`Database error: ${dbError.message}`);
      }

      console.log('Database save successful!');

      try {
        console.log('Sending email...');
        console.log('EmailJS Config:', {
          serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        });

        const emailParams = {
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          zip_code: formData.zipCode,
          material: formData.serviceType,
          project_type: formData.serviceType,
          comments: formData.message || 'No additional comments',
          attachment_url: attachmentUrl || 'No attachment'
        };

        console.log('Email params:', emailParams);

        const emailResult = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          emailParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        console.log('Email sent successfully!', emailResult);
      } catch (emailError) {
        console.error('Email sending failed, but form was saved to database:', emailError);
      }

      console.log('Form submission completed successfully!');

      setIsSubmitting(false);

      console.log('Calling onSubmitSuccess callback...');
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }

      if (onClose) onClose();
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      alert(`Failed to submit quote: ${errorMessage}\nPlease try again.`);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === 'phone') {
      formattedValue = formatPhoneNumber(value);
      setPhoneError(false);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    if (name === 'zipCode') {
      if (value.length >= 5 && !VALID_ZIP_CODES.has(value)) {
        setZipCodeError(true);
      } else {
        setZipCodeError(false);
      }
    }

    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const maxSize = 20 * 1024 * 1024;

      if (file.size > maxSize) {
        setFileError('File size must be less than 20MB');
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setFileError('');
        setSelectedFile(file);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setFileError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const isModal = variant === 'modal';
  const isHero = variant === 'hero';

  const formClasses = isModal
    ? 'bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-md relative'
    : isHero
    ? 'bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-200'
    : 'bg-white rounded-2xl p-6 sm:p-8 shadow-xl';

  return (
    <div className={formClasses}>
      {isModal && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>
      )}

      <div className="mb-3">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          Get Your FREE Quote
        </h3>
        <p className="text-amber-600 text-sm sm:text-base font-semibold">
          25% OFF All Countertops!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-2.5">
          {/* Honeypot field - hidden from users, visible to bots */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="absolute left-[-9999px] w-1 h-1 opacity-0"
            aria-hidden="true"
          />

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First & Last Name *"
              required
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors text-sm"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                emailError
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-amber-500'
              }`}
            />
            {emailError && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>Please enter a valid email address</span>
              </div>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              maxLength={14}
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                phoneError
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-amber-500'
              }`}
            />
            {phoneError && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>Please enter a valid 10-digit phone number</span>
              </div>
            )}
          </div>

          <div>
            <input
              ref={addressInputRef}
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address *"
              required
              autoComplete="off"
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="ZIP Code *"
              required
              maxLength={5}
              className={`w-full px-3 py-2 border-2 rounded-lg focus:outline-none transition-colors text-sm ${
                zipCodeError
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 focus:border-amber-500'
              }`}
            />
            {zipCodeError && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>Your ZIP code is outside our service area. We're sorry.</span>
              </div>
            )}
          </div>

          <div>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors bg-white text-sm sm:text-base"
            >
              <option value="">Select Service Type *</option>
              <option value="quartz-countertops">Quartz Countertops</option>
              <option value="granite-countertops">Granite Countertops</option>
              <option value="porcelain-countertops">Porcelain Countertops</option>
              <option value="fireplace-walls">Fireplace Walls</option>
              <option value="luxury-kitchen-remodeling">Luxury Kitchen Remodeling</option>
              <option value="commercial-surfaces">Commercial Surfaces</option>
            </select>
          </div>

          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project (optional)"
              rows={2}
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg focus:border-amber-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
            />
          </div>

          <div>
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileChange}
              accept="image/*,.pdf,.doc,.docx"
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-500 transition-colors cursor-pointer text-xs text-gray-600 hover:text-amber-600"
            >
              <Upload size={16} />
              <span>Attach Files (Max 20MB)</span>
            </label>
            {selectedFile && (
              <div className="mt-2 flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-sm text-gray-700 truncate flex-1">{selectedFile.name}</span>
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </div>
            )}
            {fileError && (
              <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                <AlertCircle size={16} />
                <span>{fileError}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold py-2.5 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-sm animate-pulse-scale flex items-center justify-center gap-2"
          >
            <Send size={16} />
            <span>{isSubmitting ? 'Submitting...' : 'GET MY 25% OFF QUOTE'}</span>
          </button>

          <p className="text-[10px] text-gray-500 text-center leading-tight">
            By submitting, you agree to receive communications.
          </p>
        </form>
    </div>
  );
}
