import { type Locale } from "@/locale/i18n-config";

export interface FeaturedPostBlockProps {
  locale: Locale;
  postId: string;
  bodyString: string;
  buttonString: string;
}
