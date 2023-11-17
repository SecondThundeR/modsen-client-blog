import { monthMap } from "@/constants/date";
import { type Locale } from "@/locale/i18n-config";

export function getFormattedDate(date: Date, locale: Locale) {
  const monthText = monthMap[locale][date.getMonth()]!;

  if (locale === "ru")
    return `${date.getDate()} ${monthText} ${date.getFullYear()}`;

  return `${monthText} ${date.getDate()}, ${date.getFullYear()}`;
}
