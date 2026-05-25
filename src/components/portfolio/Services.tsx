import { Code2, Palette, Globe, Plug, Gauge, Headphones, ArrowRight, LayoutGrid } from "lucide-react";

const services = [
  { Icon: Code2, title: "Web Development", desc: "Custom websites and web applications using modern technologies.", color: "from-violet-500 to-fuchsia-500" },
  { Icon: Palette, title: "UI/UX Design", desc: "Beautiful, responsive interfaces that provide great user experience.", color: "from-pink-500 to-rose-500" },
  { Icon: Globe, title: "WordPress", desc: "Build, customize and optimize WordPress websites.", color: "from-sky-500 to-blue-500" },
  { Icon: Plug, title: "API Integration", desc: "Integrate third-party APIs and payment gateways seamlessly.", color: "from-cyan-500 to-teal-500" },
  { Icon: Gauge, title: "Performance Optimization", desc: "Improve website speed, SEO and overall performance.", color: "from-orange-500 to-amber-500" },
  { Icon: Headphones, title: "Maintenance & Support", desc: "Ongoing support, updates and bug fixing.", color: "from-rose-500 to-pink-500" },
];

export function Services() {
  return (
    <section id="services" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><LayoutGrid className="h-4 w-4" /></span>
              What I Do
            </h2>
            <a href="#contact" className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:underline">
              View All Services <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {services.map(({ Icon, title, desc, color }) => (
              <div
                key={title}
                className="group relative glass rounded-2xl p-5 hover:-translate-y-1 transition-all duration-300 hover:border-primary/40"
              >
                <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 font-semibold text-sm">{title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                     style={{ boxShadow: "0 0 30px -5px oklch(0.68 0.22 295 / 0.5)" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
