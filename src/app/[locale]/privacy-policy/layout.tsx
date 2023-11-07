import { Body, Header, Heading, PageSection } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

export default async function PrivacyPolicyLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
} & PageLocaleParams) {
  const dictionary = await getDictionary(locale);
  const privacyPolicyDictionary = dictionary.privacyPolicy;

  return (
    <main>
      <Header>
        <Heading level={1}>{privacyPolicyDictionary.heading}</Heading>
        <Body level={1}>{privacyPolicyDictionary.body}</Body>
      </Header>
      <PageSection>{children}</PageSection>
    </main>
  );
}
