import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, ArrowRight, Building2, Users, Target, Zap } from "lucide-react";
import { useState } from "react";

export default function Delhi() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Delhi NCR | Grow Your Business Online"
        description="Delhi's most trusted digital marketing agency. We help businesses in Delhi, Noida, Gurgaon, and Faridabad dominate their market with proven SEO, ads, and social strategies."
        canonical="https://dekhetrends.com/delhi"
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
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-semibold text-primary">Serving Delhi NCR Since 2019</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Digital Marketing Agency That Understands <span className="gradient-text">Delhi's Business Culture</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Delhi businesses operate differently. The decision-making is different. The sales cycles are different. The competition is different. We've spent years understanding what works here—and what doesn't.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                  Request Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">300+</div>
                <div className="text-sm text-muted-foreground">Delhi Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">₹12Cr+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">60 Days</div>
                <div className="text-sm text-muted-foreground">Avg. Result Time</div>
              </div>
            </div>
          </motion.div>

          {/* Delhi Business Landscape */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Understanding Delhi's Unique Business Environment
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I've worked with businesses across India, and Delhi is in a category of its own. The market here has layers that don't exist elsewhere.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                You have Connaught Place businesses targeting premium customers. You have Lajpat Nagar traders moving volume. You have Gurgaon startups chasing venture capital. You have Noida manufacturers looking for B2B clients. Each segment needs a completely different marketing approach.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <Building2 className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">The Corporate Belt</h3>
                  <p className="text-muted-foreground">
                    Gurgaon and Noida are filled with decision-makers who research extensively before buying. They check LinkedIn, read case studies, and want data-backed results. Your marketing needs to speak their language.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">The Traditional Markets</h3>
                  <p className="text-muted-foreground">
                    Chandni Chowk, Karol Bagh, Sadar Bazaar—these areas have businesses that have been running for generations. They're skeptical of digital marketing but their customers are all online now. The gap is the opportunity.
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Then there's the government and political connection angle. Many Delhi businesses rely on relationships and referrals. That's fine, but what happens when those connections dry up? What happens when a new competitor enters without those connections but with strong digital presence?
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We've seen it happen. A 30-year-old printing business in Mayapuri lost 40% of their revenue when a new competitor started ranking on Google for all the keywords that mattered. The old business had better quality, better prices, and better service. But they were invisible online.
              </p>
            </div>
          </div>

          {/* Why Digital Marketing Matters */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Why Delhi Businesses Can't Ignore Digital Marketing Anymore
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Delhi market is saturated. Whatever you're selling, there are 50 other businesses selling the same thing within a 5km radius. The question isn't whether you're good at what you do—the question is whether people know you exist.
              </p>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 my-8">
                <h3 className="text-2xl font-bold mb-4">The Reality Check</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>82% of Delhi consumers search online before making a purchase decision</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Your competitor who ranks on Google gets 10X more inquiries than you, even if you're better</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>B2B buyers in Gurgaon check your LinkedIn and website before taking your call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Retail customers in South Delhi won't visit your store without checking Instagram first</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm not saying traditional marketing doesn't work. Referrals are great. Word of mouth is powerful. But they're slow and unpredictable. Digital marketing gives you control. You can turn it on, turn it off, scale it up, scale it down. You're not dependent on someone remembering to refer you.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              How We Help Delhi Businesses Grow
            </h2>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <div className="flex items-start gap-4 mb-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Search Engine Optimization (SEO)</h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      When someone in Dwarka searches for your service, you should show up. When someone in Rohini looks for your product, you should be visible. That's what SEO does.
                    </p>
                  </div>
                </div>
                
                <div className="pl-12 space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">What we actually do:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Fix your website so Google can understand what you offer</li>
                      <li>• Create content targeting Delhi-specific searches</li>
                      <li>• Build your presence on Google My Business</li>
                      <li>• Get you listed in relevant directories and platforms</li>
                      <li>• Track rankings and adjust strategy monthly</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Case Example:</p>
                    <p className="text-sm text-muted-foreground">
                      A law firm in Dwarka was getting 3-4 inquiries per month. After 5 months of SEO work, they're now getting 25-30 qualified leads monthly. Same firm, same lawyers—just better visibility on Google.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <div className="flex items-start gap-4 mb-4">
                  <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Google Ads & Facebook Ads</h3>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      SEO takes time. Ads give you results immediately. You can start getting calls and inquiries within 48 hours of launching a campaign.
                    </p>
                  </div>
                </div>
                
                <div className="pl-12 space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">Our approach:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Target specific areas (Gurgaon, Noida, South Delhi, etc.)</li>
                      <li>• Write ads that speak to Delhi customers specifically</li>
                      <li>• Test multiple ad variations to find what works</li>
                      <li>• Optimize daily to reduce cost per lead</li>
                      <li>• Provide weekly reports showing exactly where money is going</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Case Example:</p>
                    <p className="text-sm text-muted-foreground">
                      An interior designer in Gurgaon was spending ₹80K/month on ads with minimal returns. We restructured the campaigns, improved targeting, and rewrote the ads. Now they spend ₹1.2L/month but generate ₹8-10L in project revenue monthly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Social Media Marketing</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Delhi's social media landscape is interesting. Instagram works great for B2C. LinkedIn is essential for B2B. Facebook still has reach for certain demographics. The key is knowing where your customers are and showing up there consistently.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-white mb-2">What we handle:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Content creation (posts, reels, stories)</li>
                      <li>• Community management (responding to comments and DMs)</li>
                      <li>• Influencer collaborations (when it makes sense)</li>
                      <li>• Social media advertising</li>
                      <li>• Monthly analytics and strategy adjustments</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <p className="text-sm font-semibold text-blue-400 mb-2">Case Example:</p>
                    <p className="text-sm text-muted-foreground">
                      A restaurant in Connaught Place had 8K Instagram followers but barely any foot traffic from social media. We changed their content strategy to focus on reels and stories. Within 4 months, 30-40% of their daily customers were coming from Instagram.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Trends */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Digital Marketing Trends in Delhi NCR
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">Voice Search is Growing Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  More Delhi residents are using voice search on their phones. "Ok Google, best CA near me" or "Alexa, find interior designers in Gurgaon." If your business isn't optimized for voice search, you're missing out on a growing segment.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">LinkedIn is Crucial for B2B</h3>
                <p className="text-muted-foreground leading-relaxed">
                  If you're selling to businesses in Gurgaon or Noida, LinkedIn is non-negotiable. Decision-makers check LinkedIn profiles before meetings. Companies with active LinkedIn presence get 3-5X more B2B inquiries than those without.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">Video Content Dominates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  YouTube Shorts, Instagram Reels, Facebook Videos—video content gets 10X more engagement than text or images. Delhi businesses using video marketing are seeing significantly better results than those sticking to static content.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-xl font-bold mb-3">Google My Business is Make or Break</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For local businesses in Delhi, your Google My Business listing is often the first thing customers see. Businesses with complete, optimized GMB profiles get 70% more location visits and 50% more website clicks than those with incomplete profiles.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Common Questions from Delhi Business Owners
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How much should a Delhi business invest in digital marketing?",
                  a: "It varies by industry and goals, but a general rule: invest 7-10% of your revenue in marketing. If you're doing ₹50L annually, that's ₹3.5-5L for the year. Start with ₹30-50K monthly and scale based on results. Delhi is competitive—underspending means losing to competitors who are investing properly."
                },
                {
                  q: "Do you work with businesses in Noida and Gurgaon too?",
                  a: "Absolutely. We consider the entire NCR as our primary market. Whether you're in Delhi, Noida, Gurgaon, Faridabad, or Ghaziabad, we understand the local dynamics and can help you grow."
                },
                {
                  q: "What's the difference between SEO and Google Ads?",
                  a: "SEO is long-term and organic. You don't pay for clicks, but it takes 3-6 months to see results. Google Ads is immediate—you can start getting calls within days, but you pay for every click. Smart businesses do both: ads for immediate results while SEO builds long-term presence."
                },
                {
                  q: "Can you help with both B2B and B2C marketing?",
                  a: "Yes. B2B and B2C require different strategies. B2B in Delhi often means LinkedIn, email marketing, and content marketing. B2C means Instagram, Facebook, and Google Ads. We handle both, but the approach is completely different."
                },
                {
                  q: "How do I know if digital marketing is working?",
                  a: "We track everything: website traffic, leads generated, cost per lead, conversion rates, and ROI. You'll get monthly reports showing exactly what's working and what's not. If something isn't performing, we adjust immediately."
                },
                {
                  q: "What if I've tried digital marketing before and it didn't work?",
                  a: "That's common. Usually, it's because of poor targeting, weak messaging, or inconsistent execution. We've helped many Delhi businesses who had bad experiences with other agencies. The key is having a clear strategy and sticking with it long enough to see results."
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
              Ready to Grow Your Delhi Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your goals and create a digital marketing strategy that actually works for your business.
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
