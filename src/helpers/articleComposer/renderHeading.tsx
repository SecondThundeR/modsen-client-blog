import { Heading } from "@secondthunder/modsen-client-blog-ui";

import { type ArticleContentHeading } from "@/types/article/contentHeading";

export function renderHeading(item: Omit<ArticleContentHeading, "type">) {
  const { id, data, ...props } = item;

  return (
    <Heading key={id} {...props}>
      {data}
    </Heading>
  );
}
