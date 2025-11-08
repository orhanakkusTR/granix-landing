import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="md:pr-8 md:border-r border-gray-300">
              <img
                src="https://darkblue-pony-385649.hostingersite.com/wp-content/uploads/2025/11/granix-logo1.png"
                alt="Granix Logo"
                className="h-16 mb-4 object-contain"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                Your trusted partner for premium granite, quartz, and marble countertop installations.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/granix.inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-110 shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/granixinc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110 shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="md:pl-8">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Contact Info</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-gray-600">
                  <MapPin size={18} className="flex-shrink-0 mt-1 text-amber-600" />
                  <div>
                    <p>9385 Washington Blvd. N, Suite J</p>
                    <p>Laurel, MD 20723</p>
                    <p className="text-sm text-amber-600 font-medium mt-1">(Walk-in Welcome)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone size={18} className="text-amber-600" />
                  <a href="tel:4102907136" className="hover:text-amber-600 transition-colors">
                    (410) 290-7136
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail size={18} className="text-amber-600" />
                  <a href="mailto:office@granix.com" className="hover:text-amber-600 transition-colors">
                    office@granix.com
                  </a>
                </div>
              </div>

              <h4 className="text-lg font-bold mb-4 text-gray-900">Showroom Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="flex-shrink-0 mt-1 text-amber-600" />
                  <div>
                    <p>Monday – Friday: 8am – 4:30pm</p>
                    <p>Saturday: 9am - 2pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">&copy; 2025 Granix. All rights reserved.</p>
              <p className="mt-2 text-gray-400">
                Software Partner:{' '}
                <a
                  href="https://orvedo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  Orvedo
                </a>
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/cookie-policy"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
