import { type PropsWithChildren } from "react";

import styles from "./BlogContainer.module.scss";

export default function BlogContainer({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
