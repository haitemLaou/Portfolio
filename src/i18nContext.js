import React, { createContext, useState, useEffect, useContext } from 'react';
import en from './locales/en.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';

const translationsMap = { en, fr, ar };
const I18nContext = createContext();

export const useTranslation = () => useContext(I18nContext);

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem('appLang') || 'en');

  useEffect(() => {
    localStorage.setItem('appLang', lang);
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [lang]);

  const t = (key) => {
    return translationsMap[lang][key] || key;
  };

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
};
