import Link from "next/link";

import { Avatar, Body, Card, Heading, Socials } from "@/components/ui";
import { authors } from "@/constants/data/authors";
import { routes } from "@/constants/routes";
import { getDictionary } from "@/locale/get-dictionary";

import styles from "./AuthorsGrid.module.scss";

export default async function AuthorsGrid({
  locale,
}: PageLocaleParams["params"]) {
  const dictionary = await getDictionary(locale);
  const { heading, positions } = dictionary.authorsGrid;

  const authorsElements = authors
    .slice(0, 4)
    .map(({ id, image, companyHandle, name, positionId, socials }) => (
      <Card key={id}>
        <Avatar
          src={image}
          width={128}
          height={128}
          alt={`${name} avatar image`}
        />
        <div>
          <Link href={`${locale}${routes.author}/${id}`}>
            <Heading level={3}>{name}</Heading>
          </Link>
          <Body level={2}>
            {positions[positionId]} {companyHandle}
          </Body>
        </div>
        <Socials customLinks={socials} />
      </Card>
    ));

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{heading}</Heading>
      <div className={styles.grid}>{authorsElements}</div>
    </div>
  );
}
