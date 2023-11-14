import Image from "next/image";

import { type PostImageProps } from "./interfaces";
import styles from "./PostImage.module.scss";

export default function PostImage(props: PostImageProps) {
  return <Image className={styles.image} {...props} alt="" priority />;
}
