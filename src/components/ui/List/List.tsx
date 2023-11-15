import Heading from "../Heading/Heading";
import { type ListProps } from "./interfaces";
import styles from "./List.module.scss";

export default function List({ elements }: ListProps) {
  return (
    <ul data-testid="list" className={styles.list}>
      {elements.map((element, index) => (
        <li data-testid={`list-element-${index}`} key={`${element}-${index}`}>
          <Heading level={4}>{element}</Heading>
        </li>
      ))}
    </ul>
  );
}
