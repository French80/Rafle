import Link from 'next/link';
import { recipients } from '../data/recipients';
import { occasions } from '../data/occasions';
import { getFeaturedProducts } from '../lib/catalog';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const featured = getFeaturedProducts(6);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-200">
        <h1 className="text-3xl font-bold tracking-tight">Find a gift in minutes</h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          Search gift ideas by who you’re shopping for, the occasion, and the vibe.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/search" className="rounded-xl bg-gray-900 px-5 py-3 text-white font-medium hover:opacity-90">
            Search gifts
          </Link>
          <Link href="/secret-santa" className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 font-medium hover:bg-gray-50">
            Secret Santa picker
          </Link>
        </div>
        <p className="mt-6 text-xs text-gray-500">
          Disclosure: We may earn commissions from qualifying purchases via affiliate links.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Shop by recipient</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recipients.map((r) => (
            <Link
              key={r.slug}
              href={`/recipient/${r.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <div className="font-semibold">{r.label}</div>
              <div className="mt-1 text-sm text-gray-700">{r.description}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Shop by occasion</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.slice(0, 6).map((o) => (
            <Link
              key={o.slug}
              href={`/occasion/${o.slug}`}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50"
            >
              <div className="font-semibold">{o.label}</div>
              <div className="mt-1 text-sm text-gray-700">{o.description}</div>
            </Link>
          ))}
          <Link href="/occasion/christmas" className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:bg-gray-50">
            <div className="font-semibold">All holidays →</div>
            <div className="mt-1 text-sm text-gray-700">Christmas, Mother’s Day, birthdays, and more.</div>
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Featured ideas</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
