import { type Locale } from "i18n-config";

import { type Post } from "@/constants/data/posts";

export interface PostsListProps {
  locale: Locale;
  posts: Post[];
  categoriesLocale: Record<string, string>;
  noPostsHeading: string;
}
