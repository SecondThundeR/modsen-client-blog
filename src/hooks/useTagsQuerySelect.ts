import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const TAGS_PARAMS_NAME = "tags";

export function useTagsQuerySelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentTags = (searchParams.get(TAGS_PARAMS_NAME) ?? "")
    .split(",")
    .filter((tag) => tag !== "");

  const createQueryString = useCallback(
    (values: string[]) => {
      const params = new URLSearchParams(searchParams);

      if (values.length > 0) params.set(TAGS_PARAMS_NAME, values.join(","));
      else params.delete(TAGS_PARAMS_NAME);

      return params.has(TAGS_PARAMS_NAME) ? "?" + params.toString() : "";
    },
    [searchParams],
  );

  const onClick = useCallback(
    (tagId: string) => {
      if (!currentTags.includes(tagId))
        router.push(pathname + createQueryString([...currentTags, tagId]), {
          scroll: false,
        });
      else
        router.push(
          pathname +
            createQueryString(currentTags.filter((tagID) => tagID !== tagId)),
          {
            scroll: false,
          },
        );
    },
    [createQueryString, currentTags, pathname, router],
  );

  return { currentTags, onClick };
}
