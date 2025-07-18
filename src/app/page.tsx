import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-parchment min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[400px] flex flex-col justify-center items-center text-center px-4 py-20"
        style={{
          backgroundImage: `url('/diagon-alley-hero.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-xl text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Welcome to Diagon Alley
          </h1>
          <p className="text-lg mb-6">
            Discover the most enchanting shops in the wizarding world — from
            wands and robes to joke tricks and potions. Your magical shopping
            starts here!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/shop"
              className="bg-[#c9a66b] border-white border px-6 py-3 rounded font-semibold hover:bg-transparent transition"
            >
              Browse Shops
            </Link>
            <Link
              href="/cart"
              className="border border-white text-white px-6 py-3 rounded hover:bg-[#4b2e2e] transition font-semibold"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold text-wandwood mb-8 text-center">
          Featured Shops
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Link
            href="/shop/ollivanders"
            className="border rounded-lg p-6 hover:shadow-lg hover:border-[#c9a66b] hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-wandwood">
              Ollivanders
            </h3>
            <p>The finest wand shop in all of Britain. Choose wisely.</p>
          </Link>
          <Link
            href="/shop/weasleys-wizard-wheezes"
            className="border rounded-lg p-6 hover:shadow-lg hover:border-[#c9a66b] hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-wandwood">
              Weasleys&apos; Wizard Wheezes
            </h3>
            <p>Joke items, trick sweets, and controlled chaos for all ages.</p>
          </Link>
          <Link
            href="/shop/madam-malkins"
            className="border rounded-lg p-6 hover:shadow-lg hover:border-[#c9a66b] hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-2 text-wandwood">
              Madam Malkin&apos;s
            </h3>
            <p>Robes for all occasions — school, formal, or dramatic exits.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
