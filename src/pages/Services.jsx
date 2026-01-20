import React, { useState } from 'react'
import { Code, Smartphone, Zap, Shield, Palette, BarChart3, Headphones, Rocket } from 'lucide-react'

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      shortDesc: 'Custom websites tailored to your needs',
      description: 'We build modern, scalable web applications using the latest technologies including React, Next.js, and Node.js. Our development process focuses on clean code, performance optimization, and maintainability.',
      features: ['Responsive Design', 'Modern Stack', 'SEO Optimized', 'Fast Loading'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      shortDesc: 'Perfect on all devices',
      description: 'Your website will look stunning and function flawlessly on desktops, tablets, and mobile phones. We ensure optimal user experience across all screen sizes with mobile-first approach.',
      features: ['Mobile First', 'Touch Optimized', 'Cross-browser', 'Adaptive Layout'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      shortDesc: 'Beautiful and intuitive interfaces',
      description: 'Our design team creates visually appealing and user-friendly interfaces that engage your audience. We combine aesthetics with functionality to deliver exceptional user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      shortDesc: 'Lightning-fast loading speeds',
      description: 'We optimize your website for maximum speed and efficiency. Fast-loading sites improve SEO rankings, reduce bounce rates, and increase conversions. We use advanced techniques to minimize load times.',
      features: ['Code Optimization', 'Image Compression', 'Caching', 'CDN Integration'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      shortDesc: 'Secure and always up-to-date',
      description: 'We implement industry-standard security practices to protect your website from threats. Our maintenance services ensure your site stays secure, updated, and running smoothly at all times.',
      features: ['SSL Certificates', 'Regular Updates', 'Backups', 'Security Audits'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      shortDesc: 'Data-driven insights',
      description: 'Understand your website\'s performance with detailed analytics and reports. We track user behavior, conversion rates, and key metrics to help you make informed business decisions.',
      features: ['Google Analytics', 'Conversion Tracking', 'Custom Reports', 'Insights'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Headphones,
      title: 'Support & Training',
      shortDesc: '24/7 customer support',
      description: 'Our dedicated support team is always ready to help you. We provide comprehensive training and ongoing support to ensure you can manage and update your website with confidence.',
      features: ['24/7 Support', 'Email Support', 'Phone Support', 'Training Sessions'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Rocket,
      title: 'Website Migration',
      shortDesc: 'Smooth transition to new platforms',
      description: 'Moving your website shouldn\'t be stressful. We handle the entire migration process smoothly, ensuring zero downtime and preserving all your data, SEO rankings, and functionality.',
      features: ['Zero Downtime', 'Data Preservation', 'SEO Preservation', 'Testing'],
      color: 'from-red-500 to-red-600'
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We understand your business goals, target audience, and requirements'
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description: 'Create beautiful mockups and prototypes for your approval'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Build your website with clean, efficient, and scalable code'
    },
    {
      number: '04',
      title: 'Testing & QA',
      description: 'Rigorous testing to ensure quality and optimal performance'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'Launch your website to the world with minimal downtime'
    },
    {
      number: '06',
      title: 'Support & Growth',
      description: 'Continuous support and optimization for long-term success'
    }
  ]

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
            WHAT WE OFFER
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development solutions designed to transform your online presence and drive business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 transform ${
                  isHovered ? 'lg:-translate-y-4' : ''
                } animate-fade-in-up cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-gray-600 font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Description */}
                  <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <span className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button className={`mt-6 w-full px-4 py-2 bg-gradient-to-r ${service.color} text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm`}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to deliver excellence at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white font-black text-2xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 p-12 md:p-16 text-center animate-fade-in-up">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Elevate Your Online Presence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business and help you achieve your goals
            </p>
            <button className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg">
              Get Started Today
            </button>
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

export default Services
