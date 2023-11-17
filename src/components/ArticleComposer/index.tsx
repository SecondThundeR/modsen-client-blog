import { Article, ArticleWrapper } from "@/components/ui";
import { renderBody } from "@/helpers/articleComposer/renderBody";
import { renderHeading } from "@/helpers/articleComposer/renderHeading";
import { renderList } from "@/helpers/articleComposer/renderList";

import { type ArticleComposerProps } from "./interfaces";

export default function ArticleComposer({
  articleData,
  isNarrow,
}: ArticleComposerProps) {
  return (
    <ArticleWrapper isNarrow={isNarrow}>
      {articleData.map(({ id, gap, content }) => (
        <Article key={id} gapVariant={gap}>
          {content.map((item) => {
            if (item.type === "heading") return renderHeading(item);
            if (item.type === "body") return renderBody(item);
            if (item.type === "list") return renderList(item);
          })}
        </Article>
      ))}
    </ArticleWrapper>
  );
}
