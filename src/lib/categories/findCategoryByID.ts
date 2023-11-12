import { categories } from "@/constants/data/categories";

export function findCategoryByID(categoryId: string) {
  return categories.find((category) => category.id === categoryId);
}
