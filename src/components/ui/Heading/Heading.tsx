import clsx from "clsx";
import { createElement } from "react";

import styles from "./Heading.module.scss";
import { type HeadingProps } from "./interfaces";

export default function Heading({
  children,
  level = 1,
  font = "sen",
  color = "inherit",
}: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: clsx(
        styles.heading,
        styles[`heading__${font}`],
        styles[`heading__${level}`],
        styles[`heading__${color}`],
      ),
    },
    children,
  );
}
