import { type ArticleData } from "@/types/article";

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
    id: "first-project",
    name: "List of popular ideas for first project",
    createdAt: new Date(2022, 4, 23),
    categoryId: "startup",
    authorId: "eleanor-pena",
  },
  {
    id: "tools",
    name: "Which tools you won't regret using now",
    createdAt: new Date(2022, 4, 23),
    categoryId: "startup",
    authorId: "robert-fox",
  },
  {
    id: "next-js",
    name: '"Theo Browne: Next.js is a backend framework". Let\'s talk about it!',
    createdAt: new Date(2022, 4, 23),
    categoryId: "startup",
    authorId: "jacob-jones",
  },
  {
    id: "lorem-ipsum",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    createdAt: new Date(2022, 4, 23),
    categoryId: "business",
    authorId: "floyd-miles",
  },
  {
    id: "hello-world",
    name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdAt: new Date(2022, 4, 23),
    categoryId: "business",
    authorId: "guy-hawkins",
  },
  {
    id: "figma-design",
    name: "8 Figma design systems that you can download for free today.",
    createdAt: new Date(2021, 3, 23),
    categoryId: "technology",
    authorId: "jenny-wilson",
  },
] satisfies Post[];

export const postArticlePlaceholder: ArticleData[] = [
  {
    id: "first-block",
    gap: "small",
    content: [
      {
        id: "heading-first-block",
        type: "heading",
        level: 2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        id: "body-first-block",
        type: "body",
        data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.`,
        color: "mediumGray",
      },
    ],
  },
  {
    id: "second-block",
    gap: "small",
    content: [
      {
        id: "heading-second-block",
        type: "heading",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        level: 2,
      },
      {
        id: "first-body-second-block",
        type: "body",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        color: "mediumGray",
      },
      {
        id: "second-body-second-block",
        type: "body",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        color: "mediumGray",
      },
      {
        id: "list-second-block",
        type: "list",
        elements: [
          "Lorem ipsum dolor sit amet",
          "Non blandit massa enim nec scelerisque",
          "Neque egestas congue quisque egestas",
        ],
      },
      {
        id: "third-body-second-block",
        type: "body",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        color: "mediumGray",
      },
    ],
  },
  {
    id: "third-block",
    gap: "small",
    content: [
      {
        id: "heading-third-block",
        type: "heading",
        level: 2,
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
      },
      {
        id: "body-third-block",
        type: "body",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        color: "mediumGray",
      },
    ],
  },
];
