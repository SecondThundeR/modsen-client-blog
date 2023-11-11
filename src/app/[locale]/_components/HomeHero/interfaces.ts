import { type DictionaryType } from "@/locale/get-dictionary";

export interface HomeHeroProps {
  locale: PageLocaleParams["params"]["locale"];
  heroPostId: string;
  dictionary: DictionaryType["heroPostBlock"];
  categories: Record<string, string>;
}
