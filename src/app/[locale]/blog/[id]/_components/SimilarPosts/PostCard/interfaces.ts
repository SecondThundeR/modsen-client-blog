import { type Post } from "@/constants/data/posts";
import { type Locale } from "@/types/locale";

export interface PostCardProps {
  locale: Locale;
  post: Post;
  authorPrefixString: string;
}
