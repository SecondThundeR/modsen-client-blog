import { type ResolvingMetadata } from "next";
import { redirect } from "next/navigation";
import postImagePlaceholder from "public/assets/blog/post/placeholder.jpeg";

import { ArticleComposer } from "@/components";
import { postArticlePlaceholder, posts } from "@/constants/data/posts";
import { routes } from "@/constants/routes";
import { getDictionary } from "@/helpers/getDictionary";
import { findAuthorByID } from "@/lib/authors/findAuthorByID";
import { findPostByID } from "@/lib/posts/findPostByID";

import { JoinUsBlock } from "../../_components";
import {
  BlogContainer,
  PostDetails,
  PostImage,
  SimilarPosts,
} from "./_components";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

type BlogPostParams = PageLocaleParams & {
  params: { id: string };
};

export async function generateMetadata(
  { params }: BlogPostParams,
  parent: ResolvingMetadata,
) {
  const locale = params.locale;
  const id = params.id;
  const post = findPostByID(id);
  if (!post) {
    return {
      title: (await parent).title,
      description: (await parent).description,
    };
  }
  const author = findAuthorByID(post.authorId);
  if (!author) {
    return {
      title: (await parent).title,
      description: (await parent).description,
    };
  }

  const {
    metadata: {
      blogPost: { description },
    },
  } = await getDictionary(locale);

  return {
    title: post.name,
    description: `${description} "${author.name}"`,
  };
}

export default async function BlogPost({
  params: { locale, id },
}: BlogPostParams) {
  const post = findPostByID(id);
  if (!post) {
    redirect(`/${locale}${routes.home}`);
  }

  const dictionary = await getDictionary(locale);
  const {
    joinUs,
    authorPrefix,
    postedOn,
    blogPost: { readNextHeading },
    categories,
  } = dictionary;

  return (
    <>
      <BlogContainer>
        <PostDetails
          locale={locale}
          post={post}
          postedOn={postedOn}
          categoriesLocale={categories}
        />
        <PostImage src={postImagePlaceholder} />
        <ArticleComposer articleData={postArticlePlaceholder} isNarrow />
      </BlogContainer>
      <SimilarPosts
        locale={locale}
        excludePostId={post.id}
        categoryId={post.categoryId}
        headingString={readNextHeading}
        authorPrefixString={authorPrefix}
      />
      <JoinUsBlock locale={locale} dictionary={joinUs} />
    </>
  );
}
