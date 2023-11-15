import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui";
import { categories } from "@/constants/data/categories";
import { routes } from "@/constants/routes";
import { type Locale } from "@/locale/i18n-config";

import styles from "./CategoriesSelector.module.scss";

interface CategoriesSelectorProps {
  locale: Locale;
  currentCategoryId: string;
  headingString: string;
  categoriesLocale: Record<string, string>;
}

export default function CategoriesSelector({
  locale,
  currentCategoryId,
  headingString,
  categoriesLocale,
}: CategoriesSelectorProps) {
  const categoriesCards = categories.map(({ id, icon }) => (
    <Link
      key={id}
      className={clsx(styles.card, {
        [styles.card__active!]: id === currentCategoryId,
      })}
      href={`/${locale}${routes.category}/${id}`}
    >
      <Image className={styles.icon} src={icon} alt={`${id} icon`} />
      <Heading level={3}>{categoriesLocale[id]}</Heading>
    </Link>
  ));

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{headingString}</Heading>
      <div className={styles.cardsWrapper}>{categoriesCards}</div>
    </div>
  );
}
