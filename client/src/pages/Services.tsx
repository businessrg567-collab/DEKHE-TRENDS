import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { 
  Phone, ArrowRight, Search, MousePointerClick, Share2, 
  BarChart, Megaphone, Mail, Code, Palette, TrendingUp
} from "lucide-react";
import { useState } from "react";
import React from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      icon: Search,
      name: "Search Engine Optimization",
      tagline: "Get found when it matters most",
      problem: "Your website exists, but nobody finds it. You're on page 3 of Google while competitors dominate page 1.",
      howItWorks: [
        "Technical audit to fix what's broken",
        "Keyword research targeting buyer intent",
        "Content optimization for rankings",
        "Link building from authority sites",
        "Monthly tracking and adjustments"
      ],
      timeline: "First results in 45-60 days. Full impact in 4-6 months.",
      investment: "₹25K-75K/month depending on competition",
      bestFor: ["E-commerce stores", "Service businesses", "B2B companies"],
      realCase: {
        before: "Law firm getting 200 monthly visitors",
        after: "Now getting 4,500 visitors and 40+ qualified leads monthly",
        time: "6 months"
      }
    },
    {
      id: 1,
      icon: MousePointerClick,
      name: "Pay-Per-Click Advertising",
      tagline: "Instant visibility, measurable returns",
      problem: "You need customers now, not 6 months from now. Every day without leads is revenue lost.",
      howItWorks: [
        "Campaign setup on Google/Facebook/LinkedIn",
        "Audience targeting based on behavior",
        "Ad creative testing and optimization",
        "Landing page conversion tracking",
        "Daily budget management"
      ],
      timeline: "Campaigns live in 48 hours. Optimization ongoing.",
      investment: "₹30K-2L/month (includes ad spend + management)",
      bestFor: ["Startups needing quick traction", "Seasonal businesses", "High-ticket services"],
      realCase: {
        before: "Real estate agency spending ₹80K with 12 leads/month",
        after: "Now spending ₹1.2L getting 85 leads/month at lower cost per lead",
        time: "3 months"
      }
    },
    {
      id: 2,
      icon: Share2,
      name: "Social Media Management",
      tagline: "Build an audience that buys",
      problem: "You post randomly. Engagement is dead. Your competitors have thriving communities while you're shouting into the void.",
      howItWorks: [
        "Content calendar planning",
        "Professional content creation",
        "Community engagement daily",
        "Influencer collaborations",
        "Performance analytics"
      ],
      timeline: "Content starts immediately. Growth visible in 60-90 days.",
      investment: "₹20K-60K/month based on platforms",
      bestFor: ["Consumer brands", "Restaurants", "Fashion/lifestyle businesses"],
      realCase: {
        before: "Cafe with 3K followers, minimal foot traffic from social",
        after: "Now 18K followers, 30% of daily customers from Instagram",
        time: "5 months"
      }
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Marketing Services | SEO, Ads, Social Media"
        description="Detailed breakdown of our digital marketing services. See exactly what we do, how we do it, and what results you can expect."
        canonical="https://dekhetrends.com/services"
      />
      
      <StickyCallButton />

      <div className="min-h-screen">
        {/* Hero - Different from Home */}
        <section className="pt-32 pb-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="text-sm font-medium text-[#7B2FF7] mb-4">WHAT WE DO</div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Marketing Services
                <br />
                <span className="gradient-text">Explained Simply</span>
              </h1>
              <p className="text-xl text-[#B0B0B0] leading-relaxed">
                No jargon. No fluff. Here's exactly what each service includes, how long it takes, what it costs, and what results you can expect.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Selector - Unique Layout */}
        <section className="py-12 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
              {services.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                    activeService === i
                      ? 'bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] text-white'
                      : 'glass-card hover:bg-white/[0.05]'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* Active Service Detail */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 md:p-12 rounded-3xl"
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] flex items-center justify-center mb-6">
                    {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{services[activeService].name}</h2>
                  <p className="text-xl text-[#7B2FF7] mb-6">{services[activeService].tagline}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-3">The Problem</h3>
                    <p className="text-[#B0B0B0] leading-relaxed">{services[activeService].problem}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-3">How It Works</h3>
                    <ul className="space-y-2">
                      {services[activeService].howItWorks.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#7B2FF7]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-[#7B2FF7]">{i + 1}</span>
                          </div>
                          <span className="text-[#B0B0B0]">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5">
                    <div className="text-sm text-[#7B2FF7] mb-2">Timeline</div>
                    <div className="text-lg">{services[activeService].timeline}</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5">
                    <div className="text-sm text-[#7B2FF7] mb-2">Investment</div>
                    <div className="text-lg">{services[activeService].investment}</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5">
                    <div className="text-sm text-[#7B2FF7] mb-2">Best For</div>
                    <div className="space-y-2">
                      {services[activeService].bestFor.map((item, i) => (
                        <div key={i} className="text-[#B0B0B0]">• {item}</div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
                    <div className="text-sm font-bold text-green-400 mb-3">Real Result</div>
                    <div className="space-y-2 text-sm">
                      <div className="text-[#B0B0B0]">Before: {services[activeService].realCase.before}</div>
                      <div className="text-white font-medium">After: {services[activeService].realCase.after}</div>
                      <div className="text-[#B0B0B0]">Timeframe: {services[activeService].realCase.time}</div>
                    </div>
                  </div>

                  <a href="tel:8077583921">
                    <Button className="w-full h-12 rounded-full bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:opacity-90">
                      <Phone className="w-4 h-4 mr-2" />
                      Discuss This Service
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* What Changes Section - Unique to Services */}
        <section className="py-20 px-4 bg-[#0D0D0D]">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Changes <span className="gradient-text">After Hiring Us</span>
              </h2>
              <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
                Tangible differences you'll notice in your business
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Week 1-2",
                  changes: [
                    "Complete audit delivered",
                    "Strategy document shared",
                    "Campaigns go live",
                    "Tracking systems installed"
                  ]
                },
                {
                  title: "Month 1",
                  changes: [
                    "First data insights",
                    "Initial optimizations",
                    "Traffic increase visible",
                    "Lead quality improves"
                  ]
                },
                {
                  title: "Month 2-3",
                  changes: [
                    "Consistent lead flow",
                    "Lower cost per acquisition",
                    "Better conversion rates",
                    "Clear ROI emerging"
                  ]
                },
                {
                  title: "Month 4+",
                  changes: [
                    "Predictable growth",
                    "Scalable systems",
                    "Market dominance",
                    "Compounding returns"
                  ]
                }
              ].map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-2xl"
                >
                  <div className="text-2xl font-bold gradient-text mb-6">{phase.title}</div>
                  <ul className="space-y-3">
                    {phase.changes.map((change, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#00C6FF]" />
                        <span className="text-[#B0B0B0]">{change}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Deep Dive - Different from Home */}
        <section className="py-20 px-4">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How We <span className="gradient-text">Actually Work</span>
              </h2>
              <p className="text-xl text-[#B0B0B0]">
                Behind the scenes of every successful campaign
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  phase: "Discovery",
                  duration: "Week 1",
                  activities: [
                    "Deep dive into your business model",
                    "Competitor analysis",
                    "Customer research",
                    "Current marketing audit"
                  ]
                },
                {
                  phase: "Strategy",
                  duration: "Week 2",
                  activities: [
                    "Custom strategy document",
                    "Channel recommendations",
                    "Budget allocation plan",
                    "Success metrics defined"
                  ]
                },
                {
                  phase: "Execution",
                  duration: "Ongoing",
                  activities: [
                    "Campaign setup and launch",
                    "Content creation",
                    "Daily monitoring",
                    "Weekly optimizations"
                  ]
                },
                {
                  phase: "Reporting",
                  duration: "Monthly",
                  activities: [
                    "Performance dashboard",
                    "ROI analysis",
                    "Strategy adjustments",
                    "Next month planning"
                  ]
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="gradient-border"
                >
                  <div className="p-8 flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <div className="text-3xl font-bold gradient-text mb-2">{step.phase}</div>
                      <div className="text-sm text-[#7B2FF7]">{step.duration}</div>
                    </div>
                    <div className="md:w-2/3">
                      <ul className="space-y-3">
                        {step.activities.map((activity, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                            <span className="text-[#B0B0B0]">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Transparency - Unique Section */}
        <section className="py-20 px-4 bg-[#0D0D0D]">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Honest <span className="gradient-text">Pricing</span>
              </h2>
              <p className="text-xl text-[#B0B0B0] max-w-2xl mx-auto">
                No hidden fees. No surprises. Here's what you actually pay.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  tier: "Starter",
                  price: "₹30K/month",
                  ideal: "Small businesses just starting",
                  includes: [
                    "1 marketing channel",
                    "Basic reporting",
                    "Email support",
                    "Monthly strategy call"
                  ]
                },
                {
                  tier: "Growth",
                  price: "₹75K/month",
                  ideal: "Businesses ready to scale",
                  includes: [
                    "2-3 marketing channels",
                    "Advanced analytics",
                    "Priority support",
                    "Bi-weekly strategy calls",
                    "Dedicated account manager"
                  ],
                  popular: true
                },
                {
                  tier: "Enterprise",
                  price: "₹1.5L+/month",
                  ideal: "Established businesses",
                  includes: [
                    "Full-service marketing",
                    "Custom reporting",
                    "24/7 support",
                    "Weekly strategy sessions",
                    "Senior strategist assigned"
                  ]
                }
              ].map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass-card p-8 rounded-2xl ${plan.popular ? 'border-2 border-[#7B2FF7]' : ''}`}
                >
                  {plan.popular && (
                    <div className="text-xs font-bold text-[#7B2FF7] mb-4">MOST POPULAR</div>
                  )}
                  <div className="text-2xl font-bold mb-2">{plan.tier}</div>
                  <div className="text-3xl font-bold gradient-text mb-4">{plan.price}</div>
                  <div className="text-sm text-[#B0B0B0] mb-6">{plan.ideal}</div>
                  <ul className="space-y-3 mb-8">
                    {plan.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C6FF] mt-1.5 flex-shrink-0" />
                        <span className="text-[#B0B0B0]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="tel:8077583921">
                    <Button className="w-full rounded-full" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Different from Home */}
        <section className="py-20 px-4">
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl text-[#B0B0B0] mb-8">
                Book a free 30-minute consultation. We'll analyze your current marketing and show you exactly what we'd do differently.
              </p>
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-10 rounded-full bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:opacity-90 btn-glow">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}