import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/locale/i18n-config";

export interface PostsListCardProps {
  locale: Locale;
  post: Omit<Post, "authorId" | "createdAt">;
  categoriesLocale: Record<string, string>;
}
