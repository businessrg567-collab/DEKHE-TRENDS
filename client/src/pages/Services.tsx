import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, BarChart3, Search, TrendingUp, Users, Globe, Zap, 
  Target, Megaphone, Share2, Mail, UserPlus, ShoppingCart, 
  RefreshCw, FileSearch, Cpu, Store, MessageCircle, Video, 
  Database, AlertTriangle, Palette, LineChart
} from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Services() {
  const services = [
    {
      id: "trend-reporting",
      icon: TrendingUp,
      title: "Trend Reporting (TRaaS)",
      desc: "Stay ahead of the curve with our monthly subscription. We identify micro-trends in your niche before they hit mainstream.",
      features: ["Monthly Trend Decks", "Consumer Behavior Shifts", "Viral Audio & Content Templates", "Predictive Analytics"],
      href: "/services/trend-reporting"
    },
    {
      id: "competitor-intelligence",
      icon: Search,
      title: "Competitor Intelligence",
      desc: "Deep-dive analysis of your top 5 competitors. We reverse-engineer their growth strategies so you can outperform them.",
      features: ["Ad Spend Analysis", "Creative Strategy Audit", "Gap Analysis", "Market Positioning"],
      href: "/services/competitor-intelligence"
    },
    {
      id: "product-validation",
      icon: Target,
      title: "Product Validation",
      desc: "Stop guessing. We test your product concepts against real-time social sentiment data to predict success.",
      features: ["Sentiment Analysis", "Demand Forecasting", "Feature Prioritization", "Market Fit Testing"],
      href: "/services/product-validation"
    },
    {
      id: "growth-strategy",
      icon: Zap,
      title: "Growth Strategy",
      desc: "Actionable roadmaps to scale. We combine data with creativity to build campaigns that convert.",
      features: ["Go-to-Market Plans", "Channel Strategy", "Retention Frameworks", "Scaling Blueprints"],
      href: "/services/growth-strategy"
    },
    {
      id: "brand-strategy",
      icon: Palette,
      title: "Brand Strategy",
      desc: "Build a brand that resonates. We help you define your positioning, voice, and visual identity.",
      features: ["Brand Positioning", "Voice & Tone Guidelines", "Visual Identity", "Brand Architecture"],
      href: "/services/brand-strategy"
    },
    {
      id: "content-marketing",
      icon: Megaphone,
      title: "Content Marketing",
      desc: "Create content that converts. From strategy to execution, we help you tell stories that sell.",
      features: ["Content Strategy", "Editorial Calendars", "SEO Optimization", "Performance Tracking"],
      href: "/services/content-marketing"
    },
    {
      id: "social-media-strategy",
      icon: Share2,
      title: "Social Media Strategy",
      desc: "Master the algorithm. We build social strategies that drive engagement, followers, and revenue.",
      features: ["Platform Strategy", "Content Calendars", "Community Management", "Influencer Partnerships"],
      href: "/services/social-media-strategy"
    },
    {
      id: "seo-strategy",
      icon: Globe,
      title: "SEO Strategy",
      desc: "Rank higher, convert better. Our SEO strategies are built on data, not guesswork.",
      features: ["Technical SEO", "Keyword Research", "Link Building", "Content Optimization"],
      href: "/services/seo-strategy"
    },
    {
      id: "email-marketing",
      icon: Mail,
      title: "Email Marketing",
      desc: "Turn subscribers into customers. We design email campaigns that people actually want to read.",
      features: ["Campaign Strategy", "Automation Flows", "List Segmentation", "A/B Testing"],
      href: "/services/email-marketing"
    },
    {
      id: "influencer-marketing",
      icon: UserPlus,
      title: "Influencer Marketing",
      desc: "Partner with the right voices. We connect you with influencers who align with your brand values.",
      features: ["Influencer Vetting", "Campaign Management", "Performance Tracking", "ROI Analysis"],
      href: "/services/influencer-marketing"
    },
    {
      id: "paid-advertising",
      icon: ShoppingCart,
      title: "Paid Advertising",
      desc: "Maximize your ad spend. We create high-converting campaigns across all major platforms.",
      features: ["Media Buying", "Creative Testing", "Audience Targeting", "Performance Optimization"],
      href: "/services/paid-advertising"
    },
    {
      id: "conversion-optimization",
      icon: LineChart,
      title: "Conversion Optimization",
      desc: "Turn traffic into revenue. We optimize every touchpoint in your customer journey.",
      features: ["CRO Audits", "A/B Testing", "User Experience", "Funnel Optimization"],
      href: "/services/conversion-optimization"
    },
    {
      id: "customer-retention",
      icon: RefreshCw,
      title: "Customer Retention",
      desc: "Keep customers coming back. We build loyalty programs and retention strategies that work.",
      features: ["Loyalty Programs", "Retention Analytics", "Churn Prevention", "Lifecycle Marketing"],
      href: "/services/customer-retention"
    },
    {
      id: "market-research",
      icon: FileSearch,
      title: "Market Research",
      desc: "Know your market inside out. We conduct comprehensive research to inform your strategy.",
      features: ["Consumer Insights", "Market Sizing", "Competitive Analysis", "Trend Forecasting"],
      href: "/services/market-research"
    },
    {
      id: "digital-transformation",
      icon: Cpu,
      title: "Digital Transformation",
      desc: "Modernize your business. We help traditional brands navigate the digital landscape.",
      features: ["Technology Audits", "Process Optimization", "Digital Strategy", "Change Management"],
      href: "/services/digital-transformation"
    },
    {
      id: "ecommerce-strategy",
      icon: Store,
      title: "E-commerce Strategy",
      desc: "Sell more online. We optimize every aspect of your e-commerce operation.",
      features: ["Platform Selection", "UX Optimization", "Payment Strategy", "Logistics Planning"],
      href: "/services/ecommerce-strategy"
    },
    {
      id: "community-building",
      icon: MessageCircle,
      title: "Community Building",
      desc: "Build a tribe, not just an audience. We help you create engaged communities around your brand.",
      features: ["Community Strategy", "Platform Selection", "Engagement Programs", "Moderation Guidelines"],
      href: "/services/community-building"
    },
    {
      id: "video-marketing",
      icon: Video,
      title: "Video Marketing",
      desc: "Tell your story visually. We create video strategies that capture attention and drive action.",
      features: ["Video Strategy", "Platform Optimization", "Content Production", "Performance Analytics"],
      href: "/services/video-marketing"
    },
    {
      id: "data-analytics",
      icon: Database,
      title: "Data Analytics",
      desc: "Make data-driven decisions. We turn raw data into actionable insights.",
      features: ["Analytics Setup", "Dashboard Creation", "Reporting Automation", "Predictive Modeling"],
      href: "/services/data-analytics"
    },
    {
      id: "crisis-management",
      icon: AlertTriangle,
      title: "Crisis Management",
      desc: "Protect your reputation. We help you navigate PR crises with confidence and clarity.",
      features: ["Crisis Planning", "Response Strategy", "Media Training", "Reputation Recovery"],
      href: "/services/crisis-management"
    },
  ];

  return (
    <>
      <SEO 
        title="Our Services - Comprehensive Marketing Solutions | Dekhe Trends"
        description="Explore our full suite of marketing and business intelligence services. From trend reporting to crisis management, we help brands stay ahead of the curve."
        canonical="https://dekhetrends.com/services"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm"
            >
              20+ Specialized Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold font-display mb-6"
            >
              Our <span className="gradient-text">Expertise</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              We offer a comprehensive suite of intelligence products and marketing services designed to de-risk your decisions, accelerate growth, and keep you ahead of market trends. Each service is backed by data, powered by creativity, and delivered with precision.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-3">
                      {service.desc}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center text-xs font-medium text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-accent mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-sm font-semibold text-primary group-hover:text-white transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white/[0.02] rounded-3xl p-8 md:p-16 border border-white/5 mb-24">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-center">How We Work</h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Our proven methodology ensures every project delivers measurable results and actionable insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Discovery", 
                  desc: "We audit your current position, analyze your market, and define clear, measurable objectives aligned with your business goals." 
                },
                { 
                  step: "02", 
                  title: "Tracking", 
                  desc: "Our proprietary systems begin monitoring millions of data points across social platforms, search engines, and market signals." 
                },
                { 
                  step: "03", 
                  title: "Insight", 
                  desc: "Expert analysts distill noise into clear, actionable patterns. We combine AI-powered analysis with human cultural intelligence." 
                },
                { 
                  step: "04", 
                  title: "Action", 
                  desc: "We deliver comprehensive roadmaps with prioritized recommendations. You execute with confidence, we support every step." 
                },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-7xl font-bold text-white/5 font-display mb-4 absolute -top-8 -left-4 z-0">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-3 font-display text-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How do I choose the right service for my business?",
                  a: "Start with our free audit. We'll assess your current position and recommend the services that will have the biggest impact on your growth."
                },
                {
                  q: "Can I combine multiple services?",
                  a: "Absolutely! Most of our clients use a combination of services. We offer bundled packages that provide better value and integrated strategies."
                },
                {
                  q: "What's the typical timeline for results?",
                  a: "It varies by service. Trend reporting delivers monthly insights, while brand strategy projects typically take 6-8 weeks. We'll provide a detailed timeline during discovery."
                },
                {
                  q: "Do you work with startups or only established brands?",
                  a: "We work with both! Our services are scalable and can be tailored to businesses at any stage, from pre-launch startups to Fortune 500 companies."
                },
                {
                  q: "What makes your approach different?",
                  a: "We combine AI-powered data analysis with human cultural intelligence. Algorithms find patterns, but humans find meaning. This hybrid approach delivers insights that are both accurate and actionable."
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
                >
                  <h3 className="text-lg font-bold mb-3 font-display">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 md:p-16 border border-primary/20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a complimentary audit of your brand's current market positioning. We'll identify opportunities and recommend the best path forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/audit">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  Start Free Audit
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                  Schedule a Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
