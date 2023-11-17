import { ArticleComposer } from "@/components";
import { privacyPolicyArticlesData } from "@/constants/privacyPolicy";
import { getDictionary } from "@/helpers/getDictionary";

export async function generateMetadata({ params }: PageLocaleParams) {
  const locale = params.locale;
  const {
    metadata: { privacyPolicy },
  } = await getDictionary(locale);

  return {
    title: privacyPolicy.title,
    description: privacyPolicy.description,
  };
}

export default function PrivacyPolicy() {
  return <ArticleComposer articleData={privacyPolicyArticlesData} />;
}
