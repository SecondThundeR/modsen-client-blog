import styles from "./Input.module.scss";
import { type InputProps } from "./interfaces";

export default function Input(props: InputProps) {
  return <input data-testid="input" className={styles.input} {...props} />;
}
