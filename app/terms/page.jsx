export const metadata = { title: 'Terms — GiftHaven' };

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Terms of Use</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
        <p className="text-gray-700">
          This is a starter terms page. Consider getting legal review before launching a commercial site.
        </p>
        <h2 className="text-lg font-semibold pt-2">No warranties</h2>
        <p className="text-gray-700">
          Gift ideas and descriptions are provided "as is". Prices, availability, and product details can change at any time.
        </p>
        <h2 className="text-lg font-semibold pt-2">External links</h2>
        <p className="text-gray-700">
          When you click an affiliate link, you leave GiftHaven and are subject to the third-party site's policies.
        </p>
      </div>
    </div>
  );
}
