"use client";

import { useMemo } from "react";

import { Heading } from "@/components/ui";
import { usePageNavigation } from "@/hooks/usePageNavigation";

import PageButtons from "../PageButtons/PageButtons";
import { type PostsListProps } from "./interfaces";
import styles from "./PostsList.module.scss";
import PostsListCard from "./PostsListCard/PostsListCard";

function getArraySlice(page: number, elementsPerPage: number, maxSize: number) {
  if (page < 1) page = 1;
  const startSlice = elementsPerPage * (page - 1);
  const endSlice = elementsPerPage * page;

  return {
    start: startSlice,
    end: endSlice >= maxSize ? maxSize : endSlice,
  };
}

export default function PostsList({
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
