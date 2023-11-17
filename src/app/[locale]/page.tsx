import { Suspense } from "react";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/helpers/getDictionary";

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
    authorsGrid: { heading },
    postsBlock,
    aboutUsBlock,
    categoryGrid,
    whyWeStartedBlock,
    positions,
    featuredIn,
    joinUs,
    testimonials,
    categories,
    postedOn,
    authorPrefix,
    readMore,
  } = dictionary;

  return (
    <main>
      <Suspense fallback={<MainPageSkeleton />}>
        <HomeHero
          locale={locale}
          heroPostId={CURRENT_HERO_POST_ID}
          postedOnString={postedOn}
          authorPrefixString={authorPrefix}
          readMoreString={readMore}
          categories={categories}
        />
        <PageSection fullWidth>
          <PostsBlock
            locale={locale}
            dictionary={postsBlock}
            authorPrefixString={authorPrefix}
            readMoreString={readMore}
            featuredPostId={FEATURED_POST_ID}
            allPostsId={ALL_POST_ID}
          />
          <AboutUsBlock locale={locale} dictionary={aboutUsBlock} />
          <CategoriesGrid
            locale={locale}
            dictionary={categoryGrid}
            categoriesLocale={categories}
          />
          <WhyWeStartedBlock locale={locale} dictionary={whyWeStartedBlock} />
          <LazyAuthorsGrid
            locale={locale}
            headingString={heading}
            positions={positions}
          />
          <FeaturedInBlock dictionary={featuredIn} />
          <TestimonialsBlock dictionary={testimonials} />
          <LazyJoinUsBlock locale={locale} dictionary={joinUs} />
        </PageSection>
      </Suspense>
    </main>
  );
}
