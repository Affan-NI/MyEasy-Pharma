import { Pill, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-white">MyEasy Pharma</div>
                <div className="text-[10px] text-teal-400 -mt-1">Pvt Ltd</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              An AI-native platform shaping India's healthcare future through Pharma 4.0 innovation
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#pharma40" className="text-sm hover:text-blue-400 transition-colors">Pharma 4.0</a></li>
              <li><a href="#platform" className="text-sm hover:text-blue-400 transition-colors">SaaS Ecosystem</a></li>
              <li><a href="#services" className="text-sm hover:text-blue-400 transition-colors">Healthcare Services</a></li>
              <li><a href="#about" className="text-sm hover:text-blue-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li className="text-sm">For Clinicians</li>
              <li className="text-sm">For Pharma Companies</li>
              <li className="text-sm">For Hospitals</li>
              <li className="text-sm">For Patients</li>
              <li className="text-sm">For Researchers</li>
              <li className="text-sm">For Policymakers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>GIMS Incubator, Greater Noida<br />Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@myeasypharma.com" className="hover:text-blue-400 transition-colors">
                  info@myeasypharma.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 MyEasy Pharma Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Data Security</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Startup India Registered | MSME Registered | Incubated at GIMS, Noida
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Pre-Incubated at BITS Pilani & IIM Lucknow
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
