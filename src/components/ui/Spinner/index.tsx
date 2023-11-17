import clsx from "clsx";

import { type SpinnerProps } from "./interfaces";
import styles from "./Spinner.module.scss";

export default function Spinner({ color = "white" }: SpinnerProps) {
  return (
    <span
      data-testid="spinner"
      className={clsx(styles.spinner, styles[`spinner__${color}`])}
    />
  );
}
