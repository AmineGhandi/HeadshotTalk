import React, { useState, useEffect } from 'react';
import './App.css';
import PodcastCard from './components/PodcastCard';
import GuestCarousel from './components/GuestCarousel';
import NumberCard from './components/NumberCard';



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const podcastEpisodes = [
    {
      id: 1,
      title: "The Future of Headshot Photography",
      description: "Dive deep into the evolving world of professional headshot photography. We explore the latest techniques, lighting setups, and how AI is changing the industry landscape. Join us as we discuss what makes a compelling headshot in today's digital age.",
      svgPath: "/headshot-talk.svg",
      episode: "001",
      duration: "45 min",
      date: "Dec 15, 2024",
      delay: 0
    },
    {
      id: 2,
      title: "Building Your Personal Brand Through Photography",
      description: "Learn how professional headshots can transform your personal brand and career prospects. We interview successful entrepreneurs and executives about their photography journey and the impact of great headshots on their professional success.",
      svgPath: "/headshotshot.svg",
      episode: "002",
      duration: "38 min",
      date: "Dec 8, 2024",
      delay: 200
    },
    {
      id: 3,
      title: "Behind the Lens: Studio Setup Secrets",
      description: "Get an exclusive look behind the scenes of a professional headshot studio. From equipment selection to client direction, we reveal the secrets that make headshot sessions successful and comfortable for everyone involved.",
      svgPath: "/headshot-talk.svg",
      episode: "003",
      duration: "52 min",
      date: "Dec 1, 2024",
      delay: 400
    },
    {
      id: 4,
      title: "The Psychology of First Impressions",
      description: "Explore the science behind first impressions and how headshots play a crucial role in professional networking. We discuss color psychology, facial expressions, and the subtle elements that make headshots memorable and effective.",
      svgPath: "/headshotshot.svg",
      episode: "004",
      duration: "41 min",
      date: "Nov 24, 2024",
      delay: 600
    },
    {
      id: 5,
      title: "Digital vs Traditional: The Great Debate",
      description: "Join our heated discussion about digital photography versus traditional film techniques in headshot photography. Industry veterans share their perspectives on quality, workflow, and the artistic differences between both approaches.",
      svgPath: "/headshot-talk.svg",
      episode: "005",
      duration: "47 min",
      date: "Nov 17, 2024",
      delay: 800
    }
  ];

  return (
    <>
      {/* Ultra Glass Effect Navbar */}
       <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-[40px] bg-white/20 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl w-2/5">
         <div className="px-6 sm:px-8 lg:px-10">
           <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-4">
               <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40 shadow-lg">
                 <img src="/headshot-talk.svg" alt="Logo" className="w-6 h-6" />
               </div>
               
             </div>
             <div className="hidden md:flex items-center space-x-1">
               <a href="#episodes" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">Episodes</a>
               <a href="#guests" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">Guests</a>
               <a href="#about" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">About</a>
               <a href="#contact" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">Contact</a>
             </div>
             <button 
                onClick={openModal}
                className="bg-podcast-orange/70 backdrop-blur-md hover:bg-podcast-orange/80 text-white px-6 py-2.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:scale-105"
              >
                Subscribe
              </button>
           </div>
         </div>
       </nav>

      {/* Hero Section */}
       <section id="home" className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-28">
        {/* Floating Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <style>{`
            @keyframes float1 {
              0%, 100% { transform: translateY(0px) rotate(12deg); }
              50% { transform: translateY(-20px) rotate(12deg); }
            }
            @keyframes float2 {
              0%, 100% { transform: translateY(0px) rotate(45deg); }
              50% { transform: translateY(-15px) rotate(50deg); }
            }
            @keyframes float3 {
              0%, 100% { transform: translateY(0px) rotate(-12deg) scaleX(-1); }
              50% { transform: translateY(-18px) rotate(-8deg) scaleX(-1); }
            }
            @keyframes float4 {
              0%, 100% { transform: translateY(0px) rotate(-30deg); }
              50% { transform: translateY(-25px) rotate(-25deg); }
            }
            @keyframes float5 {
              0%, 100% { transform: translateY(0px) rotate(75deg); }
              50% { transform: translateY(-12px) rotate(80deg); }
            }
            @keyframes float6 {
              0%, 100% { transform: translateY(0px) rotate(-60deg) scaleX(-1); }
              50% { transform: translateY(-16px) rotate(-55deg) scaleX(-1); }
            }
            @keyframes float7 {
              0%, 100% { transform: translate(-50%, -50%) rotate(6deg); }
              50% { transform: translate(-50%, -60%) rotate(10deg); }
            }
            @keyframes float8 {
              0%, 100% { transform: translateY(0px) rotate(90deg); }
              50% { transform: translateY(-10px) rotate(95deg); }
            }
            @keyframes float9 {
              0%, 100% { transform: translateY(0px) rotate(-45deg); }
              50% { transform: translateY(-14px) rotate(-40deg); }
            }
            .float-1 { animation: float1 6s ease-in-out infinite; }
            .float-2 { animation: float2 8s ease-in-out infinite; }
            .float-3 { animation: float3 7s ease-in-out infinite; }
            .float-4 { animation: float4 9s ease-in-out infinite; }
            .float-5 { animation: float5 5s ease-in-out infinite; }
            .float-6 { animation: float6 11s ease-in-out infinite; }
            .float-7 { animation: float7 10s ease-in-out infinite; }
            .float-8 { animation: float8 6.5s ease-in-out infinite; }
            .float-9 { animation: float9 8.5s ease-in-out infinite; }
          `}</style>
          {/* Top Right Decoration */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-10 right-10 w-24 h-28 md:w-32 md:h-36 opacity-8 float-1"
          />
          {/* Top Left Decoration */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-20 left-5 w-16 h-20 md:w-20 md:h-24 opacity-6 float-2"
          />
          {/* Bottom Left Decoration */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute bottom-20 left-10 w-20 h-24 md:w-28 md:h-32 opacity-7 float-3"
          />
          {/* Bottom Right Decoration */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute bottom-10 right-5 w-18 h-22 md:w-24 md:h-28 opacity-6 float-4"
          />
          {/* Mid Right Decoration */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-1/3 right-20 w-14 h-16 md:w-18 md:h-20 opacity-4 float-5"
          />
          {/* Mid Left Decoration */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-2/3 left-16 w-12 h-14 md:w-16 md:h-18 opacity-5 float-6"
          />
          {/* Center Background - Large and Very Faint */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-1/2 left-1/2 w-96 h-96 md:w-[500px] md:h-[500px] opacity-[0.03] float-7"
          />
          {/* Additional scattered elements */}
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-1/4 left-1/4 w-8 h-10 opacity-3 float-8"
          />
          <img 
            src="/headshotshot.svg" 
            alt="" 
            className="absolute top-3/4 right-1/4 w-10 h-12 opacity-4 float-9"
          />
        </div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Company Logo */}
          <div className="mb-12">
            <img 
              src="/headshot-talk.svg" 
              alt="Headshot Talk Logo" 
              className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8 drop-shadow-lg"
            />
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
              The ultimate podcast for professional photographers, entrepreneurs, and anyone looking to master the art of headshot photography
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-podcast-orange hover:bg-orange-500 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]">
              About Us
            </button>
            <button className="border-2 border-podcast-orange text-podcast-orange hover:bg-podcast-orange hover:text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]">
              Latest Episode
            </button>
          </div>
        </div>
      </section>

      {/* Guest Carousel */}
      <div id="guests">
        <GuestCarousel />
      </div>

      {/* Numbers Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-podcast-orange">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who trust Headshot Talk for industry insights and expert advice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Total Downloads */}
             <NumberCard
               number={250000}
               label="Total Downloads"
               suffix="+"
               bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
               textColor="text-podcast-orange"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                 </svg>
               }
             />

             {/* Featured Guests */}
             <NumberCard
               number={75}
               label="Featured Guests"
               suffix="+"
               bgColor="bg-gradient-to-br from-gray-50 to-gray-100"
               textColor="text-gray-600"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                 </svg>
               }
             />

             {/* Countries Reached */}
             <NumberCard
               number={45}
               label="Countries Reached"
               suffix="+"
               bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
               textColor="text-podcast-orange"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2H6.083A5.973 5.973 0 014.332 8.027z" clipRule="evenodd" />
                 </svg>
               }
             />

             {/* Average Rating */}
             <NumberCard
               number={4.9}
               label="Average Rating"
               suffix="/5"
               bgColor="bg-gradient-to-br from-gray-50 to-gray-100"
               textColor="text-gray-600"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               }
             />
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creator Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the <span className="text-podcast-orange">Creator</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                    <img 
                      src="/headshot-talk.svg" 
                      alt="Creator" 
                      className="w-48 h-48 mx-auto rounded-full shadow-xl border-4 border-podcast-orange"
                    />
                  </div>
                  <div className="lg:w-2/3 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Alex Thompson</h3>
                    <p className="text-xl text-podcast-orange font-semibold mb-6">Professional Photographer & Podcast Host</p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      With over 12 years of experience in professional photography, Alex has captured headshots for Fortune 500 executives, entrepreneurs, and creative professionals. His passion for helping others understand the art and business of headshot photography led to the creation of Headshot Talk.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Through this podcast, Alex shares industry insights, interviews top photographers, and provides actionable advice for both photographers and clients looking to create compelling professional images.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Our Amazing <span className="text-podcast-orange">Sponsors</span>
            </h3>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              We're grateful for the support of these industry-leading companies who make Headshot Talk possible
            </p>
            
            {/* Animated Logo Carousel */}
            <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg py-12">
              <style>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 20s linear infinite;
                }
              `}</style>
              <div className="flex animate-scroll space-x-16 items-center">
                {/* Sponsor logos - duplicated for seamless loop */}
                <div className="flex space-x-16 items-center min-w-max">
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshot-talk.svg" alt="Canon" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshotshot.svg" alt="Adobe" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshot-talk.svg" alt="Profoto" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshotshot.svg" alt="Capture One" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshot-talk.svg" alt="Godox" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshotshot.svg" alt="Westcott" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex space-x-16 items-center min-w-max">
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshot-talk.svg" alt="Canon" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshotshot.svg" alt="Adobe" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshot-talk.svg" alt="Profoto" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshotshot.svg" alt="Capture One" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshot-talk.svg" alt="Godox" className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="flex items-center justify-center w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300">
                    <img src="/headshotshot.svg" alt="Westcott" className="max-w-full max-h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="episodes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Episodes</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Scroll down to explore our latest podcast episodes. Each card will smoothly animate into view as you discover new content about headshot photography, personal branding, and professional development.
          </p>
        </div>

        {/* Podcast Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcastEpisodes.map((episode) => (
            <PodcastCard
              key={episode.id}
              title={episode.title}
              description={episode.description}
              svgPath={episode.svgPath}
              episode={episode.episode}
              duration={episode.duration}
              date={episode.date}
              delay={episode.delay}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Headshot Talk</h3>
            <p className="text-gray-600 mb-6">
              Don't miss out on the latest episodes! Subscribe to get notified when new content is available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-podcast-orange hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                Subscribe Now
              </button>
              <button className="border-2 border-podcast-orange text-podcast-orange hover:bg-podcast-orange hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                View All Episodes
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-podcast-dark text-white py-12" style={{scrollBehavior: 'smooth'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xl font-bold mb-4">Headshot Talk Podcast</h4>
          <p className="text-gray-300 mb-6">
            Empowering photographers and professionals through expert insights and industry knowledge.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-podcast-orange transition-colors">
              Apple Podcasts
            </a>
            <a href="#" className="text-gray-300 hover:text-podcast-orange transition-colors">
              Spotify
            </a>
            <a href="#" className="text-gray-300 hover:text-podcast-orange transition-colors">
              Google Podcasts
            </a>
          </div>
        </div>
      </footer>

      {/* Subscribe Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-8 mx-4 max-w-md w-full transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Subscribe to Headshot Talk</h2>
              <p className="text-gray-600">Follow us on social media for the latest updates</p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-red-50/80 hover:bg-red-100/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors">YouTube</h3>
                  <p className="text-sm text-gray-600">Watch our latest episodes</p>
                </div>
              </a>

              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-green-50/80 hover:bg-green-100/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Spotify</h3>
                  <p className="text-sm text-gray-600">Listen on Spotify</p>
                </div>
              </a>

              <a 
                href="https://apple.com/podcasts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-purple-50/80 hover:bg-purple-100/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 3.6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2.4c1.99 0 3.6 1.61 3.6 3.6s-1.61 3.6-3.6 3.6-3.6-1.61-3.6-3.6S10.01 8.4 12 8.4z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Apple Podcasts</h3>
                  <p className="text-sm text-gray-600">Listen on Apple Podcasts</p>
                </div>
              </a>

              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-blue-50/80 hover:bg-blue-100/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Twitter</h3>
                  <p className="text-sm text-gray-600">Follow us on Twitter</p>
                </div>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-pink-50/80 hover:bg-pink-100/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">Instagram</h3>
                  <p className="text-sm text-gray-600">Follow us on Instagram</p>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200/50 text-center">
              <p className="text-sm text-gray-500">Thank you for your support!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
