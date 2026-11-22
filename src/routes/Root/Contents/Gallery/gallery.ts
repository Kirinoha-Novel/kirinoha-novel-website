export type ImageStyle = "cover" | "contain";

export type GalleryProps = {
  imagePath: string;
  alt: string;
  width: number;
  height: number;
  style: ImageStyle;
};
