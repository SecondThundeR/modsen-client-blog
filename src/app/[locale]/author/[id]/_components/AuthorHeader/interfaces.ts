import { type Author } from "@/constants/data/authors";
import { type DictionaryType } from "@/locale/get-dictionary";

export interface AuthorHeaderProps {
  authorData: Pick<Author, "name" | "socials" | "image">;
  dictionary: DictionaryType["authorPage"]["header"];
}
