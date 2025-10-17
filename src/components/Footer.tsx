import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-50">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:pr-8 md:border-r border-gray-300">
              <img
                src="https://granix.free-appointment.com/wp-content/uploads/2025/09/Paragraf-metniniz-2-scaled.png"
                alt="Granix Logo"
                className="h-16 mb-4 object-contain"
              />
              <p className="text-gray-600 leading-relaxed">
                Your trusted partner for premium granite, quartz, and marble countertop installations.
              </p>
            </div>

            <div className="md:px-8 md:border-r border-gray-300">
              <h4 className="text-lg font-bold mb-4 text-gray-900">Contact Info</h4>
              <div className="space-y-3">
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
            </div>

            <div className="md:pl-8">
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
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2025 Granix. All rights reserved.</p>
          <p className="mt-2">
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
      </div>
    </footer>
  );
}
