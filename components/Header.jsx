import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Rafle
        </Link>

        <nav className="flex gap-4 text-sm">
  <Link href="/recipient/men" className="hover:underline">Recipients</Link>
  <Link href="/occasion/christmas" className="hover:underline">Occasions</Link>
  <Link href="/secret-santa" className="hover:underline">Secret Santa</Link>
  <Link href="/search" className="hover:underline">Search</Link>
</nav>
      </div>
    </header>
  );
}
