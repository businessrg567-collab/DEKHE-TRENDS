import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Search, CheckCircle2, ArrowRight, Users, TrendingUp, BarChart3, Target, Eye, MessageCircle, Award, Lightbulb, PieChart } from "lucide-react";

export default function MarketResearch() {
  return (
    <>
      <SEO
        title="Market Research & Consumer Insights - Understand Your Customers Deeply"
        description="Comprehensive market research and consumer insights services. Understand customer needs, preferences, and behaviors to make data-driven business decisions."
        keywords="market research, consumer insights, customer research, market analysis, audience research, consumer behavior, market intelligence, qualitative research, quantitative research"
      />
      
      <StructuredData type="Service" data={{ name: "Market Research & Consumer Insights", description: "Deep market and consumer research that informs strategic business decisions", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Market Research" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Deep Customer Understanding</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Market <span className="gradient-text">Research</span> That Reveals Truth
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Understand your customers deeply through comprehensive market research and consumer insights. Make confident business decisions based on data, not assumptions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Research Proposal <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Research Capabilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Users, title: "Customer Segmentation", description: "Deep audience segmentation based on demographics, psychographics, behaviors, and needs. We identify distinct customer groups and create detailed personas that guide strategy." },
                  { icon: MessageCircle, title: "Qualitative Research", description: "In-depth interviews, focus groups, and ethnographic studies that reveal why customers behave as they do. Qualitative insights uncover motivations quantitative data misses." },
                  { icon: BarChart3, title: "Quantitative Research", description: "Large-scale surveys and data analysis that quantify customer preferences, behaviors, and market dynamics. Statistical rigor ensures reliable, actionable insights." },
                  { icon: Target, title: "Competitive Analysis", description: "Comprehensive competitive research identifying market positioning, strengths, weaknesses, and opportunities. Understand competitive dynamics to differentiate effectively." },
                  { icon: TrendingUp, title: "Market Sizing & Forecasting", description: "Rigorous market size estimation and growth forecasting. Understand total addressable market, serviceable market, and realistic penetration potential." },
                  { icon: Eye, title: "Brand Perception Studies", description: "Research measuring how customers perceive your brand versus competitors. Identify brand strengths to leverage and weaknesses to address." },
                  { icon: Lightbulb, title: "Concept Testing", description: "Test product concepts, messaging, and positioning before launch. Validate ideas with target audiences to reduce risk and optimize market fit." },
                  { icon: PieChart, title: "Usage & Attitude Studies", description: "Research revealing how customers use products, what they value, and what frustrates them. Usage insights inform product development and marketing." },
                  { icon: Award, title: "Customer Journey Mapping", description: "Detailed mapping of customer journeys from awareness through purchase and beyond. Identify touchpoints, pain points, and optimization opportunities." },
                  { icon: Search, title: "Market Entry Research", description: "Comprehensive research for new market entry. Assess market attractiveness, competitive landscape, regulatory environment, and go-to-market strategy." }
                ].map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 transition-all">
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

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Market Research Drives Better Decisions</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most business failures stem from misunderstanding customers. Companies build products nobody wants, launch marketing that doesn't resonate, and make strategic decisions based on assumptions rather than reality. Market research replaces assumptions with evidence. It reveals what customers actually need, want, and value—not what you think they need. Research-driven businesses make better decisions, launch more successful products, and achieve higher ROI on all investments. Yet many companies skip research, viewing it as expensive or slow. This short-term thinking leads to expensive failures that proper research would have prevented.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Value of Customer Understanding</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Deep customer understanding is the foundation of business success. When you truly understand customers—their needs, motivations, pain points, decision processes—you can create products they love, marketing that resonates, and experiences that delight. This understanding creates competitive advantages competitors can't easily replicate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research reveals gaps between what customers say and what they do. Stated preferences often differ from actual behavior. Customers say they want healthy food but buy junk food. They claim price matters most but pay premiums for brands they love. Research uncovers these contradictions, revealing true drivers of behavior.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research identifies unmet needs and market opportunities. Customers often can't articulate needs they don't know solutions exist for. Skilled research uncovers latent needs, frustrations with current solutions, and willingness to pay for better alternatives. These insights drive innovation and growth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research reduces risk in major decisions. Launching products, entering markets, or making strategic pivots involve significant investment and risk. Research validates assumptions, tests concepts, and forecasts outcomes—reducing risk and increasing confidence in major decisions.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Segmentation Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Not all customers are alike. Treating diverse customers as homogeneous leads to mediocre marketing that resonates with nobody. Segmentation divides markets into distinct groups with similar needs, allowing targeted strategies that resonate strongly with each segment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We segment markets using multiple dimensions. Demographic segmentation (age, income, location) provides basic structure. Psychographic segmentation (values, lifestyle, personality) reveals motivations. Behavioral segmentation (usage patterns, purchase behavior) predicts actions. Needs-based segmentation (problems seeking solutions) drives product development.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create detailed personas for each segment. Personas bring segments to life with names, photos, backgrounds, goals, challenges, and decision criteria. Teams can design for "Sarah the busy mom" more effectively than "women 25-40." Personas make abstract segments concrete and actionable.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We prioritize segments based on attractiveness and fit. Not all segments are equally valuable. We assess segment size, growth potential, profitability, competitive intensity, and alignment with your capabilities. We recommend which segments to target, which to monitor, and which to ignore.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop segment-specific strategies. Different segments need different products, messaging, channels, and pricing. Segment-specific strategies outperform one-size-fits-all approaches by 3-5x because they're relevant to specific customer needs.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Qualitative Research Methods</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Qualitative research explores the "why" behind customer behavior. While quantitative research measures what and how much, qualitative research reveals motivations, emotions, and decision processes. This depth of understanding informs strategy in ways numbers alone cannot.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>In-Depth Interviews:</strong> One-on-one conversations that explore individual perspectives deeply. We conduct 20-30 interviews per project, probing motivations, experiences, and decision processes. Interviews reveal nuanced insights impossible to capture in surveys.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Focus Groups:</strong> Moderated group discussions that reveal shared perspectives and generate ideas. Group dynamics surface insights individuals might not mention alone. Focus groups are particularly valuable for concept testing and exploring social influences on behavior.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Ethnographic Research:</strong> Observing customers in natural environments reveals actual behavior versus stated behavior. We watch how customers use products, navigate stores, or complete tasks. Observation uncovers friction points and opportunities customers can't articulate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Diary Studies:</strong> Customers document experiences over time, revealing patterns and contexts. Diary studies capture moments, emotions, and situations that retrospective interviews miss. They're valuable for understanding usage patterns and journey stages.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze qualitative data rigorously. We code transcripts, identify themes, and develop frameworks that organize insights. We don't just report what customers said—we interpret what it means for your business and recommend actions.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Quantitative Research Methods</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Quantitative research measures customer preferences, behaviors, and market dynamics at scale. Statistical rigor ensures findings are reliable and representative, not just interesting anecdotes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Surveys:</strong> Structured questionnaires that collect data from large samples. We design surveys that minimize bias, use appropriate question types, and achieve high response rates. We analyze results using statistical methods that reveal significant patterns and relationships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Conjoint Analysis:</strong> Advanced technique measuring trade-offs customers make between features, benefits, and price. Conjoint reveals which attributes drive decisions and optimal product configurations. It's invaluable for pricing and product development.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>MaxDiff Analysis:</strong> Method identifying what customers value most among many options. MaxDiff forces prioritization, revealing true preferences rather than "everything is important" responses. It's excellent for prioritizing features or messaging themes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Brand Tracking:</strong> Ongoing measurement of brand awareness, perception, and preference over time. Tracking reveals whether brand initiatives are working and how competitive dynamics evolve. It provides early warning of brand health issues.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We ensure statistical validity through proper sampling, adequate sample sizes, and rigorous analysis. We don't just report percentages—we test significance, identify correlations, and segment results to reveal actionable patterns.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Competitive Intelligence Research</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding competitors is essential for effective strategy. We conduct comprehensive competitive research that reveals positioning, strategies, strengths, weaknesses, and likely future moves.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze competitive offerings—products, features, pricing, positioning. We identify what competitors do well and where they fall short. We map competitive landscape to reveal white space opportunities and crowded positions to avoid.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research competitive strategies through multiple sources—websites, marketing materials, job postings, financial reports, customer reviews, and industry publications. We synthesize information into coherent understanding of competitive intentions and capabilities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct competitive benchmarking—measuring your performance against competitors on key dimensions. Benchmarking reveals where you lead, where you lag, and where to focus improvement efforts.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We assess competitive threats and opportunities. Which competitors are growing? Which are vulnerable? What new entrants might disrupt the market? Forward-looking competitive intelligence enables proactive strategy rather than reactive responses.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Market Sizing & Forecasting</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding market size and growth potential is critical for strategy and investment decisions. We use rigorous methodologies to estimate markets and forecast growth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We calculate Total Addressable Market (TAM)—the revenue opportunity if you captured 100% of the market. TAM provides upper bound on opportunity and helps assess market attractiveness.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We estimate Serviceable Available Market (SAM)—the portion of TAM you can realistically target given your business model, geography, and capabilities. SAM is more relevant than TAM for planning.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We project Serviceable Obtainable Market (SOM)—the portion of SAM you can realistically capture given competition, resources, and time. SOM informs realistic revenue projections and growth plans.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We forecast market growth using multiple approaches—historical trends, driver-based models, and scenario planning. We provide best-case, expected-case, and worst-case scenarios to support planning under uncertainty.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Concept Testing & Validation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Testing concepts before launch reduces risk and optimizes market fit. We validate product concepts, messaging, and positioning with target audiences before expensive development or launch.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test product concepts to gauge interest, understand perceived value, and identify concerns. Concept testing reveals whether ideas resonate, what features matter most, and optimal positioning. Testing prevents building products nobody wants.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test messaging and positioning to find what resonates. We show different value propositions, benefit statements, and positioning angles to target audiences. Testing identifies messaging that breaks through and drives action.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test pricing to understand willingness to pay and optimal price points. Pricing research reveals price sensitivity, acceptable ranges, and how price affects perceived value. Proper pricing research can increase revenue 20-40% versus guessing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test creative concepts—ads, packaging, designs. Creative testing identifies which executions grab attention, communicate effectively, and drive desired actions. Testing prevents expensive creative failures.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Journey Research</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding complete customer journeys—from initial awareness through purchase and beyond—reveals optimization opportunities at every stage. We map journeys in detail, identifying touchpoints, emotions, and pain points.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research awareness stage—how customers first learn about solutions. What triggers problem recognition? Where do they search for information? What sources do they trust? Awareness insights inform top-of-funnel marketing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research consideration stage—how customers evaluate options. What criteria matter? How do they compare alternatives? What information do they need? Consideration insights inform positioning and content strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research purchase stage—what drives final decisions. What overcomes objections? What creates urgency? What causes abandonment? Purchase insights inform conversion optimization.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research post-purchase experience—what drives satisfaction, retention, and advocacy. What creates delight? What causes disappointment? What turns customers into advocates? Post-purchase insights inform retention strategy.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Usage & Attitude Research</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding how customers actually use products reveals optimization opportunities. Usage research uncovers friction points, unmet needs, and feature priorities that inform product development.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research usage patterns—frequency, contexts, workflows. How often do customers use products? In what situations? For what purposes? Usage patterns reveal opportunities for increased engagement and new features.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research feature usage and value. Which features do customers use most? Which provide most value? Which are confusing or ignored? Feature research prioritizes development and simplification efforts.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research satisfaction and frustrations. What do customers love? What frustrates them? What would they change? Satisfaction research identifies retention risks and improvement priorities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research unmet needs and desired improvements. What problems remain unsolved? What would make products more valuable? Needs research drives innovation and competitive differentiation.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Market Entry Research</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Entering new markets requires comprehensive research to assess opportunity and plan strategy. We conduct multi-faceted research that de-risks market entry decisions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We assess market attractiveness—size, growth, profitability, and competitive intensity. Not all markets are equally attractive. Research reveals whether markets justify investment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research customer needs and preferences in new markets. Needs vary across markets due to cultural, economic, and regulatory differences. Research ensures offerings fit local needs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze competitive dynamics—who dominates, how they compete, and where opportunities exist. Understanding competitive landscape informs positioning and go-to-market strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We research regulatory and operational requirements. What regulations apply? What distribution channels exist? What partnerships are necessary? Operational research prevents costly surprises.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Research Preventing $5M Product Failure</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A consumer electronics company planned to launch a "revolutionary" smart home device. They'd invested $2M in development and planned $5M marketing launch. Leadership was confident based on internal enthusiasm and tech press interest.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conducted comprehensive market research before launch. Qualitative interviews revealed consumers were experiencing "smart home fatigue"—overwhelmed by too many connected devices. Quantitative surveys showed only 8% of target audience had strong purchase intent. Concept testing revealed the product solved a problem only 3% of consumers had.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research recommended either pivoting to focus on the one feature that resonated (which would require significant redesign) or canceling the launch. The client chose to pivot, reducing scope dramatically and repositioning around the single compelling use case. The simplified product launched at 1/3 the cost, achieved product-market fit, and generated $2.1M first-year revenue. Research prevented a $5M+ failure.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Research Service Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Research Design:</strong> Comprehensive methodology and sampling plan</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Data Collection:</strong> Professional execution of interviews, surveys, or other methods</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Analysis:</strong> Rigorous analysis identifying patterns and insights</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Insights Report:</strong> Comprehensive findings with strategic implications</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Recommendations:</strong> Actionable recommendations based on findings</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Presentation:</strong> Executive presentation of key findings and recommendations</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research timelines vary by scope and methodology. Qualitative projects typically take 4-6 weeks. Quantitative surveys take 3-4 weeks. Comprehensive multi-method studies take 8-12 weeks. Investment ranges from $15K for focused studies to $100K+ for comprehensive market research programs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Research ROI comes from better decisions. A single prevented failure can justify years of research investment. Optimized products, positioning, and strategies driven by research deliver ongoing value. Most clients find research pays for itself many times over through improved outcomes and avoided mistakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Understand Your Customers Deeply?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free research consultation. We'll discuss your questions and recommend appropriate research approaches.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Consultation <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

