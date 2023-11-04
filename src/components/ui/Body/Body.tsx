import clsx from "clsx";

import styles from "./Body.module.scss";
import { type BodyProps } from "./interfaces";

export default function Body({ children, level }: BodyProps) {
  return (
    <p className={clsx(styles.body, styles[`body__${level}`])}>{children}</p>
  );
}
