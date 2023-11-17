import { type Locale } from "@/types/locale";

export interface PostsProps {
  locale: Locale;
  authorId: string;
  categoriesDictionary: Record<string, string>;
  noPostsHeading: string;
}
