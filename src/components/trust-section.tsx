import Link from "next/link";
import { Reveal } from "./reveal";

export function TrustSection() {
  return (
    <section id="trust" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="rounded-3xl border border-stone-200 bg-white/70 p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500">Trust</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Privacy-first, by default</h2>
            <p className="mt-5 text-lg leading-relaxed text-stone-600">
              StyleAI is designed to help you style your clothes, not profile your life. We only store the closet data you add, your style preferences, and basic account settings required to run your experience.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Sign in uses secure authentication. You can edit or remove your closet data at any time, and we keep language clear so you always know what is saved.
            </p>
            <Link
              href="/privacy"
              className="mt-6 inline-flex items-center rounded-full border border-stone-300 px-5 py-2.5 text-sm font-medium text-stone-800 transition hover:bg-stone-100"
            >
              Learn more about privacy
            </Link>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="h-full rounded-3xl border border-stone-300/80 bg-gradient-to-b from-[#f5efe5] to-[#e7ddd0] p-8 shadow-[0_10px_45px_-30px_rgba(61,47,32,0.7)]">
            <h3 className="text-xl font-semibold text-stone-900">Security & Privacy</h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone-700">
              <li>Encrypted account sessions</li>
              <li>Closet and preference data only</li>
              <li>No ad network sharing</li>
              <li>Delete your data anytime</li>
            </ul>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
