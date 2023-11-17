import { Body, Cap, Heading } from "@secondthunder/modsen-client-blog-ui";
import dynamic from "next/dynamic";

import { getDictionary } from "@/helpers/getDictionary";

import { ContactUsBlock, GeneralWrapper } from "./_components";
import { ContactFormSkeleton } from "./_components/skeletons";

const LazyContactForm = dynamic(() => import("./_components/ContactForm"), {
  ssr: false,
  loading: () => <ContactFormSkeleton />,
});

export async function generateMetadata({ params }: PageLocaleParams) {
  const locale = params.locale;
  const {
    metadata: { contactUs },
  } = await getDictionary(locale);

  return {
    title: contactUs.title,
    description: contactUs.description,
  };
}

export default async function ContactUs({
  params: { locale },
}: PageLocaleParams) {
  const dictionary = await getDictionary(locale);
  const { cap, heading, block, form, alert } = dictionary.contactUs;

  return (
    <GeneralWrapper mode="section-wrapper">
      <GeneralWrapper mode="header">
        <GeneralWrapper mode="subheader">
          <Cap weight="black">{cap}</Cap>
          <Heading>{heading}</Heading>
        </GeneralWrapper>
        <Body color="mediumGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </Body>
      </GeneralWrapper>
      <GeneralWrapper mode="contact-form">
        <ContactUsBlock dictionary={block} />
        <LazyContactForm formLocale={form} alertLocale={alert} />
      </GeneralWrapper>
    </GeneralWrapper>
  );
}
