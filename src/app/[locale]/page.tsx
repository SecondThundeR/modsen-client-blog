import { Suspense } from "react";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

import {
  AboutUsBlock,
  AuthorsGrid,
  CategoriesGrid,
  FeaturedInBlock,
  JoinUsBlock,
  TestimonialsBlock,
  WhyWeStartedBlock,
} from "./_components";
import { MainPageSkeleton } from "./_components/skeletons";

export default async function Home({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  const {
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
