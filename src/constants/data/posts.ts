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
  {
    id: "lorem-ipsum",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    createdAt: new Date(2022, 4, 23),
    categoryId: "business",
    authorId: "floyd-miles",
  },
  {
    id: "figma-design",
    name: "8 Figma design systems that you can download for free today.",
    createdAt: new Date(2021, 3, 23),
    categoryId: "technology",
    authorId: "jenny-wilson",
  },
] satisfies Post[];
