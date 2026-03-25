import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, ArrowRight, Rocket, Code, TrendingUp, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function Bangalore() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing for Bangalore Startups & Tech Companies | Growth Focused"
        description="Bangalore's go-to digital marketing agency for startups, SaaS companies, and tech businesses. Data-driven strategies that scale with your growth."
        canonical="https://dekhetrends.com/bangalore"
      />
      
      <StickyCallButton />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-xs font-bold text-green-500">BANGALORE</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="text-xs font-bold text-blue-500">TECH-FOCUSED</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Digital Marketing for Bangalore's <span className="gradient-text">Tech Ecosystem</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              You're building something innovative. Your product is solid. Your team is talented. But growth has plateaued. You're spending on ads but CAC is too high. Your content isn't converting. Sound familiar?
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              We work with Bangalore startups, SaaS companies, and tech businesses that need marketing strategies as sophisticated as their products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Talk to Us: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                  Free Growth Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-muted-foreground">Tech Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">₹8Cr+</div>
                <div className="text-muted-foreground">Revenue Impact</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">3.2X</div>
                <div className="text-muted-foreground">Avg. Growth Rate</div>
              </div>
            </div>
          </motion.div>

          {/* The Bangalore Challenge */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              The Bangalore Startup Marketing Problem
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Last quarter, I sat down with a SaaS founder in Koramangala. They'd raised a seed round, built a great product, and had some early traction. But they were stuck at 200 users and couldn't figure out why.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Their website looked like every other SaaS website. Their messaging was generic. Their content was technical but not helpful. They were running Google Ads but targeting was all wrong. They had a blog that nobody read. Classic Bangalore startup marketing mistakes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20">
                  <h3 className="text-xl font-bold mb-3 text-red-400">What Doesn't Work</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Copying competitor messaging word-for-word</li>
                    <li>• Writing content for search engines, not humans</li>
                    <li>• Running ads without proper tracking setup</li>
                    <li>• Focusing on vanity metrics (followers, likes)</li>
                    <li>• Inconsistent posting on social media</li>
                    <li>• No clear positioning or differentiation</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3 text-green-400">What Actually Works</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Clear positioning that differentiates you</li>
                    <li>• Content that solves real problems</li>
                    <li>• Data-driven ad campaigns with proper attribution</li>
                    <li>• Focus on metrics that matter (CAC, LTV, conversion rate)</li>
                    <li>• Consistent brand presence across channels</li>
                    <li>• Testing, measuring, optimizing constantly</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We rebuilt their entire marketing strategy. New positioning. New messaging. New website. Proper ad campaigns. Content that actually helped their target audience. Within 6 months, they went from 200 to 1,400 users. Same product, better marketing.
              </p>
            </div>
          </div>

          {/* Why Bangalore is Different */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Why Marketing in Bangalore Requires a Different Approach
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bangalore isn't like other Indian cities. Your customers here are more sophisticated. They're tech-savvy. They've seen every marketing trick in the book. Generic marketing doesn't work.
              </p>

              <div className="space-y-6 my-8">
                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <div className="flex items-start gap-4">
                    <Code className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Your Audience is Technical</h3>
                      <p className="text-muted-foreground">
                        Whether you're selling to developers, product managers, or founders, your audience in Bangalore understands technology. Your marketing needs to be specific, accurate, and credible. Buzzwords and fluff get ignored.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Competition is Intense</h3>
                      <p className="text-muted-foreground">
                        Every other building in Koramangala, Indiranagar, and HSR has a startup. Many are well-funded and spending heavily on marketing. You can't out-spend them, but you can out-smart them with better strategy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Data-Driven Decision Making</h3>
                      <p className="text-muted-foreground">
                        Bangalore founders want to see numbers. CAC, LTV, conversion rates, attribution models. We speak that language. Every campaign we run is tracked, measured, and optimized based on data.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The good news? If you get marketing right in Bangalore, the returns are massive. The market is huge, customers are willing to pay for quality, and word-of-mouth spreads fast in the tight-knit tech community.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              How We Help Bangalore Tech Companies Grow
            </h2>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <div className="flex items-start gap-4 mb-4">
                  <Rocket className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Growth Marketing for SaaS & Tech Products</h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Traditional marketing doesn't work for SaaS. You need growth marketing—a systematic approach to acquiring, activating, and retaining users.
                    </p>
                  </div>
                </div>
                
                <div className="pl-12 space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">What we do:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Build and optimize your entire funnel (awareness → trial → paid)</li>
                      <li>• Set up proper analytics and attribution tracking</li>
                      <li>• Run experiments to improve conversion at every stage</li>
                      <li>• Create content that drives qualified signups</li>
                      <li>• Implement retention and referral programs</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Real Result:</p>
                    <p className="text-sm text-muted-foreground">
                      A B2B SaaS company in Whitefield was getting 50 trial signups/month with 8% conversion to paid. After implementing our growth framework, they're now at 280 trials/month with 18% conversion. MRR went from ₹4L to ₹18L in 8 months.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Content Marketing That Actually Converts</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Most tech companies treat content as an afterthought. They publish generic blog posts that nobody reads. We create content that ranks on Google, gets shared, and drives signups.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Our content approach:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Research what your target audience is actually searching for</li>
                      <li>• Create in-depth guides that rank on Google</li>
                      <li>• Write comparison articles targeting high-intent keywords</li>
                      <li>• Develop case studies and customer stories</li>
                      <li>• Optimize every piece for conversion, not just traffic</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Real Result:</p>
                    <p className="text-sm text-muted-foreground">
                      A fintech startup in Bangalore had a blog with 20 posts getting 500 visits/month. We created a content strategy focused on high-intent keywords. After 6 months, they're getting 12K visits/month and 15-20% of their signups come from organic search.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Performance Marketing (Google Ads, LinkedIn Ads)</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Paid ads can be incredibly effective or a complete waste of money. The difference is in the execution. We run data-driven campaigns that focus on ROI, not vanity metrics.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">How we approach paid ads:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Start with proper tracking setup (GA4, conversion tracking, attribution)</li>
                      <li>• Target based on intent, not just demographics</li>
                      <li>• Test multiple ad variations and landing pages</li>
                      <li>• Optimize for CAC and LTV, not just clicks</li>
                      <li>• Scale what works, kill what doesn't</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Real Result:</p>
                    <p className="text-sm text-muted-foreground">
                      An edtech company was spending ₹2.5L/month on Google Ads with CAC of ₹4,200. We rebuilt their campaigns from scratch. Now they spend ₹4L/month but CAC is down to ₹1,800 and volume is 3X higher.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Trends */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              What's Working in Bangalore's Tech Marketing Scene
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">Product-Led Growth is King</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bangalore startups are moving away from sales-led to product-led growth. Let users try your product with minimal friction, then convert them based on value delivered. Companies like Freshworks and Postman proved this works. Your marketing should support this model.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">Community Building Drives Growth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The most successful Bangalore tech companies are building communities. Slack groups, Discord servers, meetups, webinars. Community members become your best marketers. They refer others, create content, and provide feedback.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">LinkedIn is Essential for B2B</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you're selling to businesses, LinkedIn is where your buyers are. Bangalore's B2B decision-makers are active on LinkedIn. Founder-led content, employee advocacy, and LinkedIn ads are driving serious results for B2B companies.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">Video Content is Exploding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Product demos, founder stories, customer testimonials, educational content—video is dominating. YouTube, LinkedIn video, Instagram Reels. Tech companies using video are seeing 5-8X better engagement than text-only content.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Questions Bangalore Founders Ask Us
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "What should our marketing budget be as an early-stage startup?",
                  a: "Rule of thumb: 10-20% of revenue for growth-stage startups. If you're pre-revenue, allocate 30-40% of your runway to marketing. Start with ₹50K-1L/month minimum to see meaningful results. Less than that and you're spreading too thin."
                },
                {
                  q: "Should we hire in-house or work with an agency?",
                  a: "Early stage (pre-Series A): Agency makes sense. You get experienced team without full-time salaries. Post-Series A: Hybrid model works best—in-house for strategy and brand, agency for execution and specialized skills. We work with both models."
                },
                {
                  q: "How do we measure marketing ROI for a SaaS product?",
                  a: "Track CAC (Customer Acquisition Cost), LTV (Lifetime Value), payback period, and LTV:CAC ratio. Aim for LTV:CAC of 3:1 or better. Also track leading indicators: trial signups, activation rate, time to value. We set up proper attribution so you know exactly what's working."
                },
                {
                  q: "What's more important: SEO or paid ads?",
                  a: "Both, but timing matters. Paid ads give immediate results while you build SEO. SEO takes 4-6 months but has better long-term ROI. Smart strategy: Start with ads for quick wins, invest in SEO for sustainable growth. We typically recommend 60% paid, 40% organic initially, then flip that ratio over time."
                },
                {
                  q: "How do we compete with well-funded competitors?",
                  a: "You can't out-spend them, but you can out-position them. Find a niche they're ignoring. Create better content. Build a stronger community. Be more responsive. Many well-funded startups have bloated teams and slow execution. Your advantage is speed and focus."
                },
                {
                  q: "Do you work with non-tech businesses in Bangalore?",
                  a: "Yes, but our sweet spot is tech companies, SaaS products, and startups. That's where our expertise and network are strongest. If you're in a different industry, we can still help, but we're most effective with tech businesses."
                }
              ].map((faq, i) => (
                <div key={i} className="border border-accent/20 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors"
                  >
                    <h3 className="font-bold text-lg pr-4">{faq.q}</h3>
                    <ArrowRight className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Let's Build Your Growth Engine
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a free strategy call. We'll audit your current marketing, identify gaps, and show you exactly how we can help you grow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-white/50 hover:bg-white/10 font-semibold">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
