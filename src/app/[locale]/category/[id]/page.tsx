import { Heading } from "@/components/ui";
import { categories } from "@/constants/data/categories";
import { getPostsByCategoryID } from "@/lib/posts/getPostsByCategoryID";
import { getDictionary } from "@/locale/get-dictionary";

import { PostsListCard } from "../../_components";
import { CategoriesSelector } from "./_components";
import {
  ContentContainer,
  PostsWrapper,
  SidebarWrapper,
} from "./_components/layout";

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
    categoriesPage: { categorySelectorHeading, noPosts },
  } = await getDictionary(locale);
  const posts = getPostsByCategoryID(id);

  return (
    <ContentContainer>
      <PostsWrapper>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostsListCard
              key={post.id}
              locale={locale}
              categoriesLocale={categories}
              post={post}
            />
          ))
        ) : (
          <Heading level={2} color="mediumGray">
            {noPosts}
          </Heading>
        )}
      </PostsWrapper>
      <SidebarWrapper>
        <CategoriesSelector
          locale={locale}
          currentCategoryId={id}
          headingString={categorySelectorHeading}
          categoriesLocale={categories}
        />
      </SidebarWrapper>
    </ContentContainer>
  );
}
