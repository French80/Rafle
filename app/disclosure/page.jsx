export const metadata = { title: 'Disclosure — GiftHaven' };

export default function DisclosurePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Affiliate Disclosure</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
        <p className="text-gray-700">
          Some links on GiftHaven are affiliate links. If you click a link and make a purchase, we may earn a commission at no extra cost to you.
        </p>
        <p className="text-gray-700">
          We only include products we believe make good gifts, and we write our own descriptions.
        </p>
        <p className="text-gray-700 font-semibold">
          As an Amazon Associate I earn from qualifying purchases.
        </p>
        <p className="text-sm text-gray-600">
          If you have questions, add a contact email here.
        </p>
      </div>
    </div>
  );
}
