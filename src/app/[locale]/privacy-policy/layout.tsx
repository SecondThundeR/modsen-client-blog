import { Body, Header, Heading, PageSection } from "@/components/ui";
import { getDictionary } from "@/helpers/getDictionary";

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
        <Heading>{privacyPolicyDictionary.heading}</Heading>
        <Body>{privacyPolicyDictionary.body}</Body>
      </Header>
      <PageSection>{children}</PageSection>
    </main>
  );
}
