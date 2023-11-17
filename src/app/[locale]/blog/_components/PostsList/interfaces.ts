import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/types/locale";

export interface PostsListProps {
  locale: Locale;
  noPostsHeading: string;
  categoriesLocale: Record<string, string>;
  posts?: Post[];
  elementsPerPage?: number;
}
