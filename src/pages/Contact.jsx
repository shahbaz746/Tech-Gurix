import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'techgurix424@gmail.com',
      link: 'mailto:techgurix424@gmail.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+92 309 1798762',
      link: 'https://wa.me/923091798762'
    },
    {
      icon: MapPin,
      label: 'Response Time',
      value: 'Within 24 Hours',
      link: '#'
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send to email via WhatsApp
      const whatsappMessage = `Hello, I have a new inquiry:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      const whatsappLink = `https://wa.me/923091798762?text=${encodeURIComponent(whatsappMessage)}`

      // Also create mailto link for email
      const mailtoLink = `mailto:techgurix424@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`)}`

      // Open WhatsApp (primary contact method)
      window.open(whatsappLink, '_blank')

      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitted(true)

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Tech Gurix</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear from you. Get in touch with us today and let's bring your ideas to life!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 text-center cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.label}</h3>
                <p className="text-lg text-blue-600 font-semibold hover:text-blue-700">{info.value}</p>
              </a>
            )
          })}
        </div>

        {/* Main Contact Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border-2 border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-300 rounded-xl flex items-center gap-3 animate-fade-in-up">
                <CheckCircle size={24} className="text-green-600" />
                <div>
                  <p className="text-green-900 font-bold">Success!</p>
                  <p className="text-green-700 text-sm">Your message has been sent. We'll respond shortly!</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+92 300 1234567"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-gray-900 font-bold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 text-gray-900 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-sm text-gray-600 text-center">
                Your message will be sent via WhatsApp and Email
              </p>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Tech Gurix?</h2>
              <ul className="space-y-4">
                {[
                  'Fast and responsive communication',
                  'Expert team with 1+ years experience',
                  '50+ successful projects completed',
                  'Custom solutions for your needs',
                  'Affordable pricing packages',
                  '24/7 customer support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-gray-700">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <p className="text-gray-600 font-semibold">Quick Contact Options:</p>
              <a
                href="https://wa.me/923091798762"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:techgurix424@gmail.com"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
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
    </div>
  )
}

export default Contact

