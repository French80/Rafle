'use client';

import { useMemo, useState } from 'react';
import { searchProducts, getAllProducts } from '@/lib/catalog';
import ProductCard from '@/components/ProductCard';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return getAllProducts().slice(0, 12);
    return searchProducts(query).slice(0, 24);
  }, [query]);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Search gifts</h1>
        <p className="mt-2 text-gray-700">Try keywords like <em>cooking</em>, <em>fitness</em>, <em>teen</em>, or <em>under $25</em>.</p>
      </header>

      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <label className="block text-sm font-medium text-gray-900" htmlFor="q">What are you shopping for?</label>
        <input
          id="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search gift ideas..."
          className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-base focus:border-gray-900"
        />
        <p className="mt-3 text-xs text-gray-500">Disclosure: We may earn commissions from qualifying purchases via affiliate links.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {results.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
