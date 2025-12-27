import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Heart, CheckCircle2, ArrowRight, Users, TrendingUp, Repeat, Gift, Star, MessageCircle, Award, BarChart3, Zap } from "lucide-react";

export default function CustomerRetention() {
  return (
    <>
      <SEO
        title="Customer Retention & Loyalty Programs - Keep Customers Coming Back"
        description="Strategic customer retention and loyalty programs that reduce churn and increase lifetime value. Turn one-time buyers into repeat customers and brand advocates."
        keywords="customer retention, customer loyalty, churn reduction, loyalty programs, customer lifetime value, retention marketing, customer engagement"
      />
      
      <StructuredData type="Service" data={{ name: "Customer Retention & Loyalty", description: "Strategic programs that reduce churn and increase customer lifetime value", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Retention Marketing" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Build Loyalty</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Customer <span className="gradient-text">Retention</span> That Multiplies LTV
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Keep customers longer and increase lifetime value through strategic retention programs. Acquiring new customers costs 5-25x more than retaining existing ones—retention is the highest-ROI growth strategy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Retention Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Retention System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: BarChart3, title: "Churn Analysis & Prevention", description: "Comprehensive churn analysis identifying why customers leave and when. We implement early warning systems and intervention strategies that prevent churn before it happens." },
                  { icon: Repeat, title: "Retention Program Design", description: "Strategic retention programs including loyalty rewards, VIP tiers, and engagement loops. We design systems that give customers reasons to stay and return repeatedly." },
                  { icon: Gift, title: "Loyalty & Rewards Programs", description: "Points-based loyalty programs, tiered benefits, and exclusive perks that reward repeat purchases. We design programs that drive behavior while remaining profitable." },
                  { icon: Users, title: "Customer Onboarding", description: "Strategic onboarding that ensures customers get value quickly. Proper onboarding reduces early churn by 50-70% and sets foundation for long-term retention." },
                  { icon: MessageCircle, title: "Engagement Campaigns", description: "Regular touchpoints that keep your brand top-of-mind. Email sequences, push notifications, and in-app messaging that maintain engagement between purchases." },
                  { icon: Star, title: "Customer Experience Optimization", description: "Systematic CX improvements that increase satisfaction and reduce churn. We identify and fix friction points throughout the customer journey." },
                  { icon: TrendingUp, title: "Upsell & Cross-Sell Programs", description: "Strategic programs that increase customer lifetime value through additional purchases. We identify optimal timing and offers for expansion revenue." },
                  { icon: Award, title: "Win-Back Campaigns", description: "Automated campaigns that re-engage churned customers. Win-back campaigns can recover 10-30% of lost customers at fraction of new acquisition cost." },
                  { icon: Zap, title: "Community Building", description: "Customer communities that create belonging and increase retention. Community members stay 3-5x longer than non-community customers." },
                  { icon: Heart, title: "Customer Success Programs", description: "Proactive customer success initiatives that ensure customers achieve desired outcomes. Success-focused customers renew at 90%+ rates." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Retention Drives Profitable Growth</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Customer retention is the most profitable growth strategy. Increasing retention by just 5% increases profits by 25-95% depending on industry. Retained customers spend more over time, cost less to serve, and refer new customers. Yet most businesses obsess over acquisition while ignoring retention. This leaves massive revenue on the table. Strategic retention programs multiply customer lifetime value, reduce churn, and create sustainable competitive advantages. Retention isn't just about keeping customers—it's about building relationships that compound value over years.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Economics of Retention</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acquiring new customers costs 5-25x more than retaining existing ones. Customer acquisition costs continue rising as competition intensifies and advertising becomes more expensive. Meanwhile, retained customers become more profitable over time. They buy more frequently, spend more per transaction, and require less marketing investment. The lifetime value of retained customers far exceeds acquisition costs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Retained customers also drive new acquisition through referrals. Happy, long-term customers recommend your brand to friends and family. These referrals convert at higher rates and have higher lifetime value than other acquisition channels. Retention creates virtuous cycles—retained customers drive more retention through word-of-mouth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Churn destroys growth. If you acquire 100 new customers monthly but lose 80 to churn, you're only growing by 20 customers. Reducing churn from 80 to 40 doubles net growth without increasing acquisition spend. Retention improvements multiply the impact of all acquisition investments.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Retention metrics predict business health. High churn signals product-market fit issues, poor customer experience, or strong competition. Low churn indicates strong value delivery and customer satisfaction. Improving retention metrics improves overall business fundamentals.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Churn Analysis & Prevention</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Understanding why customers churn is the first step to preventing it. We conduct comprehensive churn analysis that reveals patterns, triggers, and root causes. This analysis informs targeted prevention strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze churn patterns across customer segments. Which customer types churn most? When do they typically churn? What behaviors predict churn? Segmented analysis reveals that different customers churn for different reasons requiring different interventions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify leading indicators of churn—behaviors that predict future churn. Declining usage, reduced engagement, support tickets, and billing issues all signal churn risk. We build early warning systems that flag at-risk customers before they churn.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct exit surveys and interviews to understand why customers leave. Direct feedback reveals issues we might not discover through data alone. Common churn reasons include: didn't get value, found better alternative, too expensive, poor customer service, or simply forgot about the product.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement targeted interventions for at-risk customers. When early warning systems flag churn risk, we trigger intervention campaigns—personalized outreach, special offers, customer success check-ins, or product education. Proactive intervention can prevent 30-50% of predicted churn.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Retention Program Design</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strategic retention programs give customers reasons to stay and return. We design programs that create value loops—reasons for customers to engage repeatedly and remain loyal long-term.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Subscription Models:</strong> Subscriptions create automatic retention through recurring billing. We help design subscription offerings, pricing tiers, and value delivery that justifies ongoing payment. Subscription businesses have 5-10x higher customer lifetime value than transaction businesses.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Loyalty Programs:</strong> Points-based loyalty programs reward repeat purchases and increase retention. We design programs with compelling rewards, clear value propositions, and mechanics that drive desired behaviors. Effective loyalty programs increase retention 20-40%.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>VIP Tiers:</strong> Tiered programs give customers status to maintain and benefits to unlock. Tier systems create aspirational goals that drive engagement and spending. Customers in top tiers have 3-5x higher retention than base tier customers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Exclusive Access:</strong> Exclusive benefits for loyal customers create differentiation and switching costs. Early access to products, exclusive content, special events, or priority support all increase perceived value and retention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Gamification:</strong> Game mechanics—progress bars, achievements, challenges—make engagement fun and create habit loops. Gamified experiences increase engagement 30-50% and retention 20-30%.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Onboarding Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  First impressions determine retention. Customers who don't get value quickly churn quickly. Strategic onboarding ensures customers achieve "aha moments" and establish usage habits that drive long-term retention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design onboarding flows that guide customers to value quickly. We identify the shortest path to first value and remove all friction from that path. We use progressive disclosure—showing features gradually rather than overwhelming new users.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement multi-channel onboarding—in-app tutorials, email sequences, video guides, and human touchpoints. Different customers prefer different learning styles. Multi-channel onboarding ensures all customers can get value their preferred way.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We measure onboarding success through activation metrics—specific actions that predict retention. For social apps, activation might be making 7 friends in 10 days. For SaaS, it might be completing setup and using core features. We optimize onboarding to drive these activation behaviors.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide proactive support during onboarding. New customers have most questions and need most help. We offer chat support, onboarding calls, and educational resources that ensure successful starts. Customers who receive onboarding support have 50-70% higher retention.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Engagement Campaigns That Maintain Relationships</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Regular engagement between purchases maintains relationships and increases retention. We design engagement campaigns that keep your brand top-of-mind without being annoying.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Email Nurture Sequences:</strong> Regular emails that provide value—tips, insights, exclusive content—maintain engagement. We balance value-driven content with strategic promotion. Engaged email subscribers have 3-5x higher retention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Push Notifications:</strong> Timely, relevant push notifications drive app engagement and retention. We use behavioral triggers—abandoned actions, milestone achievements, personalized recommendations—to send notifications that feel helpful rather than spammy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>In-App Messaging:</strong> Contextual messages within your product guide usage and highlight features. In-app messaging increases feature adoption and overall engagement, both of which drive retention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Lifecycle Campaigns:</strong> Different messages for different lifecycle stages. New customers need education. Active customers need engagement. At-risk customers need intervention. Churned customers need win-back. Lifecycle-appropriate messaging increases relevance and effectiveness.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Experience Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Poor customer experience drives churn. We systematically improve CX across all touchpoints to increase satisfaction and retention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We map complete customer journeys identifying friction points and pain points. We prioritize improvements based on impact on satisfaction and retention. We implement changes and measure impact on churn rates.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize customer support for retention. Fast, helpful support increases satisfaction and retention. We implement knowledge bases, chatbots, and support processes that resolve issues quickly. We train support teams on retention-focused interactions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We collect and act on customer feedback. NPS surveys, satisfaction ratings, and direct feedback reveal what customers love and hate. We close feedback loops—telling customers how we've acted on their input—which increases loyalty.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement surprise-and-delight moments that create emotional connections. Unexpected gifts, personalized notes, or special recognition create memorable experiences that drive loyalty beyond rational value calculations.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Upsell & Cross-Sell for LTV Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Increasing customer lifetime value through additional purchases is more profitable than acquiring new customers. We design upsell and cross-sell programs that increase revenue per customer while maintaining satisfaction.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify optimal timing for expansion offers. When have customers extracted enough value to justify upgrades? When are they most receptive to additional products? Timing dramatically affects conversion rates.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop relevant offer strategies. Recommendations must feel helpful rather than pushy. We use purchase history, usage patterns, and preferences to suggest genuinely relevant products or upgrades.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement tiered pricing that creates natural upgrade paths. When customers outgrow current plans, they upgrade rather than churn. Clear upgrade paths with compelling additional value drive expansion revenue.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test different offer mechanisms—email campaigns, in-app prompts, account manager outreach. Different customers respond to different approaches. Multi-channel expansion strategies maximize revenue while maintaining customer satisfaction.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Win-Back Campaigns for Churned Customers</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Churned customers aren't lost forever. Win-back campaigns can recover 10-30% of churned customers at fraction of new acquisition cost. Recovered customers often have higher retention than first-time customers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We segment churned customers by churn reason. Price-sensitive churners need discount offers. Feature-gap churners need product update announcements. Forgotten churners need engagement reminders. Segmented win-back campaigns convert 2-3x better than generic campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design multi-touch win-back sequences. Initial emails acknowledge the relationship end and ask for feedback. Subsequent emails highlight improvements, offer incentives, or showcase what they're missing. Final emails create urgency with limited-time offers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test different win-back incentives—discounts, free months, upgraded features, or exclusive access. Different incentives work for different customer segments. Testing reveals optimal offers for each segment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement win-back automation that triggers at optimal times. Recent churners are easier to win back than long-gone customers. We time campaigns strategically based on churn recency and customer value.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Community Building for Retention</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Customer communities create belonging that transcends product value. Community members stay 3-5x longer than non-community customers because they're emotionally invested beyond transactional relationships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build communities around shared interests, goals, or identities. Fitness brands build communities of health enthusiasts. B2B tools build communities of professionals solving similar problems. Shared purpose creates strong bonds.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We facilitate peer-to-peer connections and support. Community members helping each other creates value beyond what your company provides. User-generated content, peer support, and knowledge sharing all increase community value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create exclusive community benefits—early access, special events, insider information. Exclusivity makes community membership valuable and creates switching costs. Leaving means losing community access and relationships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We nurture community leaders and advocates. Power users who actively contribute and help others become brand ambassadors. We recognize and reward these advocates, strengthening their loyalty while leveraging their influence.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Reducing Churn from 8% to 3%</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A subscription box company had 8% monthly churn—losing nearly all customers within a year. High churn prevented profitable growth despite strong acquisition. They approached us for retention strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented comprehensive retention program: improved onboarding with welcome emails and usage tips, launched loyalty program with points and exclusive products, implemented churn prediction and intervention system, created customer community forum, and designed win-back campaigns for churned subscribers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 12 months: Monthly churn decreased from 8% to 3%. Average customer lifetime increased from 12 months to 33 months. Customer lifetime value increased 175%. With same acquisition volume, business grew 3x faster due to retention improvements. Retention became their primary competitive advantage.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Retention Service Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Churn Analysis:</strong> Comprehensive analysis of churn patterns and root causes</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Retention Strategy:</strong> Complete retention program design with tactics and timelines</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Loyalty Program:</strong> Design and implementation of loyalty/rewards programs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Engagement Campaigns:</strong> Email sequences, push notifications, and in-app messaging</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Churn Prevention System:</strong> Early warning systems and intervention workflows</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Monthly Reporting:</strong> Retention metrics, churn analysis, and optimization recommendations</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Retention programs require ongoing commitment. Initial strategy and program design take 3-4 weeks. Implementation timelines vary based on complexity—simple email campaigns launch quickly while loyalty programs require development. Ongoing management includes monitoring metrics, optimizing campaigns, and implementing improvements. Investment ranges from $5K/month for focused retention programs to $20K+/month for comprehensive retention systems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results appear within months as retention initiatives take effect. Churn reduction typically shows within 60-90 days. Lifetime value improvements compound over 6-12 months as cohorts age with better retention. Retention improvements are permanent—unlike acquisition that requires continuous spend, retention gains continue delivering value indefinitely. Most clients see 5-15x ROI within first year as retention improvements multiply customer lifetime value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Keep Customers Longer?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free retention audit. We'll analyze your churn and identify improvement opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Retention Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

