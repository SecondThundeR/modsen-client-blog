"use client";

import Link from "next/link";
import { memo } from "react";

import { Body, Cap, Heading } from "@/components/ui";
import { routes } from "@/constants/routes";
import { withLazyLoad } from "@/hocs/withLazyLoad";

import styles from "./AboutUsBlock.module.scss";
import { type AboutUsBlockProps } from "./interfaces";

function AboutUsBlock({ locale, dictionary }: AboutUsBlockProps) {
  const { cap, heading, capMission, headingMission, readMore } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.pattern__wrapper}>
        <div className={styles.pattern}>
          <div className={styles.pattern__yellow} />
          <div className={styles.pattern__purple} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.container__element}>
          <Cap weight="semibold">{cap}</Cap>
          <div className={styles.element__details}>
            <Heading level={2}>{heading}</Heading>
            <Body color="mediumGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Body>
            <Link
              className={styles.element__link}
              href={`/${locale}${routes.aboutUs}`}
            >
              {readMore}
            </Link>
          </div>
        </div>
        <div className={styles.container__element}>
          <Cap weight="semibold">{capMission}</Cap>
          <div className={styles.element__details}>
            <Heading level={3}>{headingMission}</Heading>
            <Body color="mediumGray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Body>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(withLazyLoad(AboutUsBlock));
