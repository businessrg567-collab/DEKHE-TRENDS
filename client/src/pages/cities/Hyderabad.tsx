import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { TrendingUp, CheckCircle2, ArrowRight, MapPin, Building2, Users, Target, BarChart3, Zap } from "lucide-react";

export default function Hyderabad() {
  const cityName = "Hyderabad";
  return (
    <>
      <SEO title={`Trend Intelligence & Market Research in ${cityName} - Dekhe Trends`} description={`Leading trend intelligence and market research agency in ${cityName}. We help brands identify emerging trends and drive growth.`} keywords={`trend intelligence ${cityName}, market research ${cityName}, brand strategy ${cityName}`} />
      <StructuredData type="Service" data={{ name: `Trend Intelligence Services in ${cityName}`, description: `Professional trend intelligence services for ${cityName}`, provider: { "@type": "Organization", name: "Dekhe Trends", url: "https://dekhetrends.com" }, areaServed: { "@type": "City", name: cityName, containedInPlace: { "@type": "Country", name: "India" } }, serviceType: "Market Research" }} />
      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6"><div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6"><MapPin className="w-4 h-4 text-primary" /><span className="text-sm font-semibold text-primary">{cityName}, India</span></div>
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">Trend Intelligence in <span className="gradient-text">{cityName}</span></h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">Stay ahead with data-driven trend insights for the {cityName} market.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Free Audit <ArrowRight className="ml-2" /></Button></Link>
                <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">Contact Us</Button></Link>
              </div>
            </motion.div>
          </div></div>
        </section>
        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6"><div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-center">Our Services in {cityName}</h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">Comprehensive trend intelligence solutions for {cityName} businesses.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{ icon: TrendingUp, title: "Trend Reporting", description: `Monthly trend reports for ${cityName}.` }, { icon: BarChart3, title: "Competitor Intelligence", description: `Competitor analysis in ${cityName}.` }, { icon: Target, title: "Market Research", description: `Market research for ${cityName}.` }, { icon: Building2, title: "Brand Strategy", description: `Brand positioning for ${cityName}.` }, { icon: Users, title: "Consumer Insights", description: `Consumer insights for ${cityName}.` }, { icon: Zap, title: "Growth Strategy", description: `Growth strategies for ${cityName}.` }].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary"><s.icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3><p className="text-muted-foreground leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </div></div>
        </section>
        <section className="py-20">
          <div className="container px-4 md:px-6"><div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Choose Dekhe Trends in {cityName}?</h2>
            <div className="space-y-6">
              {[`Deep understanding of ${cityName}'s market`, "AI-powered trend detection", "Industry expertise", "Proven track record", "Local + global intelligence", "Dedicated support"].map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-accent/20"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" /><p className="text-lg">{p}</p></motion.div>
              ))}
            </div>
          </div></div>
        </section>
        <section className="py-20">
          <div className="container px-4 md:px-6"><div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Lead the {cityName} Market?</h2>
            <p className="text-xl text-muted-foreground mb-8">Get a free trend audit for {cityName}.</p>
            <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Claim Your Free Audit <ArrowRight className="ml-2" /></Button></Link>
          </div></div>
        </section>
      </div>
    </>
  );
}