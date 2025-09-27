import React, { useState, useEffect } from 'react';
import './App.css';
import PodcastCard from './components/PodcastCard';
import GuestCarousel from './components/GuestCarousel';
import NumberCard from './components/NumberCard';
import LoadingScreen from './components/LoadingScreen';
import LoadingAnimation from './components/LoadingAnimation';
import LanguageToggle from './components/LanguageToggle';
import { useTranslation } from './contexts/TranslationContext';



function App() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isShowNotesModalOpen, setIsShowNotesModalOpen] = useState(false);
  const [selectedEpisodeNotes, setSelectedEpisodeNotes] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openVideoModal = (episode) => {
    setSelectedVideo(episode);
    setIsVideoModalOpen(true);
  };
  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };
  const openShowNotesModal = (episode) => {
    setSelectedEpisodeNotes(episode);
    setIsShowNotesModalOpen(true);
  };
  const closeShowNotesModal = () => {
    setIsShowNotesModalOpen(false);
    setSelectedEpisodeNotes(null);
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (isVideoModalOpen) {
          closeVideoModal();
        } else if (isShowNotesModalOpen) {
          closeShowNotesModal();
        } else if (isModalOpen) {
          closeModal();
        }
      }
    };
    if (isModalOpen || isVideoModalOpen || isShowNotesModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isVideoModalOpen, isShowNotesModalOpen]);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const podcastEpisodes = [
    {
      id: 1,
      title: "Fouadox",
      description: "An in-depth conversation with Fouadox, exploring their journey in gaming and content creation, sharing insights about the Moroccan streaming scene and community building.",
      svgPath: "/headshot-talk.svg",
      episode: "001",
      duration: "64 min",
      date: "Dec 15, 2024",
      delay: 0,
      youtubeUrl: "https://www.youtube.com/watch?v=IUu8C-uIODE",
      showNotes: {
        topics: [
          "Gaming journey and early influences",
          "Building a streaming community in Morocco",
          "Content creation strategies and tips",
          "Challenges in the MENA gaming scene",
          "Future plans and collaborations"
        ],
        keyMoments: [
          { time: "00:05", topic: "Introduction and background" },
          { time: "12:30", topic: "Starting the streaming journey" },
          { time: "28:45", topic: "Community building insights" },
          { time: "45:20", topic: "Gaming industry in Morocco" },
          { time: "58:10", topic: "Future projects and goals" }
        ],
        resources: [
          "Fouadox's Twitch Channel",
          "Gaming setup recommendations",
          "Streaming software guide"
        ]
      }
    },
    {
      id: 2,
      title: "Hakkimma",
      description: "Join us for an engaging discussion with Hakkimma about their experiences in the gaming world, content creation strategies, and the evolving landscape of esports in Morocco.",
      svgPath: "/headshotshot.svg",
      episode: "002",
      duration: "72 min",
      date: "Dec 8, 2024",
      delay: 200,
      youtubeUrl: "https://www.youtube.com/watch?v=dLA7Q0pwiHU&t=263s",
      showNotes: {
        topics: [
          "Esports career development",
          "Professional gaming mindset",
          "Training routines and discipline",
          "Moroccan esports scene evolution",
          "Balancing gaming and personal life"
        ],
        keyMoments: [
          { time: "00:03", topic: "Welcome and introductions" },
          { time: "08:15", topic: "Professional gaming journey" },
          { time: "22:40", topic: "Training and improvement strategies" },
          { time: "38:55", topic: "Esports in Morocco discussion" },
          { time: "52:30", topic: "Mental health and gaming" },
          { time: "65:45", topic: "Advice for aspiring gamers" }
        ],
        resources: [
          "Hakkimma's gaming profiles",
          "Esports training resources",
          "Mental health in gaming guide"
        ]
      }
    }
  ];

  // Show loading screen while app is initializing
  if (isLoading) {
    return <LoadingScreen message={t('loading.welcome')} />;
  }

  return (
    <>
      {/* Ultra Glass Effect Navbar */}
       <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-[40px] bg-white/20 border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-3xl w-11/12 md:w-2/5">
         <div className="px-4 sm:px-6 lg:px-10">
           <div className="flex justify-between items-center h-16">
             <div className="flex items-center space-x-4">
               <div className="w-10 h-10 bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/40 shadow-lg">
                 <img src="/headshot-talk.svg" alt="Logo" className="w-6 h-6" />
               </div>
             </div>
             
             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center space-x-1">
               <a href="#episodes" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">{t('nav.episodes')}</a>
               <a href="#guests" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">{t('nav.guests')}</a>
               <a href="#about" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">{t('nav.about')}</a>
               <a href="#contact" className="text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-2 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth">{t('nav.contact')}</a>
               <LanguageToggle className="ml-2" />
             </div>
             
             {/* Desktop Subscribe Button */}
             <button 
                onClick={openModal}
                className="hidden md:block bg-podcast-orange/70 backdrop-blur-md hover:bg-podcast-orange/80 text-white px-6 py-2.5 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 hover:scale-105"
              >
                {t('nav.subscribe')}
              </button>
              
             {/* Mobile Menu Button */}
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="md:hidden p-2 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 hover:bg-white/40 transition-all duration-300"
               aria-label="Toggle mobile menu"
             >
               <div className="w-6 h-6 flex flex-col justify-center items-center">
                 <span className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                 <span className={`block w-5 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                 <span className={`block w-5 h-0.5 bg-gray-800 mt-1 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
               </div>
             </button>
           </div>
           
           {/* Mobile Menu */}
           <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
             <div className="py-4 space-y-2 border-t border-white/30 mt-4">
               <a 
                 href="#episodes" 
                 className="block text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-3 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {t('nav.episodes')}
               </a>
               <a 
                 href="#guests" 
                 className="block text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-3 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {t('nav.guests')}
               </a>
               <a 
                 href="#about" 
                 className="block text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-3 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {t('nav.about')}
               </a>
               <a 
                 href="#contact" 
                 className="block text-gray-800/80 hover:text-podcast-orange hover:bg-white/30 transition-all duration-300 font-medium px-4 py-3 rounded-2xl backdrop-blur-md border border-transparent hover:border-white/30 scroll-smooth"
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {t('nav.contact')}
               </a>
               <div className="flex justify-center mt-4 mb-2">
                 <LanguageToggle />
               </div>
               <button 
                 onClick={() => { openModal(); setIsMobileMenuOpen(false); }}
                 className="w-full bg-podcast-orange/70 backdrop-blur-md hover:bg-podcast-orange/80 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30 mt-4"
               >
                 {t('nav.subscribe')}
               </button>
             </div>
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
              {t('hero.description')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-podcast-orange hover:bg-orange-500 text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
            >
              {t('hero.aboutUs')}
            </button>
            <button 
              onClick={() => document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-podcast-orange text-podcast-orange hover:bg-podcast-orange hover:text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px]"
            >
              {t('hero.latestEpisode')}
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
              {t('numbers.title')} <span className="text-podcast-orange">{t('numbers.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('numbers.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Total Community Reach */}
             <NumberCard
               number={9000}
               label={t('numbers.communityReach')}
               suffix="+"
               bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
               textColor="text-podcast-orange"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-1.1-.9-2-2-2s-2 .9-2 2V18H4zm2.5-7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S8.83 12 8 12s-1.5-.67-1.5-1.5zM12.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM15 18v-2h3v2h2v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2V18h-1zm-3-3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
                 </svg>
               }
             />

             {/* Twitch Followers */}
             <NumberCard
               number={3700}
               label={t('numbers.twitchFollowers')}
               suffix="+"
               bgColor="bg-gradient-to-br from-purple-50 to-purple-100"
               textColor="text-purple-600"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                 </svg>
               }
             />

             {/* Discord Members */}
             <NumberCard
               number={2000}
               label={t('numbers.discordMembers')}
               suffix="+"
               bgColor="bg-gradient-to-br from-indigo-50 to-indigo-100"
               textColor="text-indigo-600"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
                 </svg>
               }
             />

             {/* Live Viewers / Episode */}
             <NumberCard
               number={300}
               label={t('numbers.liveViewers')}
               suffix=" +"
               bgColor="bg-gradient-to-br from-green-50 to-green-100"
               textColor="text-green-600"
               icon={
                 <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                 </svg>
               }
             />
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('about.title')} <span className="text-podcast-orange">{t('about.titleHighlight')}</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                    <div className="relative w-56 h-56 mx-auto">
                      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-yellow-400">
                        <img 
                          src="/GOPR0096.jpg" 
                          alt="Team Member 1" 
                          className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 team-photo"
                          style={{animationDelay: '0s'}}
                        />
                        <img 
                          src="/GOPR0097.jpg" 
                          alt="Team Member 2" 
                          className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 team-photo"
                          style={{animationDelay: '3s'}}
                        />
                        <img 
                          src="/GOPR0098.jpg" 
                          alt="Team Member 3" 
                          className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 team-photo"
                          style={{animationDelay: '6s'}}
                        />
                        <img 
                          src="/GOPR0102.jpg" 
                          alt="Team Member 4" 
                          className="w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 team-photo"
                          style={{animationDelay: '9s'}}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('about.teamTitle')}</h3>
                    <p className="text-xl text-podcast-orange font-semibold mb-6">{t('about.teamSubtitle')}</p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {t('about.description1')}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {t('about.description2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              {t('sponsors.title')} <span className="text-podcast-orange">{t('sponsors.titleHighlight')}</span>
            </h3>
            <div className="max-w-4xl mx-auto mb-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('sponsors.whyPartner')}</h4>
              <p className="text-lg text-gray-600 mb-8">
                {t('sponsors.description')}
              </p>
            </div>
            
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('episodes.latestEpisodes')}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('episodes.description')}
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
              onPlayClick={() => openVideoModal(episode)}
              onShowNotesClick={() => openShowNotesModal(episode)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('subscribe.title')}</h3>
            <p className="text-gray-600 mb-6">
              {t('subscribe.subscribeDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.open('https://www.twitch.tv/tufiita', '_blank')}
                className="bg-podcast-orange hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {t('subscribe.watchLive')}
              </button>
              <button 
                onClick={() => window.open('https://www.youtube.com/@Hshot-talk', '_blank')}
                className="border-2 border-podcast-orange text-podcast-orange hover:bg-podcast-orange hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                {t('subscribe.fullEpisodes')}
              </button>
            </div>
          </div>
        </div>


      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16" style={{scrollBehavior: 'smooth'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-podcast-orange rounded-2xl flex items-center justify-center">
                  <img src="/headshot-talk.svg" alt="Logo" className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Headshot Talk</h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('footer.description')}
              </p>
              <div className="flex space-x-4">
                <a href="https://www.twitch.tv/tufiita" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-podcast-orange rounded-xl flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@Hshot-talk" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-podcast-orange rounded-xl flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/headshot.talk/reels/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-podcast-orange rounded-xl flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 opacity-50 rounded-xl flex items-center justify-center transition-colors duration-300 cursor-not-allowed">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.232 17.988c-.764 0-1.381-.617-1.381-1.381s.617-1.381 1.381-1.381 1.381.617 1.381 1.381-.617 1.381-1.381 1.381zm3.785-2.381c-2.455 0-4.449-1.994-4.449-4.449s1.994-4.449 4.449-4.449 4.449 1.994 4.449 4.449-1.994 4.449-4.449 4.449zm0-6.898c-1.352 0-2.449 1.097-2.449 2.449s1.097 2.449 2.449 2.449 2.449-1.097 2.449-2.449-1.097-2.449-2.449-2.449z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('footer.home')}</a></li>
                <li><a href="#episodes" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('nav.episodes')}</a></li>
                <li><a href="#guests" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('nav.guests')}</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('nav.about')}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('nav.contact')}</a></li>
              </ul>
            </div>

            {/* Watch/Follow */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.watchFollow')}</h4>
              <ul className="space-y-3">
                <li><a href="https://www.twitch.tv/tufiita" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                  <span>Twitch</span>
                </a></li>
                <li><a href="https://www.youtube.com/@Hshot-talk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube</span>
                </a></li>
                <li><a href="https://www.instagram.com/headshot.talk/reels/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300 flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a></li>
                <li><span className="text-gray-500 opacity-50 flex items-center space-x-2 cursor-not-allowed">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.232 17.988c-.764 0-1.381-.617-1.381-1.381s.617-1.381 1.381-1.381 1.381.617 1.381 1.381-.617 1.381-1.381 1.381zm3.785-2.381c-2.455 0-4.449-1.994-4.449-4.449s1.994-4.449 4.449-4.449 4.449 1.994 4.449 4.449-1.994 4.449-4.449 4.449zm0-6.898c-1.352 0-2.449 1.097-2.449 2.449s1.097 2.449 2.449 2.449 2.449-1.097 2.449-2.449-1.097-2.449-2.449-2.449z"/>
                  </svg>
                  <span>{t('footer.tiktokSoon')}</span>
                </span></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.getInTouch')}</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>headshotconnect1@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Morocco</span>
                </div>
                <button 
                  onClick={openModal}
                  className="bg-podcast-orange hover:bg-podcast-orange/80 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl mt-4 w-full"
                >
                  {t('subscribe.subscribeNow')}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('footer.privacyPolicy')}</a>
                <a href="#" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('footer.termsOfService')}</a>
                <a href="#" className="text-gray-400 hover:text-podcast-orange transition-colors duration-300">{t('footer.cookiePolicy')}</a>
              </div>
            </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('subscribe.subscribeModal')}</h2>
              <p className="text-gray-600">{t('subscribe.subscribeModalSubtitle')}</p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3">
              <a 
                href="https://www.twitch.tv/tufiita" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-purple-50/80 hover:bg-purple-100/80 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Twitch</h3>
                  <p className="text-sm text-gray-600">{t('subscribe.twitchDescription')}</p>
                </div>
              </a>

              <a 
                href="https://www.youtube.com/@Hshot-talk" 
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
                  <p className="text-sm text-gray-600">{t('subscribe.youtubeDescription')}</p>
                </div>
              </a>

              <a 
                href="https://www.instagram.com/headshot.talk/reels/" 
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
                  <p className="text-sm text-gray-600">{t('subscribe.instagramDescription')}</p>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200/50 text-center">
              <p className="text-sm text-gray-500">{t('subscribe.thankYou')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {isVideoModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeVideoModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 mx-4 max-w-4xl w-full transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button 
              onClick={closeVideoModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h2>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
                <span className="bg-podcast-orange/10 text-podcast-orange px-3 py-1 rounded-full font-semibold">EPISODE {selectedVideo.episode}</span>
                <span>{selectedVideo.date}</span>
                <span>•</span>
                <span>{selectedVideo.duration}</span>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
              {selectedVideo.youtubeUrl && selectedVideo.youtubeUrl !== 'PLACEHOLDER_FOUADOX_URL' && selectedVideo.youtubeUrl !== 'PLACEHOLDER_HAKKIMMA_URL' ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src={selectedVideo.youtubeUrl.replace('watch?v=', 'embed/')}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600 font-medium">Video will be available soon</p>
                    <p className="text-sm text-gray-500 mt-1">YouTube link pending</p>
                  </div>
                </div>
              )}
            </div>

            {/* Episode Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Show Notes Modal */}
      {isShowNotesModalOpen && selectedEpisodeNotes && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeShowNotesModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 mx-4 max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button 
              onClick={closeShowNotesModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors duration-200 z-10"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedEpisodeNotes.title} - Show Notes</h2>
              <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
                <span className="bg-podcast-orange/10 text-podcast-orange px-3 py-1 rounded-full font-semibold">EPISODE {selectedEpisodeNotes.episode}</span>
                <span>{selectedEpisodeNotes.date}</span>
                <span>•</span>
                <span>{selectedEpisodeNotes.duration}</span>
              </div>
            </div>

            {/* Show Notes Content */}
            <div className="space-y-8">
              {/* Topics Covered */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-podcast-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Topics Covered
                </h3>
                <ul className="space-y-2">
                  {selectedEpisodeNotes.showNotes.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-podcast-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Moments */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-podcast-orange mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Key Moments
                </h3>
                <div className="space-y-3">
                  {selectedEpisodeNotes.showNotes.keyMoments.map((moment, index) => (
                    <div key={index} className="flex items-start bg-gray-50 rounded-lg p-3">
                      <span className="bg-podcast-orange text-white px-2 py-1 rounded text-sm font-mono mr-3 flex-shrink-0">
                        {moment.time}
                      </span>
                      <span className="text-gray-700">{moment.topic}</span>
                    </div>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
