import { type PropsWithChildren } from "react";

type BodyLevels = 1 | 2;

export interface BodyProps extends PropsWithChildren {
  level?: BodyLevels;
  font?: FontsVariant;
}
