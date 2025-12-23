import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, ShoppingBag, Palette, Cpu, Zap, Camera, 
  Coffee, Heart, DollarSign, GraduationCap, Film, Car,
  TrendingUp, Users, Target, CheckCircle
} from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Industries() {
  const industries = [
    {
      title: "Fashion & Apparel",
      icon: ShoppingBag,
      desc: "From supply chain sustainability to viral micro-aesthetics. We track the threads that matter.",
      details: "Monitor fast fashion trends, sustainable materials adoption, influencer collaborations, and seasonal demand patterns.",
      stats: { brands: "50+", accuracy: "94%", insights: "Monthly" }
    },
    {
      title: "Beauty & Wellness",
      icon: Palette,
      desc: "Clean beauty, biotech skincare, and the new definition of self-care.",
      details: "Track ingredient trends, packaging innovations, wellness movements, and beauty tech disruptions.",
      stats: { brands: "40+", accuracy: "92%", insights: "Bi-weekly" }
    },
    {
      title: "Tech & SaaS",
      icon: Cpu,
      desc: "User adoption signals and emerging workflow behaviors for B2B and B2C.",
      details: "Analyze product-market fit signals, feature adoption rates, competitor positioning, and pricing strategies.",
      stats: { brands: "35+", accuracy: "96%", insights: "Weekly" }
    },
    {
      title: "D2C Brands",
      icon: Zap,
      desc: "Customer acquisition costs, retention loops, and unboxing psychology.",
      details: "Monitor CAC trends, subscription models, packaging innovations, and customer lifetime value optimization.",
      stats: { brands: "60+", accuracy: "93%", insights: "Monthly" }
    },
    {
      title: "Creator Economy",
      icon: Camera,
      desc: "Platform shifts, monetization models, and community dynamics.",
      details: "Track platform algorithm changes, emerging content formats, sponsorship rates, and audience engagement patterns.",
      stats: { brands: "25+", accuracy: "91%", insights: "Weekly" }
    },
    {
      title: "Food & Beverage",
      icon: Coffee,
      desc: "From plant-based innovations to functional beverages and dining experiences.",
      details: "Monitor dietary trends, ingredient innovations, packaging sustainability, and consumer taste preferences.",
      stats: { brands: "30+", accuracy: "89%", insights: "Monthly" }
    },
    {
      title: "Health & Fitness",
      icon: Heart,
      desc: "Wearable tech, mental wellness, and the gamification of health.",
      details: "Track fitness trends, wellness app adoption, nutrition movements, and health tech innovations.",
      stats: { brands: "20+", accuracy: "90%", insights: "Bi-weekly" }
    },
    {
      title: "Finance & Fintech",
      icon: DollarSign,
      desc: "Digital banking, crypto adoption, and the future of payments.",
      details: "Analyze payment trends, investment behaviors, regulatory shifts, and financial literacy movements.",
      stats: { brands: "15+", accuracy: "95%", insights: "Weekly" }
    },
    {
      title: "Education",
      icon: GraduationCap,
      desc: "EdTech platforms, skill-based learning, and the future of credentials.",
      details: "Monitor online learning trends, certification value, skill demand patterns, and educational content formats.",
      stats: { brands: "18+", accuracy: "88%", insights: "Monthly" }
    },
    {
      title: "Entertainment",
      icon: Film,
      desc: "Streaming wars, gaming trends, and the evolution of storytelling.",
      details: "Track content consumption patterns, platform preferences, genre trends, and audience engagement metrics.",
      stats: { brands: "22+", accuracy: "92%", insights: "Weekly" }
    },
    {
      title: "Automotive",
      icon: Car,
      desc: "EV adoption, autonomous vehicles, and the future of mobility.",
      details: "Analyze vehicle preferences, sustainability trends, mobility services, and automotive technology adoption.",
      stats: { brands: "12+", accuracy: "87%", insights: "Monthly" }
    }
  ];

  const caseStudies = [
    {
      industry: "Fashion",
      brand: "StyleCo",
      challenge: "Declining engagement and losing market share to fast-fashion competitors",
      solution: "Identified emerging 'slow fashion' micro-trend 3 months before mainstream adoption",
      result: "180% increase in engagement, 45% revenue growth in Q1"
    },
    {
      industry: "Beauty",
      brand: "GlowLabs",
      challenge: "Product launch timing and ingredient selection uncertainty",
      solution: "Predicted biotech skincare trend and optimal launch window through sentiment analysis",
      result: "Sold out in 2 weeks, 300% ROI on marketing spend"
    },
    {
      industry: "Tech",
      brand: "WorkFlow",
      challenge: "Feature prioritization and competitive differentiation",
      solution: "Identified unmet needs in remote work tools through behavioral analysis",
      result: "40% increase in user adoption, reduced churn by 25%"
    }
  ];

  return (
    <>
      <SEO 
        title="Industries We Serve - Market Intelligence Across Sectors | Dekhe Trends"
        description="Explore how Dekhe Trends provides market intelligence and trend analysis across fashion, tech, beauty, D2C, and more. Industry-specific insights for competitive advantage."
        canonical="https://dekhetrends.com/industries"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6">
          {/* Hero */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm"
            >
              11+ Industries Tracked
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-display mb-6"
            >
              Industries We <span className="gradient-text">Track</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Our intelligence engine is vertical-agnostic but depth-obsessed. We combine industry-specific expertise with cross-sector pattern recognition to deliver insights that matter. Here's where we shine.
            </motion.p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {industries.map((item, index) => (
              <motion.div 
                key={item.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 p-8 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 rounded-bl-full group-hover:scale-150 transition-all duration-500" />
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform relative z-10">
                  <item.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-3 relative z-10 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground mb-4 relative z-10 leading-relaxed">{item.desc}</p>
                <p className="text-sm text-muted-foreground/80 mb-6 relative z-10 leading-relaxed">{item.details}</p>
                
                <div className="flex gap-4 mb-6 relative z-10">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{item.stats.brands}</div>
                    <div className="text-xs text-muted-foreground">Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent">{item.stats.accuracy}</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{item.stats.insights}</div>
                    <div className="text-xs text-muted-foreground">Reports</div>
                  </div>
                </div>
                
                <Link href="/audit">
                  <span className="inline-flex items-center text-sm font-semibold text-primary hover:text-white transition-colors cursor-pointer relative z-10">
                    Get Industry Report <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-primary to-accent p-8 flex flex-col justify-center items-center text-center"
            >
              <Target className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold font-display mb-3 text-white">Don't See Yours?</h3>
              <p className="text-white/90 mb-6 font-medium leading-relaxed">
                We create custom tracking indices for niche markets and emerging sectors.
              </p>
              <Link href="/contact">
                <Button className="rounded-full bg-white text-background hover:bg-gray-100 font-semibold">
                  Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Case Studies */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Success Stories</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results from real brands across different industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-bold font-display mb-4">{study.brand}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">CHALLENGE</p>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-1">SOLUTION</p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent mb-1">RESULT</p>
                      <p className="text-sm font-semibold">{study.result}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Cross-Industry Matters */}
          <div className="bg-white/[0.02] rounded-3xl p-8 md:p-16 border border-white/5 mb-24">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Why Cross-Industry Intelligence Matters</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The best innovations don't happen in silos. We track patterns across industries to identify cross-pollination opportunities and emerging trends before they become obvious.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Pattern Recognition",
                  desc: "A trend in gaming today might be tomorrow's opportunity in education. We spot these connections."
                },
                {
                  title: "Early Warning System",
                  desc: "Disruption often comes from adjacent industries. We help you see around corners."
                },
                {
                  title: "Innovation Inspiration",
                  desc: "The best ideas are often borrowed and adapted. We show you what's working elsewhere."
                },
                {
                  title: "Competitive Advantage",
                  desc: "While competitors watch their own sector, we help you learn from everyone."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2 font-display">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 border border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Lead Your Industry?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a free audit tailored to your industry. We'll identify the trends, opportunities, and threats that matter most to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  Start Free Audit
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
