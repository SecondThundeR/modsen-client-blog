import clsx from "clsx";

import styles from "./Button.module.scss";
import type { ButtonProps } from "./interfaces";

export default function Button({
  children,
  unstyled = false,
  variant = "primary",
  size = "regular",
  ...props
}: ButtonProps) {
  const classes = unstyled
    ? styles.unstyled
    : clsx(
        styles.button,
        styles[`variant__${variant}`],
        styles[`size__${size}`],
      );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
