import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  TrendingUp, Target, BarChart3, Users, Zap, Globe, Building2, ShoppingBag,
  Megaphone, Search, Mail, Video, Share2, Award, Clock, MapPin, Phone,
  ArrowRight, CheckCircle2, Star, Briefcase, LineChart, Lightbulb, Shield,
  Rocket, Heart, Factory, Gem, Shirt, Package
} from "lucide-react";

export default function Ahmedabad() {
  const services = [
    {
      icon: TrendingUp,
      title: "Market Trend Analysis",
      description: "Deep insights into Ahmedabad's dynamic business landscape. From CG Road's commercial hub to GIFT City's financial district, we track trends that drive growth.",
      features: ["Trend forecasting", "Consumer insights", "Market research", "Competitive intelligence"]
    },
    {
      icon: Target,
      title: "Brand Strategy & Development",
      description: "Build brands that resonate with Ahmedabad's entrepreneurial spirit. Navigate Gujarat's commercial capital with strategies that command market leadership.",
      features: ["Brand positioning", "Identity design", "Brand messaging", "Market entry strategy"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Transform Ahmedabad market data into actionable insights. Advanced analytics tailored for the city's business-savvy and value-conscious demographics.",
      features: ["Custom dashboards", "Predictive analytics", "Customer segmentation", "ROI tracking"]
    },
    {
      icon: Search,
      title: "Local SEO Ahmedabad",
      description: "Dominate local search across Ahmedabad. From Satellite to Vastrapur, Maninagar to Bopal - get found by customers searching in every locality.",
      features: ["Google My Business", "Local keyword optimization", "Citation building", "Review management"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage Ahmedabad's highly active business community. Create campaigns that resonate with the city's entrepreneurial culture and drive results.",
      features: ["Content strategy", "Community management", "Influencer partnerships", "Paid social campaigns"]
    },
    {
      icon: Megaphone,
      title: "Performance Marketing",
      description: "ROI-focused advertising campaigns across all platforms. Precision targeting for Ahmedabad's diverse market from traditional traders to modern startups.",
      features: ["Google Ads", "Facebook advertising", "Instagram campaigns", "LinkedIn B2B"]
    },
    {
      icon: Video,
      title: "Video Production & Marketing",
      description: "Professional video content that captures Ahmedabad's vibrant business energy. From corporate videos to social content, we produce videos that convert.",
      features: ["Video production", "YouTube optimization", "Video advertising", "Social video content"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Build lasting customer relationships through strategic email campaigns. Segment Ahmedabad audiences and deliver personalized messages that drive action.",
      features: ["Campaign design", "Marketing automation", "List segmentation", "A/B testing"]
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with Ahmedabad's influential voices. From Gujarati content creators to business influencers, we manage authentic partnerships that build trust.",
      features: ["Influencer identification", "Campaign management", "Content collaboration", "Performance tracking"]
    },
    {
      icon: ShoppingBag,
      title: "E-commerce Solutions",
      description: "Scale your online store in Ahmedabad's booming e-commerce market. From strategy to execution, optimize every step of the customer journey.",
      features: ["Platform optimization", "Conversion optimization", "Cart recovery", "Marketplace strategy"]
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Modernize your Ahmedabad business with cutting-edge digital solutions. From traditional trading to digital-first strategies that drive growth.",
      features: ["Technology consulting", "Process automation", "Digital strategy", "Change management"]
    },
    {
      icon: Lightbulb,
      title: "Growth Strategy Consulting",
      description: "Scale your Ahmedabad business with proven growth frameworks. Whether you're in GIFT City or Navrangpura, we fuel sustainable growth.",
      features: ["Market expansion", "Growth hacking", "Funnel optimization", "Retention strategies"]
    }
  ];

  const industries = [
    { name: "Textile & Apparel", icon: Shirt, desc: "Textile industry expertise" },
    { name: "Diamond & Jewelry", icon: Gem, desc: "Gems and jewelry marketing" },
    { name: "Manufacturing & Industrial", icon: Factory, desc: "Industrial marketing" },
    { name: "Pharmaceutical", icon: Heart, desc: "Pharma industry marketing" },
    { name: "Real Estate", icon: Building2, desc: "Property marketing" },
    { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Retail solutions" },
    { name: "FMCG & Trading", icon: Package, desc: "FMCG marketing" },
    { name: "Professional Services", icon: Briefcase, desc: "B2B services marketing" }
  ];

  const stats = [
    { number: "480+", label: "Ahmedabad Clients", icon: Users },
    { number: "₹58Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "11+", label: "Years in Ahmedabad", icon: Award },
    { number: "96%", label: "Client Satisfaction", icon: Star }
  ];

  const locations = [
    "Satellite", "Vastrapur", "CG Road", "Maninagar", "Bopal",
    "Prahlad Nagar", "Navrangpura", "SG Highway", "Thaltej", "Gota",
    "Naranpura", "Paldi", "Chandkheda", "Bodakdev", "Ambawadi",
    "Ashram Road", "Sarkhej", "GIFT City", "Gandhinagar", "Isanpur"
  ];

  const testimonials = [
    {
      name: "Kiran Patel",
      company: "Textile Exporter, Maninagar",
      text: "Dekhe Trends helped us transition from traditional to digital marketing. Our international inquiries increased 250% in 8 months. Their understanding of Ahmedabad's textile industry is exceptional.",
      rating: 5
    },
    {
      name: "Priya Shah",
      company: "Jewelry Brand, CG Road",
      text: "Our online presence transformed completely. From Instagram to website, everything is now professional and results-driven. We've expanded from 2 stores to 10 across Gujarat.",
      rating: 5
    },
    {
      name: "Rajesh Mehta",
      company: "Manufacturing Company, Vatva",
      text: "We went from local player to pan-India presence. Their B2B marketing strategies and lead generation campaigns generated 500+ qualified leads. ROI has been phenomenal.",
      rating: 5
    }
  ];

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Ahmedabad | Dekhe Trends Ahmedabad"
        description="Leading digital marketing agency in Ahmedabad offering SEO, social media, branding, and growth strategies. Serving Satellite, CG Road, Vastrapur, and all Ahmedabad locations."
        canonical="https://dekhetrends.com/ahmedabad"
      />

      <div className="flex flex-col min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Ahmedabad's Premier Digital Marketing Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6"
              >
                Grow Your <br />
                <span className="gradient-text">Ahmedabad Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed"
              >
                From Satellite to GIFT City, CG Road to Maninagar - we help Ahmedabad businesses dominate their markets with data-driven digital marketing strategies that deliver measurable ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link href="/audit">
                  <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg">
                    Get Free Ahmedabad Market Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                    <Phone className="mr-2 w-5 h-5" />
                    Schedule Consultation
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {locations.slice(0, 10).map((location) => (
                  <Badge key={location} variant="secondary" className="px-3 py-1">
                    {location}
                  </Badge>
                ))}
                <Badge variant="secondary" className="px-3 py-1">+10 More</Badge>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 border-y border-white/5 bg-white/[0.02]">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Why Ahmedabad Businesses Choose Dekhe Trends
              </h2>
              <p className="text-xl text-muted-foreground">
                We understand Ahmedabad's unique business culture - where entrepreneurial spirit meets traditional values. Our strategies drive modern growth while respecting your heritage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Deep Local Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We understand Ahmedabad's unique market dynamics - from the textile markets of Maninagar to the financial district of GIFT City. Our strategies are tailored to each sector's specific characteristics.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Extensive Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access our vast network of Ahmedabad influencers, Gujarati content creators, media contacts, and business associations. From industry chambers to trade bodies, we open doors that accelerate growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <BarChart3 className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Results-Driven Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every campaign is backed by Ahmedabad market data and analytics. We track 480+ local metrics, analyze competitor movements, and use AI-powered insights to ensure measurable ROI.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Fast Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ahmedabad's business community values speed and efficiency. Get campaign launches in 48 hours, strategy revisions within 24 hours, and real-time support during critical moments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Proven Track Record</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Over 480 successful campaigns across Ahmedabad's diverse industries. From helping traditional businesses go digital to scaling modern startups, we deliver consistent results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>Transparent Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    No hidden costs, no surprises. Clear, upfront pricing with flexible packages designed for Ahmedabad businesses of all sizes. ROI-focused investment you can trust.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Complete Digital Marketing Services in Ahmedabad
              </h2>
              <p className="text-xl text-muted-foreground">
                End-to-end digital marketing solutions tailored for Ahmedabad's competitive market. Every service customized to your business goals and industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all group">
                    <CardHeader>
                      <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button size="lg" className="h-12 px-8">
                  Explore All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Industries We Serve in Ahmedabad
              </h2>
              <p className="text-xl text-muted-foreground">
                Specialized expertise across Ahmedabad's key industries. We understand your sector's unique challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all group cursor-pointer">
                    <CardHeader>
                      <industry.icon className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-lg">{industry.name}</CardTitle>
                      <CardDescription>{industry.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Serving All of Ahmedabad
              </h2>
              <p className="text-xl text-muted-foreground">
                From Satellite to GIFT City, CG Road to Maninagar - we're your local digital marketing partner across Ahmedabad and Gandhinagar.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{location}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Success Stories from Ahmedabad
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results from real Ahmedabad businesses. See how we've helped companies achieve remarkable growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20">
                    <CardHeader>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        "{testimonial.text}"
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Our Proven Process
              </h2>
              <p className="text-xl text-muted-foreground">
                A systematic approach that has delivered results for 480+ Ahmedabad businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "Comprehensive audit of your digital presence, competitors, and Ahmedabad market opportunities with actionable insights.",
                  icon: Search
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description: "Custom strategy tailored to your goals, audience, and budget. Clear roadmap with timelines and KPIs.",
                  icon: Lightbulb
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Expert execution across all channels. Quality implementation with attention to detail and results focus.",
                  icon: Rocket
                },
                {
                  step: "04",
                  title: "Optimize & Scale",
                  description: "Continuous monitoring, testing, and optimization. Scale winners, eliminate losers. Transparent reporting.",
                  icon: LineChart
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-primary/20 hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <item.icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
                  Ready to Dominate Your Market?
                </h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                  Join 480+ successful Ahmedabad businesses. Get your free consultation and market audit today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link href="/audit">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-xl">
                      Get Free Market Audit
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                      <Phone className="mr-2 w-5 h-5" />
                      Talk to Our Team
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>No Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>ROI Guarantee</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What are your pricing packages for Ahmedabad businesses?",
                  a: "We offer flexible packages starting from ₹20,000/month for small businesses to comprehensive enterprise solutions. Pricing is customized based on your needs, business size, and goals. Contact us for a detailed quote tailored to your Ahmedabad business."
                },
                {
                  q: "How quickly can we see results?",
                  a: "Timeline varies by service. Paid ads show results within days, SEO takes 3-6 months for significant rankings. We provide realistic timelines and show progress through weekly reports. Most Ahmedabad clients see meaningful results within 90 days."
                },
                {
                  q: "Do you understand Ahmedabad's business culture?",
                  a: "Absolutely! We understand and respect Ahmedabad's entrepreneurial culture and traditional business values. Our strategies honor these values while leveraging modern digital marketing techniques for growth."
                },
                {
                  q: "Can you create content in Gujarati?",
                  a: "Yes! We have Gujarati content creators on our team who can create authentic Gujarati content for your campaigns. We understand the importance of regional language marketing in Ahmedabad and Gujarat."
                },
                {
                  q: "Do you work with textile and manufacturing companies?",
                  a: "Yes! We have extensive experience with Ahmedabad's textile, diamond, and manufacturing sectors. We understand B2B marketing, export marketing, and the unique challenges of these industries."
                },
                {
                  q: "What makes you different from other Ahmedabad agencies?",
                  a: "Three key differentiators: (1) Deep local market knowledge and industry expertise, (2) Data-driven approach with transparent reporting, (3) Proven track record with 480+ successful campaigns across diverse industries."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

