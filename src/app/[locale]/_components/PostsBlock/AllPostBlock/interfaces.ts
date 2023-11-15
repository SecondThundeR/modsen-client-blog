import { type Locale } from "@/locale/i18n-config";

export interface AllPostBlockProps {
  locale: Locale;
  postId: string;
  bodyString: string;
}
