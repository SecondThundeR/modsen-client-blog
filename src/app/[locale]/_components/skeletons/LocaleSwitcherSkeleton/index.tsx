import { Body } from "@/components/ui";
import { i18n } from "@/locale/i18n-config";

export default function LocaleSwitcherSkeleton() {
  return (
    <>
      {i18n.locales.map((locale) => (
        <Body key={locale}>{locale.toUpperCase()}</Body>
      ))}
    </>
  );
}
