import { posts } from "@/constants/data/posts";

export function findPostByID(postId: string) {
  return posts.find((post) => post.id === postId);
}
