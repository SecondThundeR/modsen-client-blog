import Link from "next/link";

import { AuthorLink, Body, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { getFormattedDate } from "@/helpers/getFormattedDate";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { findPostByID } from "@/lib/posts/findPostByID";

import styles from "./AllPostBlock.module.scss";
import { type AllPostBlockProps } from "./interfaces";

export default function AllPostBlock({
  locale,
  postId,
  bodyString,
}: AllPostBlockProps) {
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
      <Body>
        {authorLink}
        {getFormattedDate(createdAt, locale)}
      </Body>
      <Link href={`/${locale}${routes.blog}/${id}`}>
        <Heading level={4}>{name}</Heading>
      </Link>
    </div>
  );
}
