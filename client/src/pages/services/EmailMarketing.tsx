import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Mail, CheckCircle2, ArrowRight, Users, TrendingUp, Target, Zap, BarChart3, Heart, MessageCircle, Calendar, Send } from "lucide-react";

export default function EmailMarketing() {
  return (
    <>
      <SEO
        title="Email Marketing & Automation - Build Profitable Email Lists"
        description="Comprehensive email marketing services including strategy, automation, list building, and optimization. Drive revenue with email campaigns that convert."
        keywords="email marketing, email automation, email campaigns, email list building, newsletter marketing, email strategy, marketing automation"
      />
      
      <StructuredData type="Service" data={{ name: "Email Marketing & Automation", description: "Strategic email marketing that drives engagement and revenue", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Email Marketing" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Email That Converts</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Email <span className="gradient-text">Marketing</span> That Drives Revenue
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Build profitable email lists and automated sequences that convert subscribers into customers. Email delivers $42 ROI for every $1 spent—the highest of any marketing channel.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Email Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Email Marketing System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Email Strategy & Planning", description: "Comprehensive email strategies aligned with customer journey and business goals. We map email touchpoints, define objectives, and create roadmaps that drive measurable results." },
                  { icon: Users, title: "List Building & Growth", description: "Strategic list growth through lead magnets, opt-in forms, and conversion optimization. We build engaged lists of qualified subscribers who actually want to hear from you." },
                  { icon: Zap, title: "Marketing Automation", description: "Sophisticated automation sequences that nurture leads and drive conversions. Welcome series, abandoned cart recovery, post-purchase sequences, and re-engagement campaigns." },
                  { icon: MessageCircle, title: "Campaign Creation", description: "Compelling email campaigns with strategic messaging and conversion-focused design. We craft emails that get opened, read, and clicked." },
                  { icon: Target, title: "Segmentation & Personalization", description: "Advanced segmentation based on behavior, preferences, and lifecycle stage. Personalized emails that speak directly to subscriber needs and interests." },
                  { icon: BarChart3, title: "A/B Testing & Optimization", description: "Systematic testing of subject lines, content, CTAs, and send times. Data-driven optimization that continuously improves performance." },
                  { icon: TrendingUp, title: "Deliverability Management", description: "Technical optimization ensuring emails reach inboxes, not spam folders. We manage sender reputation, authentication, and list hygiene." },
                  { icon: Calendar, title: "Email Calendar Planning", description: "Strategic email calendars that balance promotional and value-driven content. Optimal send frequency and timing for maximum engagement." },
                  { icon: Heart, title: "Re-engagement Campaigns", description: "Win back inactive subscribers before they're lost forever. Strategic campaigns that reignite interest and restore engagement." },
                  { icon: Send, title: "Transactional Email Optimization", description: "Optimize transactional emails (receipts, shipping notifications) for engagement and additional revenue. Turn functional emails into marketing opportunities." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Email Marketing Still Dominates</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Despite predictions of email's death, it remains the highest-ROI marketing channel. Email delivers $42 for every $1 spent—4x higher than social media and 2x higher than SEO. Over 4 billion people use email daily, and that number grows annually. Email is the only channel you truly own—social platforms can change algorithms or disappear, but your email list stays yours. For businesses serious about sustainable growth, email marketing isn't optional.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Email Marketing Opportunity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email provides direct access to customers' most personal digital space—their inbox. Unlike social media where algorithms determine who sees your content, email puts your message directly in front of subscribers. Email subscribers are 3x more likely to share content than social media users. Email drives 40% more customer acquisition than Facebook and Twitter combined.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email enables sophisticated personalization and segmentation impossible on other channels. You can send different messages to different segments based on behavior, preferences, purchase history, and lifecycle stage. This relevance drives engagement—personalized emails deliver 6x higher transaction rates than generic blasts.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email automation creates 24/7 revenue generation. Automated sequences nurture leads while you sleep, recover abandoned carts automatically, and re-engage inactive customers systematically. Once built, automation compounds—working continuously without ongoing effort.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email provides unmatched measurement and attribution. You can track exactly who opened, clicked, and converted from every email. This data enables continuous optimization and clear ROI demonstration. Unlike brand awareness campaigns with fuzzy attribution, email shows precise business impact.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Email Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Effective email marketing starts with strategy, not tactics. We begin by mapping your customer journey and identifying optimal email touchpoints. Where do prospects need nurturing? What triggers should initiate automation? When do customers need education versus promotion?
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define clear objectives for email marketing aligned with business goals. Some businesses need lead nurturing to move prospects through long sales cycles. Others need transaction-focused campaigns to drive immediate purchases. Still others need retention-focused emails to reduce churn. Strategy determines which emails to send and when.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop email content strategies that balance value and promotion. The 80/20 rule applies—80% value-driven content (education, entertainment, inspiration) and 20% promotional content. Pure promotion drives unsubscribes; pure value without conversion opportunities wastes potential.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create comprehensive email calendars that plan campaigns, automation triggers, and content themes in advance. Calendars ensure consistent communication without overwhelming subscribers. We balance frequency carefully—too few emails and subscribers forget you; too many and they unsubscribe.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">List Building Strategies That Work</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email marketing success starts with list quality, not size. A small engaged list outperforms a large unengaged list every time. We focus on attracting qualified subscribers genuinely interested in your offerings.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lead magnets are the foundation of list building. We create valuable resources—guides, templates, tools, courses—that prospects willingly exchange email addresses to access. Effective lead magnets solve specific problems for target audiences and demonstrate expertise.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Opt-in form optimization maximizes conversion rates. We test form placement, copy, design, and fields to reduce friction and increase sign-ups. We implement multiple opt-in points across your website—homepage, blog posts, landing pages, exit-intent popups—to capture subscribers at different touchpoints.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Content upgrades convert blog readers into subscribers. We create bonus content specific to individual blog posts—checklists, templates, expanded guides—that readers can access by subscribing. Content upgrades convert 5-10x better than generic lead magnets because they're contextually relevant.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement strategic pop-ups that capture attention without annoying visitors. Exit-intent popups trigger when visitors are about to leave. Scroll-triggered popups appear after visitors demonstrate engagement. Timed popups wait until visitors have spent time on site. Strategic timing and targeting make popups effective rather than intrusive.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Marketing Automation That Converts</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Marketing automation transforms email from manual broadcasts into sophisticated, personalized communication systems. Automation enables sending the right message to the right person at the right time—automatically.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Welcome series are the most important automation. New subscribers are most engaged immediately after signing up. Welcome series capitalize on this engagement, introducing your brand, setting expectations, and driving first conversions. Effective welcome series include 3-5 emails over 7-14 days.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lead nurturing sequences move prospects through sales funnels systematically. We create educational sequences that address objections, demonstrate value, and build trust over time. Nurture sequences are essential for high-consideration purchases with long sales cycles.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Abandoned cart recovery is the highest-ROI automation for e-commerce. 70% of shopping carts are abandoned, representing massive lost revenue. Automated cart recovery emails recapture 10-30% of abandoned carts. We implement multi-email sequences with strategic timing and incentives.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Post-purchase sequences drive repeat purchases and reduce churn. After customers buy, we send thank-you emails, product education, usage tips, and strategic cross-sell offers. Post-purchase sequences increase customer lifetime value by 20-40%.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Re-engagement campaigns win back inactive subscribers before they're lost. When subscribers stop engaging, automated sequences attempt to reignite interest with compelling offers or content. Re-engagement saves lists from decay and maintains deliverability.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Behavior-triggered emails respond to specific actions. When subscribers download resources, attend webinars, or visit specific pages, triggered emails provide relevant follow-up. Behavioral triggers enable hyper-relevant communication that drives higher engagement and conversion.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Campaign Creation Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Great email campaigns combine strategic messaging with conversion-focused design. Every element—subject line, preview text, body copy, images, CTAs—must work together to drive desired actions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Subject lines determine whether emails get opened. We craft compelling subject lines that create curiosity, promise value, or create urgency without resorting to spam triggers. We test subject line variations systematically to identify what resonates with your audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Preview text (the snippet visible in inboxes) works with subject lines to drive opens. We optimize preview text to complement subject lines and provide additional context or value proposition. Together, subject line and preview text determine open rates.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email copy must be scannable and action-oriented. Most subscribers skim rather than read thoroughly. We structure copy with clear hierarchy, short paragraphs, bullet points, and bold text that guides eyes to key information and CTAs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Design enhances rather than distracts from message. We create mobile-responsive designs (60% of emails are opened on mobile) that render beautifully across devices. We use images strategically to support copy, not replace it—many email clients block images by default.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Calls-to-action must be clear, compelling, and easy to click. We use action-oriented button text, strategic placement, and contrasting colors that draw attention. We typically include one primary CTA to avoid choice paralysis.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Segmentation & Personalization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Generic email blasts are dead. Modern email marketing requires segmentation and personalization to cut through inbox noise. Segmented campaigns drive 760% more revenue than non-segmented campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We segment lists based on multiple criteria: demographics, behavior, purchase history, engagement level, and lifecycle stage. Each segment receives tailored messaging that speaks to their specific needs, interests, and position in the customer journey.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Behavioral segmentation is particularly powerful. We track what subscribers click, which products they view, what content they download, and how they engage. This behavior reveals interests and intent, enabling highly targeted communication.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lifecycle segmentation treats subscribers differently based on their relationship stage. New subscribers need introduction and education. Active customers need retention and upsell. Inactive subscribers need re-engagement. Churned customers need win-back campaigns. Each stage requires different messaging.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Personalization goes beyond "Hi [First Name]." We personalize content, product recommendations, send times, and offers based on individual subscriber data. Dynamic content blocks show different content to different segments within the same email.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">A/B Testing & Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email marketing provides perfect testing environment. We can test variations, measure results precisely, and implement winners immediately. Systematic testing compounds into significant performance improvements over time.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test subject lines to maximize open rates. Small improvements in open rates compound into substantial traffic and revenue gains. We test length, personalization, emoji usage, questions versus statements, and urgency tactics.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test email content and design to maximize click-through rates. This includes testing copy length, image usage, CTA placement, button text, and layout variations. We identify what drives engagement for your specific audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test send times to identify when your audience is most likely to engage. Optimal send times vary by audience and industry. We test different days and times systematically to find your sweet spot.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test automation timing and sequences. How many emails should a welcome series include? What's the optimal delay between emails? When should abandoned cart emails send? Testing reveals optimal automation parameters.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Deliverability Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The best email campaigns are worthless if they land in spam folders. Deliverability—getting emails into inboxes—requires technical optimization and list hygiene.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement proper email authentication (SPF, DKIM, DMARC) that proves emails legitimately come from your domain. Authentication prevents spoofing and improves deliverability. We also maintain good sender reputation through consistent sending patterns and engagement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  List hygiene is critical for deliverability. We regularly remove inactive subscribers, fix invalid addresses, and suppress bounces and complaints. Clean lists maintain high engagement rates that signal quality to email providers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We avoid spam triggers in content—excessive caps, spam words, misleading subject lines, and poor HTML. We also maintain proper text-to-image ratios and include plain text versions. These technical factors affect spam filtering.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor deliverability metrics continuously—bounce rates, spam complaints, inbox placement rates. When deliverability issues arise, we diagnose causes and implement fixes quickly to protect sender reputation.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: $2M Revenue from Email</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  An e-commerce client had a 50K subscriber list but generated minimal revenue from email. They sent occasional promotional blasts with poor engagement and no automation. Email contributed only 5% of revenue.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented comprehensive email marketing: cleaned the list, created segmentation strategy, built welcome and abandoned cart automation, launched regular campaigns with strategic content mix, and optimized through systematic testing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 12 months: Email revenue grew from 5% to 35% of total revenue ($2M annually). List grew to 120K engaged subscribers. Open rates increased from 12% to 28%. Click rates improved from 1% to 4.5%. Abandoned cart recovery alone generated $400K annually.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Email Marketing Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Email Strategy:</strong> Comprehensive strategy with segmentation, automation, and campaign plans</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Automation Setup:</strong> Welcome series, nurture sequences, cart recovery, and behavioral triggers</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Campaign Creation:</strong> Regular email campaigns with strategic messaging and design</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>List Growth Strategy:</strong> Lead magnets, opt-in optimization, and growth tactics</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Testing & Optimization:</strong> Systematic A/B testing and performance improvement</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Monthly Reporting:</strong> Performance metrics, insights, and recommendations</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Email marketing requires ongoing commitment. Initial strategy and automation setup take 3-4 weeks. Ongoing campaign management includes weekly or bi-weekly sends plus automation monitoring. Investment ranges from $3K/month for basic email management to $12K+/month for comprehensive programs with advanced automation and testing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results appear quickly—automation can drive revenue within days of launch. Campaign optimization shows improvement within weeks. Email marketing compounds over time as lists grow, automation improves, and optimization increases performance. Most clients see positive ROI within 60-90 days.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Build Your Email Revenue Engine?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free email audit. We'll analyze your current email marketing and identify quick-win opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Email Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

