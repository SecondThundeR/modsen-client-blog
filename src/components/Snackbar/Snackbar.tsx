import { Button, Heading, Modal } from "@/components/ui";

import { type SnackbarProps } from "./interfaces";
import styles from "./Snackbar.module.scss";

export default function Snackbar({
  text,
  buttonText,
  onDismiss,
}: SnackbarProps) {
  return (
    text && (
      <Modal>
        <div data-testid="snackbar-wrapper" className={styles.snackbar}>
          <Heading level={5}>{text}</Heading>
          <Button variant="regular" onClick={onDismiss}>
            {buttonText}
          </Button>
        </div>
      </Modal>
    )
  );
}
