import Image from "next/image";
import Link from "next/link";
import postListCardPlaceholder from "public/assets/blog/posts-list-placeholder.jpeg";

import { Body, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";

import { type PostsListCardProps } from "./interfaces";
import styles from "./PostsListCard.module.scss";

export default function PostsListCard({
  locale,
  post,
  categoriesLocale,
}: PostsListCardProps) {
  const { id, name, categoryId } = post;
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        src={postListCardPlaceholder}
        alt=""
        priority
      />
      <div className={styles.postDetails}>
        <Link
          className={styles.categoryLink}
          href={`/${locale}${routes.category}/${categoryId}`}
        >
          <Cap weight="semibold">{categoriesLocale[categoryId]}</Cap>
        </Link>
        <Link href={`/${locale}${routes.blog}/${id}`}>
          <Heading level={2}>{name}</Heading>
        </Link>
        <Body color="mediumGray">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </Body>
      </div>
    </div>
  );
}
