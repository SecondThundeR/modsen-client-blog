import { type BodyProps } from "@/components/ui/Body/interfaces";
import { type HeadingProps } from "@/components/ui/Heading/interfaces";

export type ArticleContentBase = {
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

export type ArticleContent = ArticleContentHeading | ArticleContentBody;

export type ArticleData = {
  id: string;
  gap?: "small" | "regular" | "large";
  content: ArticleContent[];
};
