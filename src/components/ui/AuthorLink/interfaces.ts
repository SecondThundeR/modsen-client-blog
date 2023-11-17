import { type Locale } from "i18n-config";

import { type Author } from "@/constants/data/authors";

export interface AuthorLinkProps extends Pick<Author, "id" | "name"> {
  locale: Locale;
  bodyString: string;
  color?: "regular" | "purple";
}
