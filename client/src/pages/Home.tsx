import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, BarChart3, Search, Zap, Target, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg"; // Mock import for concept

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-background z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm"
          >
            Looking for 2025 Market Signals?
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-8"
          >
            Spot Tomorrow’s <br />
            <span className="gradient-text">Trends Today</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            We decode chaotic market signals into actionable growth strategies for bold brands. Don't just follow the curve—define it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/audit">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all">
                Start Free Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/20 hover:bg-white/10">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LOGOS / TRUSTED BY */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Trusted by industry disruptors</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text placeholders styled as logos for cleaner code than broken images */}
            <span className="text-2xl font-bold font-display">ACME</span>
            <span className="text-2xl font-bold font-display">VOGUE</span>
            <span className="text-2xl font-bold font-display">TECHSTAR</span>
            <span className="text-2xl font-bold font-display">FUTURE</span>
            <span className="text-2xl font-bold font-display">BOLT</span>
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="py-24 md:py-32 relative">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Intelligence as a Service</h2>
              <p className="text-muted-foreground text-lg">We don't just give you data. We give you the "So What?" and the "Now What?"</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center text-primary font-semibold hover:text-white transition-colors mt-6 md:mt-0">
              View all services <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={TrendingUp}
              title="Trend Reporting (TRaaS)"
              description="Monthly deep-dives into emerging micro-trends specific to your niche. Stay 6 months ahead of competitors."
              href="/services"
              delay={0.1}
            />
            <ServiceCard 
              icon={Search}
              title="Competitor Intel"
              description="We stalk them so you don't have to. Comprehensive breakdowns of your rivals' ad spend, creative, and strategy."
              href="/services"
              delay={0.2}
            />
            <ServiceCard 
              icon={Target}
              title="Product Validation"
              description="Before you launch, know if it will land. We test concepts against real-time social sentiment data."
              href="/services"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* WHY US / STATS */}
      <section className="py-24 bg-card border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">Data-Driven.<br />Human-Curated.</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Algorithms find patterns, but humans find meaning. We combine AI-powered social listening with seasoned anthropological analysis to deliver insights that actually make sense.
              </p>
              <ul className="space-y-4 mb-8">
                {['93% Accuracy in Trend Prediction', '200+ Brands Audited', '10x ROI on Strategic Pivots'].map((item) => (
                  <li key={item} className="flex items-center text-lg">
                    <Zap className="w-5 h-5 text-accent mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-8">Our Philosophy</Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Abstract decorative chart visualization */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/20 to-transparent" 
                  animate={{ height: ["40%", "60%", "40%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative z-10 h-full flex items-end space-x-4">
                   {[40, 70, 50, 90, 60, 80].map((h, i) => (
                     <motion.div 
                       key={i}
                       className="flex-1 bg-gradient-to-t from-primary to-accent opacity-80 rounded-t-lg"
                       initial={{ height: 0 }}
                       whileInView={{ height: `${h}%` }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1, duration: 1 }}
                     />
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8">Ready to define the future?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Get a complimentary audit of your brand's current market positioning. No strings attached.
          </p>
          <Link href="/audit">
            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-black hover:bg-gray-100 font-bold shadow-2xl shadow-primary/20">
              Get Your Free Audit <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
