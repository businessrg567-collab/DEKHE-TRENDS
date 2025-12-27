import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Share2, CheckCircle2, ArrowRight, Users, TrendingUp, Heart, MessageCircle, BarChart3, Target, Zap, Video, Image } from "lucide-react";

export default function SocialMediaStrategy() {
  return (
    <>
      <SEO
        title="Social Media Strategy & Management - Build Engaged Communities"
        description="Comprehensive social media strategy and management services. Build engaged audiences, drive brand awareness, and generate leads through strategic social media marketing."
        keywords="social media strategy, social media marketing, social media management, community management, social media advertising, Instagram marketing, TikTok marketing"
      />
      
      <StructuredData type="Service" data={{ name: "Social Media Strategy & Management", description: "Strategic social media marketing that builds communities and drives business results", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Social Media Marketing" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Share2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Social Media Excellence</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Social Media <span className="gradient-text">Strategy</span> That Builds Communities
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Build engaged social audiences that drive business results. We develop platform-specific strategies that increase reach, engagement, and conversions across all major social networks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Social Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Social Media System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Platform Strategy", description: "Customized strategies for each social platform. We understand that Instagram differs from LinkedIn, TikTok from Twitter. We develop platform-specific approaches that align with algorithms, user behavior, and your business goals." },
                  { icon: Users, title: "Community Management", description: "Active community engagement that builds relationships. We respond to comments, messages, and mentions, fostering conversations that strengthen brand loyalty and customer satisfaction." },
                  { icon: Video, title: "Content Creation", description: "Platform-optimized content creation including graphics, videos, stories, and reels. We produce content that stops scrolls, drives engagement, and aligns with your brand identity." },
                  { icon: TrendingUp, title: "Growth Strategies", description: "Systematic approaches to growing followers and reach. We implement proven tactics for organic growth while avoiding shortcuts that damage credibility." },
                  { icon: BarChart3, title: "Social Analytics", description: "Comprehensive tracking and analysis of social performance. We measure what matters and optimize based on data, continuously improving results." },
                  { icon: Heart, title: "Engagement Optimization", description: "Strategies to maximize likes, comments, shares, and saves. We understand platform algorithms reward engagement and design content that generates it." },
                  { icon: MessageCircle, title: "Influencer Partnerships", description: "Strategic influencer collaborations that amplify reach. We identify, vet, and manage influencer relationships that deliver authentic promotion and measurable results." },
                  { icon: Zap, title: "Paid Social Advertising", description: "Targeted social ad campaigns that drive conversions. We design, launch, and optimize paid campaigns across Facebook, Instagram, LinkedIn, TikTok, and Twitter." },
                  { icon: Image, title: "Brand Consistency", description: "Cohesive brand presence across all platforms. We ensure visual identity, messaging, and voice remain consistent while adapting to platform dynamics." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Social Media Strategy Matters</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media isn't optional anymore—it's where your customers spend hours daily. Over 4.7 billion people use social media globally, spending an average of 2.5 hours per day on social platforms. This represents massive opportunity for brands that approach social strategically. But most businesses waste resources on social media because they lack clear strategy, consistent execution, or proper measurement.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Social Media Landscape</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each social platform serves different purposes and attracts different audiences. Instagram excels at visual storytelling and lifestyle content. LinkedIn dominates professional networking and B2B marketing. TikTok captures Gen Z attention with short-form video. Twitter drives real-time conversations and news. Facebook maintains broad reach across demographics. Pinterest inspires purchase decisions through visual discovery.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Platform algorithms constantly evolve, changing what content gets shown and what gets buried. Strategies that worked last year may fail today. Success requires staying current with algorithm changes, platform features, and user behavior trends. We monitor these shifts continuously and adapt strategies accordingly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  User expectations also differ by platform. LinkedIn users expect professional insights and industry expertise. Instagram users want aesthetic appeal and authentic moments. TikTok users demand entertainment and creativity. Content that works on one platform often fails on another. Platform-specific strategies are essential.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Platform Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Effective social media strategy starts with platform selection. Not every platform makes sense for every business. B2B SaaS companies might prioritize LinkedIn and Twitter while ignoring TikTok. D2C fashion brands might focus on Instagram and Pinterest while minimizing LinkedIn. We identify which platforms align with your audience, goals, and resources.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  For each priority platform, we develop specific strategies addressing content types, posting frequency, engagement tactics, and growth mechanisms. Instagram strategy might emphasize Reels and Stories for discovery while maintaining feed aesthetics. LinkedIn strategy might focus on thought leadership articles and engagement in relevant groups. TikTok strategy might prioritize trend participation and authentic personality.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define clear objectives for each platform. Some platforms drive awareness, others generate leads, others build community. Different objectives require different content approaches and success metrics. We align platform strategies with overall business goals.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also plan resource allocation across platforms. Spreading efforts too thin dilutes impact. Better to dominate one or two platforms than maintain mediocre presence across all. We prioritize based on audience concentration, competitive dynamics, and strategic fit.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Strategy for Social</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media content must balance multiple objectives: building awareness, driving engagement, generating leads, and strengthening community. Different content types serve different purposes. Educational content builds authority. Entertainment content increases reach. Promotional content drives conversions. Community content fosters loyalty.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop content frameworks that ensure proper balance. A common framework is 80/20: 80% value-driven content (education, entertainment, inspiration) and 20% promotional content. This balance maintains audience interest while achieving business objectives. Pure promotion drives audiences away; pure value without conversion opportunities wastes potential.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content calendars provide structure while allowing flexibility for timely opportunities. We plan content themes, campaigns, and key messages in advance. But we also leave room for real-time content that capitalizes on trending topics, news events, or cultural moments. The best social strategies balance planning with agility.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create content pillars—core themes that all content ladders up to. Pillars provide focus and help build topical authority. For a fitness brand, pillars might include workout tips, nutrition advice, motivation, and community stories. All content fits within these pillars, creating cohesive brand narrative.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Community Management Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media is social—it requires two-way conversation, not one-way broadcasting. Community management builds relationships through consistent, authentic engagement. Brands that ignore comments and messages miss opportunities to strengthen loyalty and gather feedback.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement systematic community management processes. This includes responding to all comments and messages within defined timeframes, proactively engaging with followers' content, participating in relevant conversations, and moderating discussions to maintain positive environments.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Community management also involves crisis response. Negative comments, customer complaints, and PR issues require quick, thoughtful responses. We develop response protocols for different scenarios, ensuring consistent, appropriate handling of sensitive situations.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Great community management turns followers into advocates. When people feel heard and valued, they become brand champions who defend you in comments, recommend you to friends, and create user-generated content. This organic advocacy is more valuable than any paid advertising.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Growth Strategies That Work</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Growing social audiences requires systematic approaches, not luck. We implement proven growth tactics while avoiding shortcuts that damage credibility. Buying followers, using engagement pods, or employing bots might inflate numbers but destroy authenticity and algorithm performance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Organic growth strategies include optimizing profiles for discovery, using strategic hashtags, participating in trending topics, collaborating with complementary accounts, creating shareable content, and engaging authentically with target audiences. These tactics compound over time, building genuine audiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also leverage platform-specific growth features. Instagram Reels and Stories increase discovery. LinkedIn articles build thought leadership. TikTok's For You page exposes content to new audiences. Twitter threads drive engagement and follows. Understanding and utilizing these features maximizes organic reach.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid promotion accelerates growth when used strategically. We identify high-performing organic content and amplify it through paid promotion. This ensures ad spend goes toward proven content rather than untested material. We also use paid campaigns to jumpstart growth for new accounts or enter new markets.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Social Media Analytics & Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media generates massive data. Success requires tracking the right metrics and acting on insights. Vanity metrics like follower counts and likes feel good but don't necessarily drive business results. We focus on metrics that matter: engagement rate, reach, click-through rate, conversion rate, and customer acquisition cost.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct regular content audits to identify top performers and patterns. What content types generate most engagement? Which topics resonate strongest? What posting times drive best results? These insights inform content strategy and optimization.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also track competitive performance. How do your metrics compare to competitors? What are they doing that works? What gaps can you exploit? Competitive intelligence reveals opportunities and threats in your social landscape.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create custom dashboards that surface key metrics and trends. These dashboards enable quick assessment of performance and identification of issues requiring attention. We report regularly on social performance with strategic recommendations for improvement.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Paid Social Advertising</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Organic reach has declined across all major platforms. Algorithms prioritize paid content and posts from friends/family over brand content. Paid advertising is now essential for reaching significant audiences on social media.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design paid social campaigns that drive specific business outcomes: brand awareness, lead generation, website traffic, or direct sales. Different objectives require different campaign structures, targeting approaches, and creative strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Targeting is paid social's superpower. We can reach specific demographics, interests, behaviors, and even custom audiences like website visitors or email subscribers. We develop sophisticated targeting strategies that reach ideal customers while minimizing wasted spend.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We continuously test and optimize paid campaigns. We test different audiences, creative variations, ad formats, and placements. We scale winners and kill losers quickly. This systematic optimization improves performance over time and maximizes return on ad spend.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Influencer Marketing Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Influencer marketing leverages trusted voices to reach engaged audiences. When done right, influencer partnerships deliver authentic promotion that drives awareness and conversions. When done wrong, they waste budgets on fake followers and meaningless impressions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify influencers who align with your brand values and reach your target audience. We look beyond follower counts to engagement rates, audience demographics, content quality, and brand fit. Micro-influencers (10K-100K followers) often deliver better ROI than mega-influencers due to higher engagement and lower costs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We structure influencer partnerships for mutual benefit. This includes clear deliverables, usage rights, disclosure requirements, and performance expectations. We handle contract negotiation, content approval, and campaign management.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We measure influencer campaign performance through tracking links, promo codes, and engagement metrics. This reveals which partnerships drive actual results versus just impressions. We build long-term relationships with top-performing influencers rather than one-off transactions.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Platform-Specific Strategies</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Instagram Strategy:</strong> Instagram success requires visual excellence and authentic storytelling. We develop strategies that leverage Reels for discovery, Stories for engagement, and feed posts for brand building. We optimize profiles for conversion with clear bios, link strategies, and highlight organization. We use strategic hashtags, location tags, and collaborations to increase reach.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>LinkedIn Strategy:</strong> LinkedIn rewards thought leadership and professional insights. We develop content strategies focused on industry expertise, company culture, and professional development. We leverage LinkedIn articles for long-form content, engage in relevant groups, and build executive personal brands that reflect on company reputation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>TikTok Strategy:</strong> TikTok requires authentic, entertaining content that feels native to the platform. We help brands find their TikTok voice—whether educational, humorous, behind-the-scenes, or trend-driven. We participate in trending sounds and challenges while maintaining brand identity. We optimize for the For You page algorithm through proper hashtags, captions, and engagement tactics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Twitter Strategy:</strong> Twitter excels at real-time engagement and thought leadership. We develop strategies that balance original insights, curated content, and community engagement. We participate in relevant conversations, use strategic hashtags, and leverage Twitter threads for deeper storytelling. We monitor trends and news for timely content opportunities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Facebook Strategy:</strong> Despite declining organic reach, Facebook remains valuable for community building and paid advertising. We develop strategies that leverage Facebook Groups for community, Facebook Live for engagement, and Facebook Ads for targeted reach. We optimize for the algorithm through content that generates meaningful interactions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Pinterest Strategy:</strong> Pinterest functions as visual search engine where users discover and plan purchases. We develop strategies that optimize pins for search, create boards that inspire, and link to conversion-optimized landing pages. We leverage Pinterest's high purchase intent to drive e-commerce sales.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 500% Follower Growth & 10x Engagement</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A D2C beauty brand approached us with stagnant social growth and low engagement. They had 15K Instagram followers but averaged only 200 likes per post (1.3% engagement rate). They posted inconsistently without clear strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented a comprehensive Instagram strategy. We shifted from polished product photos to authentic behind-the-scenes content and user-generated content. We launched a consistent Reels strategy targeting trending sounds. We implemented strategic hashtag research and community engagement tactics. We created an influencer program with micro-influencers in the beauty space.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 12 months: Followers grew from 15K to 90K (500% growth). Engagement rate increased from 1.3% to 8.7% (10x improvement). Instagram became their #2 revenue driver after their website, generating $400K in attributed sales. User-generated content increased 300%, providing endless authentic content.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Social Media Management Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Social Media Strategy:</strong> Comprehensive platform-specific strategies with goals, tactics, and KPIs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Content Calendar:</strong> 30-day rolling calendar with planned posts across all platforms</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Content Creation:</strong> Custom graphics, videos, and copy optimized for each platform</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Community Management:</strong> Daily monitoring and engagement across all platforms</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Analytics Reports:</strong> Monthly performance reports with insights and recommendations</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Paid Campaign Management:</strong> Strategy, execution, and optimization of paid social campaigns</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media management requires ongoing commitment. Initial strategy development takes 2-3 weeks. Ongoing management typically includes daily posting, community engagement, and monthly reporting. Investment ranges from $3K/month for basic management (1-2 platforms) to $15K+/month for comprehensive multi-platform management with content creation and paid advertising.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results appear gradually as audiences grow and engagement increases. Expect 3-6 months to see significant traction. Social media compounds over time—consistent execution builds momentum that accelerates growth. The brands that win on social are those that commit long-term rather than expecting overnight success.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Dominate Social Media?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free social media audit. We'll analyze your current presence and identify growth opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Social Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

