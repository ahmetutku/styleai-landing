import { Reveal } from "./reveal";

const steps = [
  {
    title: "Upload closet",
    description: "Snap photos or import past purchases so StyleAI understands your real wardrobe.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 7a2 2 0 0 1 2-2h3l2 2h5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Set preferences",
    description: "Choose your fit, colors, weather comfort, and style signals in under two minutes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 6v12" />
        <path d="M6 12h12" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
  {
    title: "Get outfits",
    description: "Receive polished outfit suggestions that match your day, from office meetings to weekends.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 4h8l1 5-2 11H9L7 9l1-5Z" />
        <path d="M10 9a2 2 0 1 1 4 0" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">How It Works</h2>
        <p className="mt-4 max-w-2xl text-lg text-stone-600">
          Three simple steps to turn what you already own into fresh looks every day.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <article className="h-full rounded-2xl border border-stone-200 bg-white/70 p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-stone-50">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900">{step.title}</h3>
              <p className="mt-3 text-stone-600">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
