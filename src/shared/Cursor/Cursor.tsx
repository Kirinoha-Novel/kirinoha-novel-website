import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Cursor.module.css";

// a dot that snaps to the mouse + a ring that follows with a lag.
// on clickable elements the dot turns into an upward triangle and "Click!" appears.
export const Cursor: FC = () => {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const clickLabel = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!dot.current || !ring.current) return;
    // keep the native cursor on touch devices and for reduced-motion users
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.body.classList.add(styles.active);

    gsap.set(ring.current, { xPercent: -50, yPercent: -50 });
    const ringX = gsap.quickTo(ring.current, "x", {
      duration: 0.4,
      ease: "power3",
    });
    const ringY = gsap.quickTo(ring.current, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const onMove = (e: MouseEvent) => {
      document.body.classList.add(styles.active);
      dot.current!.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      ringX(e.clientX);
      ringY(e.clientY);

      // `cursor` is overridden to none, so read the --is-pointer signal instead
      const target = e.target instanceof Element ? e.target : null;
      const isPointer = target
        ? getComputedStyle(target).getPropertyValue("--is-pointer").trim() ===
          "1"
        : false;
      dot.current!.classList.toggle(styles.dotPointer, isPointer);
      ring.current!.classList.toggle(styles.ringPointer, isPointer);
      clickLabel.current!.classList.toggle(styles.clickLabelVisible, isPointer);
    };

    // switched to a finger on a hybrid device
    const onTouch = () => {
      document.body.classList.remove(styles.active);
      clickLabel.current!.classList.remove(styles.clickLabelVisible);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchstart", onTouch);
      document.body.classList.remove(styles.active);
    };
  });

  return (
    <>
      <div ref={dot} className={styles.dot} aria-hidden="true" />
      <div ref={ring} className={styles.ring} aria-hidden="true">
        <span ref={clickLabel} className={styles.clickLabel}>
          Click!
        </span>
      </div>
    </>
  );
};
