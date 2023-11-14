import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface AboutUsBlockProps {
  locale: Locale;
  dictionary: DictionaryType["aboutUsBlock"];
}
