import { type PropsWithChildren } from "react";

import styles from "./ModalWrapper.module.scss";

export default function ModalWrapper({ children }: PropsWithChildren) {
  return (
    children && (
      <div data-testid="outer-wrapper" className={styles.outer}>
        <div data-testid="content-wrapper" className={styles.content}>
          {children}
        </div>
      </div>
    )
  );
}
