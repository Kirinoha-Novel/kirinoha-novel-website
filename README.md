# 「きりのはのべる」のウェブサイト

このレポジトリは、「きりのはのべる」のウェブサイトとして機能します。

## セットアップ

### 前提条件

以下がインストールされていることを確認してください。

- Node.js
- npm
- git

Visual Studio Codeを使用している場合は、以下の拡張機能をインストールしてください。

- ecmel.vscode-html-css
- dsznajder.es7-react-js-snippets
- esbenp.prettier-vscode
- dbaeumer.vscode-eslint

### 手順

以下の手順に従って、開発環境を構築してください。

1. レポジトリをcloneして、レポジトリのディレクトリに移動

```sh
git clone https://github.com/Kirinoha-Novel/kirinoha-novel.git
cd kirinoha-novel
```

2. 以下のコマンドをレポジトリのルートで実行

```sh
npm install
```

## 開発サーバーの起動

```sh
npm run dev
```

## ビルドとビルドのプレビュー

```sh
# build command
npm run build
# preview command
npm run preview
```

## `News`の更新

`src/news.ts`を編集してください。

一つのNewsは以下のような形で記述します。

```ts
  {
    url: "News内容に関連したURLをここに記述してください。",
    date: "日付を YYYY/MM/DD の形式で記述してください。",
    content: "Newsの内容をここに記述してください。",
  },
```

Newsは、`infoArray`配列の最上部が最新のNewsとして表示されます。

そのため、追加するNewsを配列の最上部に追加してください。

以下は、`src/news.ts`の内容の例です。

```ts
import type { InfoProps } from "./routes/Root/Contents/News/info";

//* News Information *//
/*
export const infoArray: InfoProps[] = [
  # small index (New Information)
  {
    url: "https://x.com/kirinohanovel/status/1959571641484128619",
    date: "2025/08/24",
    content: "なついろにっき。のキービジュアル公開",
  },
  ...
  # large index (Old Information)
  {
    url: "https://x.com/kirinohanovel/status/1954498122555490540",
    date: "2025/08/10",
    content: "Xでの初投稿です！",
  },
]
*/
export const infoArray: InfoProps[] = [
  {
    url: "https://twitter.com/kirinohanovel/status/1715735377925805224",
    date: "2024/06/03",
    content: "体験版v0.6.0を公開しました！",
  },
];
```

## `History`の更新

`src/history.ts`の編集と`public/history/`配下への画像の追加を行ってください。

一つのHistoryは以下のような形で記述します。

```ts
  {
    imagePath: "/history/<画像ファイル名> というパスをここに記述してください。",
    width: 画像の幅 (px) をここに記述してください。,
    height: 画像の高さ (px) をここに記述してください。,
    title: "タイトルをここに記述してください。",
    description: "説明をここに記述してください。",
    date: "日付を YYYY/MM/DD の形式で記述してください。",
    url: "リンク先の URL をここに記述してください。",
  },
```

`width` と `height` には画像の元の大きさを記述してください。読み込み中のレイアウトのずれを防ぐために使います。
画像の大きさは、画像をブラウザで開くか、`ffprobe <画像ファイル>` などで確認できます。

Historyは、`historyArray`配列の最上部が最新のHistoryとして表示されます。

そのため、追加するHistoryを配列の最上部に追加してください。

以下は、`src/history.ts`の内容の例です。

```ts
import type { HistoryProps } from "./routes/Root/Contents/History/history";

//* History Information *//
/*
export const historyArray: HistoryProps[] = [
  # small index (New Information)
  {
    imagePath: "/history/natsuiro.webp",
    width: 1449,
    height: 2048,
    title: "なついろにっき。",
    description:
      "きりのはのべるの最初の作品「なついろにっき。」を公開しました。",
    date: "2025/08/24",
  },
  ...
  # large index (Old Information)
  {
    imagePath: "/history/establish.webp",
    width: 2508,
    height: 2508,
    title: "きりのはのべる 発足",
    description: "きりのはのべるが発足しました。",
    date: "2025/07/26",
  },
]
*/
export const historyArray: HistoryProps[] = [
  {
    imagePath: "/history/natsuiro.webp",
    width: 1449,
    height: 2048,
    title: "なついろにっき。",
    description:
      "きりのはのべるの最初の作品「なついろにっき。」を公開しました。",
    date: "2025/08/24",
  },
];
```

## `Gallery`の更新

`src/gallery.ts`の編集と`public/gallery/`配下への画像の追加を行ってください。

一つのGalleryは以下のような形で記述します。

```ts
  {
    imagePath: "/gallery/<画像ファイル名> というパスをここに記述してください。",
    alt: "画像の説明 (代替テキスト) をここに記述してください。",
    width: 画像の幅 (px) をここに記述してください。,
    height: 画像の高さ (px) をここに記述してください。,
    style: "cover または contain をここに記述してください。",
  },
```

`alt` は画像が表示できないときや読み上げソフトで使われます。`width` と `height` には画像の元の大きさを記述してください。

Galleryは、`galleryArray`配列の最上部が最新のGalleryとして表示されます。

そのため、追加するGalleryを配列の最上部に追加してください。

- `cover` と `contain` の違いについて

`cover`は、画像が枠全体 (250px × 250px) を覆うように拡大・縮小されます。画像の一部が切り取られることがありますが、枠全体が画像で満たされます。

`contain`は、画像が枠内に収まるように拡大・縮小されます。画像全体が表示されるため、枠のサイズに合わせて余白ができることがあります。

以下は、`src/gallery.ts`の内容の例です。

```ts
import type { GalleryProps } from "./routes/Root/Contents/Gallery/gallery";

//* Gallery Images *//
/*
export const galleryArray: GalleryProps[] = [
  # small index (New Images)
  {
    imagePath: "/gallery/natsuiro-key-visual.webp",
    alt: "「なついろにっき。」キービジュアル",
    width: 7096,
    height: 10031,
    style: "cover",
  },
  ...
  # large index (Old Images)
  {
    imagePath: "/gallery/establish.webp",
    alt: "きりのはのべる 発足記念イラスト",
    width: 2508,
    height: 2508,
    style: "cover",
  },
]
*/
export const galleryArray: GalleryProps[] = [
  {
    imagePath: "/gallery/natsuiro-key-visual.webp",
    alt: "「なついろにっき。」キービジュアル",
    width: 7096,
    height: 10031,
    style: "cover",
  },
];
```

## `Archive`の更新

`src/archive.ts`を編集してください。

一つのArchiveは以下のような形で記述します。

```ts
  {
    title: "シールに表示する文字をここに記述してください。",
    subtitle: "シールの下に表示する説明をここに記述してください。",
    url: "リンク先をここに記述してください。",
  },
```

`url` には、このサイト内のページなら `/c107` のようなパスを、外部のページなら `https://` から始まる URL を記述してください。

`title` は大きな POP 文字のシールになるので、`C107` のような短い文字にしてください。
`subtitle` が長いときは、枠が横に広がり、画面幅を超える場合は折り返して表示されます。

シールの色は、並び順に赤（下の文字はピンクのマーカー）と黄色（水色のマーカー）が交互になります。

Archiveは、`archiveArray`配列の最上部が最新のArchiveとして表示されます。

そのため、追加するArchiveを配列の最上部に追加してください。

以下は、`src/archive.ts`の内容の例です。

```ts
import type { ArchiveProps } from "./routes/Root/Contents/Archive/archive";

export const archiveArray: ArchiveProps[] = [
  {
    title: "C107",
    subtitle: "コミックマーケット107",
    url: "/c107",
  },
  {
    title: "CT1",
    subtitle: "コミックつくば",
    url: "/ct1",
  },
];
```

## トップページのセクションの追加

見出し付きのセクション（Topic, News など）は、`src/routes/Root/Contents/sections.ts` の `sections` 配列に並べた順で表示されます。
同じ配列から右パネルのインデックスタブも作られるので、セクションを追加するときはここに 1 行足すだけで、見出しとタブの両方に反映されます。

```ts
  { title: "見出しとタブに表示する名前", Section: セクションのコンポーネント },
```

色を付けるときは、以下も合わせて追加してください。

- タブの色: `src/shared/Label/Label.module.css` の `.tab:nth-child(n)`（n は配列の順番）
- 見出しのマーカーの色: `src/routes/Root/Contents/Title/Title.module.css` の `.title[id="<title を小文字にしたもの>"]`（指定しなければピンク）

タブが増えると、高さの低い画面で右パネルのシールがタブに重なることがあります。そのときは `Label.module.css` の各シールの `top: max(…, <px>)` の値を大きくしてください（今の値はタブ 6 つ分です）。

## CSS のスタイリングルール

### ファイルの置き場所

- スタイルは CSS Modules で書きます。コンポーネントと同じディレクトリに `<コンポーネント名>.module.css` を置き、`styles` という名前で import してください。
- クラス名は camelCase で付けます（例: `.imageWrapper`）。TSX からは `styles.imageWrapper` で参照します。
- グローバルなスタイルは `src/index.css` だけに書きます。書いてよいのは、リセット、`html` の背景色、`:root` の共通変数です。
  - 例外として、ページの背景色などページ全体に関わる指定は、各ページの CSS Modules で `html:has(.<ページのルート>)` に書きます（[ページの背景色](#ページの背景色--page-bg) を参照）。
- 複数のページやコンポーネントで使うスタイルは、共通の CSS Modules にまとめます。

| ファイル                            | 用途                                                      |
| ----------------------------------- | --------------------------------------------------------- |
| `src/shared/notebook.module.css`    | 手帳デザイン（トップページ・404）の共通スタイル           |
| `src/shared/event/event.module.css` | イベントページ（C107, Ct1）の見出し・説明文の共通スタイル |

- import には `@/` のパスエイリアスを使います（例: `import notebook from "@/shared/notebook.module.css";`）。
- 共通クラスと自前のクラスを組み合わせるときは、テンプレートリテラルで並べます。

```tsx
<div className={`${styles.blogContainer} ${notebook.paper} ${notebook.tape}`}>
```

### 共通の CSS 変数（`src/index.css` の `:root`）

色・文字サイズ・余白は、なるべく値を直接書かずに変数を使ってください。そのコンポーネントでしか使わない色（Archive のシールの赤・黄など）は、直接書いてもかまいません。

| 変数                                     | 内容                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------- |
| `--bg-color-brown` / `-beige` / `-cream` | 元デザイン（イベントページ）の背景色                                            |
| `--text-color`                           | 文字色（手帳デザインでは `--moe-text` に切り替わります）                        |
| `--moe-*`                                | 手帳デザインのパステル配色（`pink`, `blue`, `lavender`, `mint`, `yellow` など） |
| `--text-xs` 〜 `--text-6xl`              | 文字サイズ（`1rem * 8 / n` の段階）                                             |
| `--space-xs` 〜 `--space-6xl`            | 余白（`0.5rem` × フィボナッチ数の段階）                                         |
| `--label-width`                          | 右パネル（インデックスタブ）の幅                                                |

### ページの背景色（`--page-bg`）

`body` には背景色を付けません。`html` が `--page-bg` を背景色として使い、指定がないページはベージュ（`--bg-color-beige`）になります。

ページごとに色を変えるときは、そのページのルート要素の CSS で、`html:has()` を使って `--page-bg` を宣言してください。

```css
/* page color (see index.css) */
html:has(.container) {
  --page-bg: #ffffff;
}
```

- `html` に宣言するので、スクロールしすぎたときに見える端の部分まで同じ色になります。
- ページ内の子要素からも `var(--page-bg)` で同じ色を参照できます（例: `Loading`）。
- ページのルート要素自体に `background-color` を付ける必要はありません。
- 手帳デザインのページは、`notebook.page` を付けるだけで白（`--moe-white`）になります。

### 親から子へ渡す CSS 変数

共通コンポーネントの見た目は、使う側（親）が CSS 変数で切り替えます。子の CSS では、必ずフォールバック値を付けて参照してください（例: `var(--footer-bg, transparent)`）。

| 変数                                           | 宣言する場所                           | 効く場所                                          |
| ---------------------------------------------- | -------------------------------------- | ------------------------------------------------- |
| `--page-bg`                                    | 各ページの `html:has()`                | `html` の背景、`Loading`                          |
| `--back-to-top-bg`, `--footer-bg`, `--item-bg` | イベントページのルート要素             | `shared/event` の `BackToTop`, `Footer`, `Lineup` |
| `--header-height`                              | Ct1 のルート要素                       | Ct1 の `Header` と `FirstView`                    |
| `--text-color`, `--font-base`                  | `notebook.page`                        | 全体の文字色・フォント                            |
| `--marker-color`                               | `notebook.marker` を付けた要素かその親 | 蛍光マーカーの色（既定はピンク）                  |
| `--sticker-edge`                               | `notebook.sticker` を付けた要素        | シールの白い縁の太さ（既定は 6px）                |

### 手帳デザインの共通クラス（`notebook.module.css`）

| クラス       | 見た目                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| `page`       | ページのルートに付けます。文字色・フォント・白背景・スムーズスクロール |
| `ruled`      | 罫線                                                                   |
| `marginLine` | 左のピンクの余白線（PC のみ）                                          |
| `rings`      | 左端のリング綴じ（PC のみ）                                            |
| `marker`     | 蛍光マーカー                                                           |
| `pill`       | パステルのピル型ボタン（リンクとわかるよう下線付き）                   |
| `paper`      | 紙の影                                                                 |
| `tape`       | 上辺のマスキングテープ                                                 |
| `sticker`    | 白縁のシール                                                           |

新しく手帳デザインの装飾が必要になったら、ここに追加して使い回してください。

### フォント

フォントは `index.html` で Google Fonts から読み込んでいます。新しいフォントを使うときは、そこに追加してください。

| フォント        | 用途                                               |
| --------------- | -------------------------------------------------- |
| Klee One        | 既定のフォント（イベントページ）                   |
| Kiwi Maru       | 手帳デザインのフォント（`--font-base` で切り替え） |
| Noto Sans JP    | C107 のファーストビュー                            |
| Dela Gothic One | トップページ Archive の POP 文字シール             |

### レスポンシブ

- 右パネルは `1150px` 以上でだけ表示されます。PC 向けのレイアウトは `min-width: 1150px`、それ未満は `max-width: 1149px` で書き分けてください。
- 右パネルが出る幅では、コンテンツの幅を `calc(100% - var(--label-width))` にして、パネルと重ならないようにします。
- スマホ幅（360px 前後）で横スクロールが出ないことを確認してください。

### アニメーション

- スクロールで表示する要素は、CSS で `opacity: 0` にしておき、GSAP で表示します。
  - 1 つずつ表示するときは `useFadeUp`（`src/shared/useFadeUp.ts`）を使います。
  - 並んだ要素を順番に表示するときは、`data-animate` 属性と `useGSAP` の `stagger` を使います（`Gallery`, `Archive` を参照）。
- ページを移動したときのスクロール位置は `ScrollToTopOnNavigate`（`src/shared/ScrollToTopOnNavigate/ScrollToTopOnNavigate.tsx`）が先頭に戻します。

### その他

- サイト内のページへのリンクは、`<a href>` ではなく react-router の `Link` を使います。ページを再読み込みせずに移動でき、移動先は先頭から表示されます。
- 手帳デザインのリンクは下線なしが基本です。ボタンとして見せたいリンクには `notebook.pill` を使ってください。
- CSS のコメントは英語で、「何をしているか」より「なぜそうしているか」を短く書きます。
- 整形は Prettier に従います（VS Code の Prettier 拡張、または `npx prettier --write <ファイル>`）。
