"use client";

import Image from "next/image";
import logo1 from "public/assets/featuredin/logo1.png";
import logo2 from "public/assets/featuredin/logo2.png";
import logo3 from "public/assets/featuredin/logo3.png";
import logo4 from "public/assets/featuredin/logo4.png";
import logo5 from "public/assets/featuredin/logo5.png";

import { Body, Heading } from "@/components/ui";
import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";

import styles from "./FeaturedInBlock.module.scss";
import { type FeaturedInBlockProps } from "./interfaces";

function FeaturedInBlock({ dictionary }: FeaturedInBlockProps) {
  const { heading, body } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div>
        <Body level={2} isSecondary>
          {body}
        </Body>
        <Heading level={4}>{heading}</Heading>
      </div>
      <Image src={logo1} alt="Logo 1" />
      <Image src={logo2} alt="Logo 2" />
      <Image src={logo3} alt="Logo 3" />
      <Image src={logo4} alt="Logo 4" />
      <Image src={logo5} alt="Logo 5" />
    </div>
  );
}

export default withLazyLoad(FeaturedInBlock);
