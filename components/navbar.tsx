import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/cart", label: "Cart" }
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-slate-900">
          Silverwolf Store
        </Link>
        <div className="flex items-center gap-5 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
