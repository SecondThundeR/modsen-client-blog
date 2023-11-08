import { type DictionaryType } from "@/locale/get-dictionary";

export type LayoutFooterProps = PageLocaleParams["params"] &
  Pick<DictionaryType, "title" | "links" | "subscribe">;
