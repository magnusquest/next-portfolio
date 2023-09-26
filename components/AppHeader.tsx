import Link from "next/link";

export default function AppHeader() {
  return (
    <>
      <header className="border-b-2 border-gray-400 flex justify-between items-center p-4">
        <nav>
          <ul className="flex gap-4 list-none">
            <li>
              <Link href="/" className="text-lg font-bold">
                Martin Cordero - Software Engineer
              </Link>
            </li>
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
        </nav>
      </header>
    </>
  );
}
