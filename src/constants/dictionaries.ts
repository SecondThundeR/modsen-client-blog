export const dictionaries = {
  en: () => import("../../locale/en.json").then((module) => module.default),
  ru: () => import("../../locale/ru.json").then((module) => module.default),
};
