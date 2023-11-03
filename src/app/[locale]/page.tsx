import { Button, Display, Title } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";
import { type Locale } from "@/locale/i18n-config";

import LocaleSwitcher from "./_components/LocaleSwitcher/LocaleSwitcher";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <LocaleSwitcher />
      <Display>{dictionary.hello}</Display>
      <Title headingLevel={1}>Heading 1</Title>
      <Title headingLevel={2}>Heading 2</Title>
      <Title headingLevel={3}>Heading 3</Title>
      <Title headingLevel={4}>Heading 4</Title>
      <Title headingLevel={5}>Heading 5</Title>
      <Title headingLevel={6}>Heading 6</Title>
      <Button>{dictionary.button}</Button>
    </main>
  );
}
