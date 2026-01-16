import Link from "next/link";

const recipientCards = [
  { title: "Men", slug: "men", emoji: "🧔" },
  { title: "Women", slug: "women", emoji: "👩" },
  { title: "Boys", slug: "boys", emoji: "🧒" },
  { title: "Girls", slug: "girls", emoji: "👧" },
  { title: "Anyone", slug: "anyone", emoji: "🎁" },
];

const occasionCards = [
  { title: "Birthday", slug: "birthday", emoji: "🎂" },
  { title: "Christmas", slug: "christmas", emoji: "🎄" },
  { title: "Valentine’s Day", slug: "valentines-day", emoji: "💘" },
  { title: "Mother’s Day", slug: "mothers-day", emoji: "💐" },
  { title: "Father’s Day", slug: "fathers-day", emoji: "🧢" },
  { title: "Graduation", slug: "graduation", emoji: "🎓" },
];

const budgetCards = [
  { title: "Under $25", min: 0, max: 25, emoji: "💸" },
  { title: "Under $50", min: 0, max: 50, emoji: "💵" },
  { title: "Under $100", min: 0, max: 100, emoji: "💳" },
];

function Section({ title, subtitle, children }) {
  return (
    <section className="mt-10">
      <div className="mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {subtitle ? <p className="text-sm text-gray-600 mt-1">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function CardLink({ href, emoji, title }) {
  return (
    <Link
      href={href}
      className="rounded-2xl border bg-white p-4 hover:shadow-md transition flex items-center gap-3"
    >
      <div className="text-2xl">{emoji}</div>
      <div className="font-semibold">{title}</div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      {/* HERO */}
      <div className="rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Find gift ideas fast.
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Browse by recipient, occasion, or budget. Clean picks, no chaos, no panic scrolling at 2AM.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="/search"
            className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold hover:opacity-90 transition"
          >
            Search gifts
          </Link>

          <Link
            href="/secret-santa"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold hover:bg-white transition"
          >
            Secret Santa picker
          </Link>
        </div>

        {/* Disclosure line near the action */}
        <p className="mt-4 text-xs text-gray-500">
          Some links may be affiliate links. As an Amazon Associate, we may earn from qualifying purchases.
        </p>
      </div>

      {/* RECIPIENTS */}
      <Section
        title="Shop by recipient"
        subtitle="Start here if you know who you're buying for."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {recipientCards.map((r) => (
            <CardLink
              key={r.slug}
              href={`/recipient/${r.slug}`}
              emoji={r.emoji}
              title={r.title}
            />
          ))}
        </div>
      </Section>

      {/* OCCASIONS */}
      <Section
        title="Shop by occasion"
        subtitle="Because the calendar keeps attacking you."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {occasionCards.map((o) => (
            <CardLink
              key={o.slug}
              href={`/occasion/${o.slug}`}
              emoji={o.emoji}
              title={o.title}
            />
          ))}
        </div>
      </Section>

      {/* BUDGET */}
      <Section
        title="Budget picks"
        subtitle="For when 'thoughtful' is competing with 'I have bills'."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {budgetCards.map((b) => (
            <CardLink
              key={b.title}
              href={`/search?max=${b.max}`}
              emoji={b.emoji}
              title={b.title}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
