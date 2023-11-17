import { type HeadingProps } from "@secondthunder/modsen-client-blog-ui";

import { type ArticleContentBase } from "./contentBase";

export interface ArticleContentHeading
  extends ArticleContentBase,
    Omit<HeadingProps, "children"> {
  type: "heading";
}
