import clsx from "clsx";

import styles from "./Header.module.scss";
import { type HeaderProps } from "./interfaces";

export default function Header({ children, gap = "regular" }: HeaderProps) {
  return (
    <header
      data-testid="header-wrapper"
      className={clsx(styles.header, styles[`gap__${gap}`])}
    >
      {children}
    </header>
  );
}
