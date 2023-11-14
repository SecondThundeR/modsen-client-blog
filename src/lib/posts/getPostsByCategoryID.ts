import { posts } from "@/constants/data/posts";

export function getPostsByCategoryID(categoryId: string) {
  return posts.filter((post) => post.categoryId === categoryId);
}
