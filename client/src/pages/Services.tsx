import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Search, TrendingUp, Users, Globe, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "traas",
      icon: TrendingUp,
      title: "Trend Reporting as a Service (TRaaS)",
      desc: "Stay ahead of the curve with our monthly subscription. We identify micro-trends in your niche before they hit mainstream.",
      features: ["Monthly Trend Decks", "Consumer Behavior Shifts", "Viral Audio & Content Templates"],
    },
    {
      id: "intel",
      icon: Search,
      title: "Competitor Intelligence",
      desc: "Deep-dive analysis of your top 5 competitors. We reverse-engineer their growth strategies so you can outperform them.",
      features: ["Ad Spend Analysis", "Creative Strategy Audit", "Gap Analysis"],
    },
    {
      id: "strategy",
      icon: Zap,
      title: "Growth Strategy",
      desc: "Actionable roadmaps to scale. We combine data with creativity to build campaigns that convert.",
      features: ["Go-to-Market Plans", "Channel Strategy", "Retention Frameworks"],
    },
    {
      id: "validation",
      icon: BarChart3,
      title: "Product Validation",
      desc: "Stop guessing. We test your product concepts against real-time social sentiment data to predict success.",
      features: ["Sentiment Analysis", "Demand Forecasting", "Feature Prioritization"],
    },
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-display mb-6"
          >
            Our <span className="text-primary">Expertise</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground">
            We offer a suite of intelligence products designed to de-risk your decisions and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-card border border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-bold font-display mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href="/audit">
                <Button variant="outline" className="w-full rounded-full border-white/10 hover:bg-white/5 hover:border-primary/50">
                  Request Info
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white/[0.02] rounded-3xl p-8 md:p-16 border border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We audit your current position and define clear objectives." },
              { step: "02", title: "Tracking", desc: "Our systems begin monitoring millions of data points." },
              { step: "03", title: "Insight", desc: "Analysts distill noise into clear, actionable patterns." },
              { step: "04", title: "Action", desc: "We deliver the roadmap. You execute the win." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/5 font-display mb-4 absolute -top-8 -left-4 z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
