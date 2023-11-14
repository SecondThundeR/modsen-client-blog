import { Suspense } from "react";

import { PageSection } from "@/components/ui";
import { posts } from "@/constants/data/posts";
import { getDictionary } from "@/locale/get-dictionary";

import { JoinUsBlock } from "../_components";
import {
  CategoriesSelect,
  FeaturedPostHeader,
  PostsList,
  PostsListContainer,
  PostsListHeader,
} from "./_components";

const FEATURED_POST_ID = "step-by-step";

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
          <Suspense fallback={null}>
            <PostsList
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
