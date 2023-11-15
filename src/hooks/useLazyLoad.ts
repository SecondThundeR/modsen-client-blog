import { useEffect, useState } from "react";

import useIntersectionObserver from "./useIntersectionObserver";

export function useLazyLoad(threshold: number) {
  const [isInView, ref] = useIntersectionObserver(threshold);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (isInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isInView, hasLoaded]);

  return [hasLoaded, ref] as const;
}
