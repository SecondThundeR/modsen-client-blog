import { type PropsWithChildren } from "react";

import { type FontVariants } from "@/types/typography";

export interface LabelProps extends PropsWithChildren {
  font?: FontVariants;
}
