"use client";

import Link from "next/link";
import { memo } from "react";

import { Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { withLazyLoad } from "@/hocs/withLazyLoad";

import AllPostBlock from "./AllPostBlock";
import FeaturedPostBlock from "./FeaturedPostBlock";
import { type PostsBlockProps } from "./interfaces";
import styles from "./PostsBlock.module.scss";

function PostsBlock({
  locale,
  dictionary,
  authorPrefixString,
  readMoreString,
  featuredPostId,
  allPostsId,
}: PostsBlockProps) {
  const { all, featured, view } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.subwrapper}>
        <Heading level={2}>{featured}</Heading>
        <FeaturedPostBlock
          locale={locale}
          postId={featuredPostId}
          bodyString={authorPrefixString}
          buttonString={readMoreString}
        />
      </div>
      <div className={styles.subwrapper}>
        <div className={styles.all__header}>
          <Heading level={2}>{all}</Heading>
          <Link className={styles.link} href={`/${locale}${routes.blog}`}>
            {view}
          </Link>
        </div>
        <div className={styles.all_posts}>
          {[0, 1, 2, 3].map((i) => (
            <AllPostBlock
              key={`${allPostsId}-${i}`}
              locale={locale}
              postId={allPostsId}
              bodyString={authorPrefixString}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(
  withLazyLoad(PostsBlock, {
    threshold: 0.3,
  }),
);
