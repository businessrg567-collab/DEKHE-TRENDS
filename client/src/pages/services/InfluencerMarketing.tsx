import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Users, CheckCircle2, ArrowRight, Target, TrendingUp, Heart, Star, MessageCircle, BarChart3, Search, Award, Zap } from "lucide-react";

export default function InfluencerMarketing() {
  return (
    <>
      <SEO
        title="Influencer Marketing Strategy - Partner with the Right Voices"
        description="Strategic influencer marketing services including influencer identification, campaign management, and performance tracking. Drive authentic engagement and conversions through trusted voices."
        keywords="influencer marketing, influencer partnerships, influencer campaigns, micro-influencers, brand ambassadors, influencer strategy, creator partnerships"
      />
      
      <StructuredData type="Service" data={{ name: "Influencer Marketing Strategy", description: "Strategic influencer partnerships that drive authentic engagement and measurable results", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Influencer Marketing" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Authentic Influence</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Influencer <span className="gradient-text">Marketing</span> That Drives Results
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Partner with authentic voices that your audience trusts. We identify, vet, and manage influencer relationships that drive awareness, engagement, and conversions—not just vanity metrics.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Influencer Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Influencer Marketing System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Search, title: "Influencer Discovery & Vetting", description: "Systematic identification of influencers who align with your brand values and reach your target audience. We look beyond follower counts to engagement rates, audience demographics, content quality, and brand fit." },
                  { icon: Target, title: "Campaign Strategy Development", description: "Comprehensive influencer campaign strategies aligned with business goals. We define objectives, select optimal influencer mix, plan content themes, and establish success metrics." },
                  { icon: MessageCircle, title: "Outreach & Negotiation", description: "Professional outreach and contract negotiation that secures partnerships on favorable terms. We handle all communication, ensuring clear expectations and mutual benefit." },
                  { icon: Star, title: "Content Collaboration", description: "Strategic content planning and approval processes that maintain brand standards while respecting creator authenticity. We guide content direction without stifling creativity." },
                  { icon: BarChart3, title: "Performance Tracking", description: "Comprehensive tracking of campaign performance through custom tracking links, promo codes, and engagement metrics. We measure what matters—not just impressions, but conversions." },
                  { icon: Heart, title: "Relationship Management", description: "Long-term influencer relationship development that turns one-off collaborations into ongoing partnerships. We build ambassador programs that compound value over time." },
                  { icon: TrendingUp, title: "Micro-Influencer Programs", description: "Strategic micro-influencer campaigns that often deliver better ROI than mega-influencers. We identify niche creators with highly engaged audiences." },
                  { icon: Award, title: "Authenticity Verification", description: "Rigorous vetting to identify fake followers, engagement pods, and inauthentic influencers. We protect your investment by ensuring genuine influence." },
                  { icon: Zap, title: "Amplification Strategy", description: "Strategic content amplification through paid promotion, cross-platform distribution, and brand channel sharing. We maximize reach of influencer content." },
                  { icon: Users, title: "Creator Network Building", description: "Development of proprietary creator networks for your brand. We cultivate relationships with multiple influencers across tiers for flexible, scalable campaigns." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Influencer Marketing Works</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Influencer marketing generates $5.78 ROI for every dollar spent. 89% of marketers say ROI from influencer marketing is comparable to or better than other channels. But these results only come from strategic influencer partnerships—not random sponsorships. Most brands waste influencer budgets on wrong creators, fake followers, or campaigns without clear objectives. We build influencer programs that drive measurable business results, not just vanity metrics.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Influencer Marketing Opportunity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional advertising faces declining trust and effectiveness. Consumers skip ads, use ad blockers, and ignore brand messages. But they trust recommendations from people they follow. 61% of consumers trust influencer recommendations versus 38% who trust branded content. Influencers provide authentic third-party validation that breaks through advertising fatigue.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Influencer marketing reaches audiences traditional advertising can't. Younger demographics especially distrust traditional ads but engage deeply with creator content. Gen Z and Millennials spend hours daily consuming influencer content on Instagram, TikTok, and YouTube. Influencer partnerships access these audiences where they actually spend attention.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Influencer content performs better than brand content. Influencers understand their audiences intimately and create content that resonates. Their authentic voice and creative approach generate higher engagement than polished brand content. Influencer posts typically achieve 3-10x higher engagement than brand posts.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Influencer partnerships create multiple assets. Beyond initial posts, you gain user-generated content for your channels, testimonials, product reviews, and ongoing brand advocacy. Strategic partnerships compound value over time as influencers become genuine brand ambassadors.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Influencer Discovery & Vetting</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finding the right influencers is critical. Wrong influencers waste budgets on irrelevant audiences or fake engagement. We use systematic discovery processes that identify creators who genuinely align with your brand and reach your target customers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We look beyond follower counts to engagement rates, audience demographics, content quality, and brand alignment. A micro-influencer with 20K engaged followers often delivers better results than a mega-influencer with 2M disengaged followers. Engagement rate matters more than reach—it indicates genuine influence.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze audience demographics to ensure influencer followers match your target customers. An influencer might have millions of followers, but if those followers aren't your target market, the partnership is worthless. We verify that influencer audiences align with your customer profiles.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We assess content quality and brand fit. Does the influencer's content style match your brand aesthetic? Do their values align with yours? Would their audience find your product relevant? Misaligned partnerships feel inauthentic and fail to convert.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We verify authenticity rigorously. The influencer marketing industry is plagued by fake followers, bought engagement, and fraudulent metrics. We use specialized tools to detect fake followers, engagement pods, and bot activity. We protect your investment by ensuring genuine influence.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We review past brand partnerships to assess influencer reliability. Do they deliver on commitments? Do their sponsored posts perform well? Do they maintain authenticity in partnerships? Past performance predicts future results.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Campaign Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Successful influencer campaigns start with clear strategy. Random influencer sponsorships rarely deliver results. We develop comprehensive strategies that align influencer partnerships with business objectives.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define clear campaign objectives tied to business outcomes. Are you building awareness, driving consideration, or generating direct sales? Different objectives require different influencer types, content approaches, and success metrics. Awareness campaigns prioritize reach; conversion campaigns prioritize engagement and click-through.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop optimal influencer mix strategies. Should you partner with one mega-influencer or ten micro-influencers? Should you focus on Instagram, TikTok, or YouTube? We determine the right platform and creator mix based on your audience, budget, and goals.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We plan content themes and messaging guidelines that maintain brand consistency while respecting creator authenticity. Overly scripted content feels inauthentic and underperforms. We provide creative direction without stifling the authentic voice that makes influencers effective.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish clear success metrics and tracking mechanisms. We implement custom tracking links, unique promo codes, and platform analytics to measure campaign performance accurately. We track not just impressions and engagement, but clicks, conversions, and revenue attribution.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Outreach & Partnership Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professional outreach and negotiation secure better partnerships on more favorable terms. We handle all influencer communication, from initial contact through contract execution.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We craft personalized outreach that demonstrates genuine interest in the creator's work. Generic mass outreach gets ignored. We reference specific content, explain why we see partnership fit, and propose mutually beneficial collaboration.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We negotiate fair compensation that reflects influencer value while protecting your budget. We understand market rates across platforms and creator tiers. We structure deals that incentivize performance while managing risk—often including base fees plus performance bonuses.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We draft comprehensive contracts that protect both parties. Contracts specify deliverables, timelines, usage rights, disclosure requirements, and performance expectations. Clear contracts prevent misunderstandings and ensure successful partnerships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We manage ongoing communication throughout campaigns. We provide product samples, answer questions, review content drafts, and coordinate posting schedules. Professional management ensures smooth execution and maintains positive relationships.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Collaboration Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Great influencer content balances brand messaging with creator authenticity. Overly controlled content feels like advertising and underperforms. Completely unguided content might miss key messages. We find the sweet spot.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide creative briefs that guide without constraining. Briefs include key messages, product benefits, and brand guidelines while leaving room for creator interpretation. We trust influencers to know what resonates with their audiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement content approval processes that maintain quality without micromanaging. We review content drafts for brand alignment and legal compliance while respecting creator expertise. We provide feedback that improves content without destroying authenticity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We encourage multiple content formats to maximize value. A single partnership might include Instagram posts, Stories, Reels, and YouTube videos. Multiple touchpoints increase impact and provide diverse content for different audience segments.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We coordinate posting timing for maximum impact. We align influencer posts with product launches, seasonal campaigns, or other marketing initiatives. Strategic timing amplifies overall marketing effectiveness.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Performance Tracking & Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Measuring influencer campaign performance requires tracking beyond platform metrics. We implement comprehensive tracking that reveals true business impact.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use custom tracking links and promo codes to attribute traffic and sales to specific influencers. This reveals which partnerships drive actual conversions versus just impressions. We calculate precise ROI for each influencer relationship.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track engagement metrics—likes, comments, shares, saves—that indicate content resonance. High engagement signals authentic influence and predicts conversion performance. We identify which content types and messaging angles drive strongest engagement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor brand sentiment and conversation around influencer content. Are comments positive? Are people asking where to buy? Is the influencer's audience genuinely interested? Sentiment analysis reveals partnership quality beyond quantitative metrics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We compare performance across influencers to identify top performers. Which creators drive best engagement? Which drive most conversions? Which provide best ROI? These insights guide future partnership decisions and budget allocation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide transparent reporting that shows exactly how influencer marketing drives business results. Reports include reach, engagement, traffic, conversions, and revenue attribution. We explain what's working, what needs improvement, and recommendations for optimization.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Long-Term Relationship Building</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  One-off influencer sponsorships have limited impact. Long-term partnerships compound value as influencers become genuine brand advocates. We build ambassador programs that create ongoing value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify high-performing influencers for ongoing partnerships. When an influencer drives strong results, we convert them to brand ambassadors with recurring collaborations. Ongoing partnerships feel more authentic than one-off sponsorships and build stronger audience trust.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We structure ambassador programs with tiered benefits. Top-performing ambassadors receive exclusive products, higher compensation, and special perks. This incentivizes performance and strengthens loyalty.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We maintain regular communication with ambassador network. We share new products, company updates, and campaign opportunities. We treat ambassadors as partners, not vendors. Strong relationships lead to more authentic promotion and better content.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We facilitate ambassador community building. We connect ambassadors with each other, creating network effects and shared enthusiasm. Ambassador communities generate user-generated content, peer recommendations, and organic brand advocacy.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Micro-Influencer Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Micro-influencers (10K-100K followers) often deliver better ROI than mega-influencers. They have higher engagement rates, more niche audiences, and lower costs. We develop micro-influencer strategies that scale efficiently.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Micro-influencers maintain closer relationships with followers. Their audiences trust them more because they're more accessible and authentic. Recommendations from micro-influencers feel like advice from friends rather than celebrity endorsements.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Micro-influencers often have more targeted audiences. A beauty micro-influencer might focus specifically on clean beauty or K-beauty, attracting highly relevant followers. This targeting delivers better conversion rates than broad-audience mega-influencers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Micro-influencer costs enable portfolio approaches. Instead of one mega-influencer for $50K, you can partner with 25 micro-influencers for $2K each. This diversification reduces risk and reaches multiple audience segments.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build systematic micro-influencer programs that identify, onboard, and manage dozens of creators efficiently. We create streamlined processes for outreach, contracting, product fulfillment, and content approval that scale without overwhelming resources.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Platform-Specific Strategies</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each platform requires different influencer approaches. Instagram influencers differ from TikTok creators, who differ from YouTube personalities. We develop platform-specific strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Instagram:</strong> Instagram influencer marketing emphasizes visual aesthetics and lifestyle integration. We partner with creators whose feed aesthetics align with your brand. We leverage Stories for authentic behind-the-scenes content and Reels for discovery. We encourage shopping tags for direct purchase paths.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>TikTok:</strong> TikTok requires authentic, entertaining content that feels native to the platform. We partner with creators who understand TikTok's unique culture and trends. We encourage trend participation and creative challenges. We focus on entertainment value over polished production.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>YouTube:</strong> YouTube influencer partnerships involve longer-form content with deeper product integration. We work with creators on dedicated videos, product reviews, tutorials, and unboxings. YouTube content has longer lifespan and continues driving value months after publication.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>LinkedIn:</strong> LinkedIn influencer marketing targets B2B audiences through thought leaders and industry experts. We partner with professionals who have established authority in relevant industries. Content focuses on insights, case studies, and professional applications.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 300% ROI from Micro-Influencers</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A D2C skincare brand spent $100K on three mega-influencer partnerships with minimal results. High costs, low engagement, and few conversions. They approached us to rebuild their influencer strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We pivoted to micro-influencer strategy, partnering with 40 beauty micro-influencers (15K-50K followers each) focused on clean beauty. We provided products, creative guidelines, and unique tracking codes. We built long-term relationships with top performers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 6 months: $120K influencer spend generated $360K in attributed revenue (300% ROI). Average engagement rate of 8.7% versus 1.2% from previous mega-influencer campaigns. Built ambassador network of 15 ongoing partners. Influencer content became top-performing creative for paid ads.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Influencer Marketing Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Influencer Strategy:</strong> Comprehensive strategy with platform selection, creator criteria, and campaign plans</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Influencer Discovery:</strong> Vetted list of recommended influencers with audience analysis</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Outreach & Negotiation:</strong> Professional outreach and contract negotiation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Campaign Management:</strong> End-to-end campaign execution and creator coordination</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Performance Tracking:</strong> Comprehensive analytics and ROI measurement</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Monthly Reporting:</strong> Performance reports with insights and optimization recommendations</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Influencer marketing requires both service fees and creator compensation. Strategy development takes 2-3 weeks. Campaign execution timelines vary—single campaigns run 1-2 months; ongoing programs are continuous. Service fees range from $5K/month for campaign management to $15K+/month for comprehensive programs. Creator compensation varies widely based on follower count, engagement, and platform—from $500-$5K for micro-influencers to $50K+ for mega-influencers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results appear quickly—influencer posts drive immediate traffic and engagement. Conversion tracking reveals ROI within days of campaign launch. Long-term ambassador programs compound value over time as relationships deepen and content library grows. Most clients see positive ROI within first campaign when strategy is sound and influencers are properly vetted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Partner with the Right Influencers?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free influencer strategy consultation. We'll identify ideal creators for your brand.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Consultation <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

