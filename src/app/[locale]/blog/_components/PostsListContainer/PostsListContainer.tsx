import { type PropsWithChildren } from "react";

import styles from "./PostsListContainer.module.scss";

export default function PostsListContainer({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
