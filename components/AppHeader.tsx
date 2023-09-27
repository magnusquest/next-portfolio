import Link from "next/link";

export default function AppHeader() {
  return (
    <div className="flex justify-center border-b-2 border-gray-400">
      <header className="items-center p-4 flex-col align-middle">
        <div className="flex justify-center">
          <Link href="/" className="text-lg font-bold flex justify-center">
            Martin Cordero - Software Engineer
          </Link>
        </div>
        <ul className="flex gap-x-24 list-none">
          <li>
            <Link href="/blog" className="text-lg font-bold">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-lg font-bold">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg font-bold">
              Contact
            </Link>
          </li>
        </ul>
        <div className="w-1/5 sm:w-1/10" />
      </header>
    </div>
  );
}
