import { posts } from "@/constants/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default function BlogPost({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <h1>Blog post ID: {id}</h1>
    </main>
  );
}
