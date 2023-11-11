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
