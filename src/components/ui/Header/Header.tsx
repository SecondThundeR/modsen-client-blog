import styles from "./Header.module.scss";
import { type HeaderProps } from "./interfaces";

export default function Header({ children }: HeaderProps) {
  return (
    <div data-testid="header-wrapper" className={styles.header}>
      {children}
    </div>
  );
}
