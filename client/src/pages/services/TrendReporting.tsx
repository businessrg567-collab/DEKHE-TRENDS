import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { TrendingUp, CheckCircle2, ArrowRight, BarChart3, Target, Zap, Users, Globe, Search, Calendar, FileText, Award } from "lucide-react";

export default function TrendReporting() {
  return (
    <>
      <SEO
        title="Trend Reporting as a Service (TRaaS) - Stay 6 Months Ahead"
        description="Monthly trend intelligence reports that identify micro-trends before they go mainstream. Get actionable insights specific to your industry with our Trend Reporting as a Service (TRaaS)."
        keywords="trend reporting, trend intelligence, market trends, trend forecasting, consumer trends, micro-trends, trend analysis, TRaaS, trend reports"
        ogType="article"
      />
      
      <StructuredData
        type="Service"
        data={{
          name: "Trend Reporting as a Service (TRaaS)",
          description: "Monthly trend intelligence reports that identify micro-trends before they go mainstream",
          provider: {
            "@type": "Organization",
            name: "Dekhe Trends",
            url: "https://dekhetrends.com"
          },
          serviceType: "Market Research",
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Trend Intelligence Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Monthly Trend Reports"
                }
              }
            ]
          }
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
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Most Popular Service</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Trend Reporting as a <span className="gradient-text">Service (TRaaS)</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Stay 6 months ahead of your competition with monthly deep-dives into emerging micro-trends specific to your niche. We don't just report trends—we decode their implications for your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                      Get Started Free <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full">
                      Schedule Demo
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-center">What's Included in TRaaS</h2>
              <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
                Every month, you receive a comprehensive trend intelligence package designed to keep you ahead of market shifts and consumer behavior changes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Monthly Trend Decks",
                    description: "Beautifully designed 40-60 page reports featuring 5-7 emerging micro-trends in your industry. Each trend includes visual examples, data points, and strategic recommendations."
                  },
                  {
                    icon: Users,
                    title: "Consumer Behavior Analysis",
                    description: "Deep psychological insights into why certain trends are gaining traction. We analyze sentiment shifts, demographic movements, and cultural catalysts driving change."
                  },
                  {
                    icon: BarChart3,
                    title: "Quantitative Data",
                    description: "Hard numbers to back up every trend. Search volume trends, social media engagement metrics, sales data correlations, and predictive growth curves."
                  },
                  {
                    icon: Target,
                    title: "Actionable Recommendations",
                    description: "Specific strategies for how to capitalize on each trend. Product development ideas, marketing angles, content themes, and partnership opportunities."
                  },
                  {
                    icon: Globe,
                    title: "Global & Local Insights",
                    description: "Trends broken down by geography. See what's emerging in different markets and predict when micro-trends will cross borders into your region."
                  },
                  {
                    icon: Calendar,
                    title: "Trend Timeline Forecasting",
                    description: "Projected adoption curves showing when trends will peak. Plan your campaigns with confidence knowing the optimal timing for maximum impact."
                  },
                  {
                    icon: Search,
                    title: "Competitive Landscape",
                    description: "See which brands are already experimenting with emerging trends. Learn from early movers' successes and failures before you commit resources."
                  },
                  {
                    icon: Zap,
                    title: "Quick-Win Opportunities",
                    description: "Low-hanging fruit you can implement immediately. Every report includes 3-5 tactical moves you can execute within 30 days for quick results."
                  },
                  {
                    icon: Award,
                    title: "Exclusive Analyst Access",
                    description: "Monthly Q&A sessions with our trend analysts. Get personalized answers to your specific questions and dive deeper into trends relevant to your business."
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

        {/* Why TRaaS Matters Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Trend Intelligence Matters Now More Than Ever</h2>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The modern marketplace moves at unprecedented speed. What's trending today can be obsolete tomorrow. Consumer preferences shift overnight. New platforms emerge and reshape entire industries. In this environment, reactive businesses don't just fall behind—they become irrelevant.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Traditional market research tells you where the market <em>was</em>. By the time you receive quarterly reports, the insights are already outdated. Trend intelligence, done right, tells you where the market is <em>going</em>. It's the difference between following and leading.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Cost of Missing Trends</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Consider the brands that missed major shifts: retailers who dismissed e-commerce, media companies that ignored streaming, fashion brands that overlooked sustainability. These weren't failures of execution—they were failures of awareness. They had the resources to adapt but lacked the foresight to see change coming.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every missed trend represents lost revenue, wasted marketing spend, and diminished brand relevance. When you're late to a trend, you're forced to compete on price rather than innovation. You become a follower in a market that rewards pioneers.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Advantage of Early Adoption</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Brands that identify trends early gain multiple advantages. First, they can shape the narrative around emerging movements rather than react to it. Second, they can secure partnerships and supply chains before competition drives up costs. Third, they build authority as innovators, which compounds over time.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our TRaaS clients consistently report being 6-9 months ahead of their competitors. This lead time allows them to test, iterate, and perfect their approach while others are still in planning phases. By the time a trend hits mainstream awareness, our clients are already established leaders.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">How We Identify Trends Before They Break</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our trend identification process combines artificial intelligence with human expertise. We monitor millions of data points across social platforms, search engines, e-commerce sites, and cultural forums. Our AI flags unusual patterns—sudden spikes in niche communities, emerging vocabulary, shifting sentiment around established categories.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  But data alone isn't enough. Our team of cultural anthropologists and industry specialists analyzes these signals through a human lens. They ask: Why is this happening now? What underlying need does this fulfill? Which demographic is driving adoption? How will this evolve? This combination of machine speed and human insight is what makes our trend reports uniquely valuable.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">From Insight to Action: Making Trends Work for Your Business</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Identifying trends is only half the battle. The real value comes from knowing how to apply them to your specific business context. A trend that's perfect for a D2C beauty brand might be irrelevant for a B2B SaaS company. Our reports don't just describe trends—they translate them into actionable strategies for your industry.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Each trend in our monthly reports includes a "Strategic Application" section tailored to your vertical. We outline specific product ideas, marketing campaigns, content strategies, and partnership opportunities. You're not left wondering "so what?"—you know exactly what to do next.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: How TRaaS Drove 340% Revenue Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  One of our fashion clients was struggling with declining sales in their core category. Our March 2023 report identified an emerging micro-trend around "dopamine dressing"—the psychology of wearing bright colors to boost mood. While mainstream fashion media wouldn't cover this trend until August, our client had a four-month head start.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  They immediately pivoted their summer collection to feature vibrant, mood-boosting pieces. They launched a content campaign around the psychology of color. They partnered with mental wellness influencers. By the time competitors noticed the trend, our client had established themselves as the category leader. Their Q3 revenue grew 340% year-over-year, and they captured 23% market share in a previously commoditized category.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Industry-Specific Trend Intelligence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Generic trend reports waste your time with irrelevant insights. Our TRaaS subscription is customized to your industry vertical. Fashion brands receive different reports than tech companies. D2C businesses get different insights than B2B enterprises. We track the signals that matter to your specific market.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>For Fashion & Apparel:</strong> We monitor runway shows, street style movements, fabric innovations, sustainability shifts, and demographic style preferences. We track emerging aesthetics on TikTok and Instagram before they hit mainstream fashion publications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>For Beauty & Wellness:</strong> We analyze ingredient trends, skincare routines, makeup techniques, wellness philosophies, and self-care movements. We identify which K-beauty or J-beauty trends will cross over to Western markets.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>For Tech & SaaS:</strong> We track workflow changes, productivity tool adoption, remote work trends, automation attitudes, and emerging use cases. We identify which features users are requesting across platforms and which pain points are becoming critical.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>For D2C Brands:</strong> We monitor unboxing psychology, subscription model preferences, customer service expectations, and community-building strategies. We identify which direct-to-consumer approaches are gaining traction.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  <strong>For Creator Economy:</strong> We track platform algorithm changes, monetization model innovations, audience engagement patterns, and content format trends. We identify which creator strategies are working and why.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The ROI of Trend Intelligence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our clients report an average 12:1 return on their TRaaS investment. This comes from multiple sources: reduced wasted marketing spend on outdated strategies, increased revenue from early trend adoption, improved product-market fit, and enhanced brand positioning as industry innovators.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  One insight can pay for years of subscription. A D2C beverage client used our report on "functional beverages for mental clarity" to pivot their entire product line. That single trend insight generated $2.3M in additional revenue within six months. A fashion retailer used our "coastal grandmother" trend report to curate a collection that sold out in three weeks, generating $890K in revenue.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Beyond the Report: Ongoing Support</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  TRaaS isn't just a monthly PDF delivery. You get ongoing access to our team of analysts. Have questions about how to implement a trend? Need clarification on data points? Want to explore a trend in more depth? Our monthly Q&A sessions give you direct access to the experts who created your report.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We also provide mid-month "Trend Alerts" when we spot urgent opportunities or threats. If a trend is accelerating faster than expected, you'll know immediately. If a competitor makes a major move, we'll analyze the implications. You're never caught off guard.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Competitive Intelligence Built In</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Every trend report includes competitive context. We show you which brands are already experimenting with emerging trends, what's working for them, and what's failing. You learn from others' expensive mistakes without spending a dollar on testing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We track your top 5 competitors' marketing campaigns, product launches, partnership announcements, and strategic pivots. You see their moves through the lens of trend intelligence, understanding not just what they're doing but why—and whether it will work.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Trend Lifecycle Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Not all trends are created equal. Some are fleeting fads that will disappear in months. Others are fundamental shifts that will reshape industries for years. Our reports classify each trend by expected lifespan and adoption curve, so you know which deserve major investment and which warrant quick experiments.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We track trends over time, updating you on their evolution. When a trend we identified six months ago is approaching mainstream adoption, we alert you to scale up. When a trend is peaking, we recommend harvest strategies. When a trend is declining, we help you pivot gracefully.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Global Perspective, Local Application</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Trends often emerge in one market before spreading globally. Korean beauty trends influence American consumers 12-18 months later. Japanese minimalism impacts Western design with a similar lag. European sustainability standards preview American regulatory changes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our global monitoring network identifies these patterns, giving you advance notice of trends heading your way. We also provide localization guidance—how to adapt global trends to your specific market's cultural context, regulatory environment, and consumer preferences.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Who Benefits Most from TRaaS</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  TRaaS delivers maximum value for brands in fast-moving consumer markets: fashion, beauty, food & beverage, consumer tech, and lifestyle products. These industries see rapid trend cycles where early adoption creates significant competitive advantages.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Marketing teams use our reports to plan campaigns around emerging cultural moments. Product teams use them to inform roadmaps and feature prioritization. Executive teams use them for strategic planning and resource allocation. Content teams use them to stay relevant and engage audiences with timely topics.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Getting Started with TRaaS</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We begin every TRaaS engagement with a comprehensive onboarding process. We audit your current market position, identify your key competitors, understand your strategic goals, and define your target audience. This context ensures every monthly report is relevant and actionable for your specific situation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Your first report arrives within two weeks of onboarding. From there, you receive a new report on the first business day of each month. Reports are delivered as interactive PDFs with embedded links to examples, data sources, and supplementary resources. You also receive a video walkthrough from your assigned analyst, highlighting the most important trends and answering common questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Investment & Packages</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Choose the plan that fits your business needs. All plans include full access to monthly reports and analyst Q&A sessions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    name: "Starter",
                    price: "$2,499",
                    period: "/month",
                    description: "Perfect for growing brands",
                    features: [
                      "Monthly trend report (40+ pages)",
                      "5-7 micro-trends per month",
                      "Industry-specific insights",
                      "Quarterly analyst calls",
                      "Email support"
                    ]
                  },
                  {
                    name: "Professional",
                    price: "$4,999",
                    period: "/month",
                    description: "For established brands",
                    features: [
                      "Everything in Starter",
                      "Extended reports (60+ pages)",
                      "Competitive intelligence add-on",
                      "Monthly analyst calls",
                      "Mid-month trend alerts",
                      "Priority support"
                    ],
                    popular: true
                  },
                  {
                    name: "Enterprise",
                    price: "Custom",
                    period: "",
                    description: "For market leaders",
                    features: [
                      "Everything in Professional",
                      "Custom trend tracking",
                      "Dedicated analyst",
                      "Weekly check-ins",
                      "Custom research projects",
                      "White-label reports"
                    ]
                  }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-8 rounded-2xl border-2 ${
                      plan.popular
                        ? "border-primary bg-gradient-to-br from-primary/10 to-accent/10"
                        : "border-accent/20 bg-card"
                    } relative`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8 text-left">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/audit">
                      <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Stay Ahead of the Curve?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start with a free audit to see what trends you're currently missing. No commitment required.
              </p>
              <Link href="/audit">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">
                  Claim Your Free Audit <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

