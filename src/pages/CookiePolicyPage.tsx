import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function CookiePolicyPage() {
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

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience by remembering your preferences and understanding how you use
              our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              We use cookies for several purposes to enhance your browsing experience and improve our services:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable basic features like
                  page navigation and access to secure areas of the website. The website cannot function properly
                  without these cookies.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                <p className="mb-2">
                  We use Google Analytics to collect information about how visitors use our website. This helps us
                  understand user behavior and improve our website. These cookies collect information such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Number of visitors to the site</li>
                  <li>Pages visited and time spent on each page</li>
                  <li>How visitors arrived at the site</li>
                  <li>Geographic location (country/city level only)</li>
                  <li>Browser and device information</li>
                </ul>
                <p className="mt-2">
                  All information collected by Google Analytics is anonymous and cannot be used to identify you personally.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                <p className="mb-2">
                  We use marketing cookies, including Facebook Pixel, to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Track conversions from advertising campaigns</li>
                  <li>Show you relevant ads on social media platforms</li>
                  <li>Measure the effectiveness of our marketing efforts</li>
                  <li>Build audiences for targeted advertising</li>
                </ul>
                <p className="mt-2">
                  These cookies may track your browsing activity across different websites.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Functionality Cookies</h3>
                <p>
                  These cookies enable enhanced functionality and personalization, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Remembering your preferences and settings</li>
                  <li>Providing location-based services (Google Maps integration)</li>
                  <li>Enabling interactive features like forms and quote requests</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              We use services from third-party companies that may set their own cookies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics:</strong> To analyze website traffic and user behavior.
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  View Google's Privacy Policy
                </a>
              </li>
              <li>
                <strong>Facebook Pixel:</strong> To track conversions and deliver personalized ads.
                <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  View Facebook's Privacy Policy
                </a>
              </li>
              <li>
                <strong>Google Maps:</strong> To provide location services and interactive maps.
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  View Google's Privacy Policy
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights
              by setting your preferences in your browser.
            </p>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. Here's how to manage cookies
              in popular browsers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Chrome:</strong>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  Cookie settings
                </a>
              </li>
              <li>
                <strong>Mozilla Firefox:</strong>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  Cookie settings
                </a>
              </li>
              <li>
                <strong>Safari:</strong>
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  Cookie settings
                </a>
              </li>
              <li>
                <strong>Microsoft Edge:</strong>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  Cookie settings
                </a>
              </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 mt-6">Opt-Out Options</h3>
            <p className="mb-4">
              You can opt out of specific tracking services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Google Analytics:</strong>
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  Google Analytics Opt-out Browser Add-on
                </a>
              </li>
              <li>
                <strong>Facebook Ads:</strong>
                <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700 ml-1">
                  Facebook Ad Preferences
                </a>
              </li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
              <p className="text-amber-800">
                <strong>Note:</strong> If you choose to block all cookies, some features of our website may not work
                properly, and you may not be able to access all content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p>
              Different types of cookies have different retention periods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 1-24 months)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal
              reasons. We encourage you to review this page periodically to stay informed about how we use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us:
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
