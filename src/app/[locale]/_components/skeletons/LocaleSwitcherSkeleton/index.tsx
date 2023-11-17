import { i18n } from "i18n-config";

import { Body } from "@/components/ui";

export default function LocaleSwitcherSkeleton() {
  return (
    <>
      {i18n.locales.map((locale) => (
        <Body key={locale}>{locale.toUpperCase()}</Body>
      ))}
    </>
  );
}
