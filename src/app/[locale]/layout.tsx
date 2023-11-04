import "@/styles/globals.scss";

import { inter, sen } from "@/lib/fonts";

export const metadata = {
  title: "Modsen Client Blog",
  description: "Blog app example",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ru" }];
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`${sen.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
