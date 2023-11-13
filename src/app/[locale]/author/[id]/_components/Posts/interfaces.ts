import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface PostsProps {
  locale: Locale;
  authorId: string;
  categoriesDictionary: DictionaryType["categoryGrid"]["categories"];
  noPostsHeading: DictionaryType["authorPage"]["noPostsHeading"];
}
