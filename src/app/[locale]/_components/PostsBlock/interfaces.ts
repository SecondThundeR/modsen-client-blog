import { type Locale } from "i18n-config";

import { type DictionaryType } from "@/types/dictionary";

export interface PostsBlockProps {
  locale: Locale;
  dictionary: DictionaryType["postsBlock"];
  authorPrefixString: string;
  readMoreString: string;
  featuredPostId: string;
  allPostsId: string;
}
