import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

import { categories } from "@/constants/data/categories";
import { routes } from "@/constants/routes";
import { getPostsByCategoryID } from "@/lib/posts/getPostsByCategoryID";
import { getDictionary } from "@/locale/get-dictionary";

import { CategoriesSelector } from "./_components";
import {
  ContentContainer,
  PostsWrapper,
  SidebarWrapper,
} from "./_components/layout";

const LazyPostsList = dynamic(
  () => import("./_components/PostsList/PostsList"),
);

const LazyTagsSearch = dynamic(
  () => import("./_components/TagsSearch/TagsSearch"),
);

const LazyTagsSelector = dynamic(
  () => import("./_components/TagsSelector/TagsSelector"),
);

export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id,
  }));
}

type CategoryPageParams = PageLocaleParams & {
  params: { id: string };
};

export default async function Category({
  params: { id, locale },
}: CategoryPageParams) {
  const {
    categories,
    tags,
    categoriesPage: {
      categorySelectorHeading,
      noPosts,
      allTagsHeading,
      noTags,
      search,
    },
  } = await getDictionary(locale);
  const posts = getPostsByCategoryID(id);
  if (posts === null) {
    redirect(`/${locale}${routes.home}`);
  }

  return (
    <ContentContainer>
      <PostsWrapper>
        <LazyPostsList
          locale={locale}
          posts={posts}
          noPostsHeading={noPosts}
          categoriesLocale={categories}
        />
      </PostsWrapper>
      <SidebarWrapper>
        <LazyTagsSearch dictionary={search} />
        <CategoriesSelector
          locale={locale}
          currentCategoryId={id}
          headingString={categorySelectorHeading}
          categoriesLocale={categories}
        />
        <LazyTagsSelector
          headingString={allTagsHeading}
          noTagsString={noTags}
          tagsLocale={tags}
        />
      </SidebarWrapper>
    </ContentContainer>
  );
}
