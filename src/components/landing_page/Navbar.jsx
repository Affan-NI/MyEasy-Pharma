import { Pill, Menu, X } from 'lucide-react';
import { useState } from 'react';
// import { Link } from 'lucide-react';
import { Link } from "react-router-dom";


export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Pill className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900">MyEasy Pharma</div>
              <div className="text-[10px] text-teal-600 -mt-1">Pvt Ltd</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/pharma40" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Pharma 4.0</Link>
            <Link to="/platform" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Platform</Link>
            <Link to="/service" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link to="/about" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm rounded-lg hover:shadow-lg transition-all">
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              <a href="#home" className="text-sm text-gray-700 hover:text-blue-600 py-2">Home</a>
              <a href="#pharma40" className="text-sm text-gray-700 hover:text-blue-600 py-2">Pharma 4.0</a>
              <a href="#platform" className="text-sm text-gray-700 hover:text-blue-600 py-2">Platform</a>
              <a href="#services" className="text-sm text-gray-700 hover:text-blue-600 py-2">Services</a>
              <a href="#about" className="text-sm text-gray-700 hover:text-blue-600 py-2">About</a>
              <a href="#contact" className="text-sm text-gray-700 hover:text-blue-600 py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
