import ProductCard from "../../../components/ProductCard";
import { getProducts } from "../../../lib/catalog";
import { getOccasionBySlug } from "../../../data/occasions";

export default async function OccasionPage({ params, searchParams }) {
  const occasion = params.slug;

  const sort = searchParams?.sort || "fresh";
  const list = await getProducts({ occasion, sort });

  ...
}

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">
        Gifts for {occasionInfo?.name || occasion}
      </h1>

      <p className="mt-2 text-gray-600">
        Curated gift ideas for this occasion. Updated regularly.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={`/occasion/${occasion}?sort=fresh`}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-white"
        >
          Fresh
        </a>
        <a
          href={`/occasion/${occasion}?sort=popular`}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-white"
        >
          Popular
        </a>
        <a
          href={`/occasion/${occasion}?sort=budget`}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-white"
        >
          Budget
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
