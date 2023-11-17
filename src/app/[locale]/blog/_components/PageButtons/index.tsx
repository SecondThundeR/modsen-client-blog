import { Button, Heading } from "@/components/ui";

import { type PageButtonsProps } from "./interfaces";
import styles from "./PageButtons.module.scss";

const INACTIVE_HEADING_PROPS = {
  color: "mediumGray",
  level: 4,
} as const;

const ACTIVE_HEADING_PROPS = {
  level: 3,
} as const;

export default function PageButtons({
  isPrevInactive,
  onPrev,
  isNextInactive,
  onNext,
}: PageButtonsProps) {
  return (
    <div className={styles.wrapper}>
      <Button onClick={onPrev} disabled={isPrevInactive} unstyled>
        <Heading
          {...(isPrevInactive ? INACTIVE_HEADING_PROPS : ACTIVE_HEADING_PROPS)}
        >
          {"<"} Prev
        </Heading>
      </Button>
      <Button onClick={onNext} disabled={isNextInactive} unstyled>
        <Heading
          {...(isNextInactive ? INACTIVE_HEADING_PROPS : ACTIVE_HEADING_PROPS)}
        >
          Next {">"}
        </Heading>
      </Button>
    </div>
  );
}
