import dynamic from "next/dynamic";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

const LazyAboutUsBlock = dynamic(
  () => import("./_components/AboutUsBlock/AboutUsBlock"),
  {
    ssr: false,
  },
);
const LazyCategoriesGrid = dynamic(
  () => import("./_components/CategoriesGrid/CategoriesGrid"),
  {
    ssr: false,
  },
);
const LazyWhyWeStartedBlock = dynamic(
  () => import("./_components/WhyWeStartedBlock/WhyWeStartedBlock"),
  {
    ssr: false,
  },
);
const LazyAuthorsGrid = dynamic(
  () => import("./_components/AuthorsGrid/AuthorsGrid"),
  {
    ssr: false,
  },
);
const LazyFeaturedInBlock = dynamic(
  () => import("./_components/FeaturedInBlock/FeaturedInBlock"),
  {
    ssr: false,
  },
);
const LazyTestimonialsBlock = dynamic(
  () => import("./_components/TestimonialsBlock/TestimonialsBlock"),
  {
    ssr: false,
  },
);
const LazyJoinUsBlock = dynamic(
  () => import("./_components/JoinUsBlock/JoinUsBlock"),
  {
    ssr: false,
  },
);

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
        <LazyAboutUsBlock locale={locale} dictionary={aboutUsBlock} />
        <LazyCategoriesGrid locale={locale} dictionary={categoryGrid} />
        <LazyWhyWeStartedBlock locale={locale} dictionary={whyWeStartedBlock} />
        <LazyAuthorsGrid locale={locale} dictionary={authorsGrid} />
        <LazyFeaturedInBlock dictionary={featuredIn} />
        <LazyTestimonialsBlock dictionary={testimonials} />
        <LazyJoinUsBlock locale={locale} dictionary={joinUs} />
      </PageSection>
    </main>
  );
}
