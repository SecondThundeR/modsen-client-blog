import { type Locale } from "i18n-config";

export interface FeaturedPostBlockProps {
  locale: Locale;
  postId: string;
  bodyString: string;
  buttonString: string;
}
