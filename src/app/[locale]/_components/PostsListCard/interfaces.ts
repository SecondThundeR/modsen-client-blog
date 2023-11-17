import { type Locale } from "i18n-config";

import { type Post } from "@/constants/data/posts";

export interface PostsListCardProps {
  locale: Locale;
  post: Omit<Post, "authorId" | "createdAt" | "tagsIds">;
  categoriesLocale: Record<string, string>;
}
