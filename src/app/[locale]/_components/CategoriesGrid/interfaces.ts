import { type DictionaryType } from "@/locale/get-dictionary";

export interface CategoriesGridProps {
  locale: PageLocaleParams["params"]["locale"];
  dictionary: DictionaryType["categoryGrid"];
}
