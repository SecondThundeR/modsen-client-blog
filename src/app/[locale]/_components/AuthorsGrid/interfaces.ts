import { type DictionaryType } from "@/locale/get-dictionary";

export interface AuthorsGridProps {
  locale: PageLocaleParams["params"]["locale"];
  dictionary: DictionaryType["authorsGrid"];
  extended?: boolean;
}
