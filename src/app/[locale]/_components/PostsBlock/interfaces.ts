import { type DictionaryType } from "@/locale/get-dictionary";

export interface PostsBlockProps {
  locale: PageLocaleParams["params"]["locale"];
  dictionary: DictionaryType["postsBlock"];
  featuredPostId: string;
  allPostsId: string;
}
