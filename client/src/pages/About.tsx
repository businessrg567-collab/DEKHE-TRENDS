import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { StickyCallButton } from "@/components/StickyCallButton";
import { Phone, ArrowRight, TrendingDown, MessageSquareX, CreditCard, Target, Zap, LineChart, Users, Award, Calendar, CheckCircle2, XCircle, User, AlertTriangle } from "lucide-react";

export default function About() {
  return (
    <>
      <SEO 
        title="About Dekhe Trends - We Fix What's Not Working"
        description="We're not another marketing agency. We fix broken strategies, wasted budgets, and campaigns that don't convert. Real results, no fluff."
        canonical="https://dekhetrends.com/about"
      />
      
      <StickyCallButton />

      <div className="pt-24 pb-12 min-h-screen">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-32"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
              We're Not Another <br />
              <span className="gradient-text">Marketing Agency</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              We fix what's not working. No fluff. No vanity metrics. Just results.
            </p>
          </motion.div>

          {/* PROBLEM SECTION */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                What Most Businesses Struggle With
              </h2>
              <p className="text-xl text-muted-foreground">Sound familiar?</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingDown,
                  title: "No Leads",
                  description: "Spending on ads but phone isn't ringing"
                },
                {
                  icon: MessageSquareX,
                  title: "Confusing Messaging",
                  description: "Nobody understands what you actually do"
                },
                {
                  icon: CreditCard,
                  title: "Wasted Ad Spend",
                  description: "Burning money with zero return"
                }
              ].map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
                    <problem.icon className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* OUR APPROACH */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We don't focus on vanity metrics. We focus on results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Target, text: "Clear strategy" },
                { icon: Zap, text: "Simple execution" },
                { icon: LineChart, text: "Measurable growth" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-xl font-semibold flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-400" />
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* STORY SECTION */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Why We Started This
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-accent/20"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm font-semibold text-primary">2018</span>
                </div>
                <h3 className="text-xl font-bold mb-3">The Problem</h3>
                <p className="text-muted-foreground">
                  Hired an agency. Paid ₹4.5L. Got zero results. Just fancy reports and excuses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-accent/20"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm font-semibold text-primary">2019</span>
                </div>
                <h3 className="text-xl font-bold mb-3">The Learning</h3>
                <p className="text-muted-foreground">
                  Learned marketing ourselves. Made mistakes. Found what actually works for real businesses.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-primary mr-3" />
                  <span className="text-sm font-semibold text-primary">Today</span>
                </div>
                <h3 className="text-xl font-bold mb-3">The Mission</h3>
                <p className="text-muted-foreground">
                  Help businesses avoid what we went through. Real strategies. Real results.
                </p>
              </motion.div>
            </div>
          </div>

          {/* PROOF SECTION */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">150+</div>
                  <p className="text-xl text-muted-foreground">Clients Served</p>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">₹12Cr+</div>
                  <p className="text-xl text-muted-foreground">Revenue Generated</p>
                </div>
                <div>
                  <div className="text-6xl font-bold text-primary mb-3">4.9/5</div>
                  <p className="text-xl text-muted-foreground">Client Rating</p>
                </div>
              </div>
            </motion.div>
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

          {/* TEAM / HUMAN TOUCH */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Meet the Founder
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="p-8 rounded-2xl bg-card border border-accent/20">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Rahul Sharma</h3>
                      <p className="text-muted-foreground">Founder & Strategist</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    Started a furniture business. Got burned by agencies. Learned marketing the hard way.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Now helps businesses avoid the same mistakes. Still answers calls at 9 PM because results matter more than office hours.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                  <Users className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* DIFFERENTIATION SECTION */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Why We're Different
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  others: "Random posting",
                  we: "Strategic content"
                },
                {
                  others: "Vanity metrics",
                  we: "Real ROI"
                },
                {
                  others: "Generic templates",
                  we: "Custom strategies"
                },
                {
                  others: "Leads only",
                  we: "Conversions focus"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Others</p>
                      <p className="text-lg font-semibold">{item.others}</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20 flex items-center">
                    <CheckCircle2 className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">We</p>
                      <p className="text-lg font-semibold">{item.we}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Let's Fix What's Not Working
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop wasting money on marketing that doesn't deliver. Get a strategy that actually works.
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
