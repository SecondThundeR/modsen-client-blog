import { type Author, authors } from "@/constants/data/authors";

type AuthorWithoutSocials = Omit<Author, "socials">;

export function findAuthorByID(
  authorId: string,
  includeSocials?: true,
): Author | undefined;
export function findAuthorByID(
  authorId: string,
  includeSocials?: false,
): AuthorWithoutSocials | undefined;
export function findAuthorByID(authorId: string, includeSocials = true) {
  const author = authors.find((author) => author.id === authorId);

  if (!author) return undefined;
  if (includeSocials) return author;

  const { socials, ...rest } = author;
  console.log(
    `[LOG] Omitted socials for "${authorId}": ${JSON.stringify(socials)}`,
  );

  return rest;
}
