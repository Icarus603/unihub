
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LANGUAGES, GlobeAltIcon, AcademicCapIcon } from '../constants';
import { LanguageCode } from '../types';

interface NavbarProps {
  onNavigate: (section: 'browse' | 'upload' | 'ai-search') => void;
  currentSection: 'browse' | 'upload' | 'ai-search';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentSection }) => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as LanguageCode);
  };

  const navLinkClasses = (section: 'browse' | 'upload' | 'ai-search') =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ease-in-out ${
      currentSection === section
        ? 'bg-indigo-700 text-white'
        : 'text-gray-300 hover:bg-indigo-500 hover:text-white'
    }`;

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white flex items-center">
              <AcademicCapIcon />
              <span className="ml-2 text-xl font-semibold">{t('appTitle')}</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => onNavigate('browse')} className={navLinkClasses('browse')}>
                  {t('navBrowse')}
                </button>
                <button onClick={() => onNavigate('upload')} className={navLinkClasses('upload')}>
                  {t('navUpload')}
                </button>
                <button onClick={() => onNavigate('ai-search')} className={navLinkClasses('ai-search')}>
                  {t('navAiSearch')}
                </button>
              </div>
            </div>
            <div className="ml-4 relative">
              <div className="flex items-center bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-2 rounded-md">
                <GlobeAltIcon />
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="ml-2 bg-transparent text-white border-none focus:ring-0 cursor-pointer appearance-none"
                  aria-label="Select language"
                >
                  {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code} className="text-gray-900">
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    