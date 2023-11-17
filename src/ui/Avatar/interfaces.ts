import { type StaticImageData } from "next/image";

export interface AvatarProps {
  width: number;
  height: number;
  src: string | StaticImageData;
  alt: string;
}
