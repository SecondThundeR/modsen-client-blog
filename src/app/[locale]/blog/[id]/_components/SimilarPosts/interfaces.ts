import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface SimilarPostsProps {
  locale: Locale;
  excludePostId: string;
  categoryId: string;
  headingString: DictionaryType["blogPost"]["readNextHeading"];
  authorStartString: DictionaryType["blogPost"]["authorStart"];
}
