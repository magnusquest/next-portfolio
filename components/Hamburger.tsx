"use client";

import Link from "next/link";
import { navLinks } from "@/models/navLinks";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const trayClassVariants = {
    open: "absolute -top-4 -right-4 w-screen h-screen bg-black-800 p-8 transition-all duration-1000 ease-in-out opacity-90 backdrop-blur-sm",
    closed:
      "absolute -top-4 -right-full w-screen h-screen bg-black-800 p-8 transition-all duration-1000 ease-in-out opacity-90 backdrop-blur-md",
  };

  var NavigationTray = (
    <div
      className={`${trayClassVariants[isOpen ? "open" : "closed"]} ...`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex h-full justify-center items-center">
        <ul className="flex flex-col justify-center items-center h-full">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="w-full text-center bg-black rounded border border-white px-5 m-5"
            >
              <Link href={link.href}>
                <h2 className="text-lg font-bold">{link.name}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div
      className="block md:hidden fixed top-4 right-4 z-50 h-1/3"
      id="mobile-menu"
    >
      <div>
        <button
          type="button"
          className="w-full rounded-full border border-white p-5 bg-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon />
        </button>
      </div>
      {isOpen ? NavigationTray : null}
    </div>
  );
}

function MenuIcon() {
  return (
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
  );
}
