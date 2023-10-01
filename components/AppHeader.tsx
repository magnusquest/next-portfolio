import Link from "next/link";

const navLinks = [
  {
    id: 1,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 2,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 3,
    name: "Develup",
    href: "#develup",
  },
];

export default function AppHeader() {
  return (
    <div className="flex justify-center border-b-2 border-gray-400 fixed top-0 w-full bg-inherit">
      <header className="items-center p-4 flex-col align-middle">
        <div className="flex justify-center">
          <Link href="/" className="text-lg font-bold flex justify-center">
            Martin Cordero - Software Engineer
          </Link>
        </div>
        <ul className="flex gap-x-24 list-none">
          {navLinks.map((nav: { id: number; name: string; href: string }) => (
            <li key={nav.id}>
              <Link href={nav.href} className="text-lg font-bold">
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-1/5 sm:w-1/10" />
      </header>
    </div>
  );
}
