import { type PropsWithChildren } from "react";

import { type FontVariants } from "@/types/typography";

type BodyLevels = 1 | 2;
type BodyColors = "inherit" | "mediumGray" | "darkGray";

export interface BodyProps extends PropsWithChildren {
  level?: BodyLevels;
  font?: FontVariants;
  color?: BodyColors;
  isSecondary?: boolean;
}
