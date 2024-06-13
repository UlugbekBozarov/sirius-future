import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { STORAGE_NAMES } from "constants/Storage.constants";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ru",
    debug: false,
    detection: {
      order: ["localStorage", "sessionStorage", "queryString", "cookie"],
      caches: ["localStorage", "sessionStorage", "queryString", "cookie"],
      lookupCookie: STORAGE_NAMES.language,
      lookupLocalStorage: STORAGE_NAMES.language,
      lookupQuerystring: STORAGE_NAMES.language,
      lookupSessionStorage: STORAGE_NAMES.language,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
