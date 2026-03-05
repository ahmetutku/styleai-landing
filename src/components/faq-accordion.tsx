"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "./reveal";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Do I need to buy new clothes for StyleAI to work?",
    answer: "No. StyleAI is built around your current closet and suggests outfits from what you already own.",
  },
  {
    question: "How long does closet setup take?",
    answer: "Most early users finish setup in about 10 to 15 minutes, then refine over time as they add items.",
  },
  {
    question: "Can I control what data is stored?",
    answer: "Yes. You can review, edit, and remove closet entries and preferences directly from your account settings.",
  },
  {
    question: "Is StyleAI available on iOS and Android?",
    answer: "Early access is focused on iOS first, with Android support planned after waitlist rollout.",
  },
  {
    question: "How can I join early access?",
    answer: "Use the Get Early Access button to reserve your place and receive launch updates.",
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto w-full max-w-4xl px-5 py-22 sm:px-8" aria-labelledby="faq-title">
      <Reveal>
        <h2 id="faq-title" className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <div className="mt-8 divide-y divide-stone-200 rounded-3xl border border-stone-200 bg-white/70">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-base font-medium text-stone-900 sm:text-lg">{faq.question}</span>
                <span className="text-stone-500">{isOpen ? "-" : "+"}</span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`faq-panel-${index}`}
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-stone-600">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
