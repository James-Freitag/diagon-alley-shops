import { notFound } from "next/navigation";
// import { Product, Shop, ShopMap } from "@/types/types";
import Image from "next/image";
// db import
import { getProducts } from "@/lib/queries/products";
import { getShopBySlug } from "@/lib/queries/shops";
//types

export default async function ShopPage({
  params,
}: {
  params: { shop: string };
}) {
  const shopData = await getShopBySlug(params.shop);
  console.log("Shop Data:", shopData);

  if (!shopData.id) {
    return notFound();
  }
  const products = await getProducts(shopData.id);
  if (!products) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#1a1a1a] px-6 py-10">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#5c4033] mb-4">
          {shopData.name}
        </h1>
        <p className="text-lg text-gray-700">{shopData.description}</p>
      </header>

      {products.length ? (
        <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, idex) => (
            <div
              key={idex}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition "
            >
              <h2 className="text-xl font-semibold text-[#5c4033] mb-2">
                {product.name}
              </h2>
              <div className="flex space-x-4">
                <div className=" min-h-[150px] min-w-[150px]">
                  <Image
                    width={150}
                    height={150}
                    src={`/${product.image}`}
                    alt="product image"
                    className="object-cover object-center border border-black"
                  />
                </div>
                <div className="text-gray-700 flex flex-col space-y-1">
                  <p className=" min-h-[170px]">
                    {product.description && `${product.description}`}{" "}
                  </p>
                  <p className="font-bold">
                    {product.price && `Price: ʛ ${product.price}`}
                  </p>
                </div>
              </div>
              <button className="mt-4 bg-[#c9a66b] text-white px-4 py-2 rounded hover:bg-[#4b2e2e] transition w-full cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-center text-gray-600">No products available.</p>
      )}
    </main>
  );
}
