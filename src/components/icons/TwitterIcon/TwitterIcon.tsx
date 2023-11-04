import { type SVGProps } from "react";

export default function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={17}
      fill="none"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.033 15.407c6.037 0 9.34-5.315 9.34-9.923 0-.15-.004-.302-.01-.451A6.913 6.913 0 0 0 16 3.227a6.177 6.177 0 0 1-1.884.548 3.477 3.477 0 0 0 1.443-1.929 6.369 6.369 0 0 1-2.083.847 3.232 3.232 0 0 0-1.863-1.053 3.12 3.12 0 0 0-2.081.367 3.416 3.416 0 0 0-1.443 1.635 3.693 3.693 0 0 0-.21 2.23 8.897 8.897 0 0 1-3.746-1.056A9.453 9.453 0 0 1 1.115 2.23a3.682 3.682 0 0 0-.358 2.54A3.5 3.5 0 0 0 2.13 6.887 3.14 3.14 0 0 1 .644 6.45v.043c0 .805.261 1.586.742 2.21a3.253 3.253 0 0 0 1.891 1.21c-.482.14-.989.16-1.48.06.21.692.617 1.298 1.167 1.733.55.434 1.213.676 1.898.69a6.34 6.34 0 0 1-4.078 1.494 6.2 6.2 0 0 1-.784-.05 8.918 8.918 0 0 0 5.033 1.566Z"
      />
    </svg>
  );
}
