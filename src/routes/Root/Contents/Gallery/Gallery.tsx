import { GalleryArray } from "@/gallery";
import { Work } from "./Work/Work";
import styles from "./Gallery.module.css";
import { useRef, type FC } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Gallery: FC = () => {
  const frame = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to("[data-animate='work']", {
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
      <div className={styles.gallery}>
        <div className={styles.frame} ref={frame}>
          {GalleryArray.map((item, index) => (
            <div className={styles.work} data-animate="work" key={index}>
              <Work {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
