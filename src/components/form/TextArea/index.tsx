import clsx from "clsx";

import { type TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.scss";

export default function TextArea({
  fullPadding = false,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <div data-testid="textarea-wrapper">
      <textarea
        data-testid="textarea"
        className={clsx(styles.textarea, {
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
