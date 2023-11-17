import { type Locale } from "i18n-config";

import { type Post } from "@/constants/data/posts";

export interface PostCardProps {
  locale: Locale;
  post: Post;
  authorPrefixString: string;
}
