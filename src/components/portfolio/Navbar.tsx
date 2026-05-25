import { useEffect, useState } from "react";
import { Menu, X, Send } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-1.5rem))]">
      <nav className="glass-strong neon-border rounded-2xl px-4 md:px-5 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl btn-neon font-bold text-white">JM</span>
          <div className="hidden sm:block leading-tight">
            <div className="font-heading font-semibold text-sm">Ji Monsales</div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
              Senior Web Developer
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_oklch(0.78_0.2_150/0.7)]" />
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative px-3 py-2 rounded-lg transition-colors ${
                  active === l.id ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet shadow-[0_0_8px_oklch(0.68_0.22_295/0.8)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full btn-neon px-4 py-2 text-sm font-medium text-white"
          >
            Let's Talk <Send className="h-3.5 w-3.5" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-lg glass"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mt-2 glass-strong neon-border rounded-2xl p-3 animate-in fade-in slide-in-from-top-2">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm ${
                    active === l.id ? "bg-primary/20 text-white" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
