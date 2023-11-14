import { type ArticleData } from "@/types/article";

import { type ArticleWrapperProps } from "../ui/ArticleWrapper/interfaces";

export interface ArticleComposerProps
  extends Omit<ArticleWrapperProps, "children"> {
  articleData: ArticleData[];
}
