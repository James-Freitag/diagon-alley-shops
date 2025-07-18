import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-gray-200 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Shop Info */}
        <div>
          <h3 className="text-wandwood font-semibold mb-2">
            About Diagon Alley
          </h3>
          <p>
            Explore the finest magical shops — from wand makers to joke
            emporiums. Diagon Alley brings the wizarding world to your
            fingertips.
          </p>
        </div>

        {/* Shop Categories */}
        <div>
          <h3 className="text-wandwood font-semibold mb-2">Shops</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="/shop/ollivanders"
                className="hover:text-darkwood transition"
              >
                Ollivanders
              </Link>
            </li>
            <li>
              <Link
                href="/shop/weasleys-wizard-wheezes"
                className="hover:text-darkwood transition"
              >
                Weasleys&apos; Wizard Wheezes
              </Link>
            </li>
            <li>
              <Link
                href="/shop/madam-malkins"
                className="hover:text-darkwood transition"
              >
                Madam Malkin&apos;s
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-wandwood font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/help" className="hover:text-darkwood transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-darkwood transition">
                Returns & Exchanges
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-darkwood transition">
                Shipping Info
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-darkwood transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal / Social */}
        <div>
          <h3 className="text-wandwood font-semibold mb-2">More</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/privacy" className="hover:text-darkwood transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-darkwood transition">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/newsletter"
                className="hover:text-darkwood transition"
              >
                Newsletter Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 text-center py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} Diagon Alley Shops. All rights reserved.
        100% muggle safe...we think.
      </div>
    </footer>
  );
}
