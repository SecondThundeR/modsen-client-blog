import "@/styles/globals.scss";

import { LayoutFooter, LayoutNavbar } from "@/components";
import { inter, sen } from "@/lib/fonts";

export const metadata = {
  title: "Modsen Client Blog",
  description: "Blog app example",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }] as const;
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
} & PageLocaleParams) {
  return (
    <html lang={locale}>
      <body className={`${sen.variable} ${inter.variable}`}>
        <LayoutNavbar locale={locale} />
        {children}
        <LayoutFooter locale={locale} />
      </body>
    </html>
  );
}
