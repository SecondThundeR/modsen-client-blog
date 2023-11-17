import { type Locale } from "i18n-config";

export interface AuthorsGridProps {
  locale: Locale;
  headingString: string;
  positions: Record<string, string>;
  extended?: boolean;
}
