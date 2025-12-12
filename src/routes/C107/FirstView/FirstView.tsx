import { type FC } from "react";
import styles from "./FirstView.module.css";

const FirstView: FC = () => {
  return (
    <div className={styles.box}>
      <div className={`${styles.frame} ${styles.upperFrame}`}>Day 2</div>
      <div className={styles.content}>
        <div className={styles.mainContent}></div>
        <p className={`${styles.phrase} ${styles.lowerPhrase}`}>COMIC MARKET</p>
      </div>
      <div className={`${styles.frame} ${styles.lowerFrame}`}>
        South Area L Block 21b
      </div>
    </div>
    // <div className={styles.box}>
    //   <div className={styles.item}>
    //     <p className={styles.phrase}>なついろにっき。</p>
    //     <div className={styles.frame}>
    //       <div className={styles.ticket}>
    //         <div className={styles.checkBox}></div>
    //         <div className={styles.logo}></div>
    //         <div className={styles.ticketInfo}>
    //           <p className={styles.c107}>コミックマーケット107</p>
    //           <p className={styles.circle}>
    //             &emsp;南地区 Lブロック - 21b&emsp;
    //           </p>
    //         </div>
    //         <p className={styles.day}>2日目</p>
    //         <p className={styles.date}>December</p>
    //         <p className={styles.date}>31</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export { FirstView };
