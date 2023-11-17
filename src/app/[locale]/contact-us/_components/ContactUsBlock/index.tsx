import { Body, Heading } from "@secondthunder/modsen-client-blog-ui";

import styles from "./ContactUsBlock.module.scss";
import { type ContactUsBlockProps } from "./interfaces";

export default function ContactUsBlock({ dictionary }: ContactUsBlockProps) {
  const {
    sectionHeader1,
    data1Heading1,
    data1Heading2,
    data1Body,
    sectionHeader2,
    data2Heading,
    data2Body,
  } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Body level={2} isSecondary>
          {sectionHeader1}
        </Body>
        <div className={styles.divider} />
        <div>
          <Heading level={5}>{data1Heading1}</Heading>
          <Heading level={5}>{data1Heading2}</Heading>
          <Body isSecondary>{data1Body}</Body>
        </div>
      </div>
      <div className={styles.section}>
        <Body level={2} isSecondary>
          {sectionHeader2}
        </Body>
        <div className={styles.divider} />
        <div>
          <Heading level={5}>{data2Heading}</Heading>
          <Body isSecondary>{data2Body}</Body>
        </div>
      </div>
    </div>
  );
}
