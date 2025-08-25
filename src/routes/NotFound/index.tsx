import styles from "./index.module.css";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.statusCode}>- 404 -</h1>
        <h2 className={styles.message}>
          お探しのページが見つかりませんでした。
        </h2>
        <Link className={styles.link} to="/">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
