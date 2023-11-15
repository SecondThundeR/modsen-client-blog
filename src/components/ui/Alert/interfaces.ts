import { type PropsWithChildren } from "react";

type AlertVariants = "success" | "error";

export interface AlertProps extends PropsWithChildren {
  variant: AlertVariants;
}
