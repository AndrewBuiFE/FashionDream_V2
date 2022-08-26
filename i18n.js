import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import strings_en from './src/assets/locales/en.json';
import strings_vi from './src/assets/locales/vi.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      vi: {
        strings: strings_vi,
      },
      en: {
        strings: strings_en,
      },
    },
    lng: 'vi',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    returnObjects: true,
  });

export default i18n;
