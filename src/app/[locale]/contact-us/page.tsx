import { Body, Cap, Heading } from "@/components/ui";
import { getDictionary } from "@/locale/get-dictionary";

import { ContactForm, ContactUsBlock, GeneralWrapper } from "./_components";

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
        <ContactForm formLocale={form} alertLocale={alert} />
      </GeneralWrapper>
    </GeneralWrapper>
  );
}
