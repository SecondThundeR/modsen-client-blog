import { type BodyProps } from "@/components/ui/Body/interfaces";

import { type ArticleContentBase } from "./contentBase";

export interface ArticleContentBody
  extends ArticleContentBase,
    Omit<BodyProps, "children"> {
  type: "body";
}
