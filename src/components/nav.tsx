import Link from "next/link";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#trust", label: "Trust" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[rgba(250,247,241,0.82)] backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <div className="flex flex-1 items-center">
          <Link href="#top" className="text-lg font-semibold tracking-tight text-stone-900">
            StyleAI
          </Link>
        </div>

        <ul className="flex flex-1 items-center justify-center gap-8 text-sm text-stone-700 whitespace-nowrap">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-stone-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end">
          <a
            href="https://apps.apple.com/us/app/styleai-fashion-assistant/id6744303536"
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-stone-50 transition-transform duration-200 hover:-translate-y-0.5"
          >
            Download for iPhone
          </a>
        </div>
      </nav>
    </header>
  );
}
