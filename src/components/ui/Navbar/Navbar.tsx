import { type NavbarProps } from "./interfaces";
import styles from "./Navbar.module.scss";

export default function Navbar({
  titleSlot,
  linksSlot,
  controlsSlot,
}: NavbarProps) {
  return (
    <nav data-testid="navbar-wrapper" className={styles.navbar}>
      {titleSlot}
      <div data-testid="navbar-controls" className={styles.navbar__controls}>
        <div data-testid="navbar-links" className={styles.navbar__links}>
          {linksSlot}
        </div>
        {controlsSlot}
      </div>
    </nav>
  );
}
