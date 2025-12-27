import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Search, CheckCircle2, ArrowRight, Eye, Target, TrendingUp, Shield, Zap, BarChart3, Users, FileSearch, AlertCircle } from "lucide-react";

export default function CompetitorIntelligence() {
  return (
    <>
      <SEO
        title="Competitor Intelligence & Analysis - Know Your Competition Better Than They Know Themselves"
        description="Comprehensive competitor intelligence services. Track ad spend, creative strategies, product launches, and market positioning. Stay ahead with deep competitive analysis."
        keywords="competitor intelligence, competitive analysis, competitor research, market intelligence, competitor tracking, ad spend analysis, competitive strategy"
      />
      
      <StructuredData
        type="Service"
        data={{
          name: "Competitor Intelligence Services",
          description: "Deep-dive analysis of competitors including ad spend, creative strategy, and market positioning",
          provider: {
            "@type": "Organization",
            name: "Dekhe Trends"
          },
          serviceType: "Competitive Intelligence"
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
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Strategic Intelligence</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Competitor <span className="gradient-text">Intelligence</span> That Gives You the Edge
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  We stalk your competitors so you don't have to. Get comprehensive breakdowns of their ad spend, creative strategies, product launches, and market positioning. Know their next move before they make it.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                      Start Intelligence Report <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Track Section */}
        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-center">What We Track & Analyze</h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                Our competitor intelligence goes beyond surface-level observation. We dig deep into every aspect of your competitors' operations to give you actionable insights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: BarChart3,
                    title: "Ad Spend Analysis",
                    description: "Track exactly how much competitors are spending on paid advertising across all platforms. See their budget allocation, seasonal patterns, and ROI indicators. Understand which channels they're prioritizing and why."
                  },
                  {
                    icon: Eye,
                    title: "Creative Strategy Audit",
                    description: "Analyze their creative approach across campaigns. We break down messaging themes, visual styles, copywriting techniques, and emotional triggers. See what's working and what's flopping."
                  },
                  {
                    icon: Target,
                    title: "Audience Targeting",
                    description: "Discover who they're targeting and how. We reverse-engineer their audience segments, demographic focus, psychographic profiles, and behavioral targeting strategies."
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth Tactics",
                    description: "Identify the specific tactics driving their growth. From viral campaigns to partnership strategies, influencer collaborations to SEO approaches—we map their entire growth playbook."
                  },
                  {
                    icon: Shield,
                    title: "Brand Positioning",
                    description: "Understand how they position themselves in the market. We analyze their value propositions, differentiation strategies, pricing psychology, and brand messaging evolution over time."
                  },
                  {
                    icon: Zap,
                    title: "Product Launch Patterns",
                    description: "Track their product development cycles, launch strategies, and market testing approaches. See what they're building before it hits the market and predict their next moves."
                  },
                  {
                    icon: Users,
                    title: "Customer Sentiment",
                    description: "Monitor what customers really think about competitors. We analyze reviews, social mentions, support tickets, and community discussions to identify their strengths and weaknesses."
                  },
                  {
                    icon: FileSearch,
                    title: "Content Strategy",
                    description: "Decode their content marketing approach. We track blog performance, social media engagement, email campaigns, and content themes to see what resonates with their audience."
                  },
                  {
                    icon: AlertCircle,
                    title: "Vulnerability Assessment",
                    description: "Identify gaps in their strategy that you can exploit. We find the weak points in their market coverage, customer service, product offerings, and brand perception."
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

        {/* Deep Dive Content */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">The Strategic Advantage of Competitor Intelligence</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In today's hyper-competitive marketplace, ignorance about your competition isn't bliss—it's business suicide. Every day you operate without deep competitor intelligence, you're making strategic decisions in the dark. You're guessing at market opportunities while your competitors are executing with precision.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Why Most Competitive Analysis Fails</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most businesses approach competitive analysis wrong. They look at competitors' websites, follow their social media, maybe sign up for their email lists. This surface-level observation tells you what competitors want you to see—their polished marketing facade. It doesn't reveal their actual strategy, budget allocation, or what's working behind the scenes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Real competitor intelligence requires systematic tracking across dozens of data sources, pattern recognition across months of activity, and strategic interpretation of seemingly unrelated signals. It requires tools, expertise, and time that most marketing teams simply don't have.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Hidden Costs of Competitive Blindness</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When you don't understand your competitive landscape, you make expensive mistakes. You launch products into saturated markets. You invest in marketing channels where competitors have already captured audience attention. You position your brand in ways that directly compete with stronger players rather than finding open territory.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  One of our clients was preparing to launch a $500K marketing campaign targeting millennials interested in sustainable fashion. Our competitor intelligence revealed that three major competitors had already saturated this exact segment with similar messaging. We helped them pivot to an underserved Gen-Z segment focused on circular fashion, resulting in 4x better CAC and 67% higher conversion rates.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Ad Spend Intelligence: Follow the Money</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Where competitors spend money reveals what's working. If a competitor suddenly increases Facebook ad spend by 300%, they've found something that converts. If they're pulling back from Google Ads, that channel isn't performing for your market. If they're testing TikTok with small budgets, they're exploring new territory.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our ad spend analysis tracks monthly budgets across all major platforms: Facebook, Instagram, Google Ads, TikTok, LinkedIn, Twitter, YouTube, and programmatic display. We monitor budget fluctuations, seasonal patterns, and campaign duration. We correlate ad spend with product launches, seasonal events, and market conditions to understand the strategy behind the spending.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  More importantly, we estimate their ROI. By tracking ad spend alongside observable results (follower growth, engagement rates, estimated traffic), we can calculate approximate customer acquisition costs and campaign effectiveness. This tells you not just what they're doing, but whether it's actually working.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Creative Strategy Deconstruction</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every successful ad campaign follows patterns. Certain messaging themes resonate with specific audiences. Particular visual styles drive engagement. Specific emotional triggers convert browsers into buyers. Our creative analysis identifies these patterns across your competitors' campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We collect and categorize every ad creative competitors run. We analyze messaging angles, visual composition, color psychology, copywriting techniques, and call-to-action strategies. We track which creatives run longest (indicating success) and which get pulled quickly (indicating failure).
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  For each competitor, we create a "Creative Playbook" that documents their proven approaches. You see exactly what messaging resonates with your shared audience, which visual styles drive engagement, and which offers convert. You can then adapt these proven strategies to your brand, saving months of expensive testing.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Audience Targeting Reverse Engineering</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding who competitors target is as valuable as knowing how they target. Are they going after the same audience as you, or have they found an adjacent segment you're missing? Are they targeting based on demographics, interests, behaviors, or lookalike audiences?
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We reverse-engineer competitor targeting by analyzing ad delivery patterns, engagement demographics, and follower composition. We identify which audience segments they're prioritizing, which they're testing, and which they're ignoring. This reveals market opportunities—segments with demand but limited competition.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A beauty brand client discovered through our analysis that while they and their top three competitors were all fighting over 25-34 year old women, none were targeting 45-54 year old women despite strong purchase intent signals in that demographic. They pivoted 30% of their budget to this underserved segment and saw 2.3x better ROI than their core demographic campaigns.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Growth Tactic Identification</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Sustainable growth comes from executing multiple tactics simultaneously. Successful competitors aren't relying on a single channel or strategy—they're orchestrating complex growth systems. Our intelligence identifies all the moving parts of their growth engine.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track influencer partnerships, affiliate programs, referral mechanics, content marketing strategies, SEO approaches, email marketing cadences, retargeting sequences, and community building efforts. We document how these tactics interconnect and reinforce each other.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  For example, we might discover that a competitor's growth isn't primarily driven by their paid ads (which are visible) but by a sophisticated affiliate program (which isn't). Or that their email marketing generates 40% of revenue despite minimal social media presence. These insights help you allocate resources to the tactics that actually drive results.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Positioning Analysis</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  How competitors position themselves creates or closes market opportunities for you. If all major competitors position as "premium" or "luxury," there's an opening for "accessible" or "value." If everyone emphasizes "innovation," there's space for "reliability" or "simplicity."
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze competitors' value propositions, brand messaging, pricing strategies, and market positioning. We track how their positioning evolves over time, revealing strategic shifts before they're obvious. We map the competitive positioning landscape to identify white space—market positions that are valuable but unoccupied.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our positioning analysis also reveals which competitors you're actually competing against. Often, your real competition isn't who you think it is. A D2C furniture brand might think they're competing with other furniture brands, but our analysis revealed they were actually competing with home improvement stores and interior designers for customer attention and budget.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Product Launch Pattern Recognition</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Competitors' product development cycles reveal their strategic priorities and market beliefs. By tracking launch patterns, we can predict what they'll release next and when. This gives you time to prepare competitive responses or identify gaps they're leaving open.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor product announcements, beta programs, hiring patterns, trademark filings, and supply chain signals. We track which product categories they're expanding into and which they're abandoning. We identify their testing methodology—do they soft launch to small audiences or go big immediately?
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A SaaS client used our product intelligence to identify that their main competitor was developing an enterprise tier (based on job postings and beta program signals). This gave them six months to develop their own enterprise offering and secure key accounts before the competitor launched. They captured 40% of the enterprise market before competition arrived.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Sentiment Mining</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What customers say about competitors reveals opportunities and threats. Positive sentiment indicates what's working that you might want to emulate. Negative sentiment reveals vulnerabilities you can exploit. Neutral sentiment suggests areas where competitors aren't differentiated.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze thousands of customer reviews, social media comments, forum discussions, and support interactions. We use natural language processing to identify common themes, emotional triggers, and unmet needs. We track sentiment trends over time to catch deteriorating customer relationships before they're obvious.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  One recurring pattern we see: customers often love a competitor's product but hate their customer service, or vice versa. These disconnects create switching opportunities. If you can deliver both product quality and service excellence, you can capture dissatisfied customers from competitors who excel at only one.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Strategy Decoding</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content marketing success leaves trails. High-performing content gets shared, linked to, and engaged with. Low-performing content disappears quietly. By tracking competitors' content performance, we identify which topics, formats, and distribution strategies work for your shared audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze blog post performance, social media engagement, video view patterns, email open rates (when observable), and content distribution tactics. We identify their content pillars, publishing frequency, and promotional strategies. We track which content drives traffic, generates leads, and builds authority.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  More importantly, we identify content gaps—topics your audience cares about that competitors aren't covering well. These gaps represent opportunities to capture search traffic, build thought leadership, and attract customers looking for information competitors aren't providing.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Vulnerability Assessment: Finding Their Weak Points</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every competitor has vulnerabilities—gaps in their market coverage, weaknesses in their operations, blind spots in their strategy. Our vulnerability assessment systematically identifies these weak points so you can exploit them strategically.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We look for underserved customer segments, geographic markets they're ignoring, product features they're missing, price points they're not covering, and customer service failures they're not addressing. We identify operational constraints (like supply chain limitations or technology debt) that limit their ability to respond to your moves.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A fashion retailer client used our vulnerability assessment to identify that their largest competitor had weak presence in sizes above 14, despite strong demand signals. They launched an extended size range with targeted marketing to this underserved segment, capturing a profitable niche before the competitor could respond.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Competitive Intelligence Deliverables</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our competitor intelligence service delivers comprehensive reports monthly or quarterly, depending on your needs. Each report includes:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Executive Summary:</strong> Key findings and strategic recommendations in a 2-page overview</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Competitive Landscape Map:</strong> Visual representation of market positioning and competitive dynamics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Individual Competitor Profiles:</strong> Deep dives on your top 5 competitors (or custom selection)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Ad Spend Analysis:</strong> Budget tracking, channel allocation, and campaign performance estimates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Creative Archive:</strong> Organized collection of competitor ad creatives with performance annotations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Strategic Opportunities:</strong> Specific actions you can take to gain competitive advantage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Threat Assessment:</strong> Competitive moves that could impact your business and recommended responses</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Real-Time Intelligence Alerts</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Markets move fast. Waiting for monthly reports can mean missing critical competitive moves. That's why we provide real-time alerts for significant competitor actions: major product launches, pricing changes, executive hires, funding announcements, partnership deals, and strategic pivots.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When a competitor makes a major move, you receive an alert within 24 hours with preliminary analysis. Within 48 hours, you get a detailed brief on implications and recommended responses. You're never caught off guard by competitive actions.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Who Benefits Most from Competitor Intelligence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Competitor intelligence delivers maximum value in competitive markets where small advantages compound into significant market share gains. This includes e-commerce, D2C brands, SaaS, consumer apps, and any market where multiple players compete for the same customers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Marketing leaders use our intelligence to optimize channel strategy and creative approaches. Product teams use it to inform roadmap prioritization and feature development. Executive teams use it for strategic planning and competitive positioning. Sales teams use it to understand competitive differentiation and win deals.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Getting Started with Competitor Intelligence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We begin with a comprehensive competitive audit. We identify your top competitors (often including players you haven't considered), establish baseline metrics, and set up monitoring systems. Your first report arrives within three weeks and includes historical analysis going back 6-12 months to establish trends.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  From there, you receive regular reports on your chosen schedule (monthly or quarterly) plus real-time alerts for significant competitive moves. You also get quarterly strategy sessions with our analysts to discuss findings and refine your competitive strategy.
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
                Know Your Competition Inside Out
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start with a free competitive audit. We'll analyze your top 3 competitors and identify immediate opportunities.
              </p>
              <Link href="/audit">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">
                  Get Free Competitive Audit <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

