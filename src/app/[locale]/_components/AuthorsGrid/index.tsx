import Link from "next/link";

import { Avatar, Body, Heading, Socials } from "@/components/ui";
import { authors } from "@/constants/data/authors";
import { routes } from "@/constants/routes";

import styles from "./AuthorsGrid.module.scss";
import { type AuthorsGridProps } from "./interfaces";

export default function AuthorsGrid({
  locale,
  headingString,
  positions,
  extended = false,
}: AuthorsGridProps) {
  const extendedSliceElements = extended ? 8 : 4;

  const authorsElements = authors
    .slice(0, extendedSliceElements)
    .map(({ id, image, companyHandle, name, positionId, socials }) => (
      <div className={styles.card} key={id}>
        <Avatar
          src={image}
          width={128}
          height={128}
          alt={`${name} avatar image`}
        />
        <div>
          <Link href={`/${locale}${routes.author}/${id}`}>
            <Heading level={3}>{name}</Heading>
          </Link>
          <Body level={2}>
            {positions[positionId]} {companyHandle}
          </Body>
        </div>
        <Socials customLinks={socials} />
      </div>
    ));

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{headingString}</Heading>
      <div className={styles.grid}>{authorsElements}</div>
    </div>
  );
}
