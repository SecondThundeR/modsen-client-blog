import { Body, Header, Heading } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

export default async function PrivacyPolicy({
  params: { locale },
}: PageLocaleParams) {
  const dictionary = await getDictionary(locale);
  const privacyPolicyDictionary = dictionary.privacyPolicy;

  return (
    <main>
      <Header>
        <Heading level={1}>{privacyPolicyDictionary.heading}</Heading>
        <Body level={1}>{privacyPolicyDictionary.body}</Body>
      </Header>
    </main>
  );
}
