import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { About, FirstView } from "./components";
import styles from "./App.module.css";

const App: FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      xTo.current = gsap.quickTo("[data-animate='cursor']", "x", {
        duration: 0.5,
        ease: "power3",
      });
      yTo.current = gsap.quickTo("[data-animate='cursor']", "y", {
        duration: 0.5,
        ease: "power3",
      });
    },
    { scope: container }
  );

  const moveCursor = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    if (xTo.current && yTo.current) {
      xTo.current(e.clientX);
      yTo.current(e.clientY);
    }
  });

  return (
    <div
      className={styles.container}
      ref={container}
      onMouseMove={(e) => moveCursor(e)}
    >
      <div data-animate="cursor" className={styles.cursor} />
      <FirstView />
      <About />
    </div>
  );
};

export default App;
