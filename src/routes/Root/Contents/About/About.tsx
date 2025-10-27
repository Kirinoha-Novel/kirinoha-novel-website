import { useRef, type FC, type RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";
import circleLogo from "../../assets/logo.webp";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

const About: FC<Props> = (props: Props) => {
  const logoWrapper = useRef<HTMLDivElement | null>(null);
  const description = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    gsap.to(logoWrapper.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: logoWrapper.current,
        start: "top center+=25%",
        markers: false,
      },
    });

    gsap.to(description.current, {
      opacity: 1,
      y: -20,
      duration: 1,
      scrollTrigger: {
        scroller: props.contentsRef.current,
        trigger: description.current,
        start: "top center+=25%",
        markers: false,
      },
    });
  });

  return (
    <section>
      <div className={styles.logoWrapper} ref={logoWrapper}>
        <img className={styles.logo} src={circleLogo} alt="circle logo" />
      </div>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description} ref={description}>
          同人美少女ゲーム制作サークル「きりのはのべる」です。
          <br />
          弊団体は筑波大生が集い、同人の美少女ゲーム/ノベルゲームを制作しています。
          筑波大学を飛び越えてみなさんに萌えをお届けします。
        </p>
      </div>
    </section>
  );
};

export { About };
