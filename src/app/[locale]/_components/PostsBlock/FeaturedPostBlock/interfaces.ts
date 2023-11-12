import { type Locale } from "@/locale/i18n-config";

export interface FeaturedPostBlockProps {
  postId: string;
  locale: Locale;
  bodyString: string;
  buttonString: string;
}
