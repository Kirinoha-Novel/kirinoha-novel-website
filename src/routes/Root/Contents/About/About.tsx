import { useRef, type FC } from "react";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import styles from "./About.module.css";
import { useFadeUp } from "@/shared/useFadeUp";
import notebook from "@/shared/notebook.module.css";

const About: FC = () => {
  const photo = useRef<HTMLDivElement | null>(null);
  const description = useRef<HTMLParagraphElement | null>(null);

  useFadeUp([photo, description]);

  return (
    <section>
      <div className={styles.photoWrapper} ref={photo}>
        <img
          className={styles.photo}
          src="/gallery/establish.webp"
          width={2508}
          height={2508}
          alt="きりのはのべる 発足"
        />
        {/* SNS stickers */}
        <a
          className={`${styles.sticker} ${notebook.sticker}`}
          href="https://x.com/kirinohanovel/"
          aria-label="X"
        >
          <BsTwitterX className={styles.stickerIcon} />
        </a>
        <a
          className={`${styles.sticker} ${notebook.sticker}`}
          href="https://github.com/Kirinoha-Novel/"
          aria-label="GitHub"
        >
          <BsGithub className={styles.stickerIcon} />
        </a>
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
