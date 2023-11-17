import Image from "next/image";
import Link from "next/link";

import { Avatar, Body, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { getFormattedDate } from "@/helpers/getFormattedDate";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { findCategoryByID } from "@/lib/categories/findCategoryByID";

import { type PostDetailsProps } from "./interfaces";
import styles from "./PostDetails.module.scss";

export default function PostDetails({
  locale,
  post,
  postedOn,
  categoriesLocale,
}: PostDetailsProps) {
  const { name, authorId, categoryId, createdAt } = post;
  const { name: authorName, image } = findAuthorByID(authorId, false)!;
  const { icon } = findCategoryByID(categoryId)!;

  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>
        <Avatar width={48} height={48} src={image} alt="" />
        <div className={styles.author__details}>
          <Link
            className={styles.author__link}
            href={`/${locale}${routes.author}/${authorId}`}
          >
            <Heading level={3}>{authorName}</Heading>
          </Link>
          <Body color="mediumGray">
            {postedOn} {getFormattedDate(createdAt, locale)}
          </Body>
        </div>
      </div>
      <div className={styles.post__details}>
        <Heading>{name}</Heading>
        <Link
          className={styles.category}
          href={`/${locale}${routes.category}/${categoryId}`}
        >
          <Image className={styles.category__image} src={icon} alt="" />
          <Heading level={4}>{categoriesLocale[categoryId]}</Heading>
        </Link>
      </div>
    </div>
  );
}
