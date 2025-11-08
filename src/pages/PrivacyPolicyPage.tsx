import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p>
              At Granix, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Personal Information</h3>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request a quote or consultation</li>
              <li>Fill out contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Communicate with us via phone, email, or social media</li>
            </ul>
            <p className="mt-4">
              This information may include: name, email address, phone number, address, and project details.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-6">Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device and
              browsing behavior through cookies and similar technologies, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Geographic location</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you quotes, estimates, and project updates</li>
              <li>Improve our website and customer service</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="mb-4">We use third-party services to help us operate our business:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Facebook Pixel:</strong> To track conversions and optimize advertising</li>
              <li><strong>Google Maps:</strong> To provide location services and address autocomplete</li>
              <li><strong>Supabase:</strong> For secure data storage and management</li>
            </ul>
            <p className="mt-4">
              These third parties have their own privacy policies and may collect information independently.
              We encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at <a href="mailto:office@granix.com" className="text-amber-600 hover:text-amber-700">office@granix.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have collected information from a child,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new policy on this page and updating the "Last Updated" date below. We encourage you to review
              this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="space-y-2 ml-4">
              <p><strong>Email:</strong> <a href="mailto:office@granix.com" className="text-amber-600 hover:text-amber-700">office@granix.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:4102907136" className="text-amber-600 hover:text-amber-700">(410) 290-7136</a></p>
              <p><strong>Address:</strong> 9385 Washington Blvd. N, Suite J, Laurel, MD 20723</p>
            </div>
          </section>

          <section className="pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> October 28, 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
