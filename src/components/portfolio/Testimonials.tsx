import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const items = [
  { name: "Maria Santos", role: "CEO, TechStart Inc.", img: t1, quote: "Ji delivered an exceptional website that exceeded our expectations. Professional, responsive and easy to work with!" },
  { name: "Robert Johnson", role: "Product Manager", img: t2, quote: "Highly skilled developer with great problem solving skills. The project was completed on time and the result was perfect." },
  { name: "Sarah Wilson", role: "Founder, Creative Studio", img: t3, quote: "Amazing work! Our website looks modern, fast and user-friendly. Will definitely work with him again." },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  return (
    <section id="testimonials" className="py-14">
      <div className="container mx-auto px-4">
        <div className="glass-strong neon-border rounded-3xl p-6 md:p-8">
          <h2 className="font-heading text-2xl font-bold flex items-center gap-2 mb-6">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><Quote className="h-4 w-4" /></span>
            What Clients Say
          </h2>

          <div className="relative">
            <div className="grid md:grid-cols-3 gap-4">
              {items.map((it, i) => (
                <div
                  key={it.name}
                  className={`glass rounded-2xl p-5 transition-all duration-500 ${
                    i === idx ? "scale-100 opacity-100 border-primary/40" : "scale-95 opacity-60 hidden md:block"
                  }`}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary text-lg leading-none mr-1">“</span>
                    {it.quote}
                    <span className="text-primary text-lg leading-none ml-1">”</span>
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={it.img} alt={it.name} width={48} height={48} loading="lazy" className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/40" />
                      <div>
                        <div className="text-sm font-semibold">{it.name}</div>
                        <div className="text-[11px] text-muted-foreground">{it.role}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, k) => (
                        <Star key={k} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={prev} aria-label="Previous" className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong neon-border hover:text-primary transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong neon-border hover:text-primary transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
