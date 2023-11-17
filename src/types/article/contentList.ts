import { type ListProps } from "@/components/ui/List/interfaces";

import { type ArticleContentBase } from "./contentBase";

export interface ArticleContentList
  extends Omit<ArticleContentBase, "data">,
    ListProps {
  type: "list";
}
