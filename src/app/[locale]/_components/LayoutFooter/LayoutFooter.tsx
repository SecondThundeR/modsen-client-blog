import Link from "next/link";

import { Body, Footer, Heading } from "@/components/ui";
import { address, emailAndPhone } from "@/constants/contactInfo";
import { getLinks, socialLinks } from "@/lib/links";

import { LocaleSwitcher, SubscribeBlock } from "../";
import { type LayoutFooterProps } from "./interfaces";

export default function LayoutFooter({
  locale,
  title,
  links,
  subscribe,
}: LayoutFooterProps) {
  const linksElements = [
    ...getLinks(locale, links, "footer").map(({ id, href, text }) => (
      <Link key={id} href={href}>
        <Body level={1}>{text}</Body>
      </Link>
    )),
    <LocaleSwitcher key="locale-switcher" currentLocale={locale} />,
  ];
  const socialElements = socialLinks.map(({ id, icon: Icon, href }) => (
    <Link key={id} href={href}>
      <Icon width={16} height={16} />
    </Link>
  ));

  return (
    <Footer
      titleSlot={
        <Heading level={4} font="inter">
          {title}
        </Heading>
      }
      linksSlot={linksElements}
      ctaSlot={<SubscribeBlock {...subscribe} />}
      contactInfoSlot={
        <>
          <Body>{address}</Body>
          <Body>{emailAndPhone}</Body>
        </>
      }
      socialButtonsSlot={socialElements}
    />
  );
}
