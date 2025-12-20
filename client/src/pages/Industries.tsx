import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Palette, Cpu, Zap, Camera } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Fashion & Apparel",
      icon: ShoppingBag,
      desc: "From supply chain sustainability to viral micro-aesthetics. We track the threads that matter.",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Beauty & Wellness",
      icon: Palette,
      desc: "Clean beauty, biotech skincare, and the new definition of self-care.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Tech & SaaS",
      icon: Cpu,
      desc: "User adoption signals and emerging workflow behaviors for B2B and B2C.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "D2C Brands",
      icon: Zap,
      desc: "Customer acquisition costs, retention loops, and unboxing psychology.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Creator Economy",
      icon: Camera,
      desc: "Platform shifts, monetization models, and community dynamics.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Industries We <span className="text-primary">Track</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our intelligence engine is vertical-agnostic but depth-obsessed. Here's where we shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div key={item.title} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 p-8 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-bl-full group-hover:scale-150 transition-all duration-500" />
              
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white/10 transition-colors relative z-10">
                <item.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-bold font-display mb-3 relative z-10">{item.title}</h3>
              <p className="text-muted-foreground mb-8 relative z-10">{item.desc}</p>
              
              <Link href="/audit">
                <span className="inline-flex items-center text-sm font-semibold text-white/70 hover:text-white transition-colors cursor-pointer relative z-10">
                  See case studies <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            </div>
          ))}
          
          {/* CTA Card */}
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold font-display mb-2 text-white">Don't see yours?</h3>
            <p className="text-white/90 mb-6 font-medium">We create custom tracking indices for niche markets.</p>
            <Link href="/contact">
              <Button className="rounded-full bg-white text-background hover:bg-gray-100 font-semibold">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
