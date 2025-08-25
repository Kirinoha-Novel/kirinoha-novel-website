# 「きりのはのべる」のウェブサイト

## セットアップ

```sh
git clone https://github.com/Kirinoha-Novel/kirinoha-novel.git
cd kirinoha-novel
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

```typescript
  {
    url: "News内容に関連したURLをここに記述してください。",
    date: "日付を YYYY/MM/DD の形式で記述してください。",
    content: "Newsの内容をここに記述してください。",
  },
```

Newsは、`InfoProps`配列の最上部が最新のNewsとして表示されます。

そのため、追加するNewsを配列の最上部に追加してください。

以下は、`src/news.ts`の内容の例です。

```typescript

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
]
```

## `Products`の更新

`src/products.ts`の編集と`public/products/`配下への画像の追加を行ってください。

一つのProductsは以下のような形で記述します。

```typescript
  {
    imagePath: "/products/<画像ファイル名> というパスをここに記述してください。",
    title: "タイトルをここに記述してください。",
    description: "説明をここに記述してください。",
    date: "日付を YYYY/MM/DD の形式で記述してください。",
  },
```

Productsは、`ProductsProps`配列の最上部が最新のProductsとして表示されます。

そのため、追加するProductsを配列の最上部に追加してください。

以下は、`src/products.ts`の内容の例です。

```typescript
import type { ProductsProps } from "./routes/Root/Contents/Products/products";

//* Products Information *//
/*
export const productsArray: ProductsProps[] = [
  # small index (New Information)
  {
    imagePath: "/products/natsuiro.webp",
    title: "なついろにっき。",
    description:
      "きりのはのべるの最初の作品「なついろにっき。」を公開しました。",
    date: "2025/08/24",
  },
  ...
  # large index (Old Information)
  {
    imagePath: "/products/establish.webp",
    title: "きりのはのべる 発足",
    description: "きりのはのべるが発足しました。",
    date: "2025/07/26",
  },
]
*/
export const productsArray: ProductsProps[] = [
  {
    imagePath: "/products/natsuiro.webp",
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

```typescript
  {
    imagePath: "/gallery/<画像ファイル名> というパスをここに記述してください。",
    style: "cover または contain をここに記述してください。",
  },
```

Galleryは、`GalleryProps`配列の最上部が最新のGalleryとして表示されます。

そのため、追加するGalleryを配列の最上部に追加してください。

- `cover` と `contain` の違いについて

`cover`は、画像が枠全体 (250px × 250px) を覆うように拡大・縮小されます。画像の一部が切り取られることがありますが、枠全体が画像で満たされます。

`contain`は、画像が枠内に収まるように拡大・縮小されます。画像全体が表示されるため、枠のサイズに合わせて余白ができることがあります。

以下は、`src/gallery.ts`の内容の例です。

```typescript
import type { GalleryProps } from "./routes/Root/Contents/Gallery/gallery";

//* Gallery Images *//
/*
export const infoArray: InfoProps[] = [
  # small index (New Images)
  {
    imagePath: "/gallery/natsuiro-key-visual.webp",
    style: "cover",
  },
  ...
  # large index (Old Images)
  {
    imagePath: "/gallery/establish.webp",
    style: "cover",
  },
]
*/
export const GalleryArray: GalleryProps[] = [
  {
    imagePath: "/gallery/natsuiro-key-visual.webp",
    style: "cover",
  },
];
```