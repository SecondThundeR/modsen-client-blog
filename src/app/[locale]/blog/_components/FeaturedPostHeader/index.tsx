import Image from "next/image";
import Link from "next/link";
import featuredPostPlaceholder from "public/assets/blog/featured-post-placeholder.jpeg";

import { AuthorLink, Body, Button, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { getFormattedDate } from "@/helpers/getFormattedDate";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { findPostByID } from "@/lib/posts/findPostByID";

import styles from "./FeaturedPostHeader.module.scss";
import { type FeaturedPostHeaderProps } from "./interfaces";

export default function FeaturedPostHeader({
  locale,
  postId,
  capString,
  authorBodyString,
  buttonString,
}: FeaturedPostHeaderProps) {
  const { id, name, authorId, createdAt } = findPostByID(postId)!;
  const author = findAuthorByID(authorId, false);

  const authorLink = author && (
    <AuthorLink
      {...author}
      locale={locale}
      bodyString={authorBodyString}
      color="purple"
    />
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <div className={styles.details__data}>
          <Cap>{capString}</Cap>
          <div className={styles.details__info}>
            <Heading level={2}>{name}</Heading>
            <Body>
              {authorLink} {getFormattedDate(createdAt, locale)}
            </Body>
            <Body color="mediumGray">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </Body>
          </div>
        </div>
        <Link href={`/${locale}${routes.blog}/${id}`}>
          <Button>{buttonString}</Button>
        </Link>
      </div>
      <Image
        className={styles.image}
        src={featuredPostPlaceholder}
        alt=""
        priority
      />
    </div>
  );
}
