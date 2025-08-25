import { useRef, type FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { NotFound, Root } from "./routes";
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
    <Router>
      <div
        ref={container}
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => moveCursor(e)}
      >
        <div data-animate="cursor" className={styles.cursor} />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
