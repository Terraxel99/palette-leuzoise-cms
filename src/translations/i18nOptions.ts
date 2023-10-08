import { InitOptions } from "i18next";
import { resources, supportedLanguages } from "./languages";

export const i18nOptions: InitOptions = {
    fallbackLng: 'fr',
    supportedLngs: supportedLanguages,
    debug: true,
    resources,
};