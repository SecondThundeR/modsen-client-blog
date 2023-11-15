import { type Author } from "@/constants/data/authors";
import { type Locale } from "@/locale/i18n-config";

export interface AuthorLinkProps extends Pick<Author, "id" | "name"> {
  locale: Locale;
  bodyString: string;
  color?: "regular" | "purple";
}
