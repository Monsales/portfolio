import { BarChart3, Cpu } from "lucide-react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPhp, FaGitAlt, FaGithub, FaWordpress, FaBootstrap, FaFigma,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiPostman, SiNetlify, SiCanva,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { useInView } from "@/hooks/use-in-view";

const skills = [
  { name: "HTML5", pct: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS3", pct: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", pct: 90, color: "from-yellow-400 to-amber-500" },
  { name: "React.js", pct: 85, color: "from-cyan-400 to-sky-500" },
  { name: "Tailwind CSS", pct: 90, color: "from-sky-400 to-blue-500" },
  { name: "Node.js", pct: 80, color: "from-emerald-500 to-green-500" },
  { name: "PHP", pct: 75, color: "from-indigo-500 to-violet-500" },
  { name: "MySQL", pct: 80, color: "from-fuchsia-500 to-purple-500" },
];

const tech = [
  { Icon: FaHtml5, label: "HTML5", color: "text-orange-500", bg: "bg-orange-500/10" },
  { Icon: FaCss3Alt, label: "CSS3", color: "text-blue-500", bg: "bg-blue-500/10" },
  { Icon: SiJavascript, label: "JavaScript", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { Icon: FaReact, label: "React", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-sky-400", bg: "bg-sky-400/10" },
  { Icon: FaBootstrap, label: "Bootstrap", color: "text-violet-400", bg: "bg-violet-400/10" },
  { Icon: FaGitAlt, label: "Git", color: "text-orange-500", bg: "bg-orange-500/10" },
  { Icon: FaGithub, label: "GitHub", color: "text-white", bg: "bg-white/10" },
  { Icon: VscCode, label: "VS Code", color: "text-sky-400", bg: "bg-sky-400/10" },
  { Icon: FaFigma, label: "Figma", color: "text-pink-400", bg: "bg-pink-400/10" },
  { Icon: FaNodeJs, label: "Node.js", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { Icon: FaWordpress, label: "WordPress", color: "text-sky-400", bg: "bg-sky-400/10" },
  { Icon: FaPhp, label: "PHP", color: "text-indigo-400", bg: "bg-indigo-400/10" },
  { Icon: SiMysql, label: "MySQL", color: "text-rose-400", bg: "bg-rose-400/10" },
  { Icon: SiFirebase, label: "Firebase", color: "text-amber-400", bg: "bg-amber-400/10" },
  { Icon: SiCanva, label: "Canva", color: "text-sky-400", bg: "bg-sky-400/10" },
  { Icon: SiPostman, label: "Postman", color: "text-orange-500", bg: "bg-orange-500/10" },
  { Icon: SiNetlify, label: "Netlify", color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { Icon: SiMongodb, label: "MongoDB", color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-14">
      <div ref={ref} className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr] gap-5">
        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><BarChart3 className="h-4 w-4" /></span>
            My Skills
          </h2>
          <div className="space-y-4">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="font-semibold">{s.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${s.color} transition-[width] duration-1500 ease-out`}
                    style={{ width: inView ? `${s.pct}%` : "0%", transitionDuration: "1500ms" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><Cpu className="h-4 w-4" /></span>
            Technologies &amp; Tools
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tech.map(({ Icon, label, color, bg }) => (
              <div
                key={label}
                className={`group glass rounded-xl p-3 flex flex-col items-center gap-1.5 hover:-translate-y-1 transition-all hover:border-primary/40`}
              >
                <span className={`grid h-10 w-10 place-items-center rounded-lg ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </span>
                <span className="text-[10.5px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
