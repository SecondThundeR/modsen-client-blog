import { type PropsWithChildren } from "react";

export interface CapProps extends PropsWithChildren {
  weight?: "regular" | "semibold" | "bold" | "black";
}
