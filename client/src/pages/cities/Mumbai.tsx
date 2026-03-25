import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, ArrowRight, TrendingUp, AlertCircle, CheckCircle2, MapPin } from "lucide-react";
import { useState } from "react";

export default function Mumbai() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Digital Marketing Agency in Mumbai | Stop Losing to Your Competition"
        description="Mumbai moves fast. Your marketing needs to move faster. We help Mumbai businesses dominate their market with SEO, ads, and social media that actually works."
        canonical="https://dekhetrends.com/mumbai"
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
            <div className="flex items-center gap-2 text-primary mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-semibold">Digital Marketing in Mumbai</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
              Your Competitor in Andheri Just Hired a Marketing Agency. <span className="gradient-text">What Are You Doing?</span>
            </h1>

            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's be real: Mumbai doesn't wait for anyone. While you're "thinking about" digital marketing, three of your competitors are already ranking on Google, running profitable ad campaigns, and stealing your customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This isn't Delhi where you can take your time. This isn't Bangalore where everyone's still figuring things out. This is Mumbai. You're either growing or you're dying. There's no middle ground.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:8077583921">
                <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 8077583921
                </Button>
              </a>
              <Link href="/audit">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 border-primary/50 hover:bg-primary/10 font-semibold">
                  Get Free Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>500+ Mumbai Businesses Trust Us</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Results in 30-60 Days</span>
              </div>
            </div>
          </motion.div>

          {/* The Mumbai Problem */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              The Mumbai Business Problem Nobody Talks About
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A restaurant owner in Bandra told me something last month that stuck with me. He said, "I have the best biryani in Mumbai. Everyone who eats here says so. But the restaurant across the street—which honestly isn't even that good—is always packed. I don't get it."
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I checked. The other restaurant had 847 Google reviews. His place had 23. The other restaurant was running Instagram ads showing their dishes. His Instagram hadn't been updated in 4 months. The other restaurant showed up first when people searched "biryani near Bandra." His restaurant was on page 3.
              </p>

              <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 my-8">
                <p className="text-xl font-bold text-red-400 mb-3">Here's the brutal truth about Mumbai:</p>
                <p className="text-lg text-muted-foreground">
                  Having the best product doesn't matter if nobody knows you exist. In a city of 20 million people, being invisible is the same as being dead.
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                This isn't just about restaurants. I see this everywhere in Mumbai:
              </p>

              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Boutiques in Colaba</strong> with amazing designs but zero online presence while Myntra and Ajio eat their lunch</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Gyms in Powai</strong> struggling to fill slots while Cult Fit dominates because they actually know how to market</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">CA firms in Churchgate</strong> relying on referrals while younger firms with better digital presence steal their clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <span><strong className="text-white">Real estate agents in Thane</strong> watching leads go to aggregators because they don't show up on Google</span>
                </li>
              </ul>

              <p className="text-lg text-muted-foreground leading-relaxed">
                The common thread? They're all good at what they do. They're just terrible at letting people know about it.
              </p>
            </div>
          </div>

          {/* Why Digital Matters in Mumbai */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Why Digital Marketing Matters More in Mumbai Than Anywhere Else
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mumbai is different from every other Indian city. The competition is insane. The pace is relentless. And customers here have zero patience.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Think about it: When someone in Mumbai wants something, they Google it on their commute, make a decision by the time they reach office, and expect it delivered by evening. If you're not showing up in that Google search, you don't exist.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3">The Numbers Don't Lie</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 89% of Mumbai consumers search online before buying</li>
                    <li>• 76% won't scroll past the first page of Google</li>
                    <li>• 67% check Instagram before visiting a restaurant/store</li>
                    <li>• 54% will choose a competitor if you don't have reviews</li>
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                  <h3 className="text-xl font-bold mb-3">What This Means for You</h3>
                  <p className="text-muted-foreground">
                    If you're not ranking on Google, not active on social media, and don't have a steady stream of positive reviews, you're losing 8 out of 10 potential customers to competitors who are doing these things.
                  </p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                And here's the kicker: Your competitors aren't necessarily better than you. They're just more visible. That's it. That's the whole game.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              How We Help Mumbai Businesses Win
            </h2>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <TrendingUp className="w-7 h-7 text-primary" />
                  Local SEO for Mumbai
                </h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  We make sure when someone in Andheri searches for what you sell, YOU show up first. Not your competitor. You.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">Real example:</strong> A salon in Juhu was getting 2-3 walk-ins a day. After 3 months of local SEO work, they're now fully booked 2 weeks in advance. Same salon, same services—just better visibility.
                </p>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="text-sm font-semibold text-green-500">Average result: 300-500% increase in local search traffic within 6 months</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Google & Facebook Ads That Actually Work</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Mumbai is expensive. Your ad budget needs to work harder here than anywhere else. We don't waste a single rupee on vanity metrics.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">Real example:</strong> An e-commerce store in Mumbai was spending ₹1.5L/month on ads with a 1.8X return. We restructured everything. Now they spend ₹2L/month but get a 5.5X return. More profit, less stress.
                </p>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="text-sm font-semibold text-green-500">Average result: 4-6X return on ad spend after optimization</p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Instagram & Social Media for Mumbai's Fast-Paced Market</h3>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                  Mumbai's Instagram game is different. People here scroll fast, decide fast, and buy fast. Your content needs to stop them mid-scroll.
                </p>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-white">Real example:</strong> A boutique in Linking Road had 5K followers but barely any sales from Instagram. We changed their content strategy. Now they're doing ₹3-4L in monthly sales just from Instagram DMs.
                </p>
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                  <p className="text-sm font-semibold text-green-500">Average result: 6-10X increase in social media inquiries within 3 months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Trends in Mumbai */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Digital Trends Shaping Mumbai Right Now
            </h2>

            <div className="space-y-6 prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mumbai's digital landscape changes faster than anywhere else in India. Here's what's working right now:
              </p>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="text-xl font-bold mb-3">Hyperlocal Targeting is Everything</h3>
                  <p className="text-muted-foreground">
                    Someone in Borivali doesn't care about your Colaba store. Mumbai is massive. Smart businesses are running separate campaigns for different areas. A gym in Malad running ads only in Malad, Goregaon, and Kandivali sees 3X better results than city-wide campaigns.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="text-xl font-bold mb-3">Instagram Reels > Everything Else</h3>
                  <p className="text-muted-foreground">
                    Mumbai's young, mobile-first audience lives on Instagram Reels. Restaurants, fashion brands, and service businesses using Reels are seeing 10X more reach than static posts. If you're not on Reels, you're invisible to 70% of Mumbai.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="text-xl font-bold mb-3">Google Reviews = Trust Currency</h3>
                  <p className="text-muted-foreground">
                    Mumbai consumers are skeptical. They've been burned before. A business with 200+ positive Google reviews will get chosen over a competitor with better prices but only 20 reviews. Every. Single. Time.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card border border-accent/20">
                  <h3 className="text-xl font-bold mb-3">WhatsApp Business is Underrated</h3>
                  <p className="text-muted-foreground">
                    Mumbai businesses using WhatsApp Business for customer communication are seeing 40% higher conversion rates. People here prefer WhatsApp over email or phone calls. Meet them where they are.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
              Questions Mumbai Business Owners Ask Us
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "How much should I spend on digital marketing in Mumbai?",
                  a: "Depends on your industry and goals, but here's a rough guide: If you're doing ₹10L/month in revenue, invest at least ₹50K-1L in marketing. If you're doing ₹50L+, you should be spending ₹2-3L minimum. Mumbai is expensive, and your competitors are spending. You can't cheap out and expect to win."
                },
                {
                  q: "Can you guarantee first page rankings on Google?",
                  a: "Anyone who guarantees specific rankings is lying. What we CAN guarantee: We'll get you more visibility, more traffic, and more customers than you're getting now. That's what actually matters. Rankings are just a means to an end."
                },
                {
                  q: "How long before I see results?",
                  a: "Google Ads: 2-4 weeks. Social media: 4-8 weeks. SEO: 3-6 months. Anyone promising faster results is either using black-hat tactics or lying. Good marketing takes time, but it compounds."
                },
                {
                  q: "Do I need to be on every social media platform?",
                  a: "No. In Mumbai, Instagram and WhatsApp are king for B2C. LinkedIn for B2B. Facebook is dying for younger audiences but still works for 35+ demographics. Focus on where your customers actually are, not where you think you should be."
                },
                {
                  q: "What if my competitor is already dominating online?",
                  a: "Good. That means there's money to be made in your industry. We've helped dozens of Mumbai businesses outrank established competitors. It takes strategy, consistency, and budget—but it's absolutely doable."
                },
                {
                  q: "Can you work with businesses outside Mumbai?",
                  a: "Yes, but we specialize in Mumbai because we understand the market. The pace, the competition, the customer psychology—it's all different here. That local knowledge is our edge."
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
              Stop Losing to Your Competition
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every day you wait is another day your competitors are stealing your customers. Let's fix that.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:8077583921">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 8077583921
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
