import { Github, Linkedin, Facebook, Twitter, Instagram, ArrowUp } from "lucide-react";

const quick = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8 relative">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl btn-neon font-bold text-white">JM</span>
                <div>
                  <div className="font-heading font-semibold">Ji Monsales</div>
                  <div className="text-xs text-muted-foreground">Senior Web Developer</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                {quick.map((q) => (
                  <li key={q.id}><a href={`#${q.id}`} className="hover:text-primary transition">{q.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Let's Connect</h4>
              <div className="flex gap-2">
                {[Github, Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full glass border border-border hover:border-primary/60 hover:text-primary transition">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-border text-center text-xs text-muted-foreground">
            © 2026 Ji Monsales. All Rights Reserved.
          </div>
          <a href="#home" aria-label="Back to top" className="absolute -top-5 right-6 grid h-10 w-10 place-items-center rounded-full btn-neon text-white">
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
