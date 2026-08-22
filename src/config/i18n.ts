import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // يحمل ملفات JSON من /public/locales
  .use(LanguageDetector) // يكتشف لغة المتصفح
  .use(initReactI18next) // يربط مع React
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '../locales/{{lng}}/{{ns}}.json', // ملفات في public/locales
    },
    ns: ['tickets'], // namespaces
    defaultNS: 'tickets',
    interpolation: { escapeValue: false },
    react: { useSuspense: true },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = i18n.dir(lng);
});

document.documentElement.dir = i18n.dir(i18n.language);

export default i18n;