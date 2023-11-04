import { routes } from "@/constants/routes";
import { type DictionaryType } from "@/locale/get-dictionary";

export const getHeaderLinks = (
  locale: PageLocaleParams["params"]["locale"],
  linksLocale: DictionaryType["header"]["links"],
) => {
  const { home, blog, aboutUs, contactUs } = linksLocale;

  return [
    {
      href: `/${locale}${routes.home}`,
      text: home,
    },
    {
      href: `/${locale}${routes.blog}`,
      text: blog,
    },
    {
      href: `/${locale}${routes.aboutUs}`,
      text: aboutUs,
    },
    {
      href: `/${locale}${routes.contactUs}`,
      text: contactUs,
    },
  ];
};
