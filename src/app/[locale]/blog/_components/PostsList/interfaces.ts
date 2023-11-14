import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/locale/i18n-config";

export interface PostsListProps {
  locale: Locale;
  noPostsHeading: string;
  categoriesLocale: Record<string, string>;
  posts?: Post[];
  elementsPerPage?: number;
}
