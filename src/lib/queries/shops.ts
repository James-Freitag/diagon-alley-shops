import { tursoClient } from "../db";

export async function getShops() {
  const { rows } = await tursoClient.execute("SELECT * FROM shops");
  console.log(rows);
  return rows;
}
export async function getShopById(id: number) {
  const { rows } = await tursoClient.execute(
    "SELECT * FROM shops WHERE id = ?",
    [id]
  );
  return rows[0];
}
export async function getShopProducts(shopId: number) {
  const { rows } = await tursoClient.execute(
    "SELECT * FROM products WHERE shop_id = ?",
    [shopId]
  );
  return rows;
}

export async function getShopBySlug(slug: string) {
  const { rows } = await tursoClient.execute(
    "SELECT * FROM shops WHERE slug = ?",
    [slug]
  );
  return rows[0];
}
