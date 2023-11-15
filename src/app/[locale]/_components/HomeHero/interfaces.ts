export interface HomeHeroProps {
  locale: PageLocaleParams["params"]["locale"];
  heroPostId: string;
  postedOnString: string;
  authorPrefixString: string;
  readMoreString: string;
  categories: Record<string, string>;
}
