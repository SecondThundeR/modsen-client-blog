import clsx from "clsx";

import styles from "./ArticleWrapper.module.scss";
import { type ArticleWrapperProps } from "./interfaces";

export default function ArticleWrapper({
  children,
  isNarrow = false,
}: ArticleWrapperProps) {
  return (
    <div
      data-testid="article-wrapper"
      className={clsx(styles.wrapper, {
        [styles.wrapper__narrow!]: isNarrow,
      })}
    >
      {children}
    </div>
  );
}
