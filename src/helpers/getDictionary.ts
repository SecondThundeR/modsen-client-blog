import "server-only";

import { type Locale } from "i18n-config";

import { dictionaries } from "@/constants/dictionaries";

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries.en();
}
