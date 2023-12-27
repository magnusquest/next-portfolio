"use client";

import Link from "next/link";
import { navLinks } from "@/models/navLinks";

export default function Hamburger() {
  var isOpen = false;

  function setIsOpen(value: boolean) {
    isOpen = value;
    console.log(isOpen);
  }

  return (
    <div
      className="block md:hidden fixed top-4 left-4 z-50 h-1/3"
      id="mobile-menu"
    >
      <div>
        <button
          type="button"
          className="w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-14 w-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-200 p-8">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
