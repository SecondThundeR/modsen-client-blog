export interface Post {
  id: string;
  name: string;
  createdAt: Date;
  categoryId: string;
  authorId: string;
}

export const posts = [
  {
    id: "step-by-step",
    name: "Step-by-step guide to choosing great font pairs",
    createdAt: new Date(2022, 4, 23),
    categoryId: "startup",
    authorId: "andrew-johnson",
  },
] satisfies Post[];
