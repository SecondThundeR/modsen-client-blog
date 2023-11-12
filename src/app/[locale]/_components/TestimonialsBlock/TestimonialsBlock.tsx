"use client";

import { LeftArrowIcon, RightArrowIcon } from "@/components/icons";
import { Avatar, Body, Cap, Heading } from "@/components/ui";
import { testimonials } from "@/constants/data/testimonials";
import { withLazyLoad } from "@/hocs/withLazyLoad/withLazyLoad";
import { useTestimonialsCarousel } from "@/hooks/useTestimonialsCarousel";
import { type DictionaryType } from "@/locale/get-dictionary";

import styles from "./TestimonialsBlock.module.scss";

function TestimonialsBlock({
  dictionary,
}: {
  dictionary: DictionaryType["testimonials"];
}) {
  const { testimonial, onPrev, onNext } = useTestimonialsCarousel(testimonials);

  const { cap, heading } = dictionary;
  const { name, image, location, data } = testimonial;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Cap weight="semibold">{cap}</Cap>
        <div>
          <Heading level={2}>{heading}</Heading>
          <Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Body>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.testimonialWrapper}>
        <Heading level={4}>{data}</Heading>
        <div className={styles.testimonialFooter}>
          <div className={styles.authorWrapper}>
            <Avatar
              width={48}
              height={48}
              src={image}
              alt={`${name} avatar image`}
            />
            <div className={styles.authorDetails}>
              <Heading level={4}>{name}</Heading>
              <Body color="mediumGray">{location}</Body>
            </div>
          </div>
          <div className={styles.buttonsWrapper}>
            <button className={styles.button} onClick={onPrev}>
              <LeftArrowIcon />
            </button>
            <button className={styles.button} onClick={onNext}>
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withLazyLoad(TestimonialsBlock);
