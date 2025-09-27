import React from 'react';

const LoadingAnimation = ({ size = 80, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        {/* Animated SVG Logo */}
        <div 
          className="animate-spin" 
          style={{ 
            width: size, 
            height: size,
            animationDuration: '2s',
            animationTimingFunction: 'linear'
          }}
        >
          <svg 
            viewBox="0 0 186.31 219.6" 
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
                  .cls-1 {
                    fill: #f6a42c;
                  }
                  .cls-2 {
                    fill: #1d1d1b;
                  }
                `}
              </style>
            </defs>
            <g>
              <g>
                <path className="cls-1" d="m92.94,61.79v49.38h-50.94c.87-26.84,23.17-48.47,50.94-49.38Z"/>
                <path className="cls-1" d="m142.72,110.41c-.74,26.76-23.07,48.33-50.8,48.98v-48.98h50.8Z"/>
                <g>
                  <path className="cls-2" d="m163.56,108.2c-.78-18.06-7.44-33.63-20.59-46.4-13.23-12.82-29.32-19.2-48.12-20.03V.87h-3.3v40.91c-38.81,1.3-67.9,31.42-68.66,66.4H0v3.11h22.97c.76,18.09,7.39,33.63,20.56,46.4,13.15,12.76,29.24,19.22,48.01,20.03v40.99h3.22v-40.99c18.8-.78,34.89-7.19,48.1-19.95,13.23-12.73,19.89-28.31,20.7-46.48h22.75v-3.08h-22.75Z"/>
                </g>
              </g>
            </g>
          </svg>
        </div>
        
        {/* Pulsing outer ring */}
        <div 
          className="absolute inset-0 border-2 border-podcast-orange rounded-full animate-ping opacity-30"
          style={{
            animationDuration: '1.5s'
          }}
        ></div>
        
        {/* Static outer ring */}
        <div 
          className="absolute inset-0 border border-podcast-orange/20 rounded-full"
        ></div>
      </div>
      

    </div>
  );
};

export default LoadingAnimation;