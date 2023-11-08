import clsx from "clsx";

import styles from "./Button.module.scss";
import type { ButtonProps } from "./interfaces";

export default function Button({
  children,
  variant = "primary",
  size = "regular",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`variant__${variant}`],
        styles[`size__${size}`],
      )}
      {...props}
    >
      {children}
    </button>
  );
}
