"use client";

import Link from "next/link";

import { Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";

import AllPostBlock from "./AllPostBlock/AllPostBlock";
import FeaturedPostBlock from "./FeaturedPostBlock/FeaturedPostBlock";
import { type PostsBlockProps } from "./interfaces";
import styles from "./PostsBlock.module.scss";

function PostsBlock({
  locale,
  dictionary,
  featuredPostId,
  allPostsId,
}: PostsBlockProps) {
  const { all, body, button, featured, view } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.subwrapper}>
        <Heading level={2}>{featured}</Heading>
        <FeaturedPostBlock
          postId={featuredPostId}
          locale={locale}
          bodyString={body}
          buttonString={button}
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
              postId={allPostsId}
              locale={locale}
              bodyString={body}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default withLazyLoad(PostsBlock, 0.2);
