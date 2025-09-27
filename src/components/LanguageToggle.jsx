import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const LanguageToggle = ({ className = '' }) => {
  const { currentLanguage, toggleLanguage, t } = useTranslation();
  
  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-200 text-gray-800 font-medium ${className}`}
      title={t('language')}
    >
      {/* Globe Icon */}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
      
      {/* Language Text */}
      <span className="text-sm">
        {currentLanguage === 'en' ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;