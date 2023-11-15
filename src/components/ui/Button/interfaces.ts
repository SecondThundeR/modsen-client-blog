import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariants = "regular" | "primary";
type ButtonSizes = "regular" | "large";

export interface ButtonProps
  extends Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "onClick" | "type" | "disabled"
    >,
    PropsWithChildren {
  unstyled?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}
