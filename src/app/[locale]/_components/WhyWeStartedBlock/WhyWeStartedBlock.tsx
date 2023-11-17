"use client";

import Image from "next/image";
import Link from "next/link";
import whyWeStartedImage from "public/assets/why-we-started.png";
import { memo } from "react";

import { Body, Button, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";

import { type WhyWeStartedBlockProps } from "./interfaces";
import styles from "./WhyWeStartedBlock.module.scss";

function WhyWeStartedBlock({ locale, dictionary }: WhyWeStartedBlockProps) {
  const { cap, heading, button } = dictionary;
  return (
    <div className={styles.container}>
      <Image className={styles.image} src={whyWeStartedImage} alt="" priority />
      <div className={styles.block}>
        <div className={styles.block__content}>
          <div className={styles.block__text}>
            <Cap weight="semibold">{cap}</Cap>
            <div className={styles.block__details}>
              <Heading>{heading}</Heading>
              <Body color="mediumGray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </Body>
            </div>
          </div>
          <Link href={`/${locale}${routes.aboutUs}`}>
            <Button>{button}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(withLazyLoad(WhyWeStartedBlock));
