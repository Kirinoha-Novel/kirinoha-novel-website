import styles from "./index.module.css";
import notebook from "@/shared/notebook.module.css";
import { Link } from "react-router";
import { Cursor } from "@/shared/Cursor/Cursor";
import { Label } from "@/shared/Label/Label";

const NotFound = () => {
  return (
    <div
      className={`${styles.container} ${notebook.page} ${notebook.ruled} ${notebook.marginLine}`}
    >
      <title>ページが見つかりません | きりのはのべる</title>
      {/* keep the 404 page out of search results (the server answers 200) */}
      <meta name="robots" content="noindex" />
      <div className={notebook.rings}></div>
      <main>
        <h1 className={`${styles.statusCode} ${notebook.marker}`}>404</h1>
        <p className={styles.message}>
          <span className={styles.phrase}>お探しのページが</span>
          <span className={styles.phrase}>見つかりませんでした。</span>
        </p>
        <Link className={`${styles.link} ${notebook.pill}`} to="/">
          ホームに戻る
        </Link>
      </main>
      <Label tabs={[{ label: "404" }]} />
      <Cursor />
    </div>
  );
};

export default NotFound;
