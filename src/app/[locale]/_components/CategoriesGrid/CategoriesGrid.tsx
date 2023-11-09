import Image from "next/image";
import Link from "next/link";

import { Body, Heading } from "@/components/ui";
import { categories } from "@/constants/data/categories";
import { routes } from "@/constants/routes";
import { getDictionary } from "@/locale/get-dictionary";

import styles from "./CategoriesGrid.module.scss";

export default async function CategoriesGrid({
  locale,
}: PageLocaleParams["params"]) {
  const dictionary = await getDictionary(locale);
  const { heading, categories: categoriesLocale } = dictionary.categoryGrid;

  const categoriesElements = categories.map(({ id, icon }) => (
    <Link
      key={id}
      className={styles.card}
      href={`${locale}${routes.category}/${id}`}
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
      <Heading level={2}>{heading}</Heading>
      <div className={styles.grid}>{categoriesElements}</div>
    </div>
  );
}
