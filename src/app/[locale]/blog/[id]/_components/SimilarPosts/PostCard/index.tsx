import { Body, Heading } from "@secondthunder/modsen-client-blog-ui";
import Image from "next/image";
import Link from "next/link";
import readNextPlaceholderImage from "public/assets/blog/post/read-next-placeholder.jpeg";

import { AuthorLink } from "@/components/ui";
import { routes } from "@/constants/routes";
import { getFormattedDate } from "@/helpers/getFormattedDate";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";

import { type PostCardProps } from "./interfaces";
import styles from "./PostCard.module.scss";

export default function PostCard({
  locale,
  post: { id, name, authorId, createdAt },
  authorPrefixString,
}: PostCardProps) {
  const authorData = findAuthorByID(authorId, false);
  const authorString = authorData && (
    <AuthorLink
      {...authorData}
      locale={locale}
      bodyString={authorPrefixString}
      color="purple"
    />
  );

  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={readNextPlaceholderImage}
        alt=""
        priority
      />
      <div className={styles.details}>
        <Body>
          {authorString} {getFormattedDate(createdAt, locale)}
        </Body>
        <Link href={`/${locale}${routes.blog}/${id}`}>
          <Heading level={3}>{name}</Heading>
        </Link>
        <Body isSecondary>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </Body>
      </div>
    </div>
  );
}
