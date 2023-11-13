import Link from "next/link";

import { Body, Button, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";

import { type JoinUsBlockProps } from "./interfaces";
import styles from "./JoinUsBlock.module.scss";

export default function JoinUsBlock({ locale, dictionary }: JoinUsBlockProps) {
  const { heading, button } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <Heading>{heading}</Heading>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </Body>
      </div>
      <Link href={`/${locale}${routes.contactUs}`}>
        <Button>{button}</Button>
      </Link>
    </div>
  );
}
