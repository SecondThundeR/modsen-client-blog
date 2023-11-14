import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

interface UsePageNavigationOptions {
  elementsPerPage: number;
  maxElements: number;
}

const SEARCH_PARAMS_NAME = "page";

export function usePageNavigation({
  elementsPerPage,
  maxElements,
}: UsePageNavigationOptions) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get(SEARCH_PARAMS_NAME) ?? 1);

  const maxAllowedPage = Math.ceil(maxElements / elementsPerPage);
  const isPrevInactive = currentPage <= 1;
  const isNextInactive = currentPage >= maxAllowedPage;

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(SEARCH_PARAMS_NAME, value);
      return params.toString();
    },
    [searchParams],
  );

  const onPrev = useCallback(() => {
    if (isPrevInactive) return;
    router.push(pathname + "?" + createQueryString(String(currentPage - 1)));
  }, [createQueryString, currentPage, isPrevInactive, pathname, router]);

  const onNext = useCallback(() => {
    if (isNextInactive) return;
    router.push(pathname + "?" + createQueryString(String(currentPage + 1)));
  }, [createQueryString, currentPage, isNextInactive, pathname, router]);

  useEffect(() => {
    if (currentPage < 0 || Number.isNaN(currentPage)) {
      router.replace(pathname + "?" + createQueryString("1"));
    } else if (currentPage > maxAllowedPage) {
      router.replace(
        pathname + "?" + createQueryString(String(maxAllowedPage)),
      );
    }
  }, [createQueryString, currentPage, maxAllowedPage, pathname, router]);

  return {
    currentPage,
    isPrevInactive,
    isNextInactive,
    handlers: { onPrev, onNext },
  };
}
