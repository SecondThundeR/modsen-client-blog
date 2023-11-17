import dynamic from "next/dynamic";
import Link from "next/link";

import { Body, Footer, Heading } from "@/components/ui";
import { address, emailAndPhone } from "@/constants/contactInfo";
import { socialLinks } from "@/constants/links";
import { getLinks } from "@/lib/links";

import {
  LocaleSwitcherSkeleton,
  SubscribeBlockSkeleton,
} from "../../skeletons";
import { type LayoutFooterProps } from "./interfaces";

const LazyLocaleSwitcher = dynamic(() => import("../LocaleSwitcher"), {
  ssr: false,
  loading: () => <LocaleSwitcherSkeleton />,
});

const LazySubscribeBlock = dynamic(() => import("../SubscribeBlock"), {
  ssr: false,
  loading: () => <SubscribeBlockSkeleton />,
});

export default function LayoutFooter({
  locale,
  title,
  links,
  subscribe,
}: LayoutFooterProps) {
  const linksElements = [
    ...getLinks(locale, links, "footer").map(({ id, href, text }) => (
      <Link key={id} href={href}>
        <Body>{text}</Body>
      </Link>
    )),
    <LazyLocaleSwitcher key="locale-switcher" currentLocale={locale} />,
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
      ctaSlot={<LazySubscribeBlock {...subscribe} />}
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
