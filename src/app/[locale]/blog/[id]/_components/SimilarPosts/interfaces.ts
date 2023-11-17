import { type Locale } from "@/types/locale";

export interface SimilarPostsProps {
  locale: Locale;
  excludePostId: string;
  categoryId: string;
  headingString: string;
  authorPrefixString: string;
}
