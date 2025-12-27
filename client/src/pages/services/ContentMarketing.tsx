import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { FileText, CheckCircle2, ArrowRight, PenTool, BookOpen, Video, Mic, Image, BarChart3, Target, Users, TrendingUp, Zap } from "lucide-react";

export default function ContentMarketing() {
  return (
    <>
      <SEO
        title="Content Marketing Strategy - Create Content That Converts"
        description="Comprehensive content marketing services including strategy, creation, distribution, and optimization. Build authority, drive traffic, and generate leads with strategic content."
        keywords="content marketing, content strategy, content creation, blog writing, SEO content, content distribution, thought leadership"
      />
      
      <StructuredData type="Service" data={{ name: "Content Marketing Strategy", description: "Strategic content marketing that builds authority and drives conversions", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Content Marketing" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Content That Converts</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Content <span className="gradient-text">Marketing</span> That Drives Results
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Create content that attracts, engages, and converts your ideal customers. We develop comprehensive content strategies that build authority, drive organic traffic, and generate qualified leads.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Content Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Content Marketing System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Content Strategy Development", description: "Comprehensive content strategies aligned with business goals. We identify content pillars, audience needs, competitive gaps, and distribution channels to create roadmaps that drive measurable results." },
                  { icon: PenTool, title: "Blog & Article Writing", description: "SEO-optimized blog posts and articles that rank in search and engage readers. Our writers combine subject matter expertise with SEO best practices to create content that performs." },
                  { icon: BookOpen, title: "Long-Form Content", description: "In-depth guides, whitepapers, and ebooks that establish thought leadership. We create comprehensive resources that become go-to references in your industry." },
                  { icon: Video, title: "Video Content Strategy", description: "Video content planning and scripting for YouTube, social media, and your website. We develop video strategies that align with platform algorithms and audience preferences." },
                  { icon: Mic, title: "Podcast Strategy & Production", description: "End-to-end podcast strategy from concept through production and promotion. We help you build audio audiences and leverage podcasting for brand building." },
                  { icon: Image, title: "Visual Content Creation", description: "Infographics, data visualizations, and custom graphics that make complex information digestible. Visual content that gets shared and drives engagement." },
                  { icon: Users, title: "Audience Research", description: "Deep audience analysis to understand what content resonates. We identify topics, formats, and angles that your target audience actually wants to consume." },
                  { icon: BarChart3, title: "Content Performance Analytics", description: "Comprehensive tracking and analysis of content performance. We measure what matters and optimize based on data, not assumptions." },
                  { icon: TrendingUp, title: "Content Distribution Strategy", description: "Multi-channel distribution plans that amplify reach. We identify optimal channels, timing, and promotion tactics to maximize content impact." },
                  { icon: Zap, title: "Content Repurposing", description: "Strategic content repurposing that multiplies ROI. We transform single pieces into multiple formats, extending reach and lifespan." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Content Marketing Delivers ROI</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content marketing generates 3x more leads than traditional marketing while costing 62% less. But most content marketing fails because it's created without strategy, optimized without data, or distributed without plan. We build content systems that consistently attract, engage, and convert your ideal customers.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Content Marketing Opportunity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern buyers conduct extensive research before making purchase decisions. B2B buyers consume an average of 13 pieces of content before engaging with sales. B2C consumers read reviews, compare options, and seek educational content before buying. This research behavior creates massive opportunity for brands that provide valuable content.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content marketing allows you to influence purchase decisions throughout the entire buyer journey. Educational content builds awareness. Comparison content shapes consideration. Case studies and testimonials drive conversion. Post-purchase content increases retention and advocacy. Strategic content touches every stage.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content also builds compounding assets. A blog post written today can drive traffic for years. A comprehensive guide becomes an evergreen lead magnet. A viral video continues generating views long after publication. Unlike paid advertising that stops working when you stop paying, content creates lasting value.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Strategy: The Foundation of Success</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content strategy determines what content to create, for whom, and why. Without strategy, content efforts become random acts of marketing—creating content for content's sake without clear goals or measurement. Strategic content aligns with business objectives and audience needs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our strategy process starts with goal definition. What business outcomes should content drive? Lead generation? Brand awareness? Customer education? Retention? Different goals require different content approaches. We align content strategy with your specific business objectives.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct comprehensive audience research to understand what content your target customers actually want. We analyze search behavior, social discussions, competitor content performance, and direct audience feedback. We identify content gaps—topics your audience cares about that competitors aren't covering well.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define content pillars—the 3-5 core topics that support your positioning and audience needs. Content pillars provide focus, preventing the scattered approach that dilutes impact. All content ladders up to these pillars, creating topical authority that search engines reward.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create detailed content calendars that balance different content types, topics, and goals. Calendars provide structure while allowing flexibility for timely opportunities. We plan content production, publication schedules, and promotion tactics in advance.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">SEO-Optimized Content Creation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creating great content isn't enough—it must be discoverable. SEO optimization ensures your content ranks in search results when your target audience searches for relevant topics. Our content combines engaging writing with technical SEO best practices.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct keyword research to identify high-value search terms—keywords with significant search volume, manageable competition, and strong commercial intent. We target keywords at different stages of the buyer journey from informational queries to transactional searches.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our writers optimize content for both search engines and human readers. We naturally incorporate target keywords while maintaining readability and engagement. We structure content with proper headings, optimize meta descriptions, add internal links, and ensure technical SEO elements are correct.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create comprehensive content that thoroughly covers topics. Search engines increasingly favor in-depth, authoritative content over thin, superficial articles. Our content answers related questions, addresses common objections, and provides genuine value that earns rankings and links.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Long-Form Content for Thought Leadership</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Long-form content—comprehensive guides, research reports, whitepapers, and ebooks—establishes thought leadership and generates high-quality leads. These substantial resources demonstrate expertise and provide value that justifies email capture.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create long-form content that becomes definitive resources in your industry. These pieces rank for competitive keywords, earn backlinks from authoritative sites, and get referenced as sources. They build brand authority and trust that translates into business results.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Long-form content also serves as lead magnets. We design gated resources that prospects willingly exchange contact information to access. These leads are qualified—they've demonstrated interest by consuming substantial content—and can be nurtured through email sequences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We repurpose long-form content into multiple formats: blog post series, social media content, email courses, webinar presentations, and more. A single comprehensive guide can fuel months of content across all channels.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Video Content Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Video is the fastest-growing content format. YouTube is the second-largest search engine. Social platforms prioritize video in algorithms. Consumers prefer video for product research and education. Video content is no longer optional—it's essential.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop video strategies aligned with platform dynamics and audience preferences. YouTube requires different approaches than TikTok, which differs from LinkedIn video. We identify optimal video types, lengths, and topics for each platform and audience segment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our video strategies include educational content (how-tos, tutorials, explainers), entertainment content (behind-the-scenes, stories, humor), and conversion content (demos, testimonials, case studies). We balance different video types to achieve multiple goals.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize video for search and discovery. This includes keyword-optimized titles and descriptions, engaging thumbnails, strategic tagging, and proper video structure. We also create supporting content—blog posts, transcripts, and social clips—that amplify video reach.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Podcast Strategy & Production</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Podcasting builds intimate audience connections. Listeners spend 30-60 minutes with your content, creating deeper engagement than any other format. Podcasts also leverage the power of voice and personality to humanize brands.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop podcast strategies from concept through execution. This includes format selection (interview, solo, co-hosted, narrative), topic planning, guest strategy, production workflows, and promotion tactics. We handle technical aspects or provide guidance for in-house production.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Podcasts create multiple content assets. Each episode generates audio content, video (if recorded), transcripts for blog posts, social clips, quote graphics, and email content. A single podcast episode fuels a week of multi-channel content.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize podcasts for discovery through proper categorization, keyword-rich descriptions, episode optimization, and cross-promotion. We develop audience growth strategies that compound over time, building loyal listener bases.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Visual Content That Gets Shared</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Visual content—infographics, data visualizations, custom graphics—gets shared 3x more than text-only content. Visuals make complex information digestible, increase comprehension, and improve retention. They're essential for social media success and content engagement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create custom visual content that supports written content and stands alone as shareable assets. Our designers translate data, processes, and concepts into compelling visuals that communicate clearly and reinforce brand identity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Infographics work particularly well for complex topics, statistical data, process explanations, and comparison content. We design infographics optimized for sharing while maintaining brand consistency and visual appeal.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also create social-first visual content: quote graphics, stat cards, carousel posts, and meme-style content. These formats are designed for specific platform dynamics and maximize engagement and sharing.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Audience Research & Content Ideation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creating content your audience wants requires understanding what they care about. We conduct systematic audience research to identify content opportunities that align with audience needs and business goals.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We analyze search data to see what questions your audience asks. We monitor social media to understand what topics generate engagement. We review competitor content to identify gaps and opportunities. We survey your existing customers to learn what content they find valuable.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use multiple ideation frameworks to generate content ideas systematically rather than relying on inspiration. These frameworks ensure consistent content production and prevent creative blocks that stall content programs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We prioritize content ideas based on multiple factors: audience demand, search opportunity, competitive landscape, production feasibility, and strategic fit. This prioritization ensures resources focus on highest-impact content.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Performance Analytics</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content marketing requires measurement and optimization. We track comprehensive metrics that reveal what's working and what needs improvement. We measure content performance across multiple dimensions: traffic, engagement, conversions, and business impact.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track leading indicators (traffic, time on page, scroll depth, social shares) that predict content success and lagging indicators (leads generated, revenue influenced, customer acquisition) that measure business impact. Both are necessary for complete understanding.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct content audits to identify top performers and underperformers. Top performers get promoted and repurposed. Underperformers get optimized or retired. This systematic approach improves overall content portfolio performance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create custom dashboards that surface key metrics and trends. These dashboards enable data-driven decisions about content investment, topic selection, and format choices. We report regularly on content performance and strategic recommendations.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Distribution Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Creating great content is only half the battle—distribution determines reach and impact. We develop multi-channel distribution strategies that amplify content beyond owned channels.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Owned distribution includes your website, blog, email list, and social channels. We optimize owned channel distribution through email promotion, social posting schedules, and internal linking strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Earned distribution comes from others sharing and linking to your content. We create content designed for sharing and implement outreach strategies that earn backlinks, guest post opportunities, and media mentions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paid distribution amplifies reach through content promotion, native advertising, and sponsored placements. We identify high-performing content worth promoting and develop paid strategies that maximize ROI.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Repurposing for Maximum ROI</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content repurposing multiplies ROI by transforming single pieces into multiple formats and extending content lifespan. A single comprehensive blog post can become a video, podcast episode, infographic, social media series, email course, and slide deck.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop systematic repurposing workflows that efficiently transform content across formats. This maximizes content investment while reaching audiences who prefer different content types.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Repurposing also extends content reach across channels. A YouTube video becomes Instagram Reels, TikTok content, LinkedIn posts, and Twitter threads. Each format reaches different audience segments and platform algorithms.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We update and republish evergreen content to maintain rankings and relevance. Content that performed well historically can perform again with updates and re-promotion. This is far more efficient than creating entirely new content.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 10x Traffic Growth Through Content</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A B2B SaaS client approached us with minimal organic traffic and high customer acquisition costs. They had a blog but published sporadically without strategy. We implemented a comprehensive content marketing program.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We developed a content strategy focused on bottom-of-funnel keywords with commercial intent. We created comprehensive guides targeting high-value search terms. We implemented systematic internal linking to boost rankings. We promoted top content through email and social channels.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results: Organic traffic grew 10x in 12 months. Content-generated leads increased from 5% to 40% of total leads. Customer acquisition cost decreased 52% as organic leads replaced paid acquisition. Content became their primary growth driver, generating $3M in influenced revenue annually.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Marketing Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Content Strategy Document:</strong> Comprehensive strategy with goals, audience insights, content pillars, and distribution plans</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Content Calendar:</strong> 90-day rolling calendar with topics, formats, and publication schedules</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Content Creation:</strong> Regular production of blog posts, articles, guides, and other content formats</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>SEO Optimization:</strong> Keyword research and on-page optimization for all content</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Performance Reports:</strong> Monthly analytics reports with insights and recommendations</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Distribution Support:</strong> Social promotion, email campaigns, and outreach for content amplification</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content marketing is a long-term investment that compounds over time. Initial strategy development takes 2-3 weeks. Ongoing content production typically includes 4-8 pieces monthly depending on format and depth. Investment ranges from $5K/month for basic blog programs to $25K+/month for comprehensive multi-format content marketing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results typically appear within 3-6 months as content accumulates and rankings improve. By 12 months, mature content programs generate significant organic traffic and leads. The compounding nature of content means ROI improves continuously over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Build Your Content Engine?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free content audit. We'll analyze your current content and identify quick-win opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Content Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

