import clsx from "clsx";

import { isSelectedOptionDisabled } from "@/lib/select";

import { type SelectProps } from "./interfaces";
import styles from "./Select.module.scss";

export default function Select({
  options,
  fullPadding = false,
  errorMessage,
  ...props
}: SelectProps) {
  const isSelectedDisabled = isSelectedOptionDisabled(
    options,
    String(props.value),
  );

  return (
    <div data-testid="select-wrapper">
      <select
        data-testid="select"
        className={clsx(styles.select, {
          [styles.select__disabled!]: isSelectedDisabled,
          [styles.full_padding!]: fullPadding,
        })}
        {...props}
      >
        {options.map(({ id, name, value, isDisabled }) => (
          <option key={id} value={value} disabled={isDisabled}>
            {name}
          </option>
        ))}
      </select>
      {errorMessage && (
        <span data-testid="error-message" className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
