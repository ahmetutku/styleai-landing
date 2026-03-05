import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | StyleAI",
  description: "Read the StyleAI privacy policy and learn how closet data is handled.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="mb-10 sm:mb-12">
        <Link href="/" className="mb-6 flex items-center gap-2 text-gray-600 hover:text-black">
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M15 18 9 12l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Privacy Policy</h1>
      </header>

      <div className="space-y-8 text-base leading-relaxed text-stone-700 sm:text-lg">
        <section aria-labelledby="effective-date">
          <h2 id="effective-date" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Effective Date
          </h2>
          <p className="mt-3">Effective Date: April 21, 2025</p>
        </section>

        <section aria-labelledby="data-collection">
          <h2 id="data-collection" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Data Collection
          </h2>
          <p className="mt-3">
            StyleAI does not collect personal data such as names, emails, or contact information.
          </p>
          <p className="mt-3">
            Our app uses images stored locally on your device to suggest outfit combinations. These images are not
            uploaded to our servers unless explicitly sent by you to generate AI-based recommendations.
          </p>
        </section>

        <section aria-labelledby="ai-processing">
          <h2 id="ai-processing" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            AI Processing
          </h2>
          <p className="mt-3">
            We use the OpenAI API to help generate style suggestions. This means clothing descriptions or filenames may
            be processed by OpenAI, but we do not share your identity or other personal data with them.
          </p>
        </section>

        <section aria-labelledby="third-party-services">
          <h2 id="third-party-services" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Third-Party Services
          </h2>
          <p className="mt-3">
            StyleAI does not use any advertising or analytics SDKs. No third-party tracking is used.
          </p>
        </section>

        <section aria-labelledby="data-storage">
          <h2 id="data-storage" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Data Storage
          </h2>
          <p className="mt-3">
            By using StyleAI, you consent to the limited use of your closet data for outfit recommendations.
          </p>
        </section>

        <section aria-labelledby="user-control">
          <h2 id="user-control" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            User Control
          </h2>
          <p className="mt-3">You can delete all app data at any time by deleting the app.</p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold tracking-tight text-stone-900 sm:text-2xl">
            Contact
          </h2>
          <p className="mt-3">
            If you have any questions, contact us at: <a className="underline decoration-stone-400 underline-offset-4" href="mailto:styl3ai@gmail.com">styl3ai@gmail.com</a>
          </p>
        </section>
      </div>

    </main>
  );
}
