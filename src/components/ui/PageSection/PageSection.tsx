import { type PageSectionProps } from "./interfaces";
import styles from "./PageSection.module.scss";

export default function PageSection({ children }: PageSectionProps) {
  return (
    <section data-testid="page-section" className={styles.wrapper}>
      {children}
    </section>
  );
}
