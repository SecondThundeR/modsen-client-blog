import { type Author } from "@/constants/data/authors";
import { type Locale } from "@/types/locale";

export interface AuthorLinkProps extends Pick<Author, "id" | "name"> {
  locale: Locale;
  bodyString: string;
  color?: "regular" | "purple";
}
