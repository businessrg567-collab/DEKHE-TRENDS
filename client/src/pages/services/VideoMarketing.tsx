import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Video, CheckCircle2, ArrowRight, Play, TrendingUp, Users, Target, Eye, Film, Sparkles, BarChart3, Zap } from "lucide-react";

export default function VideoMarketing() {
  return (
    <>
      <SEO
        title="Video Marketing & Production - Engage Audiences with Video"
        description="Strategic video marketing services including strategy, production, and distribution. Create video content that engages audiences and drives conversions."
        keywords="video marketing, video production, video strategy, YouTube marketing, video content, video advertising, video SEO, social video"
      />
      
      <StructuredData type="Service" data={{ name: "Video Marketing & Production", description: "Strategic video marketing that engages audiences and drives business results", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Video Marketing" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Video className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Video That Converts</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Video <span className="gradient-text">Marketing</span> That Drives Results
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Create video content that engages audiences and drives conversions. Video generates 1200% more shares than text and images combined—it's the most powerful content format.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Video Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Video Marketing System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Video Strategy Development", description: "Comprehensive video strategies aligned with business goals. We define video types, platforms, distribution plans, and success metrics that drive measurable results." },
                  { icon: Film, title: "Video Production", description: "Professional video production from concept through final edit. We handle scripting, filming, editing, and post-production to create high-quality video content." },
                  { icon: Play, title: "YouTube Channel Growth", description: "Strategic YouTube channel development and optimization. We grow subscribers, increase views, and monetize channels through proven strategies." },
                  { icon: Users, title: "Social Video Strategy", description: "Platform-specific video strategies for Instagram, TikTok, Facebook, and LinkedIn. Each platform requires different approaches for maximum engagement." },
                  { icon: Eye, title: "Video SEO", description: "Optimization of video content for search discovery. We optimize titles, descriptions, tags, and thumbnails to maximize organic reach." },
                  { icon: Sparkles, title: "Video Advertising", description: "Paid video campaigns across YouTube, Facebook, Instagram, and other platforms. We create and optimize video ads that drive conversions." },
                  { icon: TrendingUp, title: "Video Analytics", description: "Comprehensive tracking of video performance. We measure views, engagement, conversions, and ROI to optimize video strategies." },
                  { icon: BarChart3, title: "Video Content Planning", description: "Strategic content calendars that plan video topics, formats, and publishing schedules. Consistent video output builds audiences." },
                  { icon: Zap, title: "Video Repurposing", description: "Strategic repurposing of video content across formats and platforms. One video becomes multiple assets maximizing production ROI." },
                  { icon: Target, title: "Conversion Optimization", description: "Optimizing videos for specific conversion goals. We test thumbnails, hooks, CTAs, and landing pages to maximize video ROI." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Video Marketing Dominates</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video is the most engaging content format. Viewers retain 95% of messages from video versus 10% from text. Video generates 1200% more shares than text and images combined. Landing pages with video convert 80% better than those without. YouTube is the second-largest search engine after Google. TikTok and Instagram Reels dominate social media engagement. Video isn't just another content format—it's the primary way modern audiences consume information. Businesses without video strategies miss massive opportunities for engagement, education, and conversion. We build comprehensive video marketing systems that drive measurable business results.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Video Marketing Opportunity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Consumer video consumption continues explosive growth. Average person watches 17 hours of online video weekly. This number increases annually as video becomes default content format. Businesses that create valuable video content capture disproportionate attention and engagement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video enables emotional connection impossible with text. Facial expressions, tone of voice, and body language communicate authenticity and build trust. Video humanizes brands, making them relatable and trustworthy. This emotional connection drives stronger brand affinity and loyalty.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video simplifies complex information. Product demonstrations, tutorials, and explainers communicate in minutes what would take pages of text. Video is particularly effective for visual products, complex services, or educational content. It reduces cognitive load and increases comprehension.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video drives conversions across the funnel. Awareness videos introduce brands. Educational videos build consideration. Demo videos drive purchase decisions. Testimonial videos overcome objections. Strategic video content supports every stage of customer journeys.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Video Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Successful video marketing requires comprehensive strategy. Random video creation wastes resources without driving results. We develop video strategies that align with business goals and audience needs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define video objectives—what should video achieve? Brand awareness? Lead generation? Customer education? Sales conversion? Different objectives require different video types, platforms, and distribution strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify optimal video types for your business. Educational how-tos, product demos, customer testimonials, behind-the-scenes, thought leadership, entertainment, or documentary-style content. We select types that resonate with your audience and support your goals.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We determine platform mix—YouTube, Instagram, TikTok, LinkedIn, Facebook, or your website. Different platforms suit different content types and audiences. We allocate production resources to platforms that deliver best ROI.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create content calendars that plan video topics, formats, and publishing schedules. Consistent video output builds audiences and maintains engagement. We balance evergreen content with timely topics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish production workflows and budgets. How many videos monthly? What production quality is required? In-house or outsourced production? We design sustainable production systems that deliver consistent output.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Professional Video Production</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Production quality impacts video effectiveness. Poor quality signals low credibility. Professional production builds trust and engagement. We provide end-to-end production services.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Pre-Production:</strong> Concept development, scripting, storyboarding, and planning. Pre-production determines video success. We develop concepts that resonate, write scripts that engage, and plan shoots that execute efficiently.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Production:</strong> Professional filming with appropriate equipment, lighting, and audio. We handle location scouting, talent coordination, and on-set direction. We ensure footage meets quality standards.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Post-Production:</strong> Editing, color grading, sound design, and graphics. Post-production transforms raw footage into polished final videos. We edit for pacing, add graphics that enhance understanding, and optimize audio for clarity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Optimization:</strong> Creating multiple versions for different platforms. YouTube videos need different formats than Instagram Reels or TikTok. We optimize aspect ratios, lengths, and formats for each platform.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We balance production quality with budget constraints. Not every video needs Hollywood production values. We recommend appropriate production levels for different video types and platforms. Educational content might use screen recordings; brand videos might require full production crews.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">YouTube Channel Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  YouTube is the second-largest search engine and most important video platform. Building successful YouTube channels requires understanding platform dynamics and algorithm optimization.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize channel setup—branding, descriptions, playlists, and featured content. Professional channel presentation builds credibility and encourages subscriptions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop content strategies that balance audience interests with business goals. We identify topics with search demand, competitive gaps, and alignment with your expertise. We create content that provides genuine value while supporting business objectives.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize videos for YouTube algorithm. Compelling thumbnails increase click-through rates. Strong hooks retain viewers in critical first 30 seconds. Proper titles, descriptions, and tags improve discoverability. End screens and cards drive subscriptions and video views.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement consistent publishing schedules. YouTube algorithm rewards consistency. Regular uploads train audiences to expect new content and signal active channels to algorithm.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We engage with audience through comments, community posts, and live streams. Engagement builds loyal communities and signals value to algorithm. We respond to comments, ask questions, and create dialogue.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze performance data to optimize strategy. We track watch time, retention rates, traffic sources, and audience demographics. We identify what works and double down while eliminating what doesn't.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Social Video Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each social platform requires different video approaches. Content that works on YouTube fails on TikTok. Platform-specific strategies maximize engagement and reach.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>TikTok Strategy:</strong> Short-form, authentic, entertaining content that feels native to platform. TikTok rewards creativity and trend participation. We create videos that leverage trending sounds, participate in challenges, and showcase personality. TikTok's algorithm provides massive organic reach for compelling content.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Instagram Reels Strategy:</strong> Similar to TikTok but with Instagram's aesthetic expectations. Reels drive discovery on Instagram. We create visually appealing, entertaining Reels that align with brand identity while leveraging trending formats.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>LinkedIn Video Strategy:</strong> Professional, educational content that provides business value. LinkedIn audiences expect insights, not entertainment. We create thought leadership videos, industry analysis, and professional development content.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Facebook Video Strategy:</strong> Longer-form content that tells stories and builds community. Facebook video works well for behind-the-scenes, customer stories, and educational series. We optimize for Facebook Watch and in-feed viewing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Instagram Stories Strategy:</strong> Ephemeral, authentic content that maintains daily presence. Stories keep brands top-of-mind between feed posts. We create consistent Stories content that engages followers.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Video SEO Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video SEO drives organic discovery. Optimized videos rank in YouTube search, Google search, and platform recommendations. We optimize every element for maximum visibility.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Keyword Research:</strong> Identifying search terms with demand and manageable competition. We target keywords that align with business goals and audience interests. We optimize for both YouTube and Google search.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Title Optimization:</strong> Compelling titles that include target keywords while remaining clickable. Titles must satisfy both algorithms and humans. We balance SEO with engagement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Description Optimization:</strong> Detailed descriptions that provide context and include relevant keywords. Descriptions help algorithms understand content and provide value to viewers. We write comprehensive descriptions with timestamps and links.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Thumbnail Optimization:</strong> Eye-catching thumbnails that drive clicks. Thumbnails are the most important factor in click-through rates. We design thumbnails with bold text, contrasting colors, and clear focal points.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Engagement Optimization:</strong> Encouraging likes, comments, and shares that signal value to algorithms. We include clear calls-to-action, ask questions, and create content that sparks discussion.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Video Advertising</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid video advertising amplifies reach and drives immediate results. We create and optimize video ad campaigns across platforms.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>YouTube Ads:</strong> Skippable and non-skippable ads that reach audiences on world's largest video platform. We create ads that hook viewers immediately, communicate value quickly, and drive action. We target based on demographics, interests, and viewing behavior.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Facebook/Instagram Video Ads:</strong> In-feed video ads optimized for mobile viewing. We create thumb-stopping creative that works without sound (most mobile users watch muted). We test different formats, lengths, and messaging.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>LinkedIn Video Ads:</strong> Professional video ads targeting business audiences. LinkedIn's targeting enables precise B2B audience reach. We create ads that communicate business value and drive lead generation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>TikTok Ads:</strong> Native-feeling ads that blend with organic content. TikTok ads require authentic, entertaining creative. We create ads that feel like TikTok content rather than traditional advertising.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize video ads continuously through A/B testing. We test different hooks, messages, lengths, and calls-to-action. We scale winning ads and kill underperformers quickly.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Video Repurposing Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video production is expensive. Repurposing maximizes ROI by transforming single videos into multiple assets across formats and platforms.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We extract short clips from long-form videos for social media. A 20-minute YouTube video becomes 10+ short clips for Instagram, TikTok, and LinkedIn. Each clip reaches different audiences and extends content lifespan.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We transcribe videos into blog posts and articles. Video transcripts become SEO-optimized written content. We edit transcripts for readability while maintaining video insights.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create quote graphics and audiograms from video highlights. These assets work well on social media and in email marketing. They promote full videos while providing standalone value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We reformat videos for different platforms. YouTube videos become Instagram Reels, TikToks, LinkedIn posts, and Twitter clips. Each platform requires different aspect ratios and lengths. We optimize for each platform's specifications.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 500K YouTube Subscribers in 18 Months</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A B2B SaaS company wanted to build YouTube presence for lead generation. They'd published sporadically for two years with minimal results—5K subscribers and low engagement. Videos provided little business value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We developed comprehensive YouTube strategy: conducted keyword research identifying high-value topics, created content calendar with consistent weekly publishing, optimized all video elements for algorithm, improved production quality and presentation, implemented systematic promotion strategy, and built engagement loops.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 18 months: Channel grew from 5K to 500K subscribers. Videos generated 2M monthly views. YouTube became #2 lead source generating 1,200 qualified leads monthly. Video content established company as industry thought leader. YouTube channel became major competitive advantage.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Video Marketing Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Video Strategy:</strong> Comprehensive strategy with content plans and platform recommendations</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Video Production:</strong> Professional video creation from concept through final edit</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Channel Optimization:</strong> YouTube and social channel setup and optimization</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Video SEO:</strong> Optimization of all video elements for discoverability</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Distribution Strategy:</strong> Multi-platform distribution and promotion plans</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Performance Analytics:</strong> Comprehensive tracking and optimization recommendations</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video marketing requires ongoing commitment. Initial strategy development takes 2-3 weeks. Video production timelines vary by complexity—simple videos take days, complex productions take weeks. Ongoing video programs typically produce 4-16 videos monthly. Investment ranges from $5K for strategy development to $50K+/month for comprehensive video programs including production and management.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video marketing delivers compounding returns. Early videos build foundation. As libraries grow and channels mature, organic reach increases. Most clients see positive ROI within 6-12 months as video content drives traffic, leads, and conversions. Long-term value is substantial—video content continues generating value for years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Leverage Video Marketing?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free video strategy consultation. We'll discuss your goals and recommend optimal approaches.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Consultation <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

