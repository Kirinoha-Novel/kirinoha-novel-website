import { GalleryArray } from "../../../../gallery";
import { Work } from "./Work/Work";
import styles from "./Gallery.module.css";
import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Gallery: FC<Props> = (props: Props) => {
  const frame = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to("[data-animate='work']", {
        opacity: 1,
        y: -20,
        stagger: 0.1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: frame.current,
          start: "top center+=25%",
          markers: false,
        },
      });
    },
    { scope: frame }
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
