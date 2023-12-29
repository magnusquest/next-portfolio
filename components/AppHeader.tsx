import Link from "next/link";
import { navLinks } from "@/models/navLinks";

export default function AppHeader() {
  return (
    <div className="hidden md:block border-b-2 border-gray-400 fixed top-0 w-full bg-inherit">
      <div className="flex justify-center">
        <header className="items-center p-4 flex-col align-middle">
          <ul className="flex gap-x-24 list-none">
            {navLinks.map((nav: { id: number; name: string; href: string }) => (
              <li key={nav.id}>
                <Link href={nav.href}>
                  <h2>{nav.name}</h2>
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-1/5 sm:w-1/10" />
        </header>
      </div>
    </div>
  );
}
