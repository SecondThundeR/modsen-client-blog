import styles from "./Hero.module.scss";
import { type HeroProps } from "./interfaces";

export default function Hero({ children }: HeroProps) {
  return (
    <div data-testid="hero-wrapper" className={styles.hero}>
      {children}
    </div>
  );
}
