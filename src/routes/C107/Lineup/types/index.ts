export type SizeType = "Small" | "Large";

export type ItemType = {
  size: SizeType;
  imagePath: string;
  width: number;
  name: string;
  price: number;
};
