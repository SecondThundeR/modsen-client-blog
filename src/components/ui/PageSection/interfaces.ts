import { type PropsWithChildren } from "react";

export interface PageSectionProps extends PropsWithChildren {
  fullWidth?: boolean;
  align?: "start" | "center" | "end";
  sidePaddings?: "regular" | "large";
  gap?: "small" | "regular";
}
