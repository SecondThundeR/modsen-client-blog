export type ArticleContentHeading = {
  type: "heading";
  data: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};
export type ArticleContentBody = {
  type: "body";
  data: string;
  isSecondary?: boolean;
};

export type ArticleContent = ArticleContentHeading | ArticleContentBody;

export type ArticleData = {
  id: string;
  gap?: "small" | "regular" | "large";
  content: ArticleContent[];
};
