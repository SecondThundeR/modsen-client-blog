import { type ArticleProps } from "@/components/ui/Article/interfaces";

import { type ArticleContent } from "./content";

export type ArticleData = {
  id: string;
  gap?: ArticleProps["gapVariant"];
  content: ArticleContent[];
};
