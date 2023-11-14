import { type Locale } from "@/locale/i18n-config";

export interface SimilarPostsProps {
  locale: Locale;
  excludePostId: string;
  categoryId: string;
  headingString: string;
  authorPrefixString: string;
}
