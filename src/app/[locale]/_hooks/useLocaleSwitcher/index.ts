import { usePathname } from "next/navigation";
import { useCallback } from "react";

export default function useLocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = useCallback(
    (locale: string) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    },
    [pathName],
  );

  return redirectedPathName;
}
