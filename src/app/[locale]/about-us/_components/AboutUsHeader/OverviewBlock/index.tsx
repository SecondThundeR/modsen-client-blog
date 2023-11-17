import { Body, Display } from "@/components/ui";

import { type OverviewBlockProps } from "./interfaces";
import styles from "./OverviewBlock.module.scss";

/**
 * Currently, values for stats container are hard-coded. But, if there was a full-fledged DB,
 * they should be fetched right here
 */
export default function OverviewBlock({ dictionary }: OverviewBlockProps) {
  const { blogs, views, total } = dictionary;

  return (
    <div className={styles.wrapper}>
      <div className={styles.stats}>
        <div className={styles.stats__data}>
          <Display>12+</Display>
          <Body>{blogs}</Body>
        </div>
        <div className={styles.stats__data}>
          <Display>18K+</Display>
          <Body>{views}</Body>
        </div>
        <div className={styles.stats__data}>
          <Display>30K+</Display>
          <Body>{total}</Body>
        </div>
      </div>
      <div className={styles.pattern}>
        <div className={styles.pattern__purple} />
        <div className={styles.pattern__yellow} />
      </div>
    </div>
  );
}
