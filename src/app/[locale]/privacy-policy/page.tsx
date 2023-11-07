import { ArticleComposer } from "@/components";
import { privacyPolicyArticlesData } from "@/constants/privacyPolicy";

export default function PrivacyPolicy() {
  return <ArticleComposer articleData={privacyPolicyArticlesData} />;
}
