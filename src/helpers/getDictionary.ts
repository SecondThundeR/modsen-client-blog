import "server-only";

import { dictionaries } from "@/constants/dictionaries";
import { type Locale } from "@/types/locale";

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries.en();
}
