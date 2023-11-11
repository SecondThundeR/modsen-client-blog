"use client";

import Link from "next/link";

import { Body, Button, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { getFormattedDate } from "@/lib/date";
import { findPostByID } from "@/lib/posts/findPostByID";

import styles from "./HomeHero.module.scss";
import { type HomeHeroProps } from "./interfaces";

export default function HomeHero({
  locale,
  heroPostId,
  dictionary,
  categories,
}: HomeHeroProps) {
  const { cap, body, button } = dictionary;

  const post = findPostByID(heroPostId);
  if (!post) return null;

  const { id, name, categoryId, authorId, createdAt } = post;
  const author = findAuthorByID(authorId, false);
  const localeCategory = categories[categoryId];

  const authorLink = author && (
    <>
      {body}{" "}
      <Link href={`/${locale}${routes.author}/${author.id}`}>
        {author.name}
      </Link>
      {" | "}
    </>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.data}>
          <Cap>
            {cap} <strong>{localeCategory}</strong>
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
          <Button>{button}</Button>
        </Link>
      </div>
    </div>
  );
}