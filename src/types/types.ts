export type Product = {
  name: string;
  description?: string;
  core?: string;
  wood?: string;
  length?: string;
  price?: string | number;
  image?: string;
};

export type Shop = {
  name: string;
  description: string;
  products: Product[];
  image?: string;
};

export type ShopMap = {
  [key: string]: Shop;
};
