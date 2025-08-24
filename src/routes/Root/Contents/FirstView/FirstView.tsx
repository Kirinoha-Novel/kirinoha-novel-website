import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, type FC, type RefObject } from "react";
import styles from "./FirstView.module.css";

type Props = {
  contentsRef: RefObject<HTMLDivElement | null>;
};

const FirstView: FC<Props> = (props: Props) => {
  const catchPhrase = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      gsap.to(catchPhrase.current, {
        opacity: 1,
        duration: 2,
      });
    },
    { scope: props.contentsRef }
  );

  return (
    <div className={styles.firstView}>
      <div className={styles.keyVisualWrapper}>
        <div>
          <div className={styles.catchPhraseWrapper}>
            <h2 className={styles.catchPhrase} ref={catchPhrase}>
              「きりのは」が綴る物語
            </h2>
          </div>
          <img className={styles.keyVisual} src="/leaf.png" alt="leaf" />
        </div>
      </div>
    </div>
  );
};

export default FirstView;
