import { MapPin, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "lucide-react";
import Addres from "./addres";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 border-b-2 border-green-700 pb-2 font-semibold"
      : "text-gray-700 hover:text-green-700";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-700 bg-green-50 px-3 py-2 rounded-md font-semibold"
      : "text-gray-700 hover:text-green-700 hover:bg-green-50 px-3 py-2 rounded-md";

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">

      {/* Top Header */}
      <div className="border-b">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">

          {/* Logo + Address */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img
                src="/images/Logo2.png"
                alt="logo"
                className="h-14 w-auto"
              />
                  <span
                  className="
                    font-extrabold 
                    text-xl 
                    tracking-wide 
                    bg-gradient-to-r 
                    from-emerald-600 
                    via-green-500 
                    to-lime-500 
                    bg-clip-text 
                    text-transparent
                    drop-shadow-sm
                  "
                >
                  MyEasy Pharma
                </span>

            </div>

            <div className="hidden md:flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
              {/* <MapPin size={16} />
              <span>Select Address</span> */}
              <Addres />
            </div>
          </div>

          {/* Right Icons + CTA */}
          <div className="flex items-center gap-4">
            <ShoppingCart className="cursor-pointer text-gray-700" />

            <button className="hidden md:flex items-center gap-1 border px-3 py-1 rounded-md text-sm">
              <User size={16} />
              Login
            </button>

            <a href="http://localhost:8501">
              <button className="hidden md:block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm rounded-lg">
                Intelligent Disease Predictor
              </button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Menu (Original Links Preserved) */}
      <div className="border-b hidden lg:block">
        <div className="container mx-auto px-6 h-12 flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/pharma40" className={navLinkClass}>Pharma 4.0</NavLink>
          <NavLink to="/platform" className={navLinkClass}>Platform</NavLink>
          <NavLink to="/service" className={navLinkClass}>Services</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
      </div>

      {/* Category Bar  */}
      <div className="bg-[#0f3f3a] hidden lg:block">
        <div className="container mx-auto px-6 h-11 flex items-center gap-6 text-white text-sm overflow-x-auto">
          <NavLink to="/commingsoon" state="Products" className="cursor-pointer">Products</NavLink>
          <NavLink to="/commingsoon" state="Nutrition" className="cursor-pointer">Nutrition</NavLink>
          <NavLink to="/commingsoon" state="Women Care" className="cursor-pointer">Women Care</NavLink>
          <NavLink to="/commingsoon" state="Diabetes Care" className="cursor-pointer">Diabetes Care</NavLink>
          <NavLink to="/commingsoon" state="Heart Car" className="cursor-pointer">Heart Care</NavLink>
          <NavLink to="/commingsoon" state="Doctors & Clinicians" className="cursor-pointer">Doctors & Clinicians</NavLink>
          <NavLink to="/commingsoon" state="Pharma & Research" className="cursor-pointer">Pharma & Research</NavLink>
          <NavLink to="/commingsoon" state="Diet Plan" className="cursor-pointer">Diet Plan</NavLink>
          <NavLink to="/commingsoon" state="Care Coordinators" className="cursor-pointer">Care Coordinators</NavLink>
          {/* <span className="cursor-pointer">Health Devices</span> */}
          {/* <span className="cursor-pointer">Home Essentials</span> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <nav className="flex flex-col gap-2 p-4 text-sm">

            {/* Original Routes Preserved */}
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Home
            </NavLink>
            <NavLink to="/pharma40" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Pharma 4.0
            </NavLink>
            <NavLink to="/platform" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Platform
            </NavLink>
            <NavLink to="/service" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>
              Contact
            </NavLink>

            <a href="http://localhost:8501" className="mt-3">
              <button className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg">
                Intelligent Disease Predictor
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
