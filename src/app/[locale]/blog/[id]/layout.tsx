import { PageSection } from "@secondthunder/modsen-client-blog-ui";

export default function BlogPostLayout({
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
