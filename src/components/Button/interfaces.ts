import type { ButtonHTMLAttributes } from "react";

type ButtonVariants = "regular" | "primary";

export interface ButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
  variant?: ButtonVariants;
}
