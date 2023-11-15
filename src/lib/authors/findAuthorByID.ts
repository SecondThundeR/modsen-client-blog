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

  const { id, name, image, positionId, companyHandle } = author;
  return {
    id,
    name,
    image,
    positionId,
    companyHandle,
  };
}
