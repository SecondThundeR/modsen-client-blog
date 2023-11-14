import dynamic from "next/dynamic";
import { Suspense } from "react";

import { PageSection } from "@/components/ui";
import { posts } from "@/constants/data/posts";
import { getDictionary } from "@/locale/get-dictionary";

import { JoinUsBlock } from "../_components";
import {
  CategoriesSelect,
  FeaturedPostHeader,
  PostsListContainer,
  PostsListHeader,
} from "./_components";
import { PostsListSkeleton } from "./_components/skeletons";

const FEATURED_POST_ID = "step-by-step";

const LazyPostsList = dynamic(
  () => import("./_components/PostsList/PostsList"),
);

export default async function Blog({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);
  const {
    joinUs,
    categoryGrid: { categories },
    blogHome: { categoriesHeading, allPostsHeading, allPostsNull },
    postsBlock: { featured, body, button },
  } = dictionary;

  return (
    <main>
      <FeaturedPostHeader
        locale={locale}
        postId={FEATURED_POST_ID}
        capString={featured}
        authorBodyString={body}
        buttonString={button}
      />
      <PageSection fullWidth>
        <PostsListContainer>
          <PostsListHeader headingString={allPostsHeading} />
          <Suspense fallback={<PostsListSkeleton />}>
            <LazyPostsList
              locale={locale}
              categoriesLocale={categories}
              noPostsHeading={allPostsNull}
              posts={posts}
              elementsPerPage={4}
            />
          </Suspense>
        </PostsListContainer>
        <CategoriesSelect
          locale={locale}
          headingString={categoriesHeading}
          categoriesLocale={categories}
        />
        <JoinUsBlock locale={locale} dictionary={joinUs} />
      </PageSection>
    </main>
  );
}
