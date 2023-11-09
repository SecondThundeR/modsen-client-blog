import Image from "next/image";

import styles from "./Avatar.module.scss";
import { type AvatarProps } from "./interfaces";

export default function Avatar({ alt, ...props }: AvatarProps) {
  return (
    <Image
      data-testid="avatar"
      className={styles.avatar}
      {...props}
      style={{
        objectFit: "cover",
      }}
      alt={alt}
    />
  );
}
