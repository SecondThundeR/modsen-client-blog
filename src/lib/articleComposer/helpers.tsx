import { Body, Heading } from "@/components/ui";
import List from "@/components/ui/List/List";
import {
  type ArticleContentBody,
  type ArticleContentHeading,
  type ArticleContentList,
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

export function renderList(item: Omit<ArticleContentList, "type">) {
  const { id, ...props } = item;

  return <List key={id} {...props} />;
}
