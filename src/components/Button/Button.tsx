import { memo } from "react";

import type { ButtonProps } from "./interfaces";

const Button = memo(function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
});

export default Button;
