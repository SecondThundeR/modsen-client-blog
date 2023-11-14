import { type StaticImageData } from "next/image";

export type PostImageProps =
  | { src: string; width: number; height: number }
  | { src: StaticImageData };
