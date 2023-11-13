import clsx from "clsx";
import { type ComponentType } from "react";

import { useLazyLoad } from "@/hooks/useLazyLoad";

import styles from "./withLazyLoad.module.scss";

export const withLazyLoad = <P extends object>(
  WrappedComponent: ComponentType<P>,
  options?: {
    threshold?: number;
    hasTransformY?: boolean;
  },
): React.FC<P> => {
  const { threshold = 0.6, hasTransformY = true } = options ?? {};
  const displayName =
    WrappedComponent.displayName ?? WrappedComponent.name ?? "Component";

  const ComponentWithLazyLoad = (props: P) => {
    const [hasLoaded, ref] = useLazyLoad(threshold);

    return (
      <div
        ref={ref}
        className={clsx(styles.wrapper, {
          [styles.isVisible!]: hasLoaded,
          [styles.transform!]: hasTransformY,
        })}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };

  ComponentWithLazyLoad.displayName = `withLazyLoad(${displayName})`;

  return ComponentWithLazyLoad;
};
