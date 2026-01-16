import Link from "next/link";

const occasionCards = [
  { title: "Birthday", slug: "birthday", emoji: "🎂" },
  { title: "Christmas", slug: "christmas", emoji: "🎄" },
  { title: "Valentine’s Day", slug: "valentines-day", emoji: "💘" },
  { title: "Mother’s Day", slug: "mothers-day", emoji: "💐" },
  { title: "Father’s Day", slug: "fathers-day", emoji: "🧢" },
  { title: "Graduation", slug: "graduation", emoji: "🎓" },
];

export default function OccasionIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="text-3xl font-extrabold">Gift ideas by occasion</h1>
      <p className="mt-2 text-gray-600">
        Holidays, birthdays, and all the calendar traps.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {occasionCards.map((o) => (
          <Link
            key={o.slug}
            href={`/occasion/${o.slug}`}
            className="rounded-2xl border bg-white p-4 hover:shadow-md transition flex items-center gap-3"
          >
            <div className="text-2xl">{o.emoji}</div>
            <div className="font-semibold">{o.title}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
