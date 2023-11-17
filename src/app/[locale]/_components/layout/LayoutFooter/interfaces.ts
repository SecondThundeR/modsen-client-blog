import { type DictionaryType } from "@/types/dictionary";
import { type Locale } from "@/types/locale";

export interface LayoutFooterProps
  extends Pick<DictionaryType, "title" | "links" | "subscribe"> {
  locale: Locale;
}
