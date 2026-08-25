"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Dropdown() {
  const pathname = usePathname();
  const isServicesActive = pathname && pathname.startsWith("/services");

  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm max-sm:text-base font-medium rounded-lg transition-colors ${
          isServicesActive
            ? "text-[#32B866] font-semibold"
            : "text-gray-700 hover:text-[#32B866]"
        }`}
      >
        <span>Services</span>
        <ChevronDownIcon className="h-4 w-4" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        transition
        className="mt-2 w-64 z-50 origin-top-right rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 p-2 transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 focus:outline-none"
      >
        <MenuItem>
          {({ focus }) => (
            <Link
              href="/services"
              className={`block px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-800 border-b border-gray-100 ${
                focus ? "bg-emerald-50" : "bg-transparent"
              }`}
            >
              All Services Overview →
            </Link>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <Link
              href="/services/rehabilitation-services"
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === "/services/rehabilitation-services"
                  ? "bg-emerald-50 text-[#0F6E57] font-semibold"
                  : focus
                  ? "bg-gray-50 text-gray-900"
                  : "text-gray-700"
              }`}
            >
              Rehabilitation Services
            </Link>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <Link
              href="/services/counselling-services"
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === "/services/counselling-services"
                  ? "bg-emerald-50 text-[#0F6E57] font-semibold"
                  : focus
                  ? "bg-gray-50 text-gray-900"
                  : "text-gray-700"
              }`}
            >
              Counselling Services
            </Link>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <Link
              href="/services/internship-and-training"
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === "/services/internship-and-training"
                  ? "bg-emerald-50 text-[#0F6E57] font-semibold"
                  : focus
                  ? "bg-gray-50 text-gray-900"
                  : "text-gray-700"
              }`}
            >
              Internship & Training
            </Link>
          )}
        </MenuItem>

        <MenuItem>
          {({ focus }) => (
            <Link
              href="/services/research-and-publication"
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === "/services/research-and-publication"
                  ? "bg-emerald-50 text-[#0F6E57] font-semibold"
                  : focus
                  ? "bg-gray-50 text-gray-900"
                  : "text-gray-700"
              }`}
            >
              Research & Publication (IJMHPS)
            </Link>
          )}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
