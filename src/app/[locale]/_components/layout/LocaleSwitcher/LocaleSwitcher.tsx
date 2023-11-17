"use client";

import clsx from "clsx";
import Link from "next/link";
import { memo } from "react";

import { useLocaleSwitcher } from "@/app/[locale]/_hooks";
import { Body } from "@/components/ui";
import { i18n } from "@/locale/i18n-config";

import { type LocaleSwitcherProps } from "./interfaces";
import styles from "./LocaleSwitcher.module.scss";

function LocaleSwitcher({ currentLocale }: LocaleSwitcherProps) {
  const redirectedPathName = useLocaleSwitcher();

  return (
    <>
      {i18n.locales.map((locale) => {
        const isCurrentLocale = locale === currentLocale;
        const linkHref = redirectedPathName(locale);

        return (
          <Link
            key={locale}
            className={clsx({
              [styles.activeLink!]: isCurrentLocale,
            })}
            href={linkHref}
          >
            <Body>{locale.toUpperCase()}</Body>
          </Link>
        );
      })}
    </>
  );
}

export default memo(LocaleSwitcher);
