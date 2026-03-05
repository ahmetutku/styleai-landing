import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#trust", label: "Trust" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[rgba(250,247,241,0.8)] backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <Link href="#top" className="text-lg font-semibold tracking-tight text-stone-900">
          StyleAI
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-stone-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#early-access"
          className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
        >
          Get Early Access
        </Link>
      </nav>
    </header>
  );
}
