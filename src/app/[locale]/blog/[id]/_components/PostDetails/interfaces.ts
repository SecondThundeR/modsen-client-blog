import { type Locale } from "i18n-config";

import { type Post } from "@/constants/data/posts";

export interface PostDetailsProps {
  locale: Locale;
  post: Omit<Post, "id" | "tagsIds">;
  postedOn: string;
  categoriesLocale: Record<string, string>;
}
