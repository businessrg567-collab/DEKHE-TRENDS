import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Zap, CheckCircle2, ArrowRight, TrendingUp, Target, Users, BarChart3, Rocket, Map, LineChart, Repeat, DollarSign } from "lucide-react";

export default function GrowthStrategy() {
  return (
    <>
      <SEO
        title="Growth Strategy & Marketing - Scale Your Business with Data-Driven Strategies"
        description="Comprehensive growth strategy services combining data analysis with creative execution. Build scalable growth systems that drive sustainable revenue."
        keywords="growth strategy, growth marketing, growth hacking, marketing strategy, customer acquisition, revenue growth, scalable growth"
      />
      
      <StructuredData
        type="Service"
        data={{
          name: "Growth Strategy Services",
          description: "Actionable roadmaps to scale combining data with creativity to build campaigns that convert",
          provider: {
            "@type": "Organization",
            name: "Dekhe Trends"
          },
          serviceType: "Marketing Strategy"
        }}
      />

      <div className="min-h-screen pt-24 pb-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Accelerate Growth</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Growth <span className="gradient-text">Strategy</span> That Actually Works
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Actionable roadmaps to scale your business. We combine data intelligence with creative execution to build campaigns that convert and growth systems that compound.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                      Get Growth Roadmap <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                      View Case Studies
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-center">Complete Growth System Development</h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                We don't just give you tactics—we build complete growth systems that work together to drive sustainable, scalable revenue growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Map,
                    title: "Go-to-Market Strategy",
                    description: "Comprehensive launch plans that identify optimal channels, messaging, timing, and tactics. We map the entire customer journey from awareness to advocacy and design touchpoints that convert at each stage."
                  },
                  {
                    icon: Target,
                    title: "Channel Strategy & Mix",
                    description: "Data-driven channel selection and budget allocation. We identify which channels will deliver the best ROI for your specific business model, audience, and growth stage, then optimize the mix for maximum efficiency."
                  },
                  {
                    icon: Users,
                    title: "Customer Acquisition",
                    description: "Systematic approaches to acquiring customers profitably. We design acquisition funnels, optimize conversion paths, and implement testing frameworks to continuously improve cost per acquisition."
                  },
                  {
                    icon: Repeat,
                    title: "Retention & LTV Optimization",
                    description: "Strategies to keep customers longer and increase lifetime value. We build retention loops, design engagement sequences, and create value ladders that turn one-time buyers into repeat customers."
                  },
                  {
                    icon: TrendingUp,
                    title: "Viral & Referral Mechanics",
                    description: "Engineer word-of-mouth growth through strategic referral programs, viral loops, and community building. We design incentive structures that turn customers into advocates."
                  },
                  {
                    icon: BarChart3,
                    title: "Analytics & Attribution",
                    description: "Implement tracking systems that reveal what's actually driving growth. We set up proper attribution models, define key metrics, and create dashboards that enable data-driven decisions."
                  },
                  {
                    icon: Rocket,
                    title: "Conversion Rate Optimization",
                    description: "Systematic testing and optimization of every conversion point. We identify friction, test hypotheses, and implement improvements that compound into significant revenue gains."
                  },
                  {
                    icon: DollarSign,
                    title: "Monetization Strategy",
                    description: "Optimize pricing, packaging, and revenue models. We test different monetization approaches to find what maximizes revenue without sacrificing growth velocity."
                  },
                  {
                    icon: LineChart,
                    title: "Growth Experimentation Framework",
                    description: "Build a culture of systematic experimentation. We establish processes for generating hypotheses, running tests, and scaling winners—creating a growth machine that improves continuously."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Deep Content */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">The Science of Scalable Growth</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Growth isn't luck. It's not about going viral or finding a magic channel. Sustainable, scalable growth comes from building systems—repeatable processes that consistently acquire, convert, and retain customers profitably. Most businesses approach growth tactically, trying random strategies without understanding the underlying mechanics. We build strategic growth systems.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Why Most Growth Strategies Fail</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The typical growth strategy fails for predictable reasons. First, it's based on what worked for other companies rather than what will work for your specific situation. Second, it focuses on acquisition while ignoring retention, creating a leaky bucket. Third, it lacks proper measurement, making it impossible to know what's working. Fourth, it treats growth as a campaign rather than a system.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've seen countless businesses waste millions on growth tactics that were never going to work for their business model. A B2B SaaS company trying to grow through Instagram influencers. A high-ticket coaching business relying on Facebook ads to cold traffic. A consumer app expecting organic growth without viral mechanics. These mismatches between strategy and business model doom growth efforts before they start.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Growth Strategy Framework</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our growth strategy development follows a systematic framework. We start by deeply understanding your business model, unit economics, customer psychology, and competitive landscape. We identify your growth levers—the specific metrics that, when improved, drive disproportionate revenue impact.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Next, we map your customer journey from initial awareness through purchase and beyond. We identify friction points, drop-off stages, and optimization opportunities. We design experiments to test hypotheses about what will improve conversion at each stage.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Then we build your channel strategy—identifying which acquisition channels align with your customer behavior, budget constraints, and growth goals. We don't recommend channels based on trends; we recommend them based on where your customers actually are and how they actually make decisions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finally, we create your growth roadmap—a prioritized sequence of initiatives with clear success metrics, resource requirements, and expected outcomes. This roadmap evolves based on results, creating a learning system that gets smarter over time.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 10x Revenue Growth in 18 Months</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A D2C beauty brand came to us stuck at $2M annual revenue. They were spending heavily on Facebook and Instagram ads but seeing diminishing returns. Customer acquisition costs were rising while lifetime value remained flat. They needed a new growth strategy or they'd be out of business within a year.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our analysis revealed several critical issues. First, they were treating all customers the same despite having three distinct customer segments with different behaviors and values. Second, they had no retention strategy beyond occasional email promotions. Third, they were ignoring their highest-LTV channel (organic search) while overspending on paid social.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented a complete growth system redesign. We segmented their audience and created tailored acquisition and retention strategies for each segment. We built a content engine that drove organic search traffic. We implemented a subscription model for their highest-engagement customers. We created a referral program that turned customers into advocates. We optimized their email marketing to drive repeat purchases.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results: Revenue grew from $2M to $20M in 18 months. Customer acquisition cost dropped 43% while lifetime value increased 2.7x. They achieved profitability for the first time and raised a Series A at a $100M valuation. The growth system we built continues to drive 15-20% monthly growth.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Go-to-Market Strategy: Launching for Maximum Impact</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A go-to-market strategy determines how you'll introduce your product to the market and acquire your first customers. Most GTM strategies fail because they're too broad, trying to reach everyone instead of focusing on an ideal initial audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design GTM strategies around the concept of the "minimum viable audience"—the smallest group of customers who will love your product enough to become advocates. We identify this audience through psychographic and behavioral analysis, not just demographics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We then map the customer journey for this audience: How do they discover new products? What triggers purchase decisions? What objections must be overcome? Who influences their choices? This journey mapping reveals the specific touchpoints and messages needed to convert this audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our GTM strategies include detailed launch timelines, channel selection, content plans, partnership opportunities, and success metrics. We identify quick wins that can generate early traction and momentum-building tactics that compound over time.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Channel Strategy: Finding Your Growth Channels</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not all marketing channels work for all businesses. The channels that drive growth for consumer apps differ from those that work for B2B SaaS, which differ from those that work for e-commerce. Our channel strategy identifies your specific growth channels based on your business model, customer behavior, and competitive dynamics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We evaluate channels across multiple dimensions: reach potential, targeting capabilities, cost efficiency, scalability, competitive saturation, and strategic fit. We identify primary channels (where you'll invest heavily), secondary channels (where you'll test and optimize), and channels to avoid (where your competitors have insurmountable advantages).
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also design your channel mix—the optimal budget allocation across channels. This mix evolves over time as channels mature, competition intensifies, and new opportunities emerge. We create decision frameworks for when to scale, maintain, or abandon channels based on performance data.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Acquisition: Building Profitable Funnels</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Customer acquisition is about more than driving traffic—it's about converting that traffic profitably. Our acquisition strategies focus on the entire funnel from initial awareness through purchase, optimizing each stage for maximum conversion.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design acquisition funnels based on customer psychology and decision-making patterns. For high-consideration purchases, we build educational funnels that address objections and build trust over time. For impulse purchases, we create urgency and remove friction. For complex B2B sales, we design multi-touch attribution models that nurture leads through long sales cycles.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement systematic testing frameworks to continuously improve acquisition efficiency. We test messaging, offers, landing pages, ad creative, targeting, and conversion mechanisms. We identify winning variations and scale them while killing losers quickly.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Retention & LTV Optimization: Keeping Customers Longer</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acquisition gets attention, but retention drives profitability. Increasing retention by just 5% can increase profits by 25-95%, depending on your business model. Yet most companies spend 90% of their resources on acquisition and 10% on retention. This is backwards.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our retention strategies focus on creating value loops—reasons for customers to return repeatedly. For subscription businesses, this means delivering ongoing value that justifies continued payment. For e-commerce, this means creating purchase habits and emotional connections. For apps, this means building features that become part of daily routines.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design engagement sequences that keep customers active, educational content that helps them get more value, and surprise-and-delight moments that build emotional loyalty. We implement win-back campaigns for churned customers and expansion strategies for existing customers.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Viral & Referral Mechanics: Engineering Word-of-Mouth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The most powerful growth comes from customers who bring other customers. Referral-driven growth is cheaper, faster, and more sustainable than paid acquisition. But viral growth doesn't happen by accident—it must be engineered into your product and business model.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design viral loops and referral programs based on behavioral psychology. We identify natural sharing moments in your product experience and make sharing easy and rewarding. We create incentive structures that motivate referrals without feeling transactional.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  For B2B products, we design referral mechanics that leverage professional networks and industry communities. For consumer products, we create social sharing features and network effects. For content businesses, we optimize for organic sharing and virality.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Analytics & Attribution: Measuring What Matters</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You can't optimize what you don't measure. Our analytics strategy establishes the tracking infrastructure and attribution models needed to understand what's actually driving growth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement comprehensive tracking across all customer touchpoints: website behavior, ad interactions, email engagement, product usage, and purchase patterns. We set up proper attribution models that reveal which channels and campaigns deserve credit for conversions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create custom dashboards that surface the metrics that matter for your business. We define leading indicators (signals that predict future growth) and lagging indicators (measures of past performance). We establish reporting cadences and decision frameworks based on data.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Conversion Rate Optimization: Compounding Small Wins</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Conversion rate optimization is about systematically improving every step of your customer journey. Small improvements compound into massive revenue gains. Increasing conversion rates by 20% at three stages of your funnel results in 73% more customers from the same traffic.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify high-impact optimization opportunities through data analysis, user research, and conversion audits. We prioritize tests based on potential impact and implementation effort. We run rigorous A/B tests with proper statistical significance to validate improvements.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our CRO process is continuous, not one-time. We build testing roadmaps that systematically improve every element of your conversion funnel over time. We create a culture of experimentation where testing becomes a core competency.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Monetization Strategy: Maximizing Revenue Per Customer</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  How you monetize impacts growth velocity and long-term value. The wrong pricing model can kill an otherwise great product. The right model can unlock explosive growth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test different monetization approaches: freemium vs. paid, subscription vs. one-time, tiered pricing vs. single price, usage-based vs. seat-based. We analyze willingness to pay, price sensitivity, and value perception to optimize pricing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design pricing strategies that align with growth goals. If you're prioritizing market share, we might recommend aggressive freemium models. If you're optimizing for profitability, we might recommend premium pricing with value-based tiers. Strategy drives pricing, not the reverse.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Growth Experimentation Framework: Building a Growth Machine</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The most successful growth teams don't rely on single big wins—they run hundreds of small experiments, scaling winners and killing losers. This systematic experimentation creates a growth machine that improves continuously.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish experimentation processes: how to generate hypotheses, how to prioritize tests, how to run experiments rigorously, how to analyze results, and how to scale successes. We create experiment tracking systems and decision frameworks.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We train your team on growth experimentation methodologies so they can continue running tests after our engagement. We build institutional knowledge and capabilities that persist long-term.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Growth Strategy Deliverables</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our growth strategy engagement delivers comprehensive documentation and implementation support:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Growth Roadmap:</strong> 12-month prioritized plan with specific initiatives, timelines, and success metrics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Channel Strategy:</strong> Detailed recommendations for each growth channel with budget allocation and tactics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Customer Journey Maps:</strong> Visual representations of customer paths with optimization opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Experimentation Framework:</strong> Processes and tools for systematic growth testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Analytics Setup:</strong> Tracking implementation and dashboard configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Playbooks:</strong> Tactical guides for executing specific growth initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Team Training:</strong> Workshops to build internal growth capabilities</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Implementation Support</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strategy without execution is worthless. We don't just hand you a document—we support implementation. This includes monthly check-ins to review progress, troubleshoot challenges, and refine strategy based on results. We provide ongoing access to our team for questions and guidance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Many clients engage us for ongoing growth advisory after the initial strategy development. We become an extension of your team, providing strategic guidance, reviewing experiments, and helping navigate growth challenges as they arise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Build Your Growth System?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start with a free growth audit. We'll analyze your current growth efforts and identify your biggest opportunities.
              </p>
              <Link href="/audit">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">
                  Get Free Growth Audit <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

