import styles from "./Header.module.scss";
import { type HeaderProps } from "./interfaces";

export default function Header({ children }: HeaderProps) {
  return (
    <header data-testid="header-wrapper" className={styles.header}>
      {children}
    </header>
  );
}
