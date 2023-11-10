import { type SVGProps } from "react";

export default function RightArrowIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.53 12.78a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.69L8.47 4.28a.75.75 0 0 1 1.06-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
