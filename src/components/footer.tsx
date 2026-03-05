import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#trust", label: "Trust" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 text-sm text-stone-600 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} StyleAI. All rights reserved.</p>

        <nav aria-label="Footer links" className="flex flex-wrap gap-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-stone-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
