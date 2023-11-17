import clsx from "clsx";
import Image from "next/image";
import startedImage from "public/assets/aboutUs/started.jpeg";

import { Body, Heading } from "@/components/ui";

import { type StartedBlockProps } from "./interfaces";
import styles from "./StartedBlock.module.scss";

export default function StartedBlock({ headingString }: StartedBlockProps) {
  return (
    <article className={styles.wrapper}>
      <div className={clsx(styles.details, styles.figure__align)}>
        <Image className={styles.image} src={startedImage} alt="" priority />
        <div className={styles.figure} />
      </div>
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
    </article>
  );
}
