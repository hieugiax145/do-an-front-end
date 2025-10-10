import React from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enLang from "./locales/en/en.json";
import viLang from "./locales/vi/vi.json";

const resources = {
  en: {
    translation: enLang,
  },
  vi: {
    translation: viLang,
  },
};

const options = {
  order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
  lookupQuerystring: "lng",
  caches: ["localStorage", "cookie"],
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources, // if you're using a language detector, do not define the lng option
    detection: options,
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
