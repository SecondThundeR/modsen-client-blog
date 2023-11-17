import { PageSection } from "@secondthunder/modsen-client-blog-ui";
import { type ResolvingMetadata } from "next";
import { redirect } from "next/navigation";

import { authors } from "@/constants/data/authors";
import { routes } from "@/constants/routes";
import { getDictionary } from "@/helpers/getDictionary";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";

import { AuthorHeader, Posts, PostsHeading } from "./_components";

type AuthorPageParams = PageLocaleParams & { params: { id: string } };

export async function generateMetadata(
  { params }: AuthorPageParams,
  parent: ResolvingMetadata,
) {
  const locale = params.locale;
  const id = params.id;

  const authorData = findAuthorByID(id);
  if (!authorData) {
    return {
      title: (await parent).title,
      description: (await parent).description,
    };
  }

  const {
    metadata: {
      author: { description },
    },
  } = await getDictionary(locale);

  return {
    title: authorData.name,
    description: `${description} "${authorData.name}"`,
  };
}

export function generateStaticParams() {
  return authors.map((author) => ({
    id: author.id,
  }));
}

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
