import { type SVGProps } from "react";

export default function LeftArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-testid="icon"
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M6.47 3.22a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69a.75.75 0 0 1 0 1.5H4.56l2.97 2.97a.75.75 0 1 1-1.06 1.06L2.22 8.53a.75.75 0 0 1 0-1.06l4.25-4.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
