export default function Category({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <h1>Category ID: {id}</h1>
    </main>
  );
}
