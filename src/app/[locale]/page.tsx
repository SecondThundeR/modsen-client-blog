import { Suspense } from "react";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

import {
  AboutUsBlock,
  CategoriesGrid,
  FeaturedInBlock,
  HomeHero,
  LazyAuthorsGrid,
  LazyJoinUsBlock,
  PostsBlock,
  TestimonialsBlock,
  WhyWeStartedBlock,
} from "./_components";
import { MainPageSkeleton } from "./_components/skeletons";

const CURRENT_HERO_POST_ID = "step-by-step";
const FEATURED_POST_ID = "lorem-ipsum";
const ALL_POST_ID = "figma-design";

export default async function Home({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  const {
    heroPostBlock,
    postsBlock,
    aboutUsBlock,
    categoryGrid,
    whyWeStartedBlock,
    authorsGrid,
    featuredIn,
    joinUs,
    testimonials,
  } = dictionary;

  return (
    <main>
      <HomeHero
        locale={locale}
        heroPostId={CURRENT_HERO_POST_ID}
        dictionary={heroPostBlock}
        categories={categoryGrid.categories}
      />
      <PageSection fullWidth>
        <Suspense fallback={<MainPageSkeleton />}>
          <PostsBlock
            locale={locale}
            dictionary={postsBlock}
            featuredPostId={FEATURED_POST_ID}
            allPostsId={ALL_POST_ID}
          />
          <AboutUsBlock locale={locale} dictionary={aboutUsBlock} />
          <CategoriesGrid locale={locale} dictionary={categoryGrid} />
          <WhyWeStartedBlock locale={locale} dictionary={whyWeStartedBlock} />
          <LazyAuthorsGrid locale={locale} dictionary={authorsGrid} />
          <FeaturedInBlock dictionary={featuredIn} />
          <TestimonialsBlock dictionary={testimonials} />
          <LazyJoinUsBlock locale={locale} dictionary={joinUs} />
        </Suspense>
      </PageSection>
    </main>
  );
}
