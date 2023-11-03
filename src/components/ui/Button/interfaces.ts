import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariants = "regular" | "primary";

export interface ButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    PropsWithChildren {
  variant?: ButtonVariants;
}
