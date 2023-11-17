import { type Locale } from "i18n-config";

export interface PostsProps {
  locale: Locale;
  authorId: string;
  categoriesDictionary: Record<string, string>;
  noPostsHeading: string;
}
