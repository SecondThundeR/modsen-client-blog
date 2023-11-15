import { type PropsWithChildren } from "react";

export interface HeaderProps extends PropsWithChildren {
  gap?: "regular" | "large" | "extralarge";
}
