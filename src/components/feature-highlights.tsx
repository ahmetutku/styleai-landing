import Image from "next/image";
import { Reveal } from "./reveal";

type Feature = {
  title: string;
  description: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
};

const features: Feature[] = [
  {
    label: "Daily Looks",
    title: "Outfits generated from your real closet",
    description:
      "Your suggestions come from the pieces you already own, balanced by weather, occasion, and your personal taste.",
    imageSrc: "/images/closetview.png",
    imageAlt: "StyleAI closet grid view",
  },
  {
    label: "Smart Planning",
    title: "Plan a week of outfits in minutes",
    description:
      "Build calm mornings with pre-planned looks for work, events, and travel, with quick swaps when plans shift.",
    imageSrc: "/images/createyouroutfit.png",
    imageAlt: "StyleAI outfit builder categories",
  },
  {
    label: "Style Memory",
    title: "Learns what you wear and love",
    description:
      "StyleAI improves over time by remembering your favorite combinations and avoiding items you skip.",
    imageSrc: "/images/aiscreen.png",
    imageAlt: "StyleAI learning style preferences",
  },
];

export function FeatureHighlights() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8" aria-label="Feature highlights">
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
                <div className="max-w-[420px] mx-auto">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    width={1200}
                    height={2400}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
