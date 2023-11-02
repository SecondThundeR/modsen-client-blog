import clsx from "clsx";
import { memo } from "react";

import styles from "./Button.module.scss";
import type { ButtonProps } from "./interfaces";

const Button = memo(function Button({
  text,
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
      {text}
    </button>
  );
});

export default Button;
