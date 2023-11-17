import { type Locale } from "@/types/locale";

declare global {
  declare type PageLocaleParams = { params: { locale: Locale } };
  declare type ErrorPageProps = {
    error: Error & { digest?: string };
    reset: () => void;
  };
}

export {};
