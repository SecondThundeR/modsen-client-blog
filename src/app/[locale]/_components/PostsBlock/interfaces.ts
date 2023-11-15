import { type DictionaryType } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

export interface PostsBlockProps {
  locale: Locale;
  dictionary: DictionaryType["postsBlock"];
  authorPrefixString: string;
  readMoreString: string;
  featuredPostId: string;
  allPostsId: string;
}
