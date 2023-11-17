import { type DictionaryType } from "@/types/dictionary";
import { type Locale } from "@/types/locale";

export interface PostsBlockProps {
  locale: Locale;
  dictionary: DictionaryType["postsBlock"];
  authorPrefixString: string;
  readMoreString: string;
  featuredPostId: string;
  allPostsId: string;
}
