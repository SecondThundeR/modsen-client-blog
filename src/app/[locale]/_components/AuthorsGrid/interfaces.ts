import { type Locale } from "@/locale/i18n-config";

export interface AuthorsGridProps {
  locale: Locale;
  headingString: string;
  positions: Record<string, string>;
  extended?: boolean;
}
