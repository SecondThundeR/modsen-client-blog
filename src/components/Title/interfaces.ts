import { type PropsWithChildren } from "react";

type TitleHeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends PropsWithChildren {
  headingLevel: TitleHeadingLevels;
}
