import { Heading } from "@/components/ui";
import { getPostsByCategoryID } from "@/lib/posts/getPostsByCategoryID";

import { type SimilarPostsProps } from "./interfaces";
import PostCard from "./PostCard/PostCard";
import styles from "./SimilarPosts.module.scss";

export default function SimilarPosts({
  locale,
  excludePostId,
  categoryId,
  headingString,
  authorStartString,
}: SimilarPostsProps) {
  const similarPosts = getPostsByCategoryID(categoryId).filter(
    (post) => post.id !== excludePostId,
  );
  if (!similarPosts || similarPosts.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <Heading level={2}>{headingString}</Heading>
      <div className={styles.wrapper__posts}>
        {similarPosts.map((post) => (
          <PostCard
            key={post.id}
            locale={locale}
            authorStartString={authorStartString}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}
