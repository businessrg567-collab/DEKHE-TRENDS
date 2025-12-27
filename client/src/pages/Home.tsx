import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, BarChart3, Search, Zap, Target, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg"; // Mock import for concept

export default function Home() {
  return (
    <>
      <SEO 
        title="Dekhe Trends - Spot Tomorrow's Trends Today | Market Intelligence & Trend Analysis"
        description="Decode chaotic market signals into actionable growth strategies. We combine AI-powered social listening with human cultural analysis to help brands stay ahead of trends."
        canonical="https://dekhetrends.com"
      />
      
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
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)] transition-all">
                Start Free Audit
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border border-accent/50 text-accent hover:bg-accent/10 font-semibold">
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
              href="/services/trend-reporting"
              delay={0.1}
            />
            <ServiceCard 
              icon={Search}
              title="Competitor Intel"
              description="We stalk them so you don't have to. Comprehensive breakdowns of your rivals' ad spend, creative, and strategy."
              href="/services/competitor-intelligence"
              delay={0.2}
            />
            <ServiceCard 
              icon={Target}
              title="Product Validation"
              description="Before you launch, know if it will land. We test concepts against real-time social sentiment data."
              href="/services/product-validation"
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

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Trusted by Industry Leaders</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Dekhe Trends helped us identify a micro-trend 4 months before it went mainstream. That early insight gave us a massive competitive advantage.",
                author: "Sarah Chen",
                role: "CMO, TechFlow",
                rating: 5
              },
              {
                quote: "Their competitor intelligence reports are incredibly detailed. We've been able to outmaneuver our rivals at every turn thanks to their insights.",
                author: "Marcus Rodriguez",
                role: "Founder, GrowthLabs",
                rating: 5
              },
              {
                quote: "The ROI on their services is unmatched. We've seen a 300% increase in engagement since implementing their social media strategy.",
                author: "Emily Watson",
                role: "VP Marketing, StyleHub",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our expertise spans across multiple verticals. We understand the unique challenges and opportunities in each industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Fashion & Apparel',
              'Beauty & Wellness',
              'Tech & SaaS',
              'D2C Brands',
              'Creator Economy',
              'Food & Beverage',
              'Health & Fitness',
              'Finance & Fintech',
              'Real Estate',
              'Education',
              'Entertainment',
              'Automotive'
            ].map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all text-center group cursor-pointer"
              >
                <p className="font-semibold text-sm group-hover:text-primary transition-colors">{industry}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/industries">
              <Button variant="outline" className="rounded-full px-8">
                View All Industries <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Latest Insights</h2>
              <p className="text-xl text-muted-foreground">Stay informed with our latest market analysis and trend reports.</p>
            </div>
            <Link href="/insights" className="hidden md:flex items-center text-primary font-semibold hover:text-white transition-colors">
              View all insights <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "The Rise of Micro-Communities in 2025",
                category: "Upcoming Trends",
                excerpt: "Why mass social media is dying and niche communities are becoming the new goldmine for brands."
              },
              {
                title: "Sustainable Packaging: No Longer Optional",
                category: "Market Signals",
                excerpt: "Consumer data shows a 40% drop in loyalty for brands using single-use plastics."
              },
              {
                title: "Why 'Authenticity' is the New Currency",
                category: "Data-Backed Predictions",
                excerpt: "Polished production is out. Raw, unedited content is driving 3x more conversions."
              }
            ].map((insight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{insight.excerpt}</p>
                <Link href="/insights" className="text-sm font-semibold text-primary inline-flex items-center">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
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
    </>
  );
}
