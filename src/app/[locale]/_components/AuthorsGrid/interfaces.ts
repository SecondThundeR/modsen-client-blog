import { type Locale } from "@/types/locale";

export interface AuthorsGridProps {
  locale: Locale;
  headingString: string;
  positions: Record<string, string>;
  extended?: boolean;
}
