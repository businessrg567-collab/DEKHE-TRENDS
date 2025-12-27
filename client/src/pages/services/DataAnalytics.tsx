import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { BarChart3, CheckCircle2, ArrowRight, TrendingUp, Target, PieChart, LineChart, Database, Zap, Eye, Award, Settings } from "lucide-react";

export default function DataAnalytics() {
  return (
    <>
      <SEO
        title="Data Analytics & Business Intelligence - Make Data-Driven Decisions"
        description="Comprehensive data analytics and business intelligence services. Transform data into actionable insights that drive better business decisions and improved performance."
        keywords="data analytics, business intelligence, data analysis, analytics strategy, data visualization, predictive analytics, data-driven decisions, BI tools"
      />
      
      <StructuredData type="Service" data={{ name: "Data Analytics & Business Intelligence", description: "Transform data into actionable insights that drive business growth", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Analytics Consulting" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Data-Driven Growth</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Data <span className="gradient-text">Analytics</span> That Drives Decisions
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Transform data into actionable insights. We build analytics systems that reveal what's working, what's not, and what to do next—enabling confident, data-driven decisions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Analytics Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Analytics System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Analytics Strategy", description: "Comprehensive analytics strategies defining what to measure, how to measure it, and how to act on insights. We align analytics with business goals for maximum impact." },
                  { icon: Database, title: "Data Infrastructure", description: "Building data collection, storage, and processing systems. We implement data warehouses, ETL pipelines, and integration frameworks that make data accessible." },
                  { icon: Eye, title: "Dashboard Development", description: "Custom dashboards that surface key metrics and trends. We design visualizations that enable quick understanding and confident decision-making." },
                  { icon: LineChart, title: "Predictive Analytics", description: "Machine learning models that forecast outcomes and recommend actions. Predictive analytics enables proactive strategy rather than reactive responses." },
                  { icon: PieChart, title: "Customer Analytics", description: "Deep analysis of customer behavior, preferences, and lifetime value. Understanding customers enables better targeting, personalization, and retention." },
                  { icon: TrendingUp, title: "Marketing Analytics", description: "Comprehensive tracking and attribution of marketing performance. We reveal which channels, campaigns, and tactics drive best ROI." },
                  { icon: Award, title: "Product Analytics", description: "Analysis of product usage, feature adoption, and user flows. Product analytics informs development priorities and optimization opportunities." },
                  { icon: Settings, title: "Analytics Implementation", description: "Technical implementation of tracking, tools, and integrations. We ensure accurate data collection and proper tool configuration." },
                  { icon: Zap, title: "Real-Time Analytics", description: "Live dashboards and alerts that enable immediate response to opportunities or issues. Real-time visibility accelerates decision-making." },
                  { icon: BarChart3, title: "Reporting & Insights", description: "Regular reports that translate data into actionable insights. We don't just show numbers—we explain what they mean and recommend actions." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Analytics Drives Better Outcomes</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Data-driven businesses outperform competitors by 5-6% in productivity and profitability. Analytics transforms gut feelings into evidence-based decisions. It reveals what's actually working versus what you think is working. Analytics identifies opportunities invisible to intuition and catches problems before they become crises. Yet most businesses struggle with analytics—drowning in data but starving for insights. They track everything but understand nothing. They have dashboards nobody uses and reports nobody reads. We build analytics systems that actually drive better decisions and improved performance.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Analytics Advantage</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics eliminates guesswork from business decisions. Instead of debating opinions, teams can examine evidence. Analytics reveals what drives results, enabling resource allocation to highest-ROI activities. It identifies underperforming initiatives early, preventing wasted investment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics enables continuous optimization. By measuring performance systematically, businesses can test improvements and scale winners. This creates compounding gains—small improvements across multiple areas multiply into substantial performance increases.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics provides early warning of problems. Declining metrics signal issues before they're obvious. Early detection enables proactive response rather than crisis management. Analytics prevents small problems from becoming big ones.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics reveals customer insights that drive growth. Understanding customer behavior, preferences, and lifetime value enables better targeting, personalization, and retention. Customer analytics turns anonymous transactions into understood relationships.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Analytics Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Effective analytics requires strategy, not just tools. Random measurement creates noise without insight. We develop analytics strategies that focus on metrics that matter.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define key performance indicators (KPIs) aligned with business goals. Different goals require different metrics. Growth goals need acquisition and retention metrics. Profitability goals need unit economics and efficiency metrics. We identify 5-10 critical metrics that truly indicate success.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We distinguish between vanity metrics and actionable metrics. Vanity metrics look impressive but don't drive decisions. Actionable metrics reveal what to do next. We focus on metrics that inform action, not just impress stakeholders.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish measurement frameworks that track metrics consistently. Frameworks define how metrics are calculated, what data sources are used, and how frequently they're reviewed. Consistent measurement enables trend analysis and valid comparisons.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create analytics roadmaps that sequence implementation. We start with foundational tracking, add advanced analytics progressively, and build capabilities systematically. Roadmaps prevent overwhelming teams while ensuring steady progress.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Data Infrastructure Implementation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics requires solid data infrastructure. Siloed data, inconsistent tracking, and poor data quality prevent effective analysis. We build infrastructure that makes data accessible and trustworthy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement comprehensive tracking across all customer touchpoints. Website analytics, app analytics, CRM data, transaction data, marketing platform data—all sources must be tracked consistently. We ensure tracking is accurate and complete.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build data warehouses that consolidate data from disparate sources. Data warehouses enable analysis across systems impossible with siloed data. We implement modern data warehouse solutions (Snowflake, BigQuery, Redshift) that scale and perform.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create ETL (extract, transform, load) pipelines that move data from sources to warehouses. Pipelines automate data integration, ensuring fresh data for analysis. We implement robust pipelines that handle errors gracefully and run reliably.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish data governance ensuring quality, security, and compliance. We define data ownership, quality standards, and access controls. Good governance makes data trustworthy and usable.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Dashboard & Visualization Design</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dashboards make data accessible and actionable. Poor dashboards overwhelm with irrelevant metrics or hide important trends. We design dashboards that enable quick understanding and confident decisions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design role-specific dashboards. Executives need high-level KPIs and trends. Managers need operational metrics and team performance. Analysts need detailed data for deep dives. Different roles need different views.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use appropriate visualizations for different data types. Line charts show trends over time. Bar charts compare categories. Scatter plots reveal correlations. We choose visualizations that communicate clearly and honestly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement interactive dashboards that enable exploration. Users can filter, drill down, and segment data to answer specific questions. Interactivity makes dashboards tools for discovery, not just reporting.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design for mobile access. Decision-makers need insights anywhere, anytime. Mobile-optimized dashboards enable on-the-go monitoring and decision-making.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement automated alerting for critical metrics. When metrics exceed thresholds, stakeholders receive immediate notifications. Alerts enable rapid response to opportunities or problems.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Predictive Analytics & Machine Learning</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Predictive analytics forecasts future outcomes enabling proactive strategy. Machine learning identifies patterns humans miss and makes predictions at scale.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build churn prediction models that identify customers likely to leave. Early identification enables retention interventions before customers churn. Churn prediction can reduce churn 20-40% through targeted intervention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop lifetime value prediction models that forecast customer value. LTV predictions enable better acquisition decisions—knowing which customers are worth acquiring and at what cost.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create demand forecasting models that predict future sales. Accurate forecasts enable better inventory management, staffing decisions, and capacity planning. Forecasting reduces waste and prevents stockouts.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement recommendation engines that personalize experiences. Recommendations increase engagement and conversion by showing relevant products or content. Amazon attributes 35% of revenue to recommendations.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build propensity models that predict likelihood of specific behaviors—purchase, upgrade, referral. Propensity scores enable targeted campaigns to highest-probability prospects.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Analytics</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding customers deeply enables better targeting, personalization, and retention. Customer analytics transforms anonymous transactions into understood relationships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze customer segmentation identifying distinct groups with different behaviors and values. Segmentation enables targeted strategies that resonate with specific groups. We segment by demographics, behaviors, needs, and value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We calculate customer lifetime value (LTV) revealing true customer worth. LTV analysis shows which customer segments are most valuable and justifies acquisition costs. We track LTV trends to measure retention improvements.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze customer journeys mapping paths from awareness through purchase and beyond. Journey analysis reveals friction points, drop-off stages, and optimization opportunities. We identify which touchpoints drive conversion.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct cohort analysis tracking customer groups over time. Cohorts reveal whether retention is improving, which acquisition sources produce best customers, and how customer behavior evolves.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze RFM (recency, frequency, monetary value) to identify best customers and at-risk customers. RFM analysis enables targeted retention and reactivation campaigns.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Marketing Analytics & Attribution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Marketing analytics reveals which channels, campaigns, and tactics drive best ROI. Attribution shows which touchpoints deserve credit for conversions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement multi-touch attribution that recognizes all touchpoints contributing to conversions. Last-click attribution oversimplifies customer journeys. Multi-touch attribution reveals which channels drive awareness versus which drive conversion.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track full-funnel metrics from impressions through conversions to revenue. We calculate cost per acquisition, return on ad spend, and customer acquisition cost by channel. We identify which channels deliver best ROI.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze campaign performance identifying which messages, offers, and creative drive best results. We track performance over time revealing fatigue and optimal refresh timing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement marketing mix modeling that quantifies impact of different marketing activities. MMM reveals optimal budget allocation across channels and tactics.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Product Analytics</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Product analytics reveals how users interact with products, which features drive value, and where improvements are needed.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track feature usage identifying which features are used, by whom, and how frequently. Usage analysis informs development priorities—which features to improve, which to sunset, and which gaps to fill.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze user flows mapping paths through products. Flow analysis reveals where users get stuck, where they drop off, and which paths lead to success. We optimize flows to reduce friction.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We measure activation—specific actions that predict retention. We track activation rates and optimize onboarding to drive activation behaviors. Activated users have 3-5x higher retention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct funnel analysis identifying conversion rates at each step. Funnel analysis reveals which steps lose most users and where optimization efforts should focus.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Analytics Driving 40% Revenue Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A SaaS company had basic analytics but struggled to make data-driven decisions. They tracked metrics but didn't understand what drove them. Leadership made decisions based on intuition rather than evidence.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented comprehensive analytics system: built data warehouse consolidating all sources, created role-specific dashboards, implemented customer segmentation and LTV analysis, developed churn prediction model, and established attribution framework. We trained team on using analytics for decisions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 12 months: Analytics revealed that enterprise segment had 5x higher LTV than SMB segment. Company shifted focus to enterprise, increasing revenue 40%. Churn prediction enabled proactive retention reducing churn 25%. Attribution analysis revealed underinvested channels, reallocating budget increased efficiency 30%. Analytics became foundation for all strategic decisions.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Analytics Service Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Analytics Strategy:</strong> Comprehensive strategy defining metrics, frameworks, and roadmap</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Data Infrastructure:</strong> Implementation of tracking, warehouses, and pipelines</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Dashboard Development:</strong> Custom dashboards for different roles and needs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Advanced Analytics:</strong> Predictive models and machine learning implementations</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Training & Enablement:</strong> Team training on analytics tools and interpretation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Ongoing Support:</strong> Continued analytics advisory and optimization</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics projects vary widely in scope. Initial strategy development takes 2-3 weeks. Basic infrastructure implementation takes 4-6 weeks. Advanced analytics and predictive modeling take 8-12 weeks. Investment ranges from $25K for strategy and basic implementation to $150K+ for comprehensive analytics systems including advanced capabilities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Analytics delivers measurable ROI through better decisions. Clients typically see 5-10x return within first year as analytics-driven optimization improves performance across business. Long-term value compounds as analytics capabilities mature and data-driven culture develops.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Become Data-Driven?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free analytics assessment. We'll evaluate your current analytics and identify opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Assessment <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

