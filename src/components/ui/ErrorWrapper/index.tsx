import styles from "./ErrorWrapper.module.scss";
import { type ErrorWrapperProps } from "./interfaces";

export default function ErrorWrapper({ children }: ErrorWrapperProps) {
  return (
    <div data-testid="error-wrapper" className={styles.error}>
      {children}
    </div>
  );
}
