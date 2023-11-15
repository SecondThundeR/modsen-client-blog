import { type PropsWithChildren } from "react";

import styles from "./ContentContainer.module.scss";

export default function ContentContainer({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
