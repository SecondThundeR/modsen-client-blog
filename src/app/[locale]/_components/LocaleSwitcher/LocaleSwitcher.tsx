"use client";

import Link from "next/link";
import { memo } from "react";

import { useLocaleSwitcher } from "@/app/[locale]/_hooks";
import { i18n } from "@/locale/i18n-config";

const LocaleSwitcher = memo(function LocaleSwitcher() {
  const redirectedPathName = useLocaleSwitcher();

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default LocaleSwitcher;
