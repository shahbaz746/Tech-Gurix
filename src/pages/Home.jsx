import React from 'react'
import Hero from '../components/sections/Hero'
import AboutSection from '../components/sections/AboutSection'
import FocusSection from '../components/sections/FocusSection'

const Home = () => {
  return (
    <div className="w-full bg-white">
      <Hero />
      
      {/* Animated Divider */}
      <div className="relative h-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce mx-4" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <AboutSection />

      {/* Animated Divider */}
      <div className="relative h-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce mx-4" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <FocusSection />

      {/* Animated Divider */}
      <div className="relative h-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="relative flex items-center justify-center">
          <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce mx-4" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce {
          animation: bounce 0.6s infinite;
        }
      `}</style>
    </div>
  )
}

export default Home
