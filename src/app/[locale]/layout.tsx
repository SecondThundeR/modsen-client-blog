import "@/styles/globals.scss";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import { inter, sen } from "@/lib/fonts";
import { getDictionary } from "@/locale/get-dictionary";

import { LayoutFooter, LayoutNavbar } from "./_components/layout";

const LazyModalShell = dynamic(
  () => import("./_components/layout/ModalShell/ModalShell"),
  {
    ssr: false,
  },
);

export const metadata = {
  title: "Modsen Client Blog",
  description: "Blog app example",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }] as const;
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
} & PageLocaleParams) {
  const {
    title,
    headerVideoButton,
    links,
    subscribe,
    modal: { close },
  } = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${sen.variable} ${inter.variable}`}>
        <LayoutNavbar
          locale={locale}
          title={title}
          headerVideoButton={headerVideoButton}
          links={links}
        />
        {children}
        <LayoutFooter
          locale={locale}
          title={title}
          links={links}
          subscribe={subscribe}
        />
        <Suspense>
          <LazyModalShell closeButtonText={close} />
        </Suspense>
      </body>
    </html>
  );
}
