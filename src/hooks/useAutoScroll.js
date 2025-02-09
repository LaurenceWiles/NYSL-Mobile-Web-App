import { useLayoutEffect, useRef } from "react";

export const useAutoScroll = (dependency, mode) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      mode === "scrollIntoView"
        ? ref.current.scrollIntoView({ behavior: "smooth", block: "end" })
        : (ref.current.scrollTop = ref.current.scrollHeight);
    }
  }, [dependency, mode]);

  return ref;
};
