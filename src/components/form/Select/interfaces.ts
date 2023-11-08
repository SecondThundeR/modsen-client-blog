import { type SelectHTMLAttributes } from "react";

type SelectOptions = {
  id: string;
  value: string;
  name: string;
  isDisabled?: boolean;
};

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions[];
  fullPadding?: boolean;
  errorMessage?: string;
}
