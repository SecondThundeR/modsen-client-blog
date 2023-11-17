import { Body, Heading } from "@secondthunder/modsen-client-blog-ui";
import Image from "next/image";

import { Socials } from "@/ui";

import styles from "./AuthorHeader.module.scss";
import { type AuthorHeaderProps } from "./interfaces";

export default function AuthorHeader({
  authorData: { name, image, socials },
  dictionary: { headingStart, headingEnd },
}: AuthorHeaderProps) {
  return (
    <header className={styles.wrapper}>
      <div className={styles.author}>
        <Image
          className={styles.image}
          src={image}
          alt={`${name} image`}
          priority
        />
        <div className={styles.author__details}>
          <Heading>
            {headingStart} {name} {headingEnd}
          </Heading>
          <Body color="mediumGray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </Body>
          <Socials customLinks={socials} />
        </div>
      </div>
      <div className={styles.figure}>
        <div className={styles.figure__yellow} />
        <div className={styles.figure__purple} />
      </div>
    </header>
  );
}
