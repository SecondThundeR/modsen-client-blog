import clsx from "clsx";

import styles from "./Input.module.scss";
import { type InputProps } from "./interfaces";

export default function Input({
  fullPadding = false,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <div data-testid="input-wrapper" className={styles.inputWrapper}>
      <input
        data-testid="input"
        className={clsx(styles.input, {
          [styles.full_padding!]: fullPadding,
        })}
        {...props}
      />
      {errorMessage && (
        <span data-testid="error-message" className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
