import { type Locale } from "i18n-config";

export interface SimilarPostsProps {
  locale: Locale;
  excludePostId: string;
  categoryId: string;
  headingString: string;
  authorPrefixString: string;
}
