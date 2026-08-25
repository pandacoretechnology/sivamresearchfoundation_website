"use client";

import Dropdown from "../components/Dropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Spacer to prevent content jump when navbar is fixed */}
      <div className="h-20 max-sm:h-20 md:h-24 min-[640px]:h-16 lg:h-24" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-4 sm:px-6 md:px-12 lg:px-28 py-3 sm:py-4 flex justify-between items-center shadow-2xs">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/nav/logo_prim.png"
            alt="Sivam Research Foundation Logo"
            width={190}
            height={190}
            className="w-24 h-10 max-sm:w-40 max-sm:h-15 md:w-42 md:h-16 lg:w-45 lg:h-16 object-contain"
            priority
          />
        </Link>

        {/* Navigation Links - Right (Desktop) */}
        <div className="hidden lg:flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 font-medium items-center">
          <Link
            href="/"
            className={`hover:text-[#32B866] text-sm transition-colors ${
              pathname === "/"
                ? "text-[#32B866] font-semibold"
                : "text-gray-700 hover:text-[#32B866]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-[#32B866] text-sm transition-colors ${
              pathname === "/about"
                ? "text-[#32B866] font-semibold"
                : "text-gray-700 hover:text-[#32B866]"
            }`}
          >
            About
          </Link>

          <div>
            <Dropdown />
          </div>

          <Link
            href="/contact"
            className={`hover:text-[#32B866] text-sm transition-colors ${
              pathname === "/contact"
                ? "text-[#32B866] font-semibold"
                : "text-gray-700 hover:text-[#32B866]"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:flex font-medium items-center">
          <Link
            href="/contact"
            className="bg-[#0F6E57] hover:bg-[#0c5946] text-white px-5 sm:px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all text-sm whitespace-nowrap font-semibold"
          >
            Get in Touch
          </Link>
        </div>

        {/* Hamburger Menu - Mobile & Tablet */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 focus:outline-none p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Mobile Menu - Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300 ease-out z-50">
            <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 py-5 text-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#0F6E57] text-base font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#0F6E57] text-base font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <div className="py-1 flex justify-center">
                <Dropdown />
              </div>

              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#0F6E57] text-base font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-[#0F6E57] text-white px-6 py-2.5 rounded-full hover:bg-[#0c5946] transition-colors text-sm font-semibold inline-block mx-auto mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
