import { useRef, type FC, type RefObject } from "react";
import styles from "./Event.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type ImageProps = {
  imagePath: string;
  title: string;
  imageRef: RefObject<HTMLDivElement | null>;
};

const Image: FC<ImageProps> = (props: ImageProps) => {
  return (
    <div className={styles.imageWrapper} ref={props.imageRef}>
      <img className={styles.image} src={props.imagePath} alt={props.title} />
    </div>
  );
};

type TextProps = {
  title: string;
  description: string;
  textRef: RefObject<HTMLDivElement | null>;
};

const Text: FC<TextProps> = (props: TextProps) => {
  return (
    <div className={styles.textWrapper} ref={props.textRef}>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

type EventProps = {
  index: number;
  imagePath: string;
  title: string;
  description: string;
  date: string;
  contentsRef: RefObject<HTMLDivElement | null>;
};

export const Event: FC<EventProps> = (props: EventProps) => {
  const image = useRef<HTMLDivElement | null>(null);
  const text = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(image.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: image.current,
          start: "top center",
          markers: true,
        },
      });

      gsap.to(text.current, {
        opacity: 1,
        y: -20,
        duration: 1,
        scrollTrigger: {
          scroller: props.contentsRef.current,
          trigger: text.current,
          start: "top center",
          markers: true,
        },
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <div className={styles.container}>
      <div className={styles.itemWrapper}>
        <div className={styles.rightItem}>
          {props.index % 2 == 0 ? (
            <Image
              imagePath={props.imagePath}
              title={props.title}
              imageRef={image}
            />
          ) : (
            <Text
              title={props.title}
              description={props.description}
              textRef={text}
            />
          )}
        </div>
        <div className={styles.leftItem}>
          {props.index % 2 == 0 ? (
            <Text
              title={props.title}
              description={props.description}
              textRef={text}
            />
          ) : (
            <Image
              imagePath={props.imagePath}
              title={props.title}
              imageRef={image}
            />
          )}
        </div>
      </div>
      <small className={styles.date}>{props.date}</small>
    </div>
  );
};
