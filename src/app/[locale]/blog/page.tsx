import { PageSection } from "@secondthunder/modsen-client-blog-ui";
import dynamic from "next/dynamic";

import { posts } from "@/constants/data/posts";
import { getDictionary } from "@/helpers/getDictionary";

import { JoinUsBlock } from "../_components";
import {
  CategoriesSelect,
  FeaturedPostHeader,
  PostsListContainer,
  PostsListHeader,
} from "./_components";
import { PostsListSkeleton } from "./_components/skeletons";

const FEATURED_POST_ID = "step-by-step";

const LazyPostsList = dynamic(() => import("./_components/PostsList"), {
  loading: () => <PostsListSkeleton />,
});

export async function generateMetadata({ params }: PageLocaleParams) {
  const locale = params.locale;
  const {
    metadata: { blog },
  } = await getDictionary(locale);

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function Blog({ params: { locale } }: PageLocaleParams) {
  const dictionary = await getDictionary(locale);
  const {
    joinUs,
    categories,
    blogHome: { categoriesHeading, allPostsHeading, allPostsNull },
    authorPrefix,
    readMore,
    postsBlock: { featured },
  } = dictionary;

  return (
    <main>
      <FeaturedPostHeader
        locale={locale}
        postId={FEATURED_POST_ID}
        capString={featured}
        authorBodyString={authorPrefix}
        buttonString={readMore}
      />
      <PageSection fullWidth>
        <PostsListContainer>
          <PostsListHeader headingString={allPostsHeading} />
          <LazyPostsList
            locale={locale}
            categoriesLocale={categories}
            noPostsHeading={allPostsNull}
            posts={posts}
            elementsPerPage={4}
          />
        </PostsListContainer>
        <CategoriesSelect
          locale={locale}
          headingString={categoriesHeading}
          categoriesLocale={categories}
        />
        <JoinUsBlock locale={locale} dictionary={joinUs} />
      </PageSection>
    </main>
  );
}
