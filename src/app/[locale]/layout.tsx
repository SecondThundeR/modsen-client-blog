import "@/styles/globals.scss";

import { Inter, Sen } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const sen = Sen({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-sen",
  display: "swap",
});

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
      <body className={`${sen.className} ${inter.className}`}>{children}</body>
    </html>
  );
}
