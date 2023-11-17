import styles from "./GeneralWrapper.module.scss";
import { type GeneralWrapperProps } from "./interfaces";

export default function GeneralWrapper({
  children,
  mode,
}: GeneralWrapperProps) {
  return <div className={styles[`wrapper__${mode}`]}>{children}</div>;
}
