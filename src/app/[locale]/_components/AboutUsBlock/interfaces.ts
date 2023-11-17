import { type Locale } from "i18n-config";

import { type DictionaryType } from "@/types/dictionary";

export interface AboutUsBlockProps {
  locale: Locale;
  dictionary: DictionaryType["aboutUsBlock"];
}
