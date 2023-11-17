import { type BodyProps } from "@secondthunder/modsen-client-blog-ui";

import { type ArticleContentBase } from "./contentBase";

export interface ArticleContentBody
  extends ArticleContentBase,
    Omit<BodyProps, "children"> {
  type: "body";
}
