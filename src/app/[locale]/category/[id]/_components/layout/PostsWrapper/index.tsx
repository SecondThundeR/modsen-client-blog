import { type PropsWithChildren } from "react";

import styles from "./PostsWrapper.module.scss";

export default function PostsWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
