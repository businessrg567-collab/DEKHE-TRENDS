import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Award, TrendingUp, Globe, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us - Market Intelligence & Trend Analysis Experts | Dekhe Trends"
        description="Learn about Dekhe Trends' mission to decode market chaos and empower brands with data-driven insights. Founded by data scientists and cultural anthropologists."
        canonical="https://dekhetrends.com/about"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6">
          {/* Mission */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm"
            >
              About Dekhe Trends
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-display mb-8"
            >
              We Decode the <span className="gradient-text">Chaos</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              In a world of infinite data, clarity is the ultimate luxury. Dekhe Trends exists to filter the signal from the noise and empower brands to act with conviction, speed, and cultural intelligence.
            </motion.p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square flex items-center justify-center border border-accent/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.02]" />
              <div className="relative z-10 text-center p-8">
                <TrendingUp className="w-24 h-24 text-white/30 mx-auto mb-4" />
                <span className="text-4xl font-bold text-white/30 font-display">Dekhe Trends</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Our Story</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Founded in 2021 by a team of data scientists and cultural anthropologists, Dekhe Trends started with a simple question: <span className="text-white font-semibold">"Why do most trend reports fail?"</span>
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                The answer was context. Data without culture is just numbers. Culture without data is just guessing. We built a proprietary intelligence engine that merges both, giving our clients a 360-degree view of what's next.
              </p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Today, we work with over 200 brands across fashion, tech, beauty, and D2C sectors, helping them spot trends before they become mainstream and make strategic decisions with confidence.
              </p>
              <Link href="/contact">
                <Button className="rounded-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-semibold">
                  Work With Us <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To democratize market intelligence and make world-class trend analysis accessible to brands of all sizes. We believe every business deserves the insights that were once only available to Fortune 500 companies.
              </p>
            </div>
            
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <Globe className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To become the global standard for real-time market intelligence. We're building a future where businesses don't just react to trends—they anticipate them, shape them, and lead their industries.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Our Core Values</h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              These principles guide everything we do, from how we analyze data to how we work with clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Award,
                  title: "Radical Truth", 
                  desc: "We tell you what the data says, not what you want to hear. Our insights are honest, unfiltered, and actionable—even when the truth is uncomfortable." 
                },
                { 
                  icon: Zap,
                  title: "Speed Matters", 
                  desc: "Insights have a shelf life. In fast-moving markets, being right tomorrow is the same as being wrong today. We deliver faster than anyone else." 
                },
                { 
                  icon: Users,
                  title: "Context is King", 
                  desc: "A number means nothing without the human story behind it. We don't just show you what's trending—we explain why it matters and what to do about it." 
                }
              ].map((value, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 rounded-2xl transition-all group"
                >
                  <value.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4 font-display text-primary">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Meet Our Team</h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              A diverse group of data scientists, cultural anthropologists, strategists, and creatives united by one goal: helping brands win.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Dr. Priya Sharma", role: "Founder & Chief Analyst", specialty: "Predictive Analytics" },
                { name: "Marcus Chen", role: "Head of Data Science", specialty: "Machine Learning" },
                { name: "Sofia Rodriguez", role: "Cultural Strategist", specialty: "Consumer Behavior" },
                { name: "James Wilson", role: "VP of Client Success", specialty: "Growth Strategy" },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 flex items-center justify-center border border-accent/30">
                    <Users className="w-16 h-16 text-white/30" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.specialty}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-16 border border-primary/20 mb-24">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "200+", label: "Brands Served" },
                { number: "93%", label: "Prediction Accuracy" },
                { number: "10x", label: "Average ROI" },
                { number: "24/7", label: "Market Monitoring" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold font-display text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-center">Our Methodology</h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              We've developed a proprietary 4-layer intelligence system that combines technology with human expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Layer 1: Data Collection",
                  desc: "Our AI-powered systems monitor millions of data points across social media, search engines, e-commerce platforms, and cultural forums in real-time."
                },
                {
                  title: "Layer 2: Pattern Recognition",
                  desc: "Machine learning algorithms identify emerging patterns, anomalies, and signals that indicate shifting consumer behaviors and market dynamics."
                },
                {
                  title: "Layer 3: Cultural Analysis",
                  desc: "Our team of cultural anthropologists and strategists interpret the data through a human lens, adding context, nuance, and cultural intelligence."
                },
                {
                  title: "Layer 4: Strategic Translation",
                  desc: "We translate insights into actionable strategies tailored to your brand, industry, and business objectives—complete with implementation roadmaps."
                }
              ].map((layer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-bold font-display mb-3 text-primary">{layer.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{layer.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 border border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our intelligence services can help your brand stay ahead of the curve and win in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  Start Free Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
