import { type ArticleProps } from "@/components/ui/Article/interfaces";
import { type BodyProps } from "@/components/ui/Body/interfaces";
import { type HeadingProps } from "@/components/ui/Heading/interfaces";
import { type ListProps } from "@/components/ui/List/interfaces";

export type ArticleContentBase = {
  id: string;
  data: string;
};

export interface ArticleContentHeading
  extends ArticleContentBase,
    Omit<HeadingProps, "children"> {
  type: "heading";
}

export interface ArticleContentBody
  extends ArticleContentBase,
    Omit<BodyProps, "children"> {
  type: "body";
}

export interface ArticleContentList
  extends Omit<ArticleContentBase, "data">,
    ListProps {
  type: "list";
}

export type ArticleContent =
  | ArticleContentHeading
  | ArticleContentBody
  | ArticleContentList;

export type ArticleData = {
  id: string;
  gap?: ArticleProps["gapVariant"];
  content: ArticleContent[];
};
