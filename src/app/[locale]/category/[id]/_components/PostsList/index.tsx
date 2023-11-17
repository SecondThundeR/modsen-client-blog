"use client";

import { memo, useMemo } from "react";

import { PostsListCard } from "@/app/[locale]/_components";
import { Heading } from "@/components/ui";
import { useTagsQuerySelect } from "@/hooks/useTagsQuerySelect";

import { type PostsListProps } from "./intefaces";

function PostsList({
  locale,
  posts,
  categoriesLocale,
  noPostsHeading,
}: PostsListProps) {
  const { currentTags } = useTagsQuerySelect();
  const filteredPosts = useMemo(() => {
    if (currentTags.length === 0) return posts;
    return posts.filter((post) =>
      post.tagsIds.some((tag) => currentTags.includes(tag)),
    );
  }, [currentTags, posts]);

  if (filteredPosts.length === 0)
    return (
      <Heading level={2} color="mediumGray">
        {noPostsHeading}
      </Heading>
    );

  return filteredPosts.map((post) => (
    <PostsListCard
      key={post.id}
      locale={locale}
      categoriesLocale={categoriesLocale}
      post={post}
    />
  ));
}

export default memo(PostsList);
