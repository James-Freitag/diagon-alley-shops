import { notFound } from "next/navigation";
import { Product, Shop, ShopMap } from "@/types/types";

export default function ShopPage({ params }: { params: { shop: string } }) {
  const shopId = params.shop;

  const shops: ShopMap = {
    ollivanders: {
      name: "Ollivanders: Makers of Fine Wands",
      description:
        '"No two wands are the same, just as no two unicorn hairs or phoenix feathers are the same."',
      products: [
        {
          name: "Elder Wand",
          core: "Thestral tail hair",
          wood: "Elder",
          length: "15 inches",
        },
        {
          name: "Phoenix Feather Wand",
          core: "Phoenix feather",
          wood: "Holly",
          length: "11 inches",
        },
        {
          name: "Unicorn Hair Wand",
          core: "Unicorn hair",
          wood: "Maple",
          length: "12 ¾ inches",
        },
      ],
    },
    "weasleys-wizard-wheezes": {
      name: "Weasleys' Wizard Wheezes",
      description: "Explosive laughter guaranteed. Handle with care.",
      products: [
        {
          name: "Skiving Snackbox",
          description:
            "A box of magical treats that help you skip class with ease.",
          price: "15 Galleons",
        },
        {
          name: "Extendable Ears",
          description:
            "Magical listening devices for eavesdropping on conversations.",
          price: "30 Galleons",
        },
        {
          name: "Fanged Flyer",
          description: "A bewitched paper plane that bites on command.",
          price: "8 Galleons",
        },
      ],
    },
    "madam-malkins": {
      name: "Madam Malkin's Robes for All Occasions",
      description:
        "Finely stitched wizarding robes for every magical moment — from Hogwarts uniforms to dress robes for the Yule Ball.",
      products: [
        {
          name: "Hogwarts School Robes",
          description: "Standard black school robes with house embroidery.",
          price: "20 Galleons",
        },
        {
          name: "Yule Ball Dress Robes",
          description: "Elegant robes enchanted for graceful movement.",
          price: "75 Galleons",
        },
      ],
    },
  };

  const shop: Shop | undefined = shops[shopId];

  if (!shop) return notFound();

  return (
    <main className="min-h-screen bg-[#fdfaf6] text-[#1a1a1a] px-6 py-10">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#5c4033] mb-4">
          {shop.name}
        </h1>
        <p className="text-lg text-gray-700">{shop.description}</p>
      </header>

      {shop.products.length ? (
        <section className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {shop.products.map((product: Product, idx: number) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-[#5c4033] mb-2">
                {product.name}
              </h2>
              <div className="text-gray-700 flex flex-col space-y-2">
                <p>{product.core && `Core: ${product.core}`}</p>
                <p>{product.wood && `Wood: ${product.wood}`} </p>
                <p>{product.length && `Length: ${product.length}`} </p>
                <p>{product.price && `Price: ${product.price}`}</p>
              </div>
              <button className="mt-4 bg-[#c9a66b] text-white px-4 py-2 rounded hover:bg-[#4b2e2e] transition">
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
