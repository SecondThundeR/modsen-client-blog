import { type PropsWithChildren } from "react";

type ArticleGapVariants = "small" | "regular" | "large";

export interface ArticleProps extends PropsWithChildren {
  gapVariant?: ArticleGapVariants;
}
