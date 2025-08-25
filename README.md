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
    date: "2023/01/01",
  },
  ...
  # large index (Old Information)
  {
    imagePath: "/products/establish.webp",
    title: "きりのはのべる 発足",
    description: "きりのはのべるが発足しました。",
    date: "2023/01/01",
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
