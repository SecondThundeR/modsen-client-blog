import { type PropsWithChildren } from "react";

type GeneralWrapperModes =
  | "header"
  | "subheader"
  | "section-wrapper"
  | "contact-form";

export interface GeneralWrapperProps extends PropsWithChildren {
  mode: GeneralWrapperModes;
}
