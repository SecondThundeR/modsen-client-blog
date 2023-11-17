import { type ArticleProps } from "@secondthunder/modsen-client-blog-ui";

import { type ArticleContent } from "./content";

export type ArticleData = {
  id: string;
  gap?: ArticleProps["gapVariant"];
  content: ArticleContent[];
};
