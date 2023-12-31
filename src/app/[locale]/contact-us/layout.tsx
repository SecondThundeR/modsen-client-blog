import dynamic from "next/dynamic";

import { PageSection } from "@/components/ui";

import { ContactUsMapSkeleton } from "./_components/skeletons";

const LazyContactUsMap = dynamic(
  () => import("./_components/ContactUsMap/ContactUsMap"),
  {
    ssr: false,
    loading: () => <ContactUsMapSkeleton />,
  },
);

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
