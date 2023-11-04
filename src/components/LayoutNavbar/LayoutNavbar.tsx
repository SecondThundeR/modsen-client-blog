import Link from "next/link";

import { Body, Button, Heading, Navbar } from "@/components/ui";
import { navbarVideoLink } from "@/constants/navbar";
import { getNavbarLinks } from "@/lib/navbar";
import { getDictionary } from "@/locale/get-dictionary";

import { type LayoutNavbarProps } from "./interfaces";

export default async function LayoutNavbar({ locale }: LayoutNavbarProps) {
  const { title, links, videoAboutUs } = (await getDictionary(locale)).navbar;
  const linksElements = getNavbarLinks(locale, links).map((link) => (
    <Link key={link.text} href={link.href}>
      <Body level={1}>{link.text}</Body>
    </Link>
  ));

  return (
    <Navbar
      titleSlot={
        <Heading level={4} font="inter">
          {title}
        </Heading>
      }
      linksSlot={linksElements}
      controlsSlot={
        <Link href={navbarVideoLink} target="_blank">
          <Button variant="regular">{videoAboutUs}</Button>
        </Link>
      }
    />
  );
}
