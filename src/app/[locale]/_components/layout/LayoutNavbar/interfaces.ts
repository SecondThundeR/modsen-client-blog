import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface LayoutNavbarProps
  extends Pick<DictionaryType, "title" | "headerVideoButton" | "links"> {
  locale: Locale;
}
