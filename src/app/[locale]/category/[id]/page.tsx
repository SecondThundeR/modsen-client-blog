import { categories } from "@/constants/data/categories";

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

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
