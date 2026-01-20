import React, { useState } from 'react'
import { ExternalLink, Github, Award, Zap } from 'lucide-react'
import focusData from '../../data/focusData'

const FocusSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentFilter, setCurrentFilter] = useState('all')

  const allTechs = [...new Set(focusData.flatMap(project => project.technologies))]
  const filteredProjects = currentFilter === 'all' 
    ? focusData 
    : focusData.filter(project => project.technologies.includes(currentFilter))

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
            OUR WORK
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the amazing projects we've delivered for our clients. Each project showcases our expertise and commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-16 flex-wrap gap-3 animate-fade-in-up">
          <button
            onClick={() => setCurrentFilter('all')}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
              currentFilter === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-300'
            }`}
          >
            All Projects
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setCurrentFilter(tech)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                currentFilter === tech
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-300'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                      <ExternalLink size={40} className="text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {project.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold border border-blue-200">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-2 text-blue-600 font-bold">
                    <Award size={18} />
                    <span>{project.result}</span>
                  </div>

                  {/* Button */}
                  <button className="mt-6 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Detail View */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center font-bold transition-all duration-300"
                >
                  ✕
                </button>

                {/* Image */}
                <div className="w-full h-64 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-4xl font-black text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold border-2 border-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-2xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="text-yellow-500" size={24} />
                      <h3 className="text-xl font-bold text-gray-900">Results</h3>
                    </div>
                    <p className="text-lg text-blue-600 font-bold">{selectedProject.result}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                      <ExternalLink size={20} />
                      View Live
                    </button>
                    <button className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                      <Github size={20} />
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t-2 border-gray-200">
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '30+', label: 'Satisfied Clients' },
            { number: '1M+', label: 'Lines of Code Written' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <h3 className="text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text mb-2">
                {stat.number}
              </h3>
              <p className="text-xl text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default FocusSection
