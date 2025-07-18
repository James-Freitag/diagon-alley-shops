"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isShopsOpen, setIsShopsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsShopsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md z-[999] sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-3xl font-bold text-[#4b2e2e]">
            <Link href="/">Diagon Alley</Link>
          </div>

          <div className="flex items-center gap-6 text-gray-700 text-xl font-bold">
            <Link href="/" className="hover:text-[#c9a66b] transition">
              Home
            </Link>

            {/* Shops Dropdown */}
            <div className="relative z-50" ref={dropdownRef}>
              <button
                onClick={() => setIsShopsOpen((prev) => !prev)}
                className="flex items-center gap-1 hover:text-[#c9a66b] transition cursor-pointer"
              >
                Shops <ChevronDown className="w-4 h-4 cursor-pointer" />
              </button>
              {isShopsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
                  <Link
                    href="/shop/ollivanders"
                    className="block px-4 py-2 hover:bg-indigo-50"
                    onClick={() => setIsShopsOpen(false)}
                  >
                    Ollivanders
                  </Link>
                  <Link
                    href="/shop/weasleys-wizard-wheezes"
                    className="block px-4 py-2 hover:bg-indigo-50"
                    onClick={() => setIsShopsOpen(false)}
                  >
                    Weasleys&apos; Wizard Wheezes
                  </Link>
                  <Link
                    href="/shop/madam-malkins"
                    className="block px-4 py-2 hover:bg-indigo-50"
                    onClick={() => setIsShopsOpen(false)}
                  >
                    Madam Malkin&apos;s
                  </Link>
                </div>
              )}
            </div>

            <Link href="/cart" className="hover:text-[#c9a66b] transition">
              Cart
            </Link>

            <Link href="/checkout" className="hover:text-[#c9a66b] transition">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
