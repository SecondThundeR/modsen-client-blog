import { type LabelProps } from "./interfaces";
import styles from "./Label.module.scss";

export default function Label({ children }: LabelProps) {
  return <p className={styles.label}>{children}</p>;
}
