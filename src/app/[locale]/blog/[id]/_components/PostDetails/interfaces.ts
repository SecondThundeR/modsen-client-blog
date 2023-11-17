import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/types/locale";

export interface PostDetailsProps {
  locale: Locale;
  post: Omit<Post, "id" | "tagsIds">;
  postedOn: string;
  categoriesLocale: Record<string, string>;
}
