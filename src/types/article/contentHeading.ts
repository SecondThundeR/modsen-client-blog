import { type HeadingProps } from "@/components/ui/Heading/interfaces";

import { type ArticleContentBase } from "./contentBase";

export interface ArticleContentHeading
  extends ArticleContentBase,
    Omit<HeadingProps, "children"> {
  type: "heading";
}
