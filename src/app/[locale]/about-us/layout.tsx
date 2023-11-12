import { PageSection } from "@/components/ui";

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <PageSection fullWidth>{children}</PageSection>
    </main>
  );
}
