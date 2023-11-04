import { Inter, Sen } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--inter-font",
  display: "swap",
});

export const sen = Sen({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--sen-font",
  display: "swap",
});
