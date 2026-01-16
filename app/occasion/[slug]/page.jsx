import { notFound } from 'next/navigation';
import { occasions } from "../../../data/occasions";
import { getProductsByOccasion } from '@/lib/catalog';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return occasions.map((o) => ({ slug: o.slug }));
}

export default function OccasionPage({ params }) {
  const occasion = occasions.find((o) => o.slug === params.slug);
  if (!occasion) return notFound();

  const items = getProductsByOccasion(params.slug);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">{occasion.label} gift ideas</h1>
        <p className="mt-2 text-gray-700">{occasion.description}</p>
        <p className="mt-3 text-xs text-gray-500">
          Disclosure: We may earn commissions from qualifying purchases via affiliate links.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
          No gifts yet for this occasion. Add products in <code className="font-mono">data/products.js</code>.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
