import Image from "next/image";
import teamImage from "public/assets/aboutUs/team.jpeg";

import { Body, Heading } from "@/components/ui";

import { type TeamBlockProps } from "./interfaces";
import styles from "./TeamBlock.module.scss";

export default function TeamBlock({ headingString }: TeamBlockProps) {
  return (
    <article className={styles.wrapper}>
      <div className={styles.details}>
        <Heading level={2}>{headingString}</Heading>
        <Heading level={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Heading>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </Body>
      </div>
      <div className={styles.details}>
        <Image className={styles.image} src={teamImage} alt="" priority />
        <div className={styles.figure} />
      </div>
    </article>
  );
}
