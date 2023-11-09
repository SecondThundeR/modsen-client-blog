export default function Author({ params: { id } }: { params: { id: string } }) {
  return (
    <main>
      <h1>Author ID: {id}</h1>
    </main>
  );
}
