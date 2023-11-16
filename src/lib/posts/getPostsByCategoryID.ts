import { categories } from "@/constants/data/categories";
import { posts } from "@/constants/data/posts";

export function getPostsByCategoryID(categoryId: string) {
  if (categories.filter(({ id }) => id === categoryId).length === 0)
    return null;
  return posts.filter((post) => post.categoryId === categoryId);
}
