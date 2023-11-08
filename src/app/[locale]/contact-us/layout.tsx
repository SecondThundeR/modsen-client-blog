import { PageSection } from "@/components/ui";

import { ContactUsMap } from "./_components";

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <PageSection>{children}</PageSection>
      <ContactUsMap />
    </main>
  );
}
