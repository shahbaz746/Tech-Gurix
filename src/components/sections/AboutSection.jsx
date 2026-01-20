import React from 'react'
import { Award, Briefcase, Code, Users, Target, Zap } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    {
      icon: Briefcase,
      number: '1+',
      label: 'Years Experience',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      number: '50+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      number: '30+',
      label: 'Happy Clients',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Target,
      number: '100%',
      label: 'Client Satisfaction',
      color: 'from-green-500 to-green-600'
    }
  ]

  const skills = [
    'React.js',
    'JavaScript',
    'Tailwind CSS',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MERN Stack',
    'Git',
    'GitHub',
    'Web Design',
    'Responsive Design',
    'UI/UX',
    'Frontend Development'
  ]

  const expertise = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web solutions built with modern technologies and best practices.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Fast, optimized websites that deliver exceptional user experiences.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality standards for every project.'
    }
  ]

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
            WHO WE ARE
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Tech Gurix</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a dedicated web development agency passionate about creating stunning digital experiences that drive results for our clients.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Story & Mission
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Tech Gurix is a innovative web development agency specializing in crafting beautiful, functional websites and web applications. With over 1 year of industry experience, we've established ourselves as a trusted partner for businesses looking to elevate their digital presence.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team is committed to delivering exceptional quality, innovative solutions, and outstanding customer service. We believe in building long-term relationships with our clients and helping them achieve their business goals through cutting-edge web technologies.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Us
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className={`p-6 sm:p-8 bg-gradient-to-br ${stat.color} rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white animate-slide-in-side`}
                  style={{ animationDelay: `${200 + index * 150}ms` }}
                >
                  <Icon size={32} className="mb-3" />
                  <h4 className="text-3xl sm:text-4xl font-black mb-2">{stat.number}</h4>
                  <p className="text-sm sm:text-base font-semibold opacity-90">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Skills & Technologies
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 overflow-hidden">
            <div className="relative w-full overflow-hidden">
              <div className="flex gap-4 animate-scroll-infinite">
                {/* First set of skills */}
                {skills.map((skill, index) => (
                  <div
                    key={`skill-${index}`}
                    className="px-6 py-3 bg-white rounded-full shadow-md border-2 border-blue-200 font-semibold text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:text-blue-600 whitespace-nowrap flex-shrink-0 transform hover:scale-110"
                  >
                    {skill}
                  </div>
                ))}
                {/* Duplicate set for continuous loop */}
                {skills.map((skill, index) => (
                  <div
                    key={`skill-duplicate-${index}`}
                    className="px-6 py-3 bg-white rounded-full shadow-md border-2 border-blue-200 font-semibold text-gray-700 transition-all duration-300 hover:shadow-lg hover:border-blue-400 hover:text-blue-600 whitespace-nowrap flex-shrink-0 transform hover:scale-110"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-600 text-sm mt-4">Scroll horizontally to see more →</p>
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

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-slide-in-side {
          animation: slide-in-right 0.6s ease-out backwards;
        }

        .animate-slide-in-side:nth-child(odd) {
          animation: slide-in-left 0.6s ease-out backwards;
        }

        .animate-scroll-infinite {
          animation: scroll-infinite 25s linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default AboutSection
