import { Suspense } from "react";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

import {
  AboutUsBlock,
  AuthorsGrid,
  CategoriesGrid,
  FeaturedInBlock,
  HomeHero,
  JoinUsBlock,
  TestimonialsBlock,
  WhyWeStartedBlock,
} from "./_components";
import { MainPageSkeleton } from "./_components/skeletons";

const CURRENT_HERO_POST_ID = "step-by-step";

export default async function Home({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  const {
    heroPostBlock,
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
      <PageSection fullWidth hasGaps>
        <Suspense fallback={<MainPageSkeleton />}>
          <AboutUsBlock locale={locale} dictionary={aboutUsBlock} />
          <CategoriesGrid locale={locale} dictionary={categoryGrid} />
          <WhyWeStartedBlock locale={locale} dictionary={whyWeStartedBlock} />
          <AuthorsGrid locale={locale} dictionary={authorsGrid} />
          <FeaturedInBlock dictionary={featuredIn} />
          <TestimonialsBlock dictionary={testimonials} />
          <JoinUsBlock locale={locale} dictionary={joinUs} />
        </Suspense>
      </PageSection>
    </main>
  );
}
