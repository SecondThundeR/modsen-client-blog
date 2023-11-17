import { Body } from "@/components/ui";
import { type ArticleContentBody } from "@/types/article/contentBody";

export function renderBody(item: Omit<ArticleContentBody, "type">) {
  const { id, data, ...props } = item;

  return (
    <Body key={id} {...props}>
      {data}
    </Body>
  );
}