import { Spinner } from "@secondthunder/modsen-client-blog-ui";

import styles from "./SubscribeBlockSkeleton.module.scss";

export default function SubscribeBlockSkeleton() {
  return (
    <div className={styles.wrapper}>
      <Spinner />
    </div>
  );
}
