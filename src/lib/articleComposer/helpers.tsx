import { Body, Heading } from "@/components/ui";
import {
  type ArticleContentBody,
  type ArticleContentHeading,
} from "@/types/article";

export function renderHeading(item: Omit<ArticleContentHeading, "type">) {
  const { id, data, ...props } = item;

  return (
    <Heading key={id} {...props}>
      {data}
    </Heading>
  );
}

export function renderBody(item: Omit<ArticleContentBody, "type">) {
  const { id, data, ...props } = item;

  return (
    <Body key={id} {...props}>
      {data}
    </Body>
  );
}
