import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/types/locale";

export interface PostsListProps {
  locale: Locale;
  posts: Post[];
  categoriesLocale: Record<string, string>;
  noPostsHeading: string;
}
