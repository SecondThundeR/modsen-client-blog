import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  text: string;
}
