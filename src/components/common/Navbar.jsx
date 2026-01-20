import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/shahbaz746", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/", label: "LinkedIn" },
    { icon: Mail, url: "mailto:techgurix424@gmail.com", label: "Email" }
  ];

  return (
    <nav className="w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">T</span>
              </div>
              <span className="hidden sm:block text-2xl font-black text-gray-900">
                Tech<span className="text-blue-600">Gurix</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Social Links & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-110"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <a
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X size={28} className="text-gray-900" />
            ) : (
              <Menu size={28} className="text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-gray-200 animate-slide-down">
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-600 px-4 mb-3">Connect with us</p>
              <div className="flex justify-around px-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300"
                      title={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTA */}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-6 px-6 py-3 mx-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold text-center hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
