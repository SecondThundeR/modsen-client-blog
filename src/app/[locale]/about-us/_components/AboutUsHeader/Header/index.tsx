import { Body, Cap, Heading } from "@secondthunder/modsen-client-blog-ui";

import styles from "./Header.module.scss";
import { type HeaderProps } from "./interfaces";

export default function Header({ dictionary }: HeaderProps) {
  const { cap, heading } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <Cap>{cap}</Cap>
        <Heading>{heading}</Heading>
      </div>
      <div className={styles.text}>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Body>
      </div>
    </div>
  );
}
