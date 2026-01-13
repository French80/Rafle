'use client';

import { useMemo, useState } from 'react';

function parseNames(raw) {
  return raw
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseRestrictions(raw) {
  // Format: one restriction per line: "Giver > Receiver"
  const pairs = [];
  raw
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((line) => {
      const parts = line.split('>').map((s) => s.trim());
      if (parts.length === 2 && parts[0] && parts[1]) pairs.push([parts[0], parts[1]]);
    });
  return pairs;
}

function mulberry32(seed) {
  // Simple deterministic RNG so you can re-run with a new seed.
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(arr, rnd) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildForbiddenSet(names, restrictions) {
  const set = new Set();
  // No one can draw themselves.
  names.forEach((n) => set.add(`${n}|||${n}`));
  // Custom restrictions.
  restrictions.forEach(([a, b]) => set.add(`${a}|||${b}`));
  return set;
}

function tryAssign(names, forbidden, rnd, maxTries = 5000) {
  const givers = names.slice();
  for (let attempt = 0; attempt < maxTries; attempt++) {
    const receivers = shuffle(names, rnd);
    let ok = true;
    for (let i = 0; i < givers.length; i++) {
      if (forbidden.has(`${givers[i]}|||${receivers[i]}`)) {
        ok = false;
        break;
      }
    }
    if (ok) {
      const assignments = givers.map((g, i) => ({ giver: g, receiver: receivers[i] }));
      // Extra guard: all receivers unique by construction.
      return assignments;
    }
  }
  return null;
}

export default function SecretSantaPage() {
  const [namesRaw, setNamesRaw] = useState('Alice\nBob\nCharlie\nDana');
  const [restrictionsRaw, setRestrictionsRaw] = useState('');
  const [seed, setSeed] = useState(() => Math.floor(Math.random() * 1e9));
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const names = useMemo(() => parseNames(namesRaw), [namesRaw]);
  const restrictions = useMemo(() => parseRestrictions(restrictionsRaw), [restrictionsRaw]);

  function generate() {
    setError('');
    setResult(null);

    if (names.length < 3) {
      setError('Add at least 3 names.');
      return;
    }

    const forbidden = buildForbiddenSet(names, restrictions);
    const rnd = mulberry32(seed);
    const assignments = tryAssign(names, forbidden, rnd);
    if (!assignments) {
      setError('Could not find a valid assignment. Try changing the seed or relaxing restrictions.');
      return;
    }

    setResult(assignments);
  }

  async function copy() {
    if (!result) return;
    const text = result.map((x) => `${x.giver} → ${x.receiver}`).join('\n');
    await navigator.clipboard.writeText(text);
  }

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Secret Santa name selector</h1>
        <p className="mt-2 text-gray-700">Runs entirely in your browser. Nothing is saved on a server.</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <label className="block text-sm font-medium" htmlFor="names">Names (one per line)</label>
          <textarea
            id="names"
            value={namesRaw}
            onChange={(e) => setNamesRaw(e.target.value)}
            rows={8}
            className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2"
          />

          <label className="mt-4 block text-sm font-medium" htmlFor="restrictions">Optional restrictions (one per line: <span className="font-mono">Giver &gt; Receiver</span>)</label>
          <textarea
            id="restrictions"
            value={restrictionsRaw}
            onChange={(e) => setRestrictionsRaw(e.target.value)}
            rows={4}
            placeholder="Example: Alice > Bob"
            className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2"
          />

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSeed(Math.floor(Math.random() * 1e9))}
              className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              New seed
            </button>
            <div className="text-xs text-gray-600">Seed: <span className="font-mono">{seed}</span></div>
          </div>

          <div className="mt-5 flex gap-3">
            <button
              onClick={generate}
              className="rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Generate assignments
            </button>
            <button
              onClick={copy}
              disabled={!result}
              className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
            >
              Copy
            </button>
          </div>

          {error ? (
            <p className="mt-4 text-sm text-red-700">{error}</p>
          ) : null}
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-semibold">Results</h2>
          <p className="mt-2 text-sm text-gray-700">
            Tip: If you want it truly secret, copy the list and privately message each person their receiver.
          </p>

          {!result ? (
            <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
              Generate assignments to see results.
            </div>
          ) : (
            <ul className="mt-4 space-y-2">
              {result.map((x) => (
                <li key={x.giver} className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-2">
                  <span className="font-medium">{x.giver}</span>
                  <span className="text-gray-600">→</span>
                  <span>{x.receiver}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 text-sm text-gray-700">
        <p className="font-medium">Want to use this for gift shopping?</p>
        <p className="mt-2">After assigning names, head to <a className="underline" href="/occasion/christmas">Christmas gift ideas</a> or <a className="underline" href="/search">search</a>.</p>
      </section>
    </div>
  );
}
