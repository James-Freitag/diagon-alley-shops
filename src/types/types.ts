export type Product = {
  name: string;
  description?: string;
  core?: string;
  wood?: string;
  length?: string;
  price?: string | number;
};

export type Shop = {
  name: string;
  description: string;
  products: Product[];
};

export type ShopMap = {
  [key: string]: Shop;
};
