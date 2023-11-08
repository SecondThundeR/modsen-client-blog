import clsx from "clsx";

import { ErrorIcon, SuccessIcon } from "@/components/icons";

import styles from "./Alert.module.scss";
import { type AlertProps } from "./interfaces";

export default function Alert({ children, variant }: AlertProps) {
  if (!children) return null;
  const Icon = variant === "success" ? SuccessIcon : ErrorIcon;

  return (
    <div
      data-testid="alert-wrapper"
      className={clsx(styles.wrapper, styles[`wrapper__${variant}`])}
    >
      <div className={styles.wrapper__content}>
        <Icon />
      </div>
      <div className={styles.wrapper__content}>{children}</div>
    </div>
  );
}
