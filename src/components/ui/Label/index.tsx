import clsx from "clsx";

import { type LabelProps } from "./interfaces";
import styles from "./Label.module.scss";

export default function Label({ children, font = "inter" }: LabelProps) {
  return (
    <p className={clsx(styles.label, styles[`label__${font}`])}>{children}</p>
  );
}
