import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/locale/i18n-config";

export interface PostsListProps {
  locale: Locale;
  posts: Post[];
  categoriesLocale: Record<string, string>;
  noPostsHeading: string;
}
