import React, { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const GuestCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elementRef, isVisible] = useScrollAnimation();

  const guests = [
    {
      id: 1,
      name: "Sarah Mitchell",
      title: "Professional Headshot Photographer",
      description: "Award-winning photographer with 15+ years of experience in corporate headshots and personal branding photography.",
      image: "/headshot-talk.svg",
      episode: "Episode 001"
    },
    {
      id: 2,
      name: "Marcus Chen",
      title: "Creative Director & Brand Strategist",
      description: "Leading expert in visual branding who has helped Fortune 500 companies develop their executive image strategies.",
      image: "/headshotshot.svg",
      episode: "Episode 002"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Psychology of First Impressions",
      description: "Behavioral psychologist specializing in the science behind first impressions and professional image consulting.",
      image: "/headshot-talk.svg",
      episode: "Episode 003"
    },
    {
      id: 4,
      name: "James Thompson",
      title: "Studio Lighting Expert",
      description: "Technical specialist in professional lighting setups with expertise in creating the perfect headshot environment.",
      image: "/headshotshot.svg",
      episode: "Episode 004"
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Digital Marketing Consultant",
      description: "Helps professionals leverage headshots for LinkedIn, social media, and digital marketing success.",
      image: "/headshot-talk.svg",
      episode: "Episode 005"
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
            Meet the industry experts and thought leaders who share their insights on our podcast
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
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {guest.description}
                    </p>
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