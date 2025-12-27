import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { DollarSign, CheckCircle2, ArrowRight, Target, TrendingUp, BarChart3, Zap, Users, MousePointer, Eye, Award, LineChart } from "lucide-react";

export default function PaidAdvertising() {
  return (
    <>
      <SEO
        title="Paid Advertising (PPC & Social Ads) - Maximize ROI on Ad Spend"
        description="Expert paid advertising management across Google Ads, Facebook, Instagram, LinkedIn, and more. Drive qualified traffic and conversions with data-driven PPC campaigns."
        keywords="paid advertising, PPC management, Google Ads, Facebook Ads, social media advertising, paid search, display advertising, retargeting, ad campaign management"
      />
      
      <StructuredData type="Service" data={{ name: "Paid Advertising Management", description: "Data-driven paid advertising campaigns that maximize ROI across all major platforms", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Digital Advertising" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Performance Marketing</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Paid <span className="gradient-text">Advertising</span> That Delivers ROI
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Drive qualified traffic and conversions with data-driven paid advertising campaigns. We manage PPC, social ads, display, and retargeting across all major platforms to maximize your return on ad spend.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Ad Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Paid Advertising System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Campaign Strategy & Planning", description: "Comprehensive paid advertising strategies aligned with business goals. We define target audiences, select optimal platforms, allocate budgets, and establish success metrics for maximum ROI." },
                  { icon: BarChart3, title: "Google Ads Management", description: "Expert Google Ads campaign management including Search, Display, Shopping, and YouTube ads. We optimize for conversions while minimizing cost per acquisition." },
                  { icon: Users, title: "Social Media Advertising", description: "Strategic social ad campaigns across Facebook, Instagram, LinkedIn, TikTok, and Twitter. Platform-specific strategies that leverage unique targeting capabilities." },
                  { icon: MousePointer, title: "Conversion Rate Optimization", description: "Landing page optimization and ad creative testing that maximizes conversion rates. We systematically improve performance through data-driven testing." },
                  { icon: Eye, title: "Retargeting Campaigns", description: "Strategic retargeting that recaptures website visitors and converts them into customers. Multi-platform retargeting sequences that drive 3-5x higher conversion rates." },
                  { icon: TrendingUp, title: "Performance Tracking", description: "Comprehensive tracking and attribution that reveals true campaign performance. We measure what matters—not just clicks, but conversions and revenue." },
                  { icon: Zap, title: "Ad Creative Development", description: "High-performing ad creative including copy, images, and video. We create and test variations to identify winning combinations." },
                  { icon: LineChart, title: "Bid Strategy Optimization", description: "Advanced bid management that maximizes results within budget constraints. We leverage automated bidding while maintaining strategic control." },
                  { icon: Award, title: "Quality Score Improvement", description: "Systematic Quality Score optimization for Google Ads that reduces costs and improves ad positions. Better Quality Scores mean lower CPCs and higher ROI." },
                  { icon: DollarSign, title: "Budget Management", description: "Strategic budget allocation across campaigns, ad groups, and platforms. We maximize ROI by investing in what works and cutting what doesn't." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Paid Advertising Drives Immediate Results</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid advertising delivers immediate, scalable results. Unlike SEO or content marketing that take months to gain traction, paid ads drive traffic and conversions from day one. Paid advertising is the only marketing channel where you can predictably scale results by increasing investment. When campaigns are properly optimized, every dollar spent generates measurable return. But most businesses waste ad budgets on poor targeting, weak creative, or inadequate tracking. We build paid advertising systems that consistently deliver positive ROI.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Paid Advertising Advantage</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid advertising provides unmatched targeting precision. You can reach specific demographics, interests, behaviors, job titles, company sizes, and even custom audiences like website visitors or email subscribers. This precision ensures ad spend reaches ideal customers, not random audiences. Proper targeting can reduce customer acquisition costs by 50-70% compared to broad campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid ads offer complete control and flexibility. You can launch campaigns in hours, adjust budgets in real-time, pause underperforming ads instantly, and scale winners immediately. This agility enables rapid testing and optimization impossible with traditional marketing. You can test messaging, offers, and audiences quickly to find winning combinations.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid advertising provides measurable, attributable results. You can track exactly which ads drive clicks, conversions, and revenue. This transparency enables data-driven optimization and clear ROI demonstration. Unlike brand awareness campaigns with fuzzy attribution, paid ads show precise business impact.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid ads work synergistically with other channels. Retargeting converts website visitors from organic search or social media. Paid search captures demand generated by content marketing. Display ads build awareness that improves conversion rates across all channels. Strategic paid advertising amplifies overall marketing effectiveness.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Campaign Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Successful paid advertising starts with comprehensive strategy. Random ad campaigns waste budgets without clear direction. We develop strategies that align paid advertising with business objectives and customer journeys.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define clear campaign objectives tied to business outcomes. Are you building awareness, generating leads, or driving direct sales? Different objectives require different campaign types, targeting approaches, and optimization strategies. Awareness campaigns prioritize reach and impressions; conversion campaigns prioritize clicks and purchases.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We map customer journeys to identify optimal ad touchpoints. Where do prospects first become aware of solutions? What information do they seek during consideration? What triggers purchase decisions? We design ad campaigns that reach customers at each journey stage with appropriate messaging.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We select optimal platform mix based on audience behavior and campaign goals. B2B companies might prioritize LinkedIn and Google Search. E-commerce brands might focus on Facebook, Instagram, and Google Shopping. We allocate budgets across platforms strategically based on where your customers are and what drives best results.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish clear success metrics and tracking infrastructure. We define what success looks like—cost per acquisition targets, return on ad spend goals, conversion rate benchmarks. We implement comprehensive tracking that measures these metrics accurately across all campaigns and platforms.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Google Ads Mastery</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Google Ads remains the most powerful paid advertising platform, capturing high-intent users actively searching for solutions. We manage all Google Ads campaign types to maximize visibility and conversions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Search Campaigns:</strong> We target high-intent keywords that indicate purchase readiness. We structure campaigns for optimal Quality Scores, write compelling ad copy that drives clicks, and optimize landing pages for conversions. We use negative keywords aggressively to eliminate wasted spend on irrelevant searches.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Shopping Campaigns:</strong> For e-commerce, we optimize product feeds, structure campaigns for profitability, and use strategic bidding to maximize return on ad spend. Shopping ads capture high-intent product searches with visual product displays that drive qualified traffic.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Display Campaigns:</strong> We use Google Display Network for awareness and retargeting. We create compelling display creative, target relevant audiences and placements, and optimize for view-through conversions. Display ads build awareness that supports conversion across all channels.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>YouTube Ads:</strong> We leverage YouTube's massive reach for video advertising. We create engaging video ads, target relevant audiences, and optimize for view rates and conversions. YouTube ads are particularly effective for product demonstrations and brand storytelling.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize Quality Scores systematically. Higher Quality Scores reduce cost-per-click and improve ad positions. We improve Quality Scores through better keyword relevance, ad copy optimization, and landing page improvements. Quality Score optimization can reduce costs by 30-50% while improving results.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Social Media Advertising Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media advertising leverages sophisticated targeting to reach ideal customers where they spend time. Each platform offers unique advantages and requires platform-specific strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Facebook & Instagram Ads:</strong> Meta's advertising platform provides unmatched targeting precision. We leverage detailed demographic, interest, and behavioral targeting. We create thumb-stopping creative optimized for mobile feeds. We test multiple ad formats—single image, carousel, video, Stories—to find what resonates. We use Advantage+ campaigns for AI-powered optimization while maintaining strategic control.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>LinkedIn Ads:</strong> LinkedIn excels for B2B advertising with professional targeting options. We target by job title, company size, industry, and seniority. We create professional content that resonates with business audiences. LinkedIn CPCs are higher but lead quality is superior for B2B offers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>TikTok Ads:</strong> TikTok reaches younger demographics with authentic, entertaining content. We create native-feeling ads that blend with organic content. We leverage TikTok's algorithm for efficient discovery. TikTok ads work particularly well for D2C brands targeting Gen Z and Millennials.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Twitter Ads:</strong> Twitter targets engaged audiences around interests and conversations. We use promoted tweets, trends, and accounts to build awareness and drive traffic. Twitter works well for news, entertainment, and tech brands.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop platform-specific creative that performs. Social ads require thumb-stopping visuals, concise copy, and clear calls-to-action. We test variations systematically to identify winning combinations. We refresh creative regularly to combat ad fatigue.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Retargeting That Converts</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Retargeting recaptures website visitors who didn't convert initially. Only 2-3% of website visitors convert on first visit. Retargeting brings back the other 97% with strategic follow-up ads. Retargeting typically delivers 3-5x higher conversion rates than cold traffic campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement sophisticated retargeting sequences based on user behavior. We segment audiences by pages visited, actions taken, and time since visit. We show different ads to product viewers versus cart abandoners versus past customers. Behavioral segmentation enables highly relevant messaging.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create retargeting funnels that nurture prospects over time. Initial retargeting ads remind visitors of your brand. Subsequent ads address objections or showcase social proof. Final ads offer incentives to drive conversion. Multi-touch retargeting sequences convert significantly better than single ads.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement cross-platform retargeting for maximum reach. Visitors might see your retargeting ads on Facebook, Instagram, Google Display Network, and other platforms. Multi-platform presence increases conversion probability through repeated exposure.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use dynamic retargeting for e-commerce that shows specific products users viewed. Dynamic ads are highly relevant and convert at 2-3x higher rates than generic retargeting. We implement dynamic retargeting across Google, Facebook, and other platforms.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Ad Creative That Performs</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Great ad creative makes the difference between profitable and unprofitable campaigns. We develop and test ad creative systematically to maximize performance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We write compelling ad copy that drives clicks and conversions. Headlines must grab attention immediately. Body copy must communicate value clearly. Calls-to-action must be specific and compelling. We test multiple copy variations to identify what resonates with your audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create thumb-stopping visual creative for social ads. Images and videos must stand out in crowded feeds. We use bold colors, clear focal points, and minimal text. We test different visual styles—lifestyle imagery, product shots, user-generated content—to find what performs best.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop video ads that engage and convert. Video ads must hook viewers in first 3 seconds or they scroll past. We create videos with strong openings, clear messaging, and compelling calls-to-action. We test different video lengths, styles, and narratives.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement systematic creative testing. We test headlines, images, copy, CTAs, and offers. We identify winning elements and combine them into champion ads. We continuously test new variations to prevent ad fatigue and improve performance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We refresh creative regularly to combat ad fatigue. Even winning ads decline in performance as audiences see them repeatedly. We rotate creative, introduce new variations, and retire fatigued ads. Regular creative refresh maintains campaign performance.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Landing Page Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Landing page quality determines conversion rates. Driving traffic to poor landing pages wastes ad spend. We optimize landing pages to maximize conversions from paid traffic.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We ensure message match between ads and landing pages. If your ad promises a specific offer, the landing page must deliver that offer prominently. Mismatched messaging confuses visitors and kills conversions. We align ad copy with landing page headlines and content.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize landing page elements systematically. Headlines must grab attention and communicate value. Copy must be scannable with clear benefits. Forms must be as short as possible while capturing necessary information. CTAs must be prominent and compelling.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement trust indicators that overcome objections. Social proof (testimonials, reviews, case studies), security badges, guarantees, and authority indicators all increase conversion rates. We strategically place trust elements throughout landing pages.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize page speed for paid traffic. Slow landing pages kill conversions—40% of users abandon pages that take over 3 seconds to load. We optimize images, minimize code, and leverage caching to achieve sub-2-second load times.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test landing page variations systematically. We test headlines, layouts, copy, images, forms, and CTAs. We run rigorous A/B tests to identify improvements. Small conversion rate improvements compound into significant revenue gains.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Performance Tracking & Attribution</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Accurate tracking and attribution are essential for optimization. Without proper measurement, you can't know what's working or how to improve. We implement comprehensive tracking that reveals true campaign performance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement conversion tracking across all platforms. We track not just clicks but actual conversions—leads, purchases, sign-ups. We assign values to conversions to calculate return on ad spend accurately. We track both online and offline conversions when applicable.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use proper attribution models that credit touchpoints appropriately. Last-click attribution oversimplifies customer journeys. We implement multi-touch attribution that recognizes all touchpoints contributing to conversions. This reveals which campaigns drive awareness versus which drive conversions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We integrate analytics platforms for comprehensive insights. We connect Google Ads, Facebook Ads, and other platforms to Google Analytics and your CRM. This integration enables holistic performance analysis and reveals how paid advertising impacts overall business metrics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create custom dashboards that surface key metrics. Dashboards provide at-a-glance performance visibility and enable quick decision-making. We track metrics that matter—not just vanity metrics but business-impact metrics like cost per acquisition, return on ad spend, and customer lifetime value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide transparent reporting that shows exactly how paid advertising drives business results. Reports include spend, impressions, clicks, conversions, cost per acquisition, return on ad spend, and revenue attribution. We explain what's working, what needs improvement, and our optimization plans.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Bid Strategy & Budget Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Strategic bid management maximizes results within budget constraints. We leverage automated bidding while maintaining strategic control and oversight.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We select optimal bid strategies for campaign objectives. Target CPA bidding optimizes for cost per acquisition. Target ROAS bidding optimizes for return on ad spend. Maximize conversions bidding drives volume. We choose strategies aligned with your goals and adjust based on performance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor automated bidding closely. While automation handles tactical bid adjustments, we maintain strategic oversight. We adjust targets, budgets, and strategies based on business needs. We intervene when automation underperforms or market conditions change.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We allocate budgets strategically across campaigns and platforms. We invest more in what's working and reduce spend on underperformers. We test new opportunities with small budgets before scaling. We rebalance budgets regularly based on performance data.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement dayparting and seasonal adjustments. We increase bids during high-conversion times and reduce them during low-performance periods. We adjust budgets for seasonal demand fluctuations. Strategic timing optimization can improve ROI by 20-30%.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Continuous Optimization Process</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid advertising requires continuous optimization. Set-it-and-forget-it campaigns decline in performance over time. We implement systematic optimization processes that improve results continuously.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze performance data daily. We identify underperforming campaigns, ad groups, keywords, and ads. We pause or adjust underperformers quickly to prevent wasted spend. We identify top performers and scale them aggressively.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test systematically and continuously. We always have active tests running—new keywords, ad variations, audience segments, landing pages. We implement winners and test new variations. This continuous testing creates compounding performance improvements.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We expand successful campaigns strategically. When campaigns prove profitable, we scale them by increasing budgets, expanding to similar audiences, or replicating strategies across platforms. We scale winners while maintaining profitability.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We stay current with platform changes. Google, Facebook, and other platforms constantly update algorithms, features, and best practices. We adapt strategies to leverage new opportunities and avoid being penalized by algorithm changes.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 5x ROAS Through Strategic Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An e-commerce client was spending $50K monthly on Google and Facebook ads with 1.5x ROAS—barely breaking even. Poor targeting, weak creative, and inadequate tracking prevented profitability. They approached us to fix their paid advertising.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented comprehensive optimization: restructured campaigns for better targeting, developed new ad creative through systematic testing, optimized landing pages for conversions, implemented proper tracking and attribution, and refined bid strategies. We also launched strategic retargeting campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 6 months: ROAS improved from 1.5x to 5x. Same $50K monthly spend now generated $250K in revenue versus $75K previously. Cost per acquisition decreased 60%. We scaled spend to $80K monthly while maintaining 4.5x ROAS. Paid advertising became their primary growth driver.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Paid Advertising Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Campaign Strategy:</strong> Comprehensive paid advertising strategy with platform selection and budget allocation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Campaign Setup:</strong> Professional campaign structure across all platforms</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Ad Creative Development:</strong> High-performing ad copy, images, and video</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Landing Page Optimization:</strong> Conversion-focused landing page improvements</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Ongoing Management:</strong> Daily monitoring and optimization</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Performance Reporting:</strong> Weekly/monthly reports with insights and recommendations</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid advertising requires both management fees and ad spend. Campaign setup takes 1-2 weeks. Ongoing management includes daily monitoring and optimization. Management fees typically range from 15-20% of ad spend with minimums of $2K-5K/month. Ad spend budgets vary widely based on industry, competition, and goals—from $5K/month for small businesses to $100K+/month for enterprises.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results appear immediately—campaigns drive traffic from day one. Optimization improves performance over 2-3 months as we gather data and refine targeting, creative, and bidding. Most clients see positive ROI within 60-90 days when strategy is sound and budgets are adequate. Paid advertising scales—increased investment drives proportional results when campaigns are properly optimized.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Scale with Paid Advertising?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free ad account audit. We'll identify wasted spend and quick-win opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Ad Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

