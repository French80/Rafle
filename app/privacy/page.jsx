export const metadata = { title: 'Privacy — GiftHaven' };

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Privacy Policy</h1>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 space-y-3">
        <p className="text-gray-700">
          This is a starter privacy page. Before launching, tailor it to your analytics, email capture, ads, and any third-party services.
        </p>
        <h2 className="text-lg font-semibold pt-2">What we collect</h2>
        <p className="text-gray-700">
          By default, this starter site does not collect personal information. If you later enable analytics or contact forms, update this policy.
        </p>
        <h2 className="text-lg font-semibold pt-2">Affiliate links</h2>
        <p className="text-gray-700">
          Affiliate partners may use cookies or similar technologies to track purchases after you click an affiliate link.
        </p>
      </div>
    </div>
  );
}
