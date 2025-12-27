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
  Rocket, Heart, Factory, GraduationCap, Shirt, Home
} from "lucide-react";

export default function Kanpur() {
  const services = [
    { icon: TrendingUp, title: "Market Trend Analysis", description: "Deep insights into Kanpur's industrial market. From leather industry to manufacturing, we track trends that drive growth.", features: ["Trend forecasting", "Consumer insights", "Market research", "Competitive intelligence"] },
    { icon: Target, title: "Brand Strategy & Development", description: "Build brands that resonate with Kanpur's industrial heritage and modern business aspirations.", features: ["Brand positioning", "Identity design", "Brand messaging", "Market entry strategy"] },
    { icon: BarChart3, title: "Data Analytics & Insights", description: "Transform Kanpur market data into actionable insights for manufacturing and trading businesses.", features: ["Custom dashboards", "Predictive analytics", "Customer segmentation", "ROI tracking"] },
    { icon: Search, title: "Local SEO Kanpur", description: "Dominate local search across Kanpur. Get found by B2B buyers and local customers in every locality.", features: ["Google My Business", "Local keyword optimization", "Citation building", "Review management"] },
    { icon: Share2, title: "Social Media Marketing", description: "Engage Kanpur's business community with targeted social media campaigns that drive results.", features: ["Content strategy", "Community management", "Influencer partnerships", "Paid social campaigns"] },
    { icon: Megaphone, title: "Performance Marketing", description: "ROI-focused advertising campaigns for Kanpur's manufacturing and trading businesses.", features: ["Google Ads", "Facebook advertising", "Instagram campaigns", "LinkedIn B2B"] },
    { icon: Video, title: "Video Production & Marketing", description: "Professional video content for industrial and commercial businesses in Kanpur.", features: ["Video production", "YouTube optimization", "Video advertising", "Social video content"] },
    { icon: Mail, title: "Email Marketing", description: "Build lasting B2B relationships through strategic email campaigns.", features: ["Campaign design", "Marketing automation", "List segmentation", "A/B testing"] },
    { icon: Users, title: "Influencer Marketing", description: "Connect with Kanpur's business influencers and industry leaders.", features: ["Influencer identification", "Campaign management", "Content collaboration", "Performance tracking"] },
    { icon: ShoppingBag, title: "E-commerce Solutions", description: "Scale your online store and B2B marketplace presence.", features: ["Platform optimization", "Conversion optimization", "Cart recovery", "Marketplace strategy"] },
    { icon: Globe, title: "Digital Transformation", description: "Modernize your Kanpur business with cutting-edge digital solutions.", features: ["Technology consulting", "Process automation", "Digital strategy", "Change management"] },
    { icon: Lightbulb, title: "Growth Strategy Consulting", description: "Scale your Kanpur business with proven growth frameworks.", features: ["Market expansion", "Growth hacking", "Funnel optimization", "Retention strategies"] }
  ];

  const industries = [
    { name: "Leather & Footwear", icon: Shirt, desc: "Leather industry marketing" },
    { name: "Manufacturing & Industrial", icon: Factory, desc: "Industrial marketing" },
    { name: "Education & Coaching", icon: GraduationCap, desc: "Educational institutions" },
    { name: "Real Estate", icon: Home, desc: "Property marketing" },
    { name: "Healthcare", icon: Heart, desc: "Medical services marketing" },
    { name: "Retail & E-commerce", icon: ShoppingBag, desc: "Retail solutions" },
    { name: "IT & Services", icon: Globe, desc: "Tech company marketing" },
    { name: "Professional Services", icon: Briefcase, desc: "B2B services marketing" }
  ];

  const stats = [
    { number: "280+", label: "Kanpur Clients", icon: Users },
    { number: "₹32Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "7+", label: "Years in Kanpur", icon: Award },
    { number: "92%", label: "Client Satisfaction", icon: Star }
  ];

  const locations = ["Civil Lines", "Swaroop Nagar", "Kakadeo", "Kidwai Nagar", "Arya Nagar", "Kalyanpur", "Panki", "Barra", "Govind Nagar", "Shyam Nagar", "Harsh Nagar", "Fazalganj", "Naubasta", "Juhi", "Rawatpur", "Jajmau", "Kanpur Cantt", "Mall Road", "Birhana Road", "GT Road"];

  const testimonials = [
    { name: "Rajesh Kumar", company: "Manufacturing Company, Panki", text: "Dekhe Trends helped us generate 150+ B2B leads per month. Our business grew 200% in 10 months. Their understanding of Kanpur's industrial market is exceptional.", rating: 5 },
    { name: "Priya Sharma", company: "Educational Institute, Civil Lines", text: "Our student enrollment increased 160% after working with them. Their digital marketing strategies helped us reach parents across Kanpur.", rating: 5 },
    { name: "Amit Verma", company: "Real Estate Developer, Swaroop Nagar", text: "We went from 10 leads per month to 120+ qualified leads. Their local SEO and advertising campaigns transformed our business.", rating: 5 }
  ];

  return (
    <>
      <SEO title="Digital Marketing Agency in Kanpur | Dekhe Trends Kanpur" description="Leading digital marketing agency in Kanpur offering SEO, social media, branding, and growth strategies. Serving Civil Lines, Swaroop Nagar, and all Kanpur locations." canonical="https://dekhetrends.com/kanpur" />
      <div className="flex flex-col min-h-screen">
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-primary/10">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">Kanpur's Premier Digital Marketing Agency</span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6">
                Grow Your <br /><span className="gradient-text">Kanpur Business</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                From Civil Lines to Panki, Swaroop Nagar to Kakadeo - we help Kanpur businesses dominate their markets with data-driven digital marketing strategies.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg">Get Free Kanpur Market Audit<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full"><Phone className="mr-2 w-5 h-5" />Schedule Consultation</Button></Link>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-3">
                {locations.slice(0, 10).map((location) => (<Badge key={location} variant="secondary" className="px-3 py-1">{location}</Badge>))}
                <Badge variant="secondary" className="px-3 py-1">+10 More</Badge>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 border-y border-white/5 bg-white/[0.02]">
          <div className="container px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Why Kanpur Businesses Choose Dekhe Trends</h2>
              <p className="text-xl text-muted-foreground">We understand Kanpur's industrial heritage and modern business landscape.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: MapPin, title: "Deep Local Expertise", desc: "We understand Kanpur's unique industrial market and manufacturing sector." },
                { icon: Users, title: "Extensive Network", desc: "Access our vast network of Kanpur business contacts and industry partners." },
                { icon: BarChart3, title: "Results-Driven", desc: "Every campaign backed by data. We track 280+ local metrics for measurable ROI." },
                { icon: Clock, title: "Fast Turnaround", desc: "Campaign launches in 48 hours, strategy revisions within 24 hours." },
                { icon: Award, title: "Proven Success", desc: "Over 280 successful campaigns across Kanpur's diverse industries." },
                { icon: Shield, title: "Transparent Pricing", desc: "Clear, upfront pricing with flexible packages for all business sizes." }
              ].map((item, index) => (
                <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all">
                  <CardHeader><item.icon className="w-12 h-12 text-primary mb-4" /><CardTitle>{item.title}</CardTitle></CardHeader>
                  <CardContent><p className="text-muted-foreground">{item.desc}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Complete Digital Marketing Services in Kanpur</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
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
              <Link href="/services"><Button size="lg" className="h-12 px-8">Explore All Services<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Industries We Serve in Kanpur</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }}>
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

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Serving All of Kanpur</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {locations.map((location, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.02 }} viewport={{ once: true }} className="flex items-center gap-2 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{location}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Success Stories from Kanpur</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="h-full border-primary/20">
                    <CardHeader>
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 fill-primary text-primary" />))}
                      </div>
                      <CardDescription className="text-base leading-relaxed">"{testimonial.text}"</CardDescription>
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

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Our Proven Process</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Analysis", icon: Search },
                { step: "02", title: "Strategy Development", icon: Lightbulb },
                { step: "03", title: "Implementation", icon: Rocket },
                { step: "04", title: "Optimize & Scale", icon: LineChart }
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                  <Card className="h-full border-primary/20 hover:border-primary/40 transition-all">
                    <CardHeader>
                      <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                      <item.icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">Ready to Transform Your Business?</h2>
                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">Join 280+ successful Kanpur businesses. Get your free consultation today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-xl">Get Free Market Audit<ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
                  <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full"><Phone className="mr-2 w-5 h-5" />Talk to Our Team</Button></Link>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                  {["Free Consultation", "No Contracts", "ROI Guarantee"].map((item) => (
                    <div key={item} className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-accent" /><span>{item}</span></div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                { q: "What are your pricing packages for Kanpur businesses?", a: "We offer flexible packages starting from ₹15,000/month for small businesses to comprehensive enterprise solutions. Contact us for a detailed quote." },
                { q: "How quickly can we see results?", a: "Timeline varies by service. Paid ads show results within days, SEO takes 3-6 months. Most Kanpur clients see meaningful results within 90 days." },
                { q: "Do you work with manufacturing and industrial businesses?", a: "Yes! We have extensive experience with Kanpur's manufacturing and industrial sectors." },
                { q: "Can you create content in Hindi?", a: "Yes! We have Hindi content creators who can create authentic Hindi content for your campaigns." },
                { q: "Do you serve all areas of Kanpur?", a: "Yes! We serve the entire Kanpur region including all major localities." },
                { q: "What makes you different from other Kanpur agencies?", a: "Deep local market knowledge, data-driven approach, and proven track record with 280+ successful campaigns." }
              ].map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} viewport={{ once: true }}>
                  <Card className="border-primary/20">
                    <CardHeader><CardTitle className="text-lg">{faq.q}</CardTitle></CardHeader>
                    <CardContent><p className="text-muted-foreground leading-relaxed">{faq.a}</p></CardContent>
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

