import clsx from "clsx";

import styles from "./Article.module.scss";
import { type ArticleProps } from "./interfaces";

export default function Article({
  children,
  gapVariant = "regular",
}: ArticleProps) {
  return (
    <article
      data-testid="article"
      className={clsx(styles.wrapper, styles[`gap__${gapVariant}`])}
    >
      {children}
    </article>
  );
}
