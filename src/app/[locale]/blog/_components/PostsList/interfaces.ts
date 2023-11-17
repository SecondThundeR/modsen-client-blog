import { type Locale } from "i18n-config";

import { type Post } from "@/constants/data/posts";

export interface PostsListProps {
  locale: Locale;
  noPostsHeading: string;
  categoriesLocale: Record<string, string>;
  posts?: Post[];
  elementsPerPage?: number;
}
