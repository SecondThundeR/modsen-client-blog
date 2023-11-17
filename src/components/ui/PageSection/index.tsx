import clsx from "clsx";

import { type PageSectionProps } from "./interfaces";
import styles from "./PageSection.module.scss";

export default function PageSection({
  children,
  fullWidth = false,
  align = "center",
  sidePaddings = "regular",
  gap = "regular",
}: PageSectionProps) {
  return (
    <section
      data-testid="page-section"
      className={clsx(
        styles.wrapper,
        styles[`wrapper__${align}`],
        styles[`gap__${gap}`],
        {
          [styles[`fullWidth__${sidePaddings}`]!]: fullWidth,
        },
      )}
    >
      {children}
    </section>
  );
}
