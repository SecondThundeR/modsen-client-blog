import { type YoutubeFrameWrapperProps } from "./interfaces";
import styles from "./YoutubeFrameWrapper.module.scss";

export default function YoutubeFrameWrapper({ id }: YoutubeFrameWrapperProps) {
  return (
    <iframe
      className={styles.wrapper}
      width="1280"
      height="720"
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    />
  );
}
