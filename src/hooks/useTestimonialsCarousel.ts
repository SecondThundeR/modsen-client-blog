import { useCallback, useState } from "react";

import { type Testimonial } from "@/constants/data/testimonials";

export function useTestimonialsCarousel(testimonials: Testimonial[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrev = useCallback(() => {
    const maxIndex = testimonials.length - 1;
    const nextIndex = currentIndex === 0 ? maxIndex : currentIndex - 1;
    setCurrentIndex(nextIndex);
  }, [currentIndex, testimonials.length]);

  const onNext = useCallback(() => {
    const maxIndex = testimonials.length - 1;
    const nextIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  }, [currentIndex, testimonials.length]);

  if (testimonials.length === 0)
    throw new Error("Can't use testimonials carousel without any testimonial");

  return { testimonial: testimonials[currentIndex]!, onPrev, onNext };
}
