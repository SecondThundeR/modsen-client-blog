import Image from "next/image";
import Link from "next/link";
import postPlaceholder from "public/assets/authors/page/placeholder.jpeg";

import { Body, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { getAuthorPosts } from "@/lib/authors/getAuthorPosts";

import { type PostsProps } from "./interfaces";
import styles from "./Posts.module.scss";

export default function Posts({
  locale,
  authorId,
  categoriesDictionary,
  noPostsHeading,
}: PostsProps) {
  const posts = getAuthorPosts(authorId);
  if (!posts || posts.length === 0)
    return <Heading level={2}>{noPostsHeading}</Heading>;

  return posts.map(({ id, name, categoryId }) => (
    <div key={id} className={styles.wrapper}>
      <Image className={styles.image} src={postPlaceholder} alt="" priority />
      <div className={styles.content}>
        <Link
          className={styles.categoryLink}
          href={`/${locale}${routes.category}/${categoryId}`}
        >
          <Cap weight="semibold">
            {(categoriesDictionary as Record<string, string>)[categoryId]}
          </Cap>
        </Link>
        <div className={styles.content__details}>
          <Link href={`/${locale}${routes.blog}/${id}`}>
            <Heading level={2}>{name}</Heading>
          </Link>
          <Body color="mediumGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Body>
        </div>
      </div>
    </div>
  ));
}
