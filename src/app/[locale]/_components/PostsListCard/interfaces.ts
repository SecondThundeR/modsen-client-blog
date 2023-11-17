import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/types/locale";

export interface PostsListCardProps {
  locale: Locale;
  post: Omit<Post, "authorId" | "createdAt" | "tagsIds">;
  categoriesLocale: Record<string, string>;
}
