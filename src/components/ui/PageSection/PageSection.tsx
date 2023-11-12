import clsx from "clsx";

import { type PageSectionProps } from "./interfaces";
import styles from "./PageSection.module.scss";

export default function PageSection({
  children,
  fullWidth = false,
}: PageSectionProps) {
  return (
    <section
      data-testid="page-section"
      className={clsx(styles.wrapper, {
        [styles.fullWidth!]: fullWidth,
      })}
    >
      {children}
    </section>
  );
}
