import { useLayoutEffect, useRef } from "react";

export const useAutoScroll = (dependency, mode = "scrollTop") => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      if (mode === "scrollIntoView") {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        requestAnimationFrame(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
      } else if (mode === "scrollTop") {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }
  }, [dependency, mode]);

  return ref;
};
