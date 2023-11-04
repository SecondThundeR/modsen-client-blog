import clsx from "clsx";

import styles from "./Button.module.scss";
import type { ButtonProps } from "./interfaces";

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, {
        [styles.button__primary!]: variant === "primary",
        [styles.button__regular!]: variant === "regular",
      })}
      {...props}
    >
      {children}
    </button>
  );
}
