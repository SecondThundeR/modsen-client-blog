"use client";

import { Heading } from "@secondthunder/modsen-client-blog-ui";
import { memo, useMemo } from "react";

import { getArraySlice } from "@/helpers/getArraySlice";
import { usePageNavigation } from "@/hooks/usePageNavigation";

import { PostsListCard } from "../../../_components";
import PageButtons from "../PageButtons";
import { type PostsListProps } from "./interfaces";
import styles from "./PostsList.module.scss";

function PostsList({
  locale,
  noPostsHeading,
  categoriesLocale,
  posts,
  elementsPerPage = 4,
}: PostsListProps) {
  const { currentPage, handlers, ...buttonsState } = usePageNavigation({
    elementsPerPage,
    maxElements: posts?.length ?? 0,
  });
  const postsToDisplay = useMemo(() => {
    if (!posts) return null;
    const { start, end } = getArraySlice(
      currentPage,
      elementsPerPage,
      posts.length,
    );
    const currentPosts = posts.slice(start, end);
    return currentPosts.map((post) => (
      <PostsListCard
        key={post.id}
        locale={locale}
        post={post}
        categoriesLocale={categoriesLocale}
      />
    ));
  }, [categoriesLocale, currentPage, elementsPerPage, locale, posts]);

  if (!posts || posts.length === 0) return <Heading>{noPostsHeading}</Heading>;

  return (
    <div className={styles.wrapper}>
      {postsToDisplay}
      <PageButtons {...buttonsState} {...handlers} />
    </div>
  );
}

export default memo(PostsList);
