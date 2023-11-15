import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { type DictionaryType } from "./get-dictionary";
import { type Locale } from "./i18n-config";

type DictionaryModule = {
  default: DictionaryType;
};

export function useDictionary() {
  const [dictionary, setDictionary] = useState<DictionaryType | null>(null);
  const pathName = usePathname();

  const updateDictionary = useCallback((locale: Locale) => {
    import(`./${locale}.json`)
      .then((module: DictionaryModule) => setDictionary(module.default))
      .catch(console.error);
  }, []);

  const getCurrentLocale = useCallback(() => {
    if (!pathName) return null;
    const segments = pathName.split("/");
    return segments[1] as Locale;
  }, [pathName]);

  useEffect(() => {
    const locale = getCurrentLocale();
    if (!locale) return;
    updateDictionary(locale);
    return () => setDictionary(null);
  }, [getCurrentLocale, updateDictionary]);

  return dictionary;
}
