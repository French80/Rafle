import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-sm text-gray-700">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Some links on this site are affiliate links, which means we may earn a commission at no extra cost to you.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link className="hover:underline" href="/disclosure">Disclosure</Link>
          <Link className="hover:underline" href="/privacy">Privacy</Link>
          <Link className="hover:underline" href="/terms">Terms</Link>
        </div>

        <p className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} Rafle. All rights reserved.</p>
      </div>
    </footer>
  );
}
