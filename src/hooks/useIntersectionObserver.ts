import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (threshold = 0) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry?.isIntersecting ?? false;
        setIsIntersecting(isIntersecting);
        if (isIntersecting && !hasRendered) {
          if (count > 1) setHasRendered(true);
          else setCount((prevCount) => ++prevCount);
        }
      },
      { threshold },
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, hasRendered, count]);

  return [isIntersecting || hasRendered, ref] as const;
};

export default useIntersectionObserver;
