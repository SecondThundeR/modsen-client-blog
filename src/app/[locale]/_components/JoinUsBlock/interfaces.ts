import { type Locale } from "i18n-config";

import { type DictionaryType } from "@/types/dictionary";

export interface JoinUsBlockProps {
  locale: Locale;
  dictionary: DictionaryType["joinUs"];
}
