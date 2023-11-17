import styles from "./ContactFormSkeleton.module.scss";

export default function ContactFormSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputSkeleton} />
      <div className={styles.inputSkeleton} />
      <div className={styles.selectSkeleton} />
      <div className={styles.textareaSkeleton} />
      <div className={styles.buttonSkeleton} />
    </div>
  );
}
