import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";

import en from "@/locales/en.json";

const resources = {
  en,
};

void i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export function I18NProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
