import { type PropsWithChildren } from "react";

import { type FontVariants } from "@/types/typography";

export interface DisplayProps extends PropsWithChildren {
  font?: FontVariants;
}
