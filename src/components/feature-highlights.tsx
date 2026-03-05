import { Reveal } from "./reveal";

type Feature = {
  title: string;
  description: string;
  label: string;
};

const features: Feature[] = [
  {
    label: "Daily Looks",
    title: "Outfits generated from your real closet",
    description:
      "Your suggestions come from the pieces you already own, balanced by weather, occasion, and your personal taste.",
  },
  {
    label: "Smart Planning",
    title: "Plan a week of outfits in minutes",
    description:
      "Build calm mornings with pre-planned looks for work, events, and travel, with quick swaps when plans shift.",
  },
  {
    label: "Style Memory",
    title: "Learns what you wear and love",
    description:
      "StyleAI improves over time by remembering your favorite combinations and avoiding items you skip.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-22 sm:px-8" aria-label="Feature highlights">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">Feature Highlights</h2>
      </Reveal>

      <div className="mt-12 space-y-20">
        {features.map((feature, index) => {
          const reverse = index % 2 === 1;
          return (
            <div key={feature.title} className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal delay={0.02}>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500">{feature.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">{feature.title}</h3>
                <p className="mt-4 max-w-xl text-lg text-stone-600">{feature.description}</p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mx-auto w-full max-w-md rounded-3xl border border-stone-300/70 bg-stone-100/70 p-3">
                  <div className="aspect-[9/16] rounded-2xl border border-stone-300/70 bg-gradient-to-b from-stone-50 to-stone-200 p-4">
                    <div className="h-full rounded-xl border border-stone-200 bg-white/70 p-4">
                      <div className="h-4 w-1/2 rounded-full bg-stone-200" />
                      <div className="mt-3 h-4 w-2/3 rounded-full bg-stone-100" />
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="aspect-square rounded-lg bg-stone-200" />
                        <div className="aspect-square rounded-lg bg-stone-300" />
                        <div className="aspect-square rounded-lg bg-stone-300" />
                        <div className="aspect-square rounded-lg bg-stone-200" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
