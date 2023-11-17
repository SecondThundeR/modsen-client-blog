import "@/styles/globals.scss";
import "@secondthunder/modsen-client-blog-ui/dist/index.css";

import dynamic from "next/dynamic";

import { getDictionary } from "@/helpers/getDictionary";
import { inter, sen } from "@/lib/fonts";

import { LayoutFooter, LayoutNavbar } from "./_components/layout";

type RootLayoutProps = {
  children: React.ReactNode;
} & PageLocaleParams;

const LazyModalShell = dynamic(
  () => import("./_components/layout/ModalShell"),
  {
    ssr: false,
  },
);

export const metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }] as const;
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
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
        <LazyModalShell closeButtonText={close} />
      </body>
    </html>
  );
}
