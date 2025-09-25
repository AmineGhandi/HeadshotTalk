import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const PodcastCard = ({ 
  title, 
  description, 
  svgPath, 
  episode, 
  duration, 
  date,
  delay = 0 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`podcast-card bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-700 ease-out border border-gray-100 h-full flex flex-col ${
        isVisible ? 'animate-in' : ''
      }`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
        {/* Header Section */}
        <div className="bg-gradient-to-br from-podcast-orange via-orange-500 to-orange-600 p-6 text-white relative overflow-hidden text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-3">
              <span className="text-sm font-semibold tracking-wide">EPISODE {episode}</span>
            </div>
            <h2 className="text-2xl font-bold leading-tight drop-shadow-sm">{title}</h2>
            <div className="flex justify-center items-center space-x-4 mt-4 text-sm">
              <span className="opacity-90">{date}</span>
              <span className="opacity-60">•</span>
              <span className="opacity-90">{duration}</span>
            </div>
          </div>
        </div>

        {/* Icon Section */}
        <div className="flex justify-center py-8 bg-gray-50">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl p-6 shadow-md w-full h-full flex items-center justify-center">
              <img 
                src={svgPath} 
                alt={`${title} illustration`}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex-1 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Episode Summary</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <button className="group bg-gradient-to-r from-podcast-orange to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 flex-1">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Play Episode</span>
            </button>
            <button className="group border-2 border-gray-300 hover:border-podcast-orange text-gray-700 hover:text-podcast-orange px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-orange-50 flex items-center justify-center space-x-2 flex-1">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              <span>Show Notes</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-10 py-5 border-t border-gray-200 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2.5 shadow-sm">
                <svg className="w-4 h-4 text-podcast-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.816L4.846 14H2a1 1 0 01-1-1V7a1 1 0 011-1h2.846l3.537-2.816a1 1 0 011.617.816z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">High Quality Audio</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-2.5 shadow-sm">
                <svg className="w-4 h-4 text-podcast-orange flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2 6a1 1 0 100 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-gray-700 whitespace-nowrap">Full Transcript</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="group p-2.5 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4 text-gray-600 group-hover:text-podcast-orange transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button className="group p-2.5 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="group p-2.5 hover:bg-white rounded-xl transition-all duration-200 shadow-sm hover:shadow-md">
                <svg className="w-4 h-4 text-gray-600 group-hover:text-podcast-orange transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default PodcastCard;