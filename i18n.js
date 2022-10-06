import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';
import enUS from './locales/en-US/translation.json';
import enGB from './locales/en-GB/translation.json';

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en-US',
    returnEmptyString: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      'en-US': {
        translation: enUS,
      },
      'en-GB': {
        translation: enGB,
      },
    },
  });

export default i18n;
