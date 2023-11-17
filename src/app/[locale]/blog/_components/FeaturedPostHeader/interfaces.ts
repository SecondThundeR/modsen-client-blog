import { type Locale } from "@/types/locale";

export interface FeaturedPostHeaderProps {
  locale: Locale;
  postId: string;
  capString: string;
  authorBodyString: string;
  buttonString: string;
}
