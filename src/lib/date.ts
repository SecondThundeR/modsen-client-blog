import { type Locale } from "@/locale/i18n-config";

const monthMap: Record<Locale, Record<number, string>> = {
  en: {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  },
  ru: {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря",
  },
};

export function getFormattedDate(date: Date, locale: Locale) {
  const monthText = monthMap[locale][date.getMonth()]!;

  if (locale === "ru")
    return `${date.getDate()} ${monthText} ${date.getFullYear()}`;

  return `${monthText} ${date.getDate()}, ${date.getFullYear()}`;
}
