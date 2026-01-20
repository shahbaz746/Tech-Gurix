import React from 'react'
import { Github, Linkedin, Music, Camera, Facebook } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/shahbaz746',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/',
      color: 'hover:text-blue-600'
    },
    {
      icon: Music,
      label: 'TikTok',
      url: 'https://www.tiktok.com/@techgurix3?_r=1&_t=ZS-93BCseNdx5w',
      color: 'hover:text-black'
    },
    {
      icon: Camera,
      label: 'Instagram',
      url: 'https://www.instagram.com/techgurix424?utm_source=qr&igsh=dTJ5emFubmV0bThh',
      color: 'hover:text-pink-600'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/share/1auTh3rmqQ/',
      color: 'hover:text-blue-500'
    }
  ]

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-white">
      {/* Background Image */}  
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/background.png')"
        }}
      ></div>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/50 to-white/70"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title with Animation */}
          <div className="mb-8 animate-fade-in-down">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-transparent bg-clip-text">
              <span className="inline-block animate-slide-up text-black">T</span>
              <span className="inline-block animate-slide-up text-black animation-delay-100">e</span>
              <span className="inline-block animate-slide-up text-black animation-delay-200">c</span>
              <span className="inline-block animate-slide-up text-black animation-delay-300">h</span>
              <span className="inline-block animate-slide-up animation-delay-400 font-black">G</span>
              <span className="inline-block animate-slide-up animation-delay-500">u</span>
              <span className="inline-block animate-slide-up animation-delay-600">r</span>
              <span className="inline-block animate-slide-up animation-delay-700">i</span>
              <span className="inline-block animate-slide-up animation-delay-800">x</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full mb-8 animate-expand"></div>
          </div>

          {/* Subtitle with strong contrast */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mb-6 animate-fade-in-up">
            Web Development Agency
          </p>

          {/* Description with good readability */}
          <p className="text-base sm:text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up animation-delay-200">
            Crafting digital experiences that elevate your brand. We specialize in modern, responsive web solutions tailored to your vision.
          </p>

          {/* CTA Button */}
          <button className="mb-12 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base animate-fade-in-up animation-delay-300">
            Get Started
          </button>

          {/* Social Links */}
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 bg-white/70 backdrop-blur-md hover:bg-blue-100 rounded-full transition-all duration-300 text-blue-600 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 border-2 border-blue-200 hover:border-blue-400 animate-fade-in-up`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                  title={social.label}
                  aria-label={social.label}
                >
                  <Icon size={24} className="sm:w-6 sm:h-6" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-blue-600 text-sm font-bold">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-blue-600 animate-pulse"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(90deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 128px;
            opacity: 1;
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

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out backwards;
        }

        .animate-expand {
          animation: expand 0.8s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-500 {
          animation-delay: 500ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-700 {
          animation-delay: 700ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default Hero
