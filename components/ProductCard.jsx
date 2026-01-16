import Image from 'next/image';
import AffiliateLink from './AffiliateLink';

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-24 w-24 flex-none overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <Image src={product.image || '/placeholder.svg'} alt="" fill sizes="96px" />
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold text-gray-900 truncate">
              {product.title}
            </h3>
            <span className="rounded-full border border-gray-200 px-2 py-0.5 text-xs text-gray-700">
              {product.price}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-700 overflow-hidden">{product.blurb}</p>
          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="text-xs text-gray-500">Merchant: {product.merchant}</span>
            <AffiliateLink
              href={product.affiliateUrl}
              className="inline-flex items-center rounded-lg bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:opacity-90"
            >
              View gift
            </AffiliateLink>
          </div>
        </div>
      </div>
    </div>
  );
}
