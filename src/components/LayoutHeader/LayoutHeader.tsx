import Link from "next/link";

import { Body, Button, Header, Heading } from "@/components/ui";
import { headerVideoLink } from "@/constants/header";
import { getHeaderLinks } from "@/lib/header";
import { getDictionary } from "@/locale/get-dictionary";

import { type LayoutHeaderProps } from "./interfaces";

export default async function LayoutHeader({ locale }: LayoutHeaderProps) {
  const { title, links, videoAboutUs } = (await getDictionary(locale)).header;
  const linksElements = getHeaderLinks(locale, links).map((link) => (
    <Link key={link.text} href={link.href}>
      <Body level={1}>{link.text}</Body>
    </Link>
  ));

  return (
    <Header
      titleSlot={
        <Heading level={4} font="inter">
          {title}
        </Heading>
      }
      linksSlot={linksElements}
      controlsSlot={
        <Link href={headerVideoLink} target="_blank">
          <Button variant="regular">{videoAboutUs}</Button>
        </Link>
      }
    />
  );
}
