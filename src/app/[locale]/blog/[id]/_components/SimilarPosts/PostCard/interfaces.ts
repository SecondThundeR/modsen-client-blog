import { type Post } from "@/constants/data/posts";
import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface PostCardProps {
  locale: Locale;
  post: Post;
  authorStartString: DictionaryType["blogPost"]["authorStart"];
}
