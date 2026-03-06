import Image from "next/image";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-6xl gap-14 px-5 pt-16 pb-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
      <Reveal>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">Personal styling assistant</p>
        <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
          AI That Styles Your Closet
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600 sm:text-xl">
          Turn your existing wardrobe into effortless daily outfits. StyleAI learns what you own, your taste, and your calendar to generate looks in seconds.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            id="early-access"
            href="https://apps.apple.com/us/app/styleai-fashion-assistant/id6744303536"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Download for iPhone
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white/80 px-6 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-100"
          >
            View Demo
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mx-auto w-full max-w-sm">
        <div className="max-w-[420px] mx-auto">
          <Image
            src="/images/aioutfit.png"
            alt="StyleAI outfit recommendations"
            width={1200}
            height={2400}
            className="w-full h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}
