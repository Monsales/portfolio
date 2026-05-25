import { ArrowRight, ExternalLink, Github, FolderOpen, Eye } from "lucide-react";
import dashboard from "@/assets/project-dashboard.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import travel from "@/assets/project-travel.jpg";

const projects = [
  {
    title: "TaskFlow Dashboard",
    desc: "A responsive project management dashboard with dark mode and team collaboration.",
    img: dashboard,
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "E-Commerce Website",
    desc: "Modern e-commerce website with cart, payment integration and admin panel.",
    img: ecommerce,
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Travel Website",
    desc: "A beautiful travel website with animations, locations and blog section.",
    img: travel,
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><FolderOpen className="h-4 w-4" /></span>
              My Recent Projects
            </h2>
            <a href="#" className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:underline">
              View All Projects <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article key={p.title} className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  <button className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass-strong opacity-0 group-hover:opacity-100 transition">
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10.5px] rounded-md px-2 py-1 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-white/10 text-white">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <a href="#" className="inline-flex items-center gap-1 rounded-full btn-neon px-3.5 py-1.5 text-xs font-medium text-white">
                      Live Demo <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href="#" className="inline-flex items-center gap-1 rounded-full glass border border-border px-3.5 py-1.5 text-xs">
                      <Github className="h-3 w-3" /> Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
