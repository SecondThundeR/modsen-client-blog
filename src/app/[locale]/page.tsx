import { PageSection } from "@/components/ui";

import {
  AuthorsGrid,
  CategoriesGrid,
  FeaturedInBlock,
  JoinUsBlock,
} from "./_components";

export default function Home({ params: { locale } }: PageLocaleParams) {
  return (
    <main>
      <PageSection fullWidth hasGaps>
        <CategoriesGrid locale={locale} />
        <AuthorsGrid locale={locale} />
        <FeaturedInBlock locale={locale} />
        <JoinUsBlock locale={locale} />
      </PageSection>
    </main>
  );
}
