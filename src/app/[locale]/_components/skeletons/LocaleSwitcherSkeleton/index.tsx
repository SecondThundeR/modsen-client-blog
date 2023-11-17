import { Body } from "@secondthunder/modsen-client-blog-ui";
import { i18n } from "i18n-config";

export default function LocaleSwitcherSkeleton() {
  return (
    <>
      {i18n.locales.map((locale) => (
        <Body key={locale}>{locale.toUpperCase()}</Body>
      ))}
    </>
  );
}
