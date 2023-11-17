"use client";

import Link from "next/link";
import { memo } from "react";

import { AuthorLink, Body, Button, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { getFormattedDate } from "@/helpers/getFormattedDate";
import { withLazyLoad } from "@/hocs/withLazyLoad";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { findPostByID } from "@/lib/posts/findPostByID";

import styles from "./HomeHero.module.scss";
import { type HomeHeroProps } from "./interfaces";

function HomeHero({
  locale,
  heroPostId,
  postedOnString,
  authorPrefixString,
  readMoreString,
  categories,
}: HomeHeroProps) {
  const post = findPostByID(heroPostId);
  if (!post) return null;

  const { id, name, categoryId, authorId, createdAt } = post;
  const author = findAuthorByID(authorId, false);
  const localeCategory = categories[categoryId];

  const authorLink = author && (
    <AuthorLink
      id={author.id}
      name={author.name}
      locale={locale}
      bodyString={authorPrefixString}
    />
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.data}>
          <Cap>
            {postedOnString} <strong>{localeCategory}</strong>
          </Cap>
          <Heading>{name}</Heading>
          <div className={styles.details}>
            <Body>
              {authorLink}
              {getFormattedDate(createdAt, locale)}
            </Body>
            <Body>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </Body>
          </div>
        </div>
        <Link href={`/${locale}${routes.blog}/${id}`}>
          <Button>{readMoreString}</Button>
        </Link>
      </div>
    </div>
  );
}

export default memo(
  withLazyLoad(HomeHero, {
    hasTransformY: false,
  }),
);
