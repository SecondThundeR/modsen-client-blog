import { redirect } from "next/navigation";

import { PageSection } from "@/components/ui";
import { authors } from "@/constants/data/authors";
import { routes } from "@/constants/routes";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { getDictionary } from "@/locale/get-dictionary";

import { AuthorHeader, Posts, PostsHeading } from "./_components";

export function generateStaticParams() {
  return authors.map((author) => ({
    id: author.id,
  }));
}

type AuthorPageParams = PageLocaleParams & { params: { id: string } };

export default async function Author({
  params: { id, locale },
}: AuthorPageParams) {
  const authorData = findAuthorByID(id);
  if (!authorData) {
    redirect(`/${locale}${routes.home}`);
  }

  const dictionary = await getDictionary(locale);
  const {
    categories,
    authorPage: { header, postsHeading, noPostsHeading },
  } = dictionary;

  return (
    <main>
      <AuthorHeader authorData={authorData} dictionary={header} />
      <PageSection fullWidth gap="small" sidePaddings="large" align="start">
        <PostsHeading headingString={postsHeading} />
        <Posts
          locale={locale}
          authorId={authorData.id}
          categoriesDictionary={categories}
          noPostsHeading={noPostsHeading}
        />
      </PageSection>
    </main>
  );
}
