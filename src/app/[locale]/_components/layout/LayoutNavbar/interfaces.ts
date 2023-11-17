import { type DictionaryType } from "@/types/dictionary";
import { type Locale } from "@/types/locale";

export interface LayoutNavbarProps
  extends Pick<DictionaryType, "title" | "headerVideoButton" | "links"> {
  locale: Locale;
}
