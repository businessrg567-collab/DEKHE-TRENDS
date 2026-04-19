import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, ArrowRight, Heart, Users, Target, Lightbulb, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO 
        title="About Dekhe Trends - Why We Started India's Most Honest Digital Marketing Agency"
        description="We started Dekhe Trends because we were tired of seeing Indian businesses get ripped off by agencies that overpromise and underdeliver. Here's our real story."
        canonical="https://dekhetrends.com/about"
      />
      
      <StickyCallButton />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-6 px-6 py-3 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-semibold text-sm">
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              The Honest Truth About Us
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
              We Started This Because We Got <span className="gradient-text">Completely Screwed</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Screwed by agencies that charged ₹2 lakhs and delivered nothing. Screwed by "experts" who had never actually grown a business. Screwed by an entire industry built on fancy presentations instead of real results.
            </p>
          </motion.div>

          {/* The Real Story */}
          <div className="prose prose-lg prose-invert max-w-none mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-lg text-muted-foreground leading-relaxed"
            >
              <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
                <p className="text-xl font-bold text-white mb-4">
                  Let me tell you exactly how Dekhe Trends started. No corporate BS. Just the truth.
                </p>
              </div>

              <p>
                It's 2018. I'm Rahul, and I'm running a small manufacturing business in Pune making custom furniture. Business is decent - we're making ₹8-10 lakhs monthly revenue, but I know we can do better.
              </p>

              <p>
                Everyone keeps telling me "You need digital marketing." So I start researching agencies. I find this company with a fancy website, case studies showing "500% growth," testimonials from "satisfied clients."
              </p>

              <p className="text-xl font-semibold text-white">
                They charge me ₹75,000 monthly. Promise to "transform my business" in 90 days.
              </p>

              <p>
                Month 1: They create social media accounts and post generic furniture photos. "Building brand awareness," they say.
              </p>

              <p>
                Month 2: They launch Google Ads. I'm getting clicks, but no inquiries. "The algorithm is learning," they explain.
              </p>

              <p>
                Month 3: Still no results. They show me reports with fancy graphs about "impressions" and "reach." But my phone isn't ringing.
              </p>

              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20 my-12">
                <p className="text-xl font-bold text-red-400 mb-4">After 6 months and ₹4.5 lakhs spent:</p>
                <ul className="space-y-2">
                  <li>• Total leads generated: 3</li>
                  <li>• Customers acquired: 0</li>
                  <li>• Revenue from digital marketing: ₹0</li>
                  <li>• My frustration level: Through the roof</li>
                </ul>
              </div>

              <p>
                When I confronted them, they blamed everything except themselves. "Your industry is competitive." "Your website needs work." "Digital marketing takes time."
              </p>

              <p className="text-xl font-semibold text-white">
                That's when I realized: They had no idea what they were doing. They were just following a generic playbook.
              </p>

              <p>
                I fired them and decided to learn digital marketing myself. Spent the next 8 months studying everything - Google Ads, Facebook Ads, SEO, content marketing, conversion optimization.
              </p>

              <p>
                I made mistakes. Lots of them. Burned through another ₹3 lakhs in ad spend learning what actually works for a furniture business in India.
              </p>

              <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 my-12">
                <p className="text-xl font-bold text-green-400 mb-4">But then something clicked:</p>
                <p>
                  I stopped trying to reach "everyone interested in furniture" and started targeting "people planning home renovations in Pune with ₹5+ lakh budgets."
                </p>
                <p className="mt-4">
                  I stopped posting pretty furniture photos and started sharing renovation tips and customer transformation stories.
                </p>
                <p className="mt-4">
                  I stopped competing on price and started positioning us as "custom furniture specialists for luxury homes."
                </p>
              </div>

              <p className="text-xl font-semibold text-white">
                Within 4 months, we went from ₹8 lakhs to ₹25 lakhs monthly revenue. All from digital marketing.
              </p>

              <p>
                Word spread. Other business owners started asking for help. "Can you do for my business what you did for yours?"
              </p>

              <p>
                I helped a friend's restaurant. Then a cousin's coaching institute. Then a neighbor's e-commerce store. Each time, I applied the same principle: understand the business first, then create marketing that actually makes sense.
              </p>

              <p>
                By 2019, I was spending more time helping other businesses with their marketing than running my own furniture business.
              </p>

              <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20 my-12">
                <p className="text-2xl font-bold text-primary mb-6">
                  That's when Dekhe Trends was born. Not as another "digital marketing agency," but as a promise:
                </p>
                <p className="text-lg">
                  "We'll never do to you what that agency did to me. We'll treat your business like our own. We'll be honest about what works and what doesn't. And if we can't help you succeed, we'll tell you upfront instead of taking your money."
                </p>
              </div>
            </motion.div>
          </div>

          {/* What We Learned */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
              What We Learned the Hard Way
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  lesson: "Most agencies have never actually run a business",
                  explanation: "They know theory, but they've never felt the stress of watching their own money disappear on ineffective marketing. We have. That changes everything."
                },
                {
                  lesson: "Generic strategies don't work for specific businesses",
                  explanation: "What works for a restaurant won't work for a coaching institute. What works in Mumbai won't work in Indore. Every business needs a custom approach."
                },
                {
                  lesson: "Vanity metrics are designed to hide poor performance",
                  explanation: "Impressions, reach, and engagement are meaningless if they don't translate to customers and revenue. We learned to focus only on metrics that matter."
                },
                {
                  lesson: "Most businesses don't need more traffic - they need better targeting",
                  explanation: "Getting 10,000 random visitors is worthless. Getting 100 visitors who are actually interested in buying is gold."
                },
                {
                  lesson: "Honesty builds better relationships than hype",
                  explanation: "Clients appreciate transparency more than false promises. When we're honest about challenges, clients trust us more with solutions."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{item.lesson}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.explanation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Mission */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              Our Mission (The Real One)
            </h2>
            
            <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center">
              <p className="text-2xl md:text-3xl font-bold mb-8 leading-relaxed">
                To help Indian businesses stop wasting money on marketing that doesn't work and start building systems that actually generate customers and revenue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h4 className="text-xl font-bold mb-4">What We Do</h4>
                  <p className="text-muted-foreground">Create marketing strategies that actually generate customers, not just clicks and impressions.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">How We Do It</h4>
                  <p className="text-muted-foreground">By understanding your business first, then creating custom marketing that makes sense for your specific situation.</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4">Why We Do It</h4>
                  <p className="text-muted-foreground">Because we've been where you are, and we know how frustrating it is to invest in marketing and get nothing back.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Believe */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12 text-center">
              What We Actually Believe
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Honesty Over Everything",
                  description: "If your product isn't ready for marketing, we'll tell you. If your budget is too small to see results, we'll be upfront. If we can't help you, we'll refer you to someone who can. Your success matters more than our revenue."
                },
                {
                  icon: Target,
                  title: "Results Are All That Matter",
                  description: "We don't care about awards, recognition, or industry praise. We care about one thing: Are our clients making more money than they're spending on marketing? Everything else is just noise."
                },
                {
                  icon: Users,
                  title: "Small Teams, Personal Attention",
                  description: "We're not trying to be the biggest agency in India. We're trying to be the most effective. That means working with fewer clients and giving each one the attention they deserve."
                },
                {
                  icon: Lightbulb,
                  title: "No Jargon, No Confusion",
                  description: "Marketing isn't rocket science. It's been made complicated by people trying to sound smart. We explain everything in simple terms because if you don't understand what we're doing, how can you trust us?"
                }
              ].map((belief, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-accent/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <belief.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{belief.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{belief.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Who We Work With */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              Who We Actually Work With
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              We're not for everyone. Here's who we work best with (and who we don't).
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-3" />
                  Perfect Fit Clients
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Business owners who care more about results than looking impressive</li>
                  <li>• Companies willing to invest ₹50,000+ monthly in marketing (including our fees)</li>
                  <li>• Businesses that have been burned by agencies before and want honesty</li>
                  <li>• Owners who understand that good marketing takes 2-3 months to show results</li>
                  <li>• Companies with products/services people actually want to buy</li>
                  <li>• Businesses ready to make changes based on data and feedback</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-red-500/10 border border-red-500/20">
                <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Not a Good Fit
                </h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li>• Businesses expecting overnight miracles or viral success</li>
                  <li>• Companies with budgets under ₹25,000 monthly (not enough to see results)</li>
                  <li>• Owners who want to micromanage every post and ad</li>
                  <li>• Businesses in illegal, adult, or gambling industries</li>
                  <li>• Companies with fundamental product or service problems</li>
                  <li>• Owners who just want someone to "post on social media"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Team Reality */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              Meet the Team (No Corporate BS)
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              No stock photos. No fake bios. Just real people who are genuinely good at what they do.
            </p>

            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Rahul Sharma - Founder & Strategy</h3>
                <p className="text-muted-foreground mb-4">
                  The guy who got screwed by agencies and decided to do something about it. Started with a furniture business, learned marketing the hard way, now helps other businesses avoid the same mistakes.
                </p>
                <p className="text-muted-foreground">
                  Still answers client calls at 9 PM because he can't help himself. Has an unhealthy obsession with conversion rates and gets genuinely excited when a client's revenue increases. Drinks too much coffee.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Priya Mehta - Content & SEO Lead</h3>
                <p className="text-muted-foreground mb-4">
                  Former journalist who got tired of writing fluff pieces that nobody read. Joined us because she wanted to write content that actually helps businesses grow.
                </p>
                <p className="text-muted-foreground">
                  Has an uncanny ability to spot keyword stuffing from a mile away. Obsessed with Google algorithm updates. Can write compelling content about the most boring industries. Somehow makes SEO interesting.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Arjun Patel - Ads Specialist</h3>
                <p className="text-muted-foreground mb-4">
                  Spent 4 years at a big agency managing ₹50+ crore in ad spend before realizing he hated the corporate politics. Joined us because he wanted to actually help businesses instead of just hitting arbitrary KPIs.
                </p>
                <p className="text-muted-foreground">
                  Has a weird talent for writing ad copy that converts. Can spot a poorly targeted campaign in seconds. Gets genuinely angry when he sees businesses wasting money on bad ads.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">Sneha Gupta - Social Media & Design</h3>
                <p className="text-muted-foreground mb-4">
                  Started as a freelance designer, joined us full-time because she was tired of clients who wanted "something viral" without understanding their audience.
                </p>
                <p className="text-muted-foreground">
                  Creates social media content that actually drives business results, not just likes. Has strong opinions about design trends and isn't afraid to tell clients when their ideas won't work.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-accent/20">
                <h3 className="text-2xl font-bold mb-4">The Extended Team</h3>
                <p className="text-muted-foreground mb-4">
                  We work with a network of freelancers and specialists - developers, video editors, copywriters, and industry experts. All of them are business owners themselves, so they understand what you're going through.
                </p>
                <p className="text-muted-foreground">
                  No junior account managers. No offshore teams. No people who've never actually run a business. Just experienced professionals who care about results.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-center">
              How We're Different
            </h2>
            
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">We Don't Take Every Client</h3>
                  <p className="text-muted-foreground mb-4">
                    Big agencies say yes to everyone because they need to hit revenue targets. We say no to clients we can't help because we'd rather have a smaller team of successful clients than a large team of frustrated ones.
                  </p>
                  <p className="text-muted-foreground">
                    If your budget is too small, if your expectations are unrealistic, or if we don't think we can help you succeed, we'll tell you upfront and refer you to someone who might be a better fit.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">~30</div>
                    <p className="text-muted-foreground">Active clients at any time</p>
                    <p className="text-sm text-muted-foreground mt-2">(Most agencies have 100+)</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">90 Days</div>
                    <p className="text-muted-foreground">ROI guarantee period</p>
                    <p className="text-sm text-muted-foreground mt-2">No positive ROI? We work for free.</p>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">We Put Our Money Where Our Mouth Is</h3>
                  <p className="text-muted-foreground mb-4">
                    If we don't generate positive ROI within 90 days, we'll work for free until we do. We're that confident in our ability to help businesses grow.
                  </p>
                  <p className="text-muted-foreground">
                    How many agencies offer that guarantee? Most won't even commit to specific results because they know their strategies don't actually work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-20">
            <div className="p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 text-center">
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                Why Should You Work With Us?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                Because we've been exactly where you are. We know what it's like to invest in marketing and pray it works. We know the stress of watching your ad budget disappear with nothing to show for it.
              </p>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                We know the frustration of agencies that speak in jargon, hide behind vanity metrics, and seem more interested in impressing you than helping you.
              </p>
              <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                We're not perfect. We make mistakes. But when we do, we own up to it, fix it fast, and make sure it doesn't happen again. That's the difference between us and everyone else.
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
                    Get Free Strategy Audit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="text-center p-8 rounded-2xl bg-card/50 border border-accent/20">
            <p className="text-lg text-muted-foreground italic mb-4">
              P.S. - If you've read this far, you're probably the kind of business owner we love working with.
            </p>
            <p className="text-lg text-muted-foreground italic">
              Someone who actually cares about their business and isn't just looking for a quick fix. Someone who values honesty over hype. Let's talk.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
