import ProductCard from "../../components/ProductCard";
import { getProducts } from "../../lib/catalog";

export default function SearchPage({ searchParams }) {
  const max = searchParams?.max ? Number(searchParams.max) : undefined;
  const sort = searchParams?.sort || "fresh";

  const list = getProducts({ max, sort });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Search</h1>
      <p className="mt-2 text-gray-600">
        Browse gift ideas. Use filters to narrow things down.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a href="/search?sort=fresh" className="rounded-xl border px-4 py-2 text-sm hover:bg-white">
          Fresh
        </a>
        <a href="/search?sort=popular" className="rounded-xl border px-4 py-2 text-sm hover:bg-white">
          Popular
        </a>
        <a href="/search?sort=budget" className="rounded-xl border px-4 py-2 text-sm hover:bg-white">
          Budget
        </a>

        <a href="/search?max=25" className="rounded-xl border px-4 py-2 text-sm hover:bg-white">
          Under $25
        </a>
        <a href="/search?max=50" className="rounded-xl border px-4 py-2 text-sm hover:bg-white">
          Under $50
        </a>
        <a href="/search?max=100" className="rounded-xl border px-4 py-2 text-sm hover:bg-white">
          Under $100
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
