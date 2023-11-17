import { Spinner } from "@secondthunder/modsen-client-blog-ui";

import styles from "./PostsListSkeleton.module.scss";

export default function PostsListSkeleton() {
  return (
    <div className={styles.wrapper}>
      <Spinner color="black" />
    </div>
  );
}
