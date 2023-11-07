import styles from "./ArticleWrapper.module.scss";
import { type ArticleWrapperProps } from "./interfaces";

export default function ArticleWrapper({ children }: ArticleWrapperProps) {
  return (
    <div data-testid="article-wrapper" className={styles.wrapper}>
      {children}
    </div>
  );
}
