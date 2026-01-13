export const metadata = { title: 'About — GiftHaven' };

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">About GiftHaven</h1>
      <p className="text-gray-700 max-w-3xl">
        GiftHaven is a clean, family-friendly gift idea site. We curate ideas by recipient and occasion so you can find a thoughtful present fast.
      </p>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold">How we make money</h2>
        <p className="mt-2 text-gray-700 max-w-3xl">
          Some links on this site are affiliate links, which means we may earn a commission if you buy something—at no extra cost to you.
        </p>
        <p className="mt-2 text-gray-700">
          <strong>As an Amazon Associate I earn from qualifying purchases.</strong>
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">Add a contact email or form when you’re ready.</p>
      </div>
    </div>
  );
}
