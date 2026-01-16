import Link from "next/link";

const recipientCards = [
  { title: "Men", slug: "men", emoji: "🧔" },
  { title: "Women", slug: "women", emoji: "👩" },
  { title: "Boys", slug: "boys", emoji: "🧒" },
  { title: "Girls", slug: "girls", emoji: "👧" },
  { title: "Anyone", slug: "anyone", emoji: "🎁" },
];

export default function RecipientIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Gift ideas by recipient</h1>
      <p className="mt-2 text-gray-600">
        Pick who you’re buying for and we’ll show curated gift ideas.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {recipientCards.map((r) => (
          <Link
            key={r.slug}
            href={`/recipient/${r.slug}`}
            className="rounded-2xl border bg-white p-4 hover:shadow-md transition flex items-center gap-3"
          >
            <div className="text-2xl">{r.emoji}</div>
            <div className="font-semibold">{r.title}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
