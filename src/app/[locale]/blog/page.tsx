import { Suspense } from "react";

import { Header, Heading, PageSection } from "@/components/ui";
import { posts } from "@/constants/data/posts";
import { getDictionary } from "@/locale/get-dictionary";

import { JoinUsBlock } from "../_components";
import {
  CategoriesSelect,
  PostsList,
  PostsListContainer,
  PostsListHeader,
} from "./_components";

export default async function Blog({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);
  const {
    joinUs,
    categoryGrid: { categories },
    blogHome: { categoriesHeading, allPostsHeading, allPostsNull },
  } = dictionary;

  return (
    <main>
      <Header>
        <Heading>Blog page</Heading>
      </Header>
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
