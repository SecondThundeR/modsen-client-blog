import { type SVGProps } from "react";

export default function ErrorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-testid="icon"
      xmlns="http://www.w3.org/2000/svg"
      width={56}
      height={56}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M28 49c11.598 0 21-9.402 21-21S39.598 7 28 7 7 16.402 7 28s9.402 21 21 21zm0 3c13.255 0 24-10.745 24-24S41.255 4 28 4 4 14.745 4 28s10.745 24 24 24zm-9.9-14.1a1.5 1.5 0 0 1 0-2.122L25.88 28 18.1 20.222a1.5 1.5 0 1 1 2.122-2.121L28 25.879l7.778-7.778a1.5 1.5 0 1 1 2.121 2.12L30.121 28l7.778 7.778a1.5 1.5 0 1 1-2.12 2.122l-7.78-7.779-7.777 7.779a1.5 1.5 0 0 1-2.122 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
