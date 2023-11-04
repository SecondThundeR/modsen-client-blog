import { Button, Heading, Modal } from "@/components/ui";

import { type SnackbarProps } from "./interfaces";
import styles from "./Snackbar.module.scss";

export default function Snackbar({
  text,
  buttonText,
  onDismiss,
}: SnackbarProps) {
  if (!text) return null;

  return (
    <Modal>
      <div className={styles.snackbar}>
        <Heading level={5}>{text}</Heading>
        {onDismiss && (
          <Button variant="regular" onClick={onDismiss}>
            {buttonText}
          </Button>
        )}
      </div>
    </Modal>
  );
}
