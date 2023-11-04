import clsx from "clsx";

import styles from "./Body.module.scss";
import { type BodyProps } from "./interfaces";

export default function Body({
  children,
  level = 1,
  font = "inter",
}: BodyProps) {
  return (
    <p
      className={clsx(
        styles.body,
        styles[`body__${font}`],
        styles[`body__${level}`],
      )}
    >
      {children}
    </p>
  );
}
