import clsx from "clsx";

import styles from "./Button.module.scss";
import type { ButtonProps } from "./interfaces";

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, {
        [styles.button__primary!]: variant === "primary",
        [styles.button__regular!]: variant === "regular",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
