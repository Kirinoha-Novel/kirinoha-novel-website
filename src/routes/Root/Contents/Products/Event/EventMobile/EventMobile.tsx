import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { EventProps } from "../event";
import styles from "./EventMobile.module.css";

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

export const EventMobile: FC<EventProps> = (props: EventProps) => {
  const image = useRef<HTMLDivElement | null>(null);
  const text = useRef<HTMLDivElement | null>(null);
  const date = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    gsap.to(image.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: image.current,
        start: "top center+=25%",
        markers: false,
      },
    });

    gsap.to(text.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: text.current,
        start: "top center+=25%",
        markers: false,
      },
    });

    gsap.to(date.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: date.current,
        start: "top center+=25%",
        markers: false,
      },
    });
  });

  return (
    <div className={styles.container}>
      <Image imagePath={props.imagePath} title={props.title} imageRef={image} />
      <a href={props.url}>
        <Text
          title={props.title}
          description={props.description}
          textRef={text}
        />
        <small className={styles.date} ref={date}>
          {props.date}
        </small>
      </a>
    </div>
  );
};
