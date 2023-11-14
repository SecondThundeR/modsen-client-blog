import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/locale/i18n-config";

export interface PostDetailsProps {
  locale: Locale;
  post: Omit<Post, "id">;
  postedOn: string;
  categoriesLocale: Record<string, string>;
}
