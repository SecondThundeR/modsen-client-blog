import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface LayoutFooterProps
  extends Pick<DictionaryType, "title" | "links" | "subscribe"> {
  locale: Locale;
}
