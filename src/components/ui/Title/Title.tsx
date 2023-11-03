import clsx from "clsx";
import { createElement } from "react";

import { type TitleProps } from "./interfaces";
import styles from "./Title.module.scss";

export default function Title({ children, headingLevel }: TitleProps) {
  return createElement(
    `h${headingLevel}`,
    { className: clsx(styles.title, styles[`title__${headingLevel}`]) },
    children,
  );
}
