import { type Post } from "@/constants/data/posts";
import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface PostDetailsProps {
  locale: Locale;
  post: Omit<Post, "id">;
  postedOn: DictionaryType["blogPost"]["postedOn"];
  categoriesLocale: Record<string, string>;
}
