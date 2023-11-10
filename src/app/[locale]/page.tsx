import dynamic from "next/dynamic";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

const LazyCategoriesGrid = dynamic(
  () => import("./_components/CategoriesGrid/CategoriesGrid"),
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
const LazyJoinUsBlock = dynamic(
  () => import("./_components/JoinUsBlock/JoinUsBlock"),
  {
    ssr: false,
  },
);

export default async function Home({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  const { categoryGrid, authorsGrid, featuredIn, joinUs } = dictionary;

  return (
    <main>
      <PageSection fullWidth hasGaps>
        <LazyCategoriesGrid locale={locale} dictionary={categoryGrid} />
        <LazyAuthorsGrid locale={locale} dictionary={authorsGrid} />
        <LazyFeaturedInBlock dictionary={featuredIn} />
        <LazyJoinUsBlock locale={locale} dictionary={joinUs} />
      </PageSection>
    </main>
  );
}
