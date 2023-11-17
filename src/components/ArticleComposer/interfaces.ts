import { type ArticleWrapperProps } from "@secondthunder/modsen-client-blog-ui";

import { type ArticleData } from "@/types/article";

export interface ArticleComposerProps
  extends Omit<ArticleWrapperProps, "children"> {
  articleData: ArticleData[];
}
