import { type Locale } from "@/locale/i18n-config";

export interface PostsProps {
  locale: Locale;
  authorId: string;
  categoriesDictionary: Record<string, string>;
  noPostsHeading: string;
}
