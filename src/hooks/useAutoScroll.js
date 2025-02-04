import { useLayoutEffect, useRef } from "react";

export const useAutoScroll = (dependency) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dependency]);

  return ref;
};
