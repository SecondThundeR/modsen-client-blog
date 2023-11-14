import { Heading } from "@/components/ui";

import { type PostsListHeaderProps } from "./interfaces";
import styles from "./PostsListHeader.module.scss";

export default function PostsListHeader({
  headingString,
}: PostsListHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <Heading>{headingString}</Heading>
    </div>
  );
}
