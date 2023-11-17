import { type ArticleContentBody } from "./contentBody";
import { type ArticleContentHeading } from "./contentHeading";
import { type ArticleContentList } from "./contentList";

export type ArticleContent =
  | ArticleContentHeading
  | ArticleContentBody
  | ArticleContentList;
