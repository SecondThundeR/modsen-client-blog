import Link from "next/link";

import { socialLinks } from "@/constants/links";

import { type SocialsProps } from "./interfaces";
import styles from "./Socials.module.scss";

export default function Socials({ customLinks }: SocialsProps) {
  const socialsElements = socialLinks.map(({ id, icon: Icon, href }) => {
    const linkHref = customLinks?.[id] ?? href;

    return (
      <Link
        data-testid={id}
        key={id}
        className={styles.socialLink}
        href={linkHref}
      >
        <Icon width={16} height={16} />
      </Link>
    );
  });

  return (
    <div data-testid="socials-wrapper" className={styles.wrapper}>
      {socialsElements}
    </div>
  );
}
