import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type FormEvent, useCallback } from "react";

const SEARCH_PARAMS_NAME = "q";

export function useTagsQuerySearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSearchQuery = searchParams.get(SEARCH_PARAMS_NAME) ?? "";

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const params = new URLSearchParams(searchParams);
      const formData = new FormData(event.currentTarget);
      const query = formData.get(SEARCH_PARAMS_NAME) as string;
      if (query) {
        params.set(SEARCH_PARAMS_NAME, query);
      } else {
        params.delete(SEARCH_PARAMS_NAME);
      }
      if (params.size === 0)
        router.replace(pathname, {
          scroll: false,
        });
      else
        router.replace(pathname + "?" + params.toString(), {
          scroll: false,
        });
    },
    [pathname, router, searchParams],
  );

  return { currentSearchQuery, handleSearch };
}
