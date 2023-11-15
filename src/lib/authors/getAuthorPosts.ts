import { posts } from "@/constants/data/posts";

export function getAuthorPosts(authorId: string) {
  return posts.filter((post) => post.authorId === authorId);
}
