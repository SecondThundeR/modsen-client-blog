import { Body, Heading } from "@/components/ui";
import {
  type ArticleContentBody,
  type ArticleContentHeading,
} from "@/types/article";

export function renderHeading(item: ArticleContentHeading) {
  const { type, data, level } = item;
  const headingKey = `${type}-${level}-${data.slice(0, 20)}`;

  return (
    <Heading key={headingKey} level={level}>
      {data}
    </Heading>
  );
}

export function renderBody(item: ArticleContentBody) {
  const { type, data, isSecondary } = item;
  const bodyKey = `${type}-${isSecondary}-${data.slice(0, 20)}`;

  return (
    <Body key={bodyKey} isSecondary={isSecondary}>
      {data}
    </Body>
  );
}
