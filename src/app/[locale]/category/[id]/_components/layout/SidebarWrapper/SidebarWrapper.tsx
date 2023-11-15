import { type PropsWithChildren } from "react";

import styles from "./SidebarWrapper.module.scss";

export default function SidebarWrapper({ children }: PropsWithChildren) {
  return <div className={styles.wrapper}>{children}</div>;
}
