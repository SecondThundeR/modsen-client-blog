import { type Locale } from "@/types/locale";

export interface FeaturedPostBlockProps {
  locale: Locale;
  postId: string;
  bodyString: string;
  buttonString: string;
}
