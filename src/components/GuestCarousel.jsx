import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const GuestCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementRef, isVisible] = useScrollAnimation();

  const guests = [
    {
      id: 1,
      name: "Hakkimma",
      title: "Gaming Pioneer & Content Creator",
      description: "One of the first female Free Fire players since 2017, creating gaming content across multiple platforms. A trailblazer in the Moroccan gaming scene with a strong community following.",
      image: "/GOPRO0069.JPG",
      episode: "Episode 001",
      socialLinks: {
        kick: "https://kick.com/hakkimma",
        twitch: "https://www.twitch.tv/hakkimma",
        instagram: "https://www.instagram.com/hakkimma1/?hl=en",
        youtube: "https://www.youtube.com/@HakkimmaTV"
      }
    },
    {
      id: 2,
      name: "Fouadox",
      title: "Gaming Content Creator & Streamer",
      description: "Multi-platform gaming content creator streaming on Twitch and Kick, creating engaging content across YouTube and Instagram. Known for entertaining gameplay and community interaction.",
      image: "/GOPR0108.jpg",
      episode: "Episode 002",
      socialLinks: {
        kick: "https://kick.com/fouadox",
        instagram: "https://www.instagram.com/ifouadox/",
        youtube: "https://www.youtube.com/channel/UCh9HBHsiTJnlFBMEzrrMANA",
        twitch: "https://www.twitch.tv/fouadox"
      }
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % guests.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + guests.length) % guests.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-podcast-orange">Guests</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the gaming creators and streamers who joined us for live conversations about Morocco's esports scene
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={elementRef}
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {guests.map((guest, index) => (
              <div key={guest.id} className="w-full flex-shrink-0">
                <div className="flex flex-col lg:flex-row items-center p-8 lg:p-16">
                  {/* Guest Image */}
                  <div className="lg:w-1/3 mb-8 lg:mb-0 lg:mr-12">
                    <div className="relative">
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="w-48 h-48 lg:w-64 lg:h-64 mx-auto rounded-full shadow-xl object-cover border-4 border-white"
                      />
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-podcast-orange text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        {guest.episode}
                      </div>
                    </div>
                  </div>

                  {/* Guest Info */}
                  <div className="lg:w-2/3 text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {guest.name}
                    </h3>
                    <p className="text-xl text-podcast-orange font-semibold mb-6">
                      {guest.title}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-6">
                      {guest.description}
                    </p>
                    
                    {/* Social Media Links */}
                    {guest.socialLinks && (
                      <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                        {guest.socialLinks.twitch && (
                          <a
                                href={guest.socialLinks.twitch}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full transition-colors duration-200"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                 </svg>
                              </a>
                        )}
                        {guest.socialLinks.kick && (
                             <a
                                href={guest.socialLinks.kick}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors duration-200"
                              >
                                <img src="https://kick.com/favicon.ico" alt="Kick" className="w-5 h-5" />
                              </a>
                           )}
                        {guest.socialLinks.youtube && (
                          <a
                                href={guest.socialLinks.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-colors duration-200"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                 </svg>
                              </a>
                        )}
                        {guest.socialLinks.instagram && (
                          <a
                                href={guest.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full transition-colors duration-200"
                              >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                 </svg>
                              </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {guests.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-podcast-orange scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestCarousel;