import type { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// fade the elements in (moving up by `y`) when they scroll into view
export const useFadeUp = (
  targets: RefObject<HTMLElement | null>[],
  y = -20,
) => {
  useGSAP(() => {
    for (const target of targets) {
      gsap.to(target.current, {
        opacity: 1,
        y,
        duration: 1,
        scrollTrigger: {
          trigger: target.current,
          start: "top center+=25%",
        },
      });
    }
  });
};
