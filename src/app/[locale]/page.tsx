import { Button } from "@/components";
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
      <h1>{dictionary.hello}</h1>
      <Button text={dictionary.button} />
    </main>
  );
}
