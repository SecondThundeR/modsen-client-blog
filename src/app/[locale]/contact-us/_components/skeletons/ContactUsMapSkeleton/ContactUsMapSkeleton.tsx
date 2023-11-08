import { Spinner } from "@/components/ui";

import styles from "./ContactUsMapSkeleton.module.scss";

export default function ContactUsMapSkeleton() {
  return (
    <div className={styles.wrapper}>
      <Spinner color="black" />
    </div>
  );
}
