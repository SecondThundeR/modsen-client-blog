import { type Locale } from "@/locale/i18n-config";

export interface AllPostBlockProps {
  postId: string;
  locale: Locale;
  bodyString: string;
}
