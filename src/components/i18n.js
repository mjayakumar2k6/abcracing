import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
console.log("LanguageDetector", LanguageDetector);
i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        latest: "Latest",
        video: "Video",
        schedule: "Schedule",
        standings: "Standings",
        drivers: "Drivers",
        teams : "Teams",
        gaming: "Gaming",
        liveTiming: "Live Timing"
      }
    },
    de: {
      translations: {
        latest: "Neueste",
        video: "Video",
        schedule: "Zeitlicher Ablauf",
        standings: "Tabellenplatz",
        drivers: "Fährt",
        teams : "Mannschaften",
        gaming: "Spiele",
        liveTiming: "Live-Timing"
      }
    }
  },
  fallbackLng: "de",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

i18n.changeLanguage("en");
export default i18n;