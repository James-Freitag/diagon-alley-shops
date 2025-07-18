import { tursoClient } from "../db";

export async function getProducts(shopId: number) {
  const { rows } = await tursoClient.execute(
    "SELECT * FROM products WHERE shop_id = ?",
    [shopId]
  );
  return rows;
}

export async function getProductById(id: number) {
  const { rows } = await tursoClient.execute(
    "SELECT * FROM products WHERE id = ?",
    [id]
  );
  return rows[0];
}
