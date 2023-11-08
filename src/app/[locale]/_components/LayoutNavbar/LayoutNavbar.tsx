import Link from "next/link";

import { Body, Button, Heading, Navbar } from "@/components/ui";
import { modals } from "@/constants/modals";
import { getLinks } from "@/lib/links";
import { getDictionary } from "@/locale/get-dictionary";

export default async function LayoutNavbar({
  locale,
}: PageLocaleParams["params"]) {
  const { title, links, headerVideoButton } = await getDictionary(locale);
  const linksElements = getLinks(locale, links, "navbar").map(
    ({ id, href, text }) => (
      <Link key={id} href={href}>
        <Body level={1}>{text}</Body>
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
