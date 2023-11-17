import { type Locale } from "i18n-config";

import { type DictionaryType } from "@/types/dictionary";

export interface LayoutFooterProps
  extends Pick<DictionaryType, "title" | "links" | "subscribe"> {
  locale: Locale;
}
