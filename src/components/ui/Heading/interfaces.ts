import { type PropsWithChildren } from "react";

import { type FontVariants, type TextColors } from "@/types/typography";

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends PropsWithChildren {
  level?: HeadingLevels;
  font?: FontVariants;
  color?: TextColors;
}
