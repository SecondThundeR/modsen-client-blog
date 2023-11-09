import styles from "./Card.module.scss";
import { type CardProps } from "./interfaces";

export default function Card({ children }: CardProps) {
  return (
    <div data-testid="card-wrapper" className={styles.wrapper}>
      {children}
    </div>
  );
}
