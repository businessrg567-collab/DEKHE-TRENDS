import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Search, CheckCircle2, ArrowRight, TrendingUp, FileText, Link as LinkIcon, BarChart3, Target, Zap, Globe, Users, Award } from "lucide-react";

export default function SEOStrategy() {
  return (
    <>
      <SEO
        title="SEO Strategy & Optimization - Rank #1 on Google"
        description="Comprehensive SEO services including technical SEO, on-page optimization, link building, and content strategy. Drive organic traffic and dominate search rankings."
        keywords="SEO services, search engine optimization, SEO strategy, technical SEO, link building, keyword research, local SEO, SEO audit"
      />
      
      <StructuredData type="Service" data={{ name: "SEO Strategy & Optimization", description: "Comprehensive SEO services that drive organic traffic and search rankings", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "SEO Services" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Search className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Dominate Search Rankings</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  SEO <span className="gradient-text">Strategy</span> That Ranks #1
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Drive qualified organic traffic with comprehensive SEO strategies. We combine technical optimization, content excellence, and authoritative link building to dominate search rankings.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get SEO Audit <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete SEO System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "SEO Strategy & Planning", description: "Comprehensive SEO strategies aligned with business goals. We conduct competitive analysis, keyword research, and opportunity identification to create roadmaps that drive measurable organic growth." },
                  { icon: Zap, title: "Technical SEO", description: "Fix technical issues that prevent rankings. We optimize site speed, mobile responsiveness, crawlability, indexation, and Core Web Vitals. Technical excellence is the foundation of SEO success." },
                  { icon: FileText, title: "On-Page Optimization", description: "Optimize every page element for target keywords. We perfect title tags, meta descriptions, headers, content structure, internal linking, and schema markup for maximum search visibility." },
                  { icon: LinkIcon, title: "Link Building & PR", description: "Earn authoritative backlinks that boost domain authority. We implement white-hat link building strategies including digital PR, guest posting, and content partnerships." },
                  { icon: BarChart3, title: "Keyword Research", description: "Identify high-value keywords with commercial intent. We find keywords your competitors miss—terms with strong search volume, manageable competition, and high conversion potential." },
                  { icon: FileText, title: "Content Optimization", description: "Create and optimize content that ranks and converts. We develop comprehensive content that satisfies search intent while naturally incorporating target keywords." },
                  { icon: Globe, title: "Local SEO", description: "Dominate local search results. We optimize Google Business Profile, build local citations, earn local reviews, and implement location-specific SEO strategies." },
                  { icon: Users, title: "E-commerce SEO", description: "Specialized SEO for online stores. We optimize product pages, category pages, and technical elements unique to e-commerce platforms." },
                  { icon: TrendingUp, title: "SEO Analytics & Reporting", description: "Track rankings, traffic, and conversions. We provide transparent reporting that shows exactly how SEO drives business results." },
                  { icon: Award, title: "Penalty Recovery", description: "Recover from Google penalties. We identify penalty causes, implement fixes, and submit reconsideration requests to restore rankings." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why SEO Delivers Unmatched ROI</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SEO delivers the highest ROI of any marketing channel. Organic search drives 53% of all website traffic and influences 40% of revenue for most businesses. Unlike paid advertising that stops working when you stop paying, SEO creates compounding assets that drive traffic for years. A single well-optimized page can generate thousands of visitors monthly without ongoing ad spend.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The SEO Opportunity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Google processes 8.5 billion searches daily. Your potential customers are searching for solutions you provide right now. If you're not ranking on page one, you're invisible. 75% of users never scroll past the first page of search results. Position zero (featured snippets) captures 35% of clicks. Ranking #1 for your target keywords isn't vanity—it's business-critical.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  SEO traffic is highly qualified. People searching for specific solutions have high purchase intent. Someone searching "best project management software for remote teams" is actively evaluating options. Ranking for this query puts you in front of ready-to-buy customers. This intent-driven traffic converts at 2-3x higher rates than cold traffic from other channels.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  SEO also builds brand authority. Ranking consistently for industry keywords establishes you as a trusted authority. Users perceive top-ranking sites as more credible and trustworthy. This brand halo effect extends beyond search—prospects who discover you through search are more likely to convert through other channels.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">SEO Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Effective SEO starts with strategy, not tactics. We begin with comprehensive audits that identify current performance, technical issues, and opportunities. We analyze your competitive landscape to understand what's required to outrank competitors. We define clear goals tied to business outcomes—not just rankings, but traffic, leads, and revenue.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct extensive keyword research to identify opportunities across the buyer journey. Top-of-funnel informational keywords build awareness. Middle-of-funnel comparison keywords shape consideration. Bottom-of-funnel transactional keywords drive conversions. We target keywords at every stage to capture customers throughout their research process.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We prioritize keywords based on multiple factors: search volume, competition level, commercial intent, and strategic fit. Not all keywords are worth targeting. Low-volume keywords waste resources. Highly competitive keywords require massive investment. We focus on the sweet spot—keywords with sufficient volume, manageable competition, and strong conversion potential.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create detailed SEO roadmaps that sequence initiatives for maximum impact. Quick wins generate early momentum. Foundation work (technical SEO, site architecture) enables long-term success. Content development builds topical authority. Link building establishes domain authority. Each initiative builds on previous work, creating compounding results.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Technical SEO: The Foundation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technical SEO ensures search engines can crawl, understand, and index your site effectively. Technical issues prevent even great content from ranking. We conduct comprehensive technical audits using industry-leading tools to identify and fix issues that hurt rankings.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Site speed is critical. Google uses page speed as a ranking factor, and slow sites drive users away. We optimize images, minimize code, leverage caching, and implement CDNs to achieve sub-2-second load times. Every 100ms improvement in load time increases conversions by 1%.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mobile optimization is non-negotiable. Google uses mobile-first indexing—your mobile site determines rankings even for desktop searches. We ensure responsive design, fast mobile load times, and mobile-friendly navigation. Mobile accounts for 60% of searches; poor mobile experience kills rankings and conversions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Site architecture affects crawlability and user experience. We optimize URL structure, implement logical navigation hierarchies, create XML sitemaps, and fix crawl errors. Good architecture helps search engines understand site structure and helps users find content easily.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Core Web Vitals measure user experience through loading performance, interactivity, and visual stability. Google confirmed these as ranking factors. We optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's thresholds.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">On-Page Optimization Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  On-page SEO optimizes individual pages to rank for target keywords. Every element matters—title tags, meta descriptions, headers, content, images, and internal links. We optimize methodically to maximize ranking potential.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Title tags are the most important on-page factor. We craft titles that include target keywords naturally while remaining compelling for users. Optimal titles are 50-60 characters, front-load important keywords, and include brand names when appropriate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Meta descriptions don't directly impact rankings but significantly affect click-through rates. We write compelling descriptions that include target keywords and clear calls-to-action. Higher CTR signals relevance to Google, indirectly boosting rankings.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Header tags (H1, H2, H3) structure content for both users and search engines. We use headers to incorporate keywords naturally while improving readability. Proper header hierarchy helps search engines understand content organization and topic relationships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content quality determines rankings more than any other factor. We create comprehensive content that thoroughly covers topics, answers related questions, and provides genuine value. Google's algorithms increasingly reward depth, expertise, and user satisfaction over keyword density.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Internal linking distributes page authority and helps search engines discover content. We implement strategic internal linking that guides users to related content while passing link equity to important pages. Proper internal linking can boost rankings without any external links.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Schema markup helps search engines understand content context. We implement structured data for articles, products, reviews, FAQs, and other content types. Schema enables rich snippets that increase visibility and click-through rates in search results.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Link Building That Works</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Backlinks remain one of Google's top ranking factors. Quality links from authoritative sites signal trust and relevance. But link building has changed—manipulative tactics get penalized while earning genuine links requires strategic effort.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We focus on white-hat link building that earns links through value creation. This includes creating linkable assets (original research, comprehensive guides, tools), digital PR that earns media mentions, guest posting on authoritative sites, and strategic partnerships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content-driven link building creates resources so valuable that others naturally link to them. We develop original research, industry reports, interactive tools, and comprehensive guides that become go-to resources in your industry. These assets earn links continuously without ongoing outreach.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Digital PR earns links from news sites and industry publications. We create newsworthy stories, data-driven insights, and expert commentary that journalists want to cover. Media mentions from authoritative sites provide powerful link equity and brand exposure.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Guest posting on relevant, authoritative sites builds links while establishing thought leadership. We identify high-quality guest post opportunities, create valuable content, and secure placements that drive both link equity and referral traffic.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Broken link building identifies broken links on authoritative sites and offers your content as replacement. This provides value to site owners while earning quality backlinks. We systematically identify opportunities and execute outreach at scale.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor link quality continuously. Toxic links from spammy sites hurt rankings. We audit backlink profiles, identify harmful links, and disavow them through Google Search Console. We also identify and replicate competitors' best links.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Content Strategy for SEO</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content is the vehicle for targeting keywords and earning links. But not all content ranks. We develop content strategies that create rankable, linkable assets that drive organic growth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct content gap analysis to identify topics competitors rank for that you don't. These gaps represent immediate opportunities. We also identify topics with high search volume but weak existing content—opportunities to create definitive resources that dominate rankings.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create content clusters around pillar topics. A pillar page comprehensively covers a broad topic. Cluster pages dive deep into specific subtopics and link back to the pillar. This topical authority signals expertise to Google and helps all related pages rank better.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize content for search intent, not just keywords. Google understands user intent—informational, navigational, commercial, or transactional. Content must match intent to rank. A product page won't rank for informational queries; a blog post won't rank for transactional queries.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create comprehensive content that thoroughly covers topics. Thin content doesn't rank. We analyze top-ranking pages to understand depth required, then create content that's more comprehensive, better structured, and more valuable than competitors.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We update existing content to maintain rankings. Content decay is real—pages that ranked well can drop as competitors publish better content or Google's algorithm evolves. We systematically update top-performing content to maintain and improve rankings.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Local SEO for Local Businesses</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Local SEO helps businesses rank in location-based searches and Google Maps. "Near me" searches have grown 500% in recent years. Local SEO is critical for businesses serving specific geographic areas.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Google Business Profile optimization is the foundation of local SEO. We optimize profiles with complete information, relevant categories, compelling descriptions, and regular posts. We implement review generation strategies to build social proof and improve rankings.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Local citations—mentions of your business name, address, and phone number on other sites—build local authority. We build citations on relevant directories, industry sites, and local platforms. Citation consistency across the web signals legitimacy to Google.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Location-specific content targets local keywords. We create city-specific pages, local guides, and community-focused content that ranks for geo-modified searches. This content attracts local customers actively searching for nearby solutions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Local link building earns links from local organizations, chambers of commerce, local news sites, and community partners. These local links signal geographic relevance and boost local pack rankings.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">E-commerce SEO Strategies</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce SEO requires specialized approaches. Product pages, category pages, and technical considerations unique to online stores demand specific optimization strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Product page optimization balances SEO with conversion optimization. We optimize titles, descriptions, and images for target keywords while maintaining persuasive copy that drives purchases. We implement product schema for rich snippets that increase click-through rates.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Category page optimization targets broader keywords with commercial intent. We create compelling category descriptions, implement faceted navigation carefully to avoid duplicate content, and optimize category structures for both users and search engines.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technical SEO for e-commerce addresses unique challenges: handling out-of-stock products, managing URL parameters, preventing duplicate content from product variations, and optimizing for site speed despite large product catalogs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  User-generated content like reviews provides fresh, keyword-rich content that improves rankings. We implement review systems, encourage customer reviews, and optimize review display for both SEO and conversion benefits.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">SEO Analytics & Reporting</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SEO requires continuous measurement and optimization. We track comprehensive metrics that reveal performance and guide strategy refinement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track rankings for all target keywords, monitoring position changes and identifying opportunities and threats. We measure organic traffic growth, analyzing which pages and keywords drive visitors. We track conversions from organic traffic to demonstrate business impact.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor technical health continuously, identifying and fixing issues before they impact rankings. We track backlink growth and quality, celebrating wins and addressing toxic links. We analyze competitor movements, understanding their strategies and countering their advances.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide transparent reporting that shows exactly how SEO drives business results. Reports include rankings, traffic, conversions, and revenue attribution. We explain what's working, what needs improvement, and what we're doing next.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: 400% Organic Traffic Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A B2B SaaS company approached us ranking for only 12 keywords and generating minimal organic traffic. Their site had technical issues, thin content, and no backlinks. They relied entirely on paid advertising for customer acquisition.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented comprehensive SEO: fixed technical issues, created topical content clusters, optimized existing pages, and executed strategic link building. We focused on bottom-of-funnel keywords with commercial intent.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 18 months: Rankings grew from 12 to 847 keywords. Organic traffic increased 400%. Organic leads grew from 2% to 35% of total leads. Customer acquisition cost decreased 43% as organic replaced paid acquisition. SEO became their primary growth driver.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">SEO Service Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>SEO Strategy & Roadmap:</strong> Comprehensive strategy with prioritized initiatives and timelines</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Technical SEO Audit & Fixes:</strong> Identification and resolution of technical issues</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Keyword Research:</strong> Comprehensive keyword targeting across buyer journey</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>On-Page Optimization:</strong> Optimization of all key pages for target keywords</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Content Strategy & Creation:</strong> SEO-optimized content that ranks and converts</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Link Building:</strong> White-hat link acquisition from authoritative sources</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Monthly Reporting:</strong> Transparent reports showing rankings, traffic, and business impact</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SEO is a long-term investment that compounds over time. Initial audits and strategy take 2-3 weeks. Technical fixes and initial optimization take 1-2 months. Content creation and link building are ongoing. Investment ranges from $5K/month for basic SEO to $25K+/month for comprehensive enterprise SEO.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results typically appear within 3-6 months as technical fixes take effect and content gains traction. Significant traffic growth usually occurs at 6-12 months. By 18-24 months, mature SEO programs generate substantial organic traffic that reduces reliance on paid channels. SEO compounds—the longer you invest, the better the returns.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Dominate Search Rankings?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free SEO audit. We'll identify technical issues and quick-win opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free SEO Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

