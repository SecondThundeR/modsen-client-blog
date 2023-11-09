import { type DictionaryType } from "@/locale/get-dictionary";

export type LayoutNavbarProps = PageLocaleParams["params"] &
  Pick<DictionaryType, "title" | "headerVideoButton" | "links">;
