import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/locale/i18n-config";

export interface PostCardProps {
  locale: Locale;
  post: Post;
  authorPrefixString: string;
}
