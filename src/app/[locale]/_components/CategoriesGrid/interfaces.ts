import { type DictionaryType } from "@/types/dictionary";

export interface CategoriesGridProps {
  locale: PageLocaleParams["params"]["locale"];
  dictionary: DictionaryType["categoryGrid"];
  categoriesLocale: Record<string, string>;
}
