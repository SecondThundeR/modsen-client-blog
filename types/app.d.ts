import { type Locale } from "../src/locale/i18n-config";

declare global {
  declare type PageLocaleParams = { params: { locale: Locale } };
}

export {};
