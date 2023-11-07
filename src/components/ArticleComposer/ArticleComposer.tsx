import { Article, ArticleWrapper } from "@/components/ui";
import { renderBody, renderHeading } from "@/lib/articleComposer/helpers";

import { type ArticleComposerProps } from "./interfaces";

export default function ArticleComposer({ articleData }: ArticleComposerProps) {
  return (
    <ArticleWrapper>
      {articleData.map(({ id, gap, content }) => (
        <Article key={id} gapVariant={gap}>
          {content.map((item) => {
            if (item.type === "heading") return renderHeading(item);
            if (item.type === "body") return renderBody(item);
          })}
        </Article>
      ))}
    </ArticleWrapper>
  );
}
