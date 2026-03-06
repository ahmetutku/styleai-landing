import { Reveal } from "./reveal";

const stats = ["3.2k waitlist", "89% weekly return", "4.9/5 early rating"];

export function SocialProof() {
  return (
    <Reveal className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 md:py-14" id="demo">
      <section className="rounded-3xl border border-stone-200 bg-white/65 px-6 py-7 backdrop-blur-sm sm:px-10" aria-label="Social proof">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500">Trusted by early users</p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex -space-x-3" aria-hidden="true">
              <div className="h-9 w-9 rounded-full border-2 border-[#f7f2ea] bg-stone-300" />
              <div className="h-9 w-9 rounded-full border-2 border-[#f7f2ea] bg-stone-400" />
              <div className="h-9 w-9 rounded-full border-2 border-[#f7f2ea] bg-stone-500" />
              <div className="h-9 w-9 rounded-full border-2 border-[#f7f2ea] bg-stone-600" />
            </div>

            {stats.map((stat) => (
              <span key={stat} className="rounded-full bg-stone-100 px-4 py-2 text-xs font-medium text-stone-700">
                {stat}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
