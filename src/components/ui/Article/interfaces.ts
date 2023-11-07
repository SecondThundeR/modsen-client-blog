import { type PropsWithChildren } from "react";

export interface ArticleProps extends PropsWithChildren {
  gapVariant?: "small" | "regular" | "large";
}
