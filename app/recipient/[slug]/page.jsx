import { notFound } from 'next/navigation';
import { recipients } from '../data/recipients';
import { getProductsByRecipient } from '../lib/catalog';
import ProductCard from '../components/ProductCard';

export function generateStaticParams() {
  return recipients.map((r) => ({ slug: r.slug }));
}

export default function RecipientPage({ params }) {
  const recipient = recipients.find((r) => r.slug === params.slug);
  if (!recipient) return notFound();

  const items = getProductsByRecipient(params.slug);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Gift ideas for {recipient.label}</h1>
        <p className="mt-2 text-gray-700">{recipient.description}</p>
        <p className="mt-3 text-xs text-gray-500">
          Disclosure: We may earn commissions from qualifying purchases via affiliate links.
        </p>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700">
          No gifts yet for this category. Add products in <code className="font-mono">data/products.js</code>.
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
