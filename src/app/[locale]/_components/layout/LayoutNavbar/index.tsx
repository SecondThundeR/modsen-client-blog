import Link from "next/link";

import { Body, Button, Heading, Navbar } from "@/components/ui";
import { modals } from "@/constants/modals";
import { getLinks } from "@/helpers/getLinks";

import { type LayoutNavbarProps } from "./interfaces";

export default function LayoutNavbar({
  locale,
  title,
  headerVideoButton,
  links,
}: LayoutNavbarProps) {
  const linksElements = getLinks(locale, links, "navbar").map(
    ({ id, href, text }) => (
      <Link key={id} href={href}>
        <Body>{text}</Body>
      </Link>
    ),
  );

  return (
    <Navbar
      titleSlot={
        <Heading level={4} font="inter">
          {title}
        </Heading>
      }
      linksSlot={linksElements}
      controlsSlot={
        <Link href={`?modal=${modals.aboutUs}`}>
          <Button variant="regular">{headerVideoButton}</Button>
        </Link>
      }
    />
  );
}
