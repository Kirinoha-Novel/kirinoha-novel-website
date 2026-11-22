import { useId, useRef, type FC } from "react";
import { Link } from "react-router";
import styles from "./Archive.module.css";
import notebook from "@/shared/notebook.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { archiveArray } from "@/archive";

export const Archive: FC = () => {
  const frame = useRef<HTMLDivElement | null>(null);
  const id = useId();

  // same entrance as the gallery
  useGSAP(
    () => {
      gsap.to("[data-animate='item']", {
        opacity: 1,
        y: -20,
        stagger: 0.1,
        scrollTrigger: {
          trigger: frame.current,
          start: "top center+=25%",
        },
      });
    },
    { scope: frame },
  );

  return (
    <section>
      <div className={styles.frame} ref={frame}>
        {archiveArray.map((item, index) => (
          <div className={styles.item} data-animate="item" key={item.url}>
            {/* only the sticker is the link (Link also takes external URLs);
                the subtitle is read out as its description */}
            <Link
              className={styles.sticker}
              to={item.url}
              aria-describedby={`${id}-${index}`}
            >
              {item.title}
            </Link>
            <span
              className={`${styles.caption} ${notebook.marker}`}
              id={`${id}-${index}`}
            >
              {item.subtitle}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
