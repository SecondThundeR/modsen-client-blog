import { Button, Display } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

import LocaleSwitcher from "./_components/LocaleSwitcher/LocaleSwitcher";

export default async function Home({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <LocaleSwitcher />
      <Display>{dictionary.hello}</Display>
      <Button>{dictionary.button}</Button>
    </main>
  );
}
