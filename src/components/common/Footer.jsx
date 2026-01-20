import React from 'react'
import { Github, Linkedin, Mail, Phone, MapPin, Facebook, Music, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ]

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Performance Optimization', href: '#' },
    { name: 'Web Security', href: '#' },
    { name: 'Website Maintenance', href: '#' }
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com/shahbaz746', label: 'GitHub', color: 'hover:text-gray-700' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Music, url: 'https://www.tiktok.com/@techgurix3?_r=1&_t=ZS-93BCseNdx5w', label: 'TikTok', color: 'hover:text-black' },
    { icon: Mail, url: 'https://www.instagram.com/techgurix424?utm_source=qr&igsh=dTJ5emFubmV0bThh', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Facebook, url: 'https://www.facebook.com/share/1auTh3rmqQ/', label: 'Facebook', color: 'hover:text-blue-500' }
  ]

  const contactInfo = [
    { icon: Mail, text: 'techgurix424@gmail.com', link: 'mailto:techgurix424@gmail.com' },
    { icon: Phone, text: '+92 309 1798762', link: 'https://wa.me/923091798762' }
  ]

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">T</span>
                </div>
                <h3 className="text-2xl font-black text-white">
                  Tech<span className="text-blue-400">Gurix</span>
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                A leading web development agency specializing in creating stunning digital experiences that drive business growth and client success.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Heart size={16} className="text-red-500" />
                <span>Crafted with passion in Pakistan</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      → {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h4 className="text-lg font-bold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                    >
                      → {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h4 className="text-lg font-bold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-blue-500/20 group-hover:bg-blue-500/40 rounded-lg transition-colors duration-300">
                        <Icon size={20} className="text-blue-400" />
                      </div>
                      <span className="font-medium">{info.text}</span>
                    </a>
                  )
                })}

                {/* Social Links */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-sm text-gray-500 mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 bg-gray-800 hover:bg-blue-600 rounded-lg transition-all duration-300 text-gray-400 ${social.color} transform hover:scale-110 hover:-translate-y-1`}
                          title={social.label}
                        >
                          <Icon size={20} />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-12"></div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {currentYear} <span className="font-bold text-white">Tech Gurix</span>. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Transforming ideas into digital reality.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Contact Us
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-black/50 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm">
            <p>
              Made with <Heart size={14} className="inline text-red-500" /> by{' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Tech Gurix Team
              </a>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  )
}

export default Footer
