import { type PropsWithChildren } from "react";

import { type FontVariants } from "@/types/typography";

type BodyLevels = 1 | 2;

export interface BodyProps extends PropsWithChildren {
  level?: BodyLevels;
  font?: FontVariants;
}
