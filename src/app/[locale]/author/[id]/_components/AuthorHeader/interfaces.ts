import { type Author } from "@/constants/data/authors";
import { type DictionaryType } from "@/types/dictionary";

export interface AuthorHeaderProps {
  authorData: Pick<Author, "name" | "socials" | "image">;
  dictionary: DictionaryType["authorPage"]["header"];
}
