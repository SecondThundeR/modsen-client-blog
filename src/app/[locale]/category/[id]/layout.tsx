import { type Locale } from "i18n-config";

import { PageSection } from "@/components/ui";
import { getDictionary } from "@/helpers/getDictionary";

import { LayoutHeader } from "./_components/layout";

interface LayoutParams {
  children: React.ReactNode;
  params: { id: string; locale: Locale };
}

export default async function CategoryLayout({
  children,
  params: { id, locale },
}: LayoutParams) {
  const {
    categories,
    categoriesPage: { capPrefix },
  } = await getDictionary(locale);

  return (
    <main>
      <LayoutHeader
        categoryId={id}
        capPrefix={capPrefix}
        categories={categories}
      />
      <PageSection fullWidth>{children}</PageSection>
    </main>
  );
}
