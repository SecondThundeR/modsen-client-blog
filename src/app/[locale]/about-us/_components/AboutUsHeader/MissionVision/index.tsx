import { Body, Cap, Heading } from "@secondthunder/modsen-client-blog-ui";

import { type MissionVisionProps } from "./interfaces";
import styles from "./MissionVision.module.scss";

export default function MissionVision({ dictionary }: MissionVisionProps) {
  const { cap1, heading1, cap2, heading2 } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <div className={styles.details__header}>
          <Cap weight="semibold">{cap1}</Cap>
          <Heading level={3}>{heading1}</Heading>
        </div>
        <Body color="mediumGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </Body>
      </div>
      <div className={styles.details}>
        <div className={styles.details__header}>
          <Cap weight="semibold">{cap2}</Cap>
          <Heading level={3}>{heading2}</Heading>
        </div>
        <Body color="mediumGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus.
        </Body>
      </div>
    </div>
  );
}
