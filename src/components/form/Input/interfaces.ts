import { type InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullPadding?: boolean;
  errorMessage?: string;
}
