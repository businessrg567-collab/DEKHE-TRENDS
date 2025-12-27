import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { TrendingUp, CheckCircle2, ArrowRight, MapPin, Building2, Users, Target, BarChart3, Zap } from "lucide-react";

export default function Delhi() {
  const cityName = "Delhi";
  
  return (
    <>
      <SEO
        title={`Trend Intelligence & Market Research in ${cityName} - Dekhe Trends`}
        description={`Leading trend intelligence and market research agency in ${cityName}. We help brands identify emerging trends, analyze competitors, and drive growth in the ${cityName} market.`}
        keywords={`trend intelligence ${cityName}, market research ${cityName}, brand strategy ${cityName}, competitor analysis ${cityName}, growth marketing ${cityName}, consumer insights ${cityName}`}
      />
      
      <StructuredData
        type="Service"
        data={{
          name: `Trend Intelligence Services in ${cityName}`,
          description: `Professional trend intelligence and market research services for businesses in ${cityName}`,
          provider: { "@type": "Organization", name: "Dekhe Trends", url: "https://dekhetrends.com" },
          areaServed: { "@type": "City", name: cityName, containedInPlace: { "@type": "Country", name: "India" } },
          serviceType: "Market Research and Trend Intelligence"
        }}
      />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">{cityName}, India</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Trend Intelligence in <span className="gradient-text">{cityName}</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Stay ahead of the competition with data-driven trend insights tailored for the {cityName} market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Free Audit <ArrowRight className="ml-2" /></Button></Link>
                  <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">Contact Us</Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-center">Our Services in {cityName}</h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">Comprehensive trend intelligence and market research solutions for {cityName} businesses.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: TrendingUp, title: "Trend Reporting", description: `Monthly trend intelligence reports specific to the ${cityName} market.` },
                  { icon: BarChart3, title: "Competitor Intelligence", description: `Deep analysis of your competitors in ${cityName}.` },
                  { icon: Target, title: "Market Research", description: `Comprehensive market research for ${cityName}.` },
                  { icon: Building2, title: "Brand Strategy", description: `Strategic brand positioning for the ${cityName} audience.` },
                  { icon: Users, title: "Consumer Insights", description: `Deep understanding of ${cityName} consumer preferences.` },
                  { icon: Zap, title: "Growth Strategy", description: `Data-driven growth strategies for ${cityName}.` }
                ].map((service, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary"><service.icon className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Choose Dekhe Trends in {cityName}?</h2>
              <div className="space-y-6">
                {[
                  `Deep understanding of ${cityName}'s unique market dynamics`,
                  "Data-driven insights backed by AI-powered trend detection",
                  "Industry-specific expertise across multiple sectors",
                  "Proven track record of helping brands stay ahead",
                  "Local market knowledge with global intelligence",
                  "Dedicated analyst support"
                ].map((point, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-accent/20">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <p className="text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Lead the {cityName} Market?</h2>
              <p className="text-xl text-muted-foreground mb-8">Get a free trend audit for {cityName}.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Claim Your Free Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}