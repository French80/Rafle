export default function ProductCard({ product }) {
  return (
    <a
      href={product.affiliateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border bg-white overflow-hidden hover:shadow-md transition"
    >
      <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition"
          />
        ) : (
          <div className="text-4xl">🎁</div>
        )}
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500">{product.merchant}</div>

        <div className="mt-1 font-semibold leading-snug">
          {product.title}
        </div>

        {product.blurb ? (
          <div className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.blurb}
          </div>
        ) : null}

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-800">
            {product.price || ""}
          </div>

          <div className="inline-flex items-center justify-center rounded-xl bg-black text-white px-3 py-2 text-sm font-semibold hover:opacity-90 transition">
            View on {product.merchant === "Amazon" ? "Amazon" : "Store"}
          </div>
        </div>

        <p className="mt-3 text-[11px] text-gray-500">
          Affiliate link. We may earn from qualifying purchases.
        </p>
      </div>
    </a>
  );
}
