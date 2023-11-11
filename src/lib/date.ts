import { type Locale } from "@/locale/i18n-config";

const monthMap: Record<number, Record<string, string>> = {
  0: {
    en: "Jan",
    ru: "января",
  },
  1: {
    en: "Feb",
    ru: "февраля",
  },
  2: {
    en: "Mar",
    ru: "марта",
  },
  3: {
    en: "Apr",
    ru: "апреля",
  },
  4: {
    en: "May",
    ru: "мая",
  },
  5: {
    en: "Jun",
    ru: "июня",
  },
  6: {
    en: "Jul",
    ru: "июля",
  },
  7: {
    en: "Aug",
    ru: "августа",
  },
  8: {
    en: "Sep",
    ru: "сентября",
  },
  9: {
    en: "Oct",
    ru: "октября",
  },
  10: {
    en: "Nov",
    ru: "ноября",
  },
  11: {
    en: "Dec",
    ru: "декабря",
  },
};

export function getFormattedDate(date: Date, locale: Locale) {
  const monthText = monthMap[date.getMonth()]![locale];

  if (locale === "ru")
    return `${date.getDate()} ${monthText} ${date.getFullYear()}`;

  return `${monthText} ${date.getDate()}, ${date.getFullYear()}`;
}
