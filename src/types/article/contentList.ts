import { type ListProps } from "@secondthunder/modsen-client-blog-ui";

import { type ArticleContentBase } from "./contentBase";

export interface ArticleContentList
  extends Omit<ArticleContentBase, "data">,
    ListProps {
  type: "list";
}
