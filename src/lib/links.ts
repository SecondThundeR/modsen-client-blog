import { routes } from "@/constants/routes";
import { type DictionaryType } from "@/locale/get-dictionary";

export const getLinks = (
  locale: PageLocaleParams["params"]["locale"],
  linksLocale: DictionaryType["links"],
  parent: "navbar" | "footer",
) => {
  const { home, blog, aboutUs, contactUs, privacyPolicy } = linksLocale;

  const baseLinks = [
    {
      id: "home",
      href: `/${locale}${routes.home}`,
      text: home,
    },
    {
      id: "blog",
      href: `/${locale}${routes.blog}`,
      text: blog,
    },
    {
      id: "aboutUs",
      href: `/${locale}${routes.aboutUs}`,
      text: aboutUs,
    },
    {
      id: "contactUs",
      href: `/${locale}${routes.contactUs}`,
      text: contactUs,
    },
  ];

  if (parent === "footer")
    return [
      ...baseLinks,
      {
        id: "privacyPolicy",
        href: `/${locale}${routes.privacyPolicy}`,
        text: privacyPolicy,
      },
    ];

  return baseLinks;
};
