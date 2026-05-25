import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github, Linkedin, Facebook, Instagram, Rocket, Briefcase, Users, Award } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import hero from "@/assets/hero-portrait.jpg";

const titles = ["Senior Web Developer", "UI/UX Engineer", "Full-Stack Builder"];

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}

const techs = [
  { Icon: FaHtml5, label: "HTML5", color: "text-orange-400" },
  { Icon: FaCss3Alt, label: "CSS3", color: "text-blue-400" },
  { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { Icon: FaReact, label: "React", color: "text-cyan-400" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400" },
];

const stats = [
  { Icon: Rocket, value: "5+", label: "Years Experience", color: "text-sky-400" },
  { Icon: Briefcase, value: "25+", label: "Projects Completed", color: "text-violet-400" },
  { Icon: Users, value: "20+", label: "Happy Clients", color: "text-amber-400" },
  { Icon: Award, value: "100%", label: "Client Satisfaction", color: "text-emerald-400" },
];

export function Hero() {
  const typed = useTypewriter(titles);

  return (
    <section id="home" className="relative pt-32 pb-12 md:pt-36 md:pb-20">
      {/* glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-10 -left-10 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-blob [animation-delay:-6s]" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
            <span>👋</span> Hi, I'm
          </span>
          <h1 className="mt-5 font-heading font-bold text-5xl md:text-7xl tracking-tight">
            Ji Monsales
          </h1>
          <p className="mt-2 font-display text-3xl md:text-5xl">
            <span className="text-gradient italic font-semibold">{typed}</span>
            <span className="caret" />
          </p>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            I build modern, responsive and high-performance websites with clean code, great UI/UX, and best practices.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full btn-neon px-6 py-3 text-sm font-semibold text-white">
              Hire Me <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold border border-border hover:bg-white/5 transition">
              View My Work <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-xs text-muted-foreground">Let's connect</span>
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
            ].map(({ Icon, href }, idx) => (
              <a key={idx} href={href} className="grid h-10 w-10 place-items-center rounded-lg glass border border-border hover:border-primary/60 hover:text-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/40 via-fuchsia-500/20 to-cyan-500/30 blur-2xl" />
            <div className="relative glass-strong neon-border rounded-3xl overflow-hidden">
              <img src={hero} alt="Ji Monsales at coding workstation" width={1024} height={1024} className="w-full h-auto" />
            </div>

            {/* floating tech badges */}
            <div className="hidden md:flex absolute -right-6 top-4 flex-col gap-2.5">
              {techs.map(({ Icon, label, color }, idx) => (
                <div key={label} className="glass rounded-xl pl-2 pr-3 py-2 flex items-center gap-2 text-xs animate-float" style={{ animationDelay: `${(idx * 0.3) % 2}s` }}>
                  <Icon className={`h-5 w-5 ${color}`} />
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* stats bar */}
          <div className="mt-6 glass-strong neon-border rounded-2xl px-3 py-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map(({ Icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-3 px-2">
                <span className={`grid h-9 w-9 place-items-center rounded-lg glass ${color}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-bold text-lg leading-none">{value}</div>
                  <div className="text-[10.5px] text-muted-foreground mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
