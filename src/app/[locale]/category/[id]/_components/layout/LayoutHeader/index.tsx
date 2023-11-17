import {
  Body,
  Cap,
  Display,
  Header,
} from "@secondthunder/modsen-client-blog-ui";

import { type LayoutHeaderProps } from "./interfaces";
import styles from "./LayoutHeader.module.scss";

export default function LayoutHeader({
  categoryId,
  capPrefix,
  categories,
}: LayoutHeaderProps) {
  const currentCategory = categories[categoryId];

  return (
    <Header gap="extralarge">
      <Display>{currentCategory}</Display>
      <div className={styles.bodyWrapper}>
        <Body color="mediumGray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </Body>
        <Cap>
          {capPrefix} {currentCategory}
        </Cap>
      </div>
    </Header>
  );
}
