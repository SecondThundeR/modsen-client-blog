import { Spinner } from "@secondthunder/modsen-client-blog-ui";

import styles from "./ContactUsMapSkeleton.module.scss";

export default function ContactUsMapSkeleton() {
  return (
    <div className={styles.wrapper}>
      <Spinner color="black" />
    </div>
  );
}
