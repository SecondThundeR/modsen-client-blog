import styles from "./Footer.module.scss";
import { type FooterProps } from "./interfaces";

export default function Footer({
  titleSlot,
  linksSlot,
  ctaSlot,
  contactInfoSlot,
  socialButtonsSlot,
}: FooterProps) {
  return (
    <footer data-testid="footer-wrapper" className={styles.footer}>
      <div data-testid="footer-top-row" className={styles.footer__row}>
        {titleSlot}
        <div
          data-testid="footer-top-row-links"
          className={styles.footer__links}
        >
          {linksSlot}
        </div>
      </div>
      {ctaSlot}
      <div data-testid="footer-bottom-row" className={styles.footer__row}>
        <div data-testid="footer-contact" className={styles.footer__contact}>
          {contactInfoSlot}
        </div>
        <div data-testid="footer-social" className={styles.footer__social}>
          {socialButtonsSlot}
        </div>
      </div>
    </footer>
  );
}
