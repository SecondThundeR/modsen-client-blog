import { type Locale } from "i18n-config";

import { type DictionaryType } from "@/types/dictionary";

export interface LayoutNavbarProps
  extends Pick<DictionaryType, "title" | "headerVideoButton" | "links"> {
  locale: Locale;
}
