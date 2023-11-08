import "@/styles/globals.scss";

import { inter, sen } from "@/lib/fonts";
import { getDictionary } from "@/locale/get-dictionary";

import { LayoutFooter, LayoutNavbar, ModalShell } from "./_components";

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
    modal: { close },
  } = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className={`${sen.variable} ${inter.variable}`}>
        <LayoutNavbar locale={locale} />
        {children}
        <LayoutFooter locale={locale} />
        <ModalShell closeButtonText={close} />
      </body>
    </html>
  );
}
