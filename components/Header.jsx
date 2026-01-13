import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          GiftHaven
        </Link>

        <nav className="flex items-center gap-3 text-sm text-gray-700">
          <Link className="hover:text-gray-900" href="/search">Search</Link>
          <Link className="hover:text-gray-900" href="/secret-santa">Secret Santa</Link>
          <Link className="hover:text-gray-900" href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
