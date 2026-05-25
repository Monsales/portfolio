import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Github, Facebook, Twitter, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const contact = [
  { Icon: Mail, label: "Email", value: "ji.monsales@email.com" },
  { Icon: Phone, label: "Phone", value: "+63 912 345 6789" },
  { Icon: MapPin, label: "Location", value: "Manila, Philippines" },
  { Icon: Clock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const socials = [
  { Icon: Linkedin, label: "LinkedIn", handle: "linkedin.com/in/jimonsales", color: "text-sky-400" },
  { Icon: Github, label: "GitHub", handle: "github.com/jimonsales", color: "text-white" },
  { Icon: Facebook, label: "Facebook", handle: "facebook.com/jimonsales.dev", color: "text-blue-400" },
  { Icon: Twitter, label: "Twitter", handle: "twitter.com/jimonsales", color: "text-sky-300" },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <section id="contact" className="py-14">
      <div className="container mx-auto px-4 grid lg:grid-cols-[1fr_1.4fr_1fr] gap-5">
        <div className="glass-strong neon-border rounded-3xl p-6">
          <h2 className="font-heading text-xl font-bold flex items-center gap-2 mb-5">
            <span className="grid h-8 w-8 place-items-center rounded-lg btn-neon text-white"><MessageCircle className="h-4 w-4" /></span>
            Get In Touch
          </h2>
          <div className="space-y-4">
            {contact.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg glass text-primary"><Icon className="h-4 w-4" /></span>
                <div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                  <div className="text-sm font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass-strong neon-border rounded-3xl p-6">
          <div className="grid sm:grid-cols-2 gap-3">
            <input required name="name" placeholder="Your Name" className="rounded-xl glass border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition" />
            <input required type="email" name="email" placeholder="Your Email" className="rounded-xl glass border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition" />
          </div>
          <input required name="subject" placeholder="Subject" className="mt-3 w-full rounded-xl glass border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition" />
          <textarea required name="message" rows={6} placeholder="Your Message" className="mt-3 w-full rounded-xl glass border border-border px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition resize-none" />
          <button disabled={sending} type="submit" className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl btn-neon px-6 py-3 text-sm font-semibold text-white disabled:opacity-70">
            {sending ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
          </button>
        </form>

        <div className="glass-strong neon-border rounded-3xl p-6">
          <h3 className="font-heading text-lg font-bold mb-1">Let's Connect</h3>
          <p className="text-xs text-muted-foreground">Feel free to reach out to me through any of these platforms.</p>
          <div className="mt-5 space-y-3">
            {socials.map(({ Icon, label, handle, color }) => (
              <a key={label} href="#" className="flex items-start gap-3 glass rounded-xl p-3 hover:border-primary/40 transition">
                <span className={`grid h-9 w-9 place-items-center rounded-lg bg-white/5 ${color}`}><Icon className="h-4 w-4" /></span>
                <div>
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-[11px] text-muted-foreground">{handle}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
