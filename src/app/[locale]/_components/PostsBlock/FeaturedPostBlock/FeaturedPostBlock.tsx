import Image from "next/image";
import Link from "next/link";
import featuredPost from "public/assets/featured-post.png";

import { AuthorLink, Body, Button, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { getFormattedDate } from "@/lib/date";
import { findPostByID } from "@/lib/posts/findPostByID";

import styles from "./FeaturedPostBlock.module.scss";
import { type FeaturedPostBlockProps } from "./interfaces";

export default function FeaturedPostBlock({
  locale,
  postId,
  bodyString,
  buttonString,
}: FeaturedPostBlockProps) {
  const { id, name, createdAt, authorId } = findPostByID(postId)!;
  const author = findAuthorByID(authorId, false)!;

  const authorLink = author && (
    <AuthorLink
      id={author.id}
      name={author.name}
      locale={locale}
      color="purple"
      bodyString={bodyString}
    />
  );

  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} src={featuredPost} alt="" priority />
      <div className={styles.details}>
        <Body>
          {authorLink}
          {getFormattedDate(createdAt, locale)}
        </Body>
        <Heading level={3}>{name}</Heading>
        <Body>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </Body>
      </div>
      <Link href={`/${locale}${routes.blog}/${id}`}>
        <Button>{buttonString}</Button>
      </Link>
    </div>
  );
}
