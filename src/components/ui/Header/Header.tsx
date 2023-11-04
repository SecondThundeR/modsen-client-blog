import styles from "./Header.module.scss";
import { type HeaderProps } from "./interfaces";

export default function Header({
  titleSlot,
  linksSlot,
  controlsSlot,
}: HeaderProps) {
  return (
    <header data-testid="header-wrapper" className={styles.header}>
      {titleSlot}
      <div data-testid="header-controls" className={styles.header__controls}>
        <div data-testid="header-links" className={styles.header__links}>
          {linksSlot}
        </div>
        {controlsSlot}
      </div>
    </header>
  );
}
