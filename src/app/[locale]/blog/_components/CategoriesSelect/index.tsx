import { Body, Heading } from "@secondthunder/modsen-client-blog-ui";
import Image from "next/image";
import Link from "next/link";

import { categories } from "@/constants/data/categories";
import { routes } from "@/constants/routes";

import styles from "./CategoriesSelect.module.scss";
import { type CategoriesSelectProps } from "./interfaces";

export default function CategoriesSelect({
  locale,
  headingString,
  categoriesLocale,
}: CategoriesSelectProps) {
  const categoriesElements = categories.map(({ id, icon }) => (
    <Link
      key={id}
      className={styles.card}
      href={`/${locale}${routes.category}/${id}`}
    >
      <Image className={styles.icon} src={icon} alt={`${id} icon`} />
      <div>
        <Heading level={3}>{categoriesLocale[id]}</Heading>
        <Body color="mediumGray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Body>
      </div>
    </Link>
  ));

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{headingString}</Heading>
      <div className={styles.grid}>{categoriesElements}</div>
    </div>
  );
}
