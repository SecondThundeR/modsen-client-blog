import { type Locale } from "@/locale/i18n-config";

export interface FeaturedPostHeaderProps {
  locale: Locale;
  postId: string;
  capString: string;
  authorBodyString: string;
  buttonString: string;
}
