import { PageSection } from "@secondthunder/modsen-client-blog-ui";
import dynamic from "next/dynamic";

import { ContactUsMapSkeleton } from "./_components/skeletons";

const LazyContactUsMap = dynamic(() => import("./_components/ContactUsMap"), {
  ssr: false,
  loading: () => <ContactUsMapSkeleton />,
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <PageSection>{children}</PageSection>
      <LazyContactUsMap />
    </main>
  );
}
