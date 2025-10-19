export type SizeType = "Small" | "Large";

export type ItemType = {
  size: SizeType;
  imagePath: string;
  width: number;
  height: number;
  name: string;
  price: number;
};
