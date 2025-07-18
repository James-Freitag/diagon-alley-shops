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
  id: number;
  slug: string;
  name: string;
  description: string;
  image?: string;
};

export type ShopMap = {
  [key: string]: Shop;
};
