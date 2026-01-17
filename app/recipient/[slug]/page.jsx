import ProductCard from "../../../components/ProductCard";
import { getProducts } from "../../../lib/catalog";
import { getRecipientBySlug } from "../../../data/recipients";

export default async function RecipientPage({ params }) {
  const recipient = params.slug;
  const recipientInfo = getRecipientBySlug(recipient);

  const list = await getProducts({ recipient, sort: "fresh" });

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">
        Gifts for {recipientInfo?.name || recipient}
      </h1>

      <p className="mt-2 text-gray-600">
        Curated gift ideas. Updated regularly to keep things fresh.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={`/recipient/${recipient}?sort=fresh`}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-white"
        >
          Fresh
        </a>
        <a
          href={`/recipient/${recipient}?sort=popular`}
          className="rounded-xl border px-4 py-2 text-sm hover:bg-white"
        >
          Popular
        </a>
        <a
          href={`/recipient/${recipient}?sort=budget`}
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
