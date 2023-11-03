import styles from "./Display.module.scss";
import { type DisplayProps } from "./interfaces";

export default function Display({ children }: DisplayProps) {
  return <h1 className={styles.display}>{children}</h1>;
}
