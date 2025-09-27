import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

const translations = {
  en: {
    nav: {
      episodes: 'Episodes',
      guests: 'Guests',
      about: 'About',
      contact: 'Contact',
      subscribe: 'Subscribe'
    },
    hero: {
      title: 'HeadShot Talk',
      subtitle: 'Conversations that capture the essence of creativity',
      description: 'Join us for intimate conversations with Morocco\'s most inspiring creators, entrepreneurs, and visionaries. Each episode dives deep into their journeys, challenges, and the stories behind their success.',
      aboutUs: 'About Us',
      latestEpisode: 'Latest Episode'
    },
    numbers: {
      title: 'Our',
      titleHighlight: 'Impact',
      description: 'Building Morocco\'s largest creator community',
      communityReach: 'Community Reach',
      twitchFollowers: 'Twitch Followers',
      discordMembers: 'Discord Members',
      liveViewers: 'Live Viewers / Episode'
    },
    about: {
      title: 'Meet Our',
      titleHighlight: 'Creative Team',
      teamTitle: 'Creative Team',
      teamSubtitle: 'Passionate Storytellers',
      description1: 'We are a passionate team of content creators, storytellers, and community builders dedicated to showcasing the incredible talent and innovation emerging from Morocco.',
      description2: 'Our mission is to create a platform where authentic conversations flourish and inspire the next generation of creators.'
    },
    sponsors: {
      title: 'Partners &',
      titleHighlight: 'Sponsors',
      whyPartner: 'Why partner with us?',
      description: 'Join forces with Morocco\'s premier creator podcast'
    },
    episodes: {
      latestEpisodes: 'Latest Episodes',
      description: 'Explore new episodes and stories from streamers, pros, and creators in Morocco.',
      playEpisode: 'Play Episode',
      showNotes: 'Show Notes'
    },
    guests: {
      featured: 'Featured',
      featuredHighlight: 'Guests',
      description: 'Gaming creators and streamers who joined us for conversations about Morocco\'s esports scene.'
    },
    subscribe: {
      title: 'Join Our Community',
      subscribeDescription: 'Be the first to know about new episodes, behind-the-scenes content, and exclusive community events.',
      subscribeNow: 'Subscribe Now',
      watchLive: 'Watch Live on Twitch',
      fullEpisodes: 'Full Episodes on YouTube',
      subscribeModal: 'Subscribe to HeadShot Talk',
      subscribeModalSubtitle: 'Choose your preferred platform to stay updated',
      twitchDescription: 'Watch our IRL live recordings',
      youtubeDescription: 'Full episodes & Shorts',
      instagramDescription: 'Reels & behind-the-scenes',
      thankYou: 'Thank you for your support!'
    },
    footer: {
      description: 'HeadShot Talk is Morocco\'s premier podcast for creators, entrepreneurs, and visionaries. We believe in the power of authentic conversations to inspire and connect communities.',
      quickLinks: 'Quick Links',
      home: 'Home',
      watchFollow: 'Watch & Follow',
      tiktokSoon: 'Coming Soon',
      getInTouch: 'Get in Touch',
      copyright: '© 2024 HeadShot Talk. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      cookiePolicy: 'Cookie Policy'
    },
    loading: {
      welcome: 'Welcome to HeadShot Talk'
    },
    language: {
      language: 'Language',
      english: 'English',
      french: 'Français'
    }
  },
  fr: {
    nav: {
      episodes: 'Épisodes',
      guests: 'Invités',
      about: 'À propos',
      contact: 'Contact',
      subscribe: 'S\'abonner'
    },
    hero: {
      title: 'HeadShot Talk',
      subtitle: 'Des conversations qui capturent l\'essence de la créativité',
      description: 'Rejoignez-nous pour des conversations intimes avec les créateurs, entrepreneurs et visionnaires les plus inspirants du Maroc. Chaque épisode plonge profondément dans leurs parcours, défis et les histoires derrière leur succès.',
      aboutUs: 'À Propos de Nous',
      latestEpisode: 'Dernier Épisode'
    },
    numbers: {
      title: 'Notre',
      titleHighlight: 'Impact',
      description: 'Construire la plus grande communauté de créateurs du Maroc',
      communityReach: 'Portée Communautaire',
      twitchFollowers: 'Abonnés Twitch',
      discordMembers: 'Membres Discord',
      liveViewers: 'Spectateurs en Direct / Épisode'
    },
    about: {
      title: 'Rencontrez Notre',
      titleHighlight: 'Équipe Créative',
      teamTitle: 'Équipe Créative',
      teamSubtitle: 'Conteurs Passionnés',
      description1: 'Nous sommes une équipe passionnée de créateurs de contenu, conteurs et bâtisseurs de communauté dédiés à mettre en valeur l\'incroyable talent et innovation émergeant du Maroc.',
      description2: 'Notre mission est de créer une plateforme où les conversations authentiques prospèrent et inspirent la prochaine génération de créateurs.'
    },
    sponsors: {
      title: 'Partenaires &',
      titleHighlight: 'Sponsors',
      whyPartner: 'Pourquoi s\'associer avec nous ?',
      description: 'Joignez-vous au podcast de créateurs de référence du Maroc'
    },
    episodes: {
      latestEpisodes: 'Derniers Épisodes',
      description: 'Explorez de nouveaux épisodes et histoires de streamers, pros et créateurs au Maroc.',
      playEpisode: 'Lire l\'Épisode',
      showNotes: 'Notes de l\'Épisode'
    },
    guests: {
      featured: 'Invités',
      featuredHighlight: 'Vedettes',
      description: 'Créateurs de jeux et streamers qui nous ont rejoint pour des conversations sur la scène esports du Maroc.'
    },
    subscribe: {
      title: 'Rejoignez Notre Communauté',
      subscribeDescription: 'Soyez le premier à connaître les nouveaux épisodes, le contenu des coulisses et les événements communautaires exclusifs.',
      subscribeNow: 'S\'abonner Maintenant',
      watchLive: 'Regarder en Direct sur Twitch',
      fullEpisodes: 'Épisodes Complets sur YouTube',
      subscribeModal: 'S\'abonner à HeadShot Talk',
      subscribeModalSubtitle: 'Choisissez votre plateforme préférée pour rester informé',
      twitchDescription: 'Regardez nos enregistrements IRL en direct',
      youtubeDescription: 'Épisodes complets et Shorts',
      instagramDescription: 'Reels et coulisses',
      thankYou: 'Merci pour votre soutien !'
    },
    footer: {
      description: 'HeadShot Talk est le podcast de référence du Maroc pour les créateurs, entrepreneurs et visionnaires. Nous croyons au pouvoir des conversations authentiques pour inspirer et connecter les communautés.',
      quickLinks: 'Liens Rapides',
      home: 'Accueil',
      watchFollow: 'Regarder et Suivre',
      tiktokSoon: 'Bientôt Disponible',
      getInTouch: 'Nous Contacter',
      copyright: '© 2024 HeadShot Talk. Tous droits réservés.',
      privacyPolicy: 'Politique de Confidentialité',
      termsOfService: 'Conditions d\'Utilisation',
      cookiePolicy: 'Politique des Cookies'
    },
    loading: {
      welcome: 'Bienvenue sur HeadShot Talk'
    },
    language: {
      language: 'Langue',
      english: 'English',
      french: 'Français'
    }
  }
};

export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return value || key;
  };
  
  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };
  
  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
  };
  
  return (
    <TranslationContext.Provider value={{
      currentLanguage,
      t,
      toggleLanguage,
      setLanguage
    }}>
      {children}
    </TranslationContext.Provider>
  );
};