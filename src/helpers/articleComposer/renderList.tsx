import List from "@/components/ui/List";
import { type ArticleContentList } from "@/types/article/contentList";

export function renderList(item: Omit<ArticleContentList, "type">) {
  const { id, ...props } = item;

  return <List key={id} {...props} />;
}
