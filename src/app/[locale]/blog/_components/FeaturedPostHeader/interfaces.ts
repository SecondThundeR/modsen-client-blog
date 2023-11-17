import { type Locale } from "i18n-config";

export interface FeaturedPostHeaderProps {
  locale: Locale;
  postId: string;
  capString: string;
  authorBodyString: string;
  buttonString: string;
}
