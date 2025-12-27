import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Palette, CheckCircle2, ArrowRight, Target, Heart, Eye, MessageCircle, Award, Sparkles, Users, TrendingUp, Shield } from "lucide-react";

export default function BrandStrategy() {
  return (
    <>
      <SEO
        title="Brand Strategy & Positioning - Build a Brand That Resonates"
        description="Comprehensive brand strategy services including positioning, messaging, identity development, and brand architecture. Create a brand that stands out and drives loyalty."
        keywords="brand strategy, brand positioning, brand identity, brand messaging, brand architecture, rebranding, brand development"
      />
      
      <StructuredData
        type="Service"
        data={{
          name: "Brand Strategy & Positioning",
          description: "Comprehensive brand strategy development including positioning, messaging, and identity",
          provider: {
            "@type": "Organization",
            name: "Dekhe Trends"
          },
          serviceType: "Brand Consulting"
        }}
      />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Palette className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Build Memorable Brands</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Brand <span className="gradient-text">Strategy</span> That Creates Connection
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Build a brand that resonates deeply with your audience. We develop comprehensive brand strategies that differentiate you in crowded markets and create lasting emotional connections.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                      Start Brand Strategy <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Brand Development</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Brand Positioning", description: "Define your unique market position and competitive differentiation. We identify white space in your market and craft positioning that sets you apart from competitors while resonating with your target audience." },
                  { icon: MessageCircle, title: "Messaging Framework", description: "Develop clear, compelling messaging that communicates your value proposition. We create messaging hierarchies, key messages, and brand voice guidelines that ensure consistency across all touchpoints." },
                  { icon: Heart, title: "Brand Purpose & Values", description: "Articulate why your brand exists beyond profit. We help you define authentic purpose and values that guide decisions, attract aligned customers, and inspire your team." },
                  { icon: Eye, title: "Visual Identity System", description: "Create cohesive visual systems that express your brand personality. From logo design to color palettes, typography, and imagery guidelines—we build identities that are distinctive and ownable." },
                  { icon: Users, title: "Audience Segmentation", description: "Identify and profile your ideal customers with precision. We go beyond demographics to understand psychographics, behaviors, motivations, and decision-making patterns." },
                  { icon: Award, title: "Brand Architecture", description: "Design optimal brand structures for multi-product portfolios. We determine whether to use branded house, house of brands, or hybrid approaches based on your strategic goals." },
                  { icon: Sparkles, title: "Brand Experience Design", description: "Map and optimize every customer touchpoint. We design experiences that reinforce brand promises and create memorable moments that drive loyalty and advocacy." },
                  { icon: Shield, title: "Brand Guidelines", description: "Document comprehensive brand standards that ensure consistency. We create detailed guidelines covering visual identity, messaging, tone of voice, and brand applications." },
                  { icon: TrendingUp, title: "Brand Evolution Strategy", description: "Plan how your brand will evolve over time. We create roadmaps for brand refreshes, extensions, and adaptations that keep you relevant without losing equity." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Brand Strategy Matters</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In commoditized markets, brand is the only sustainable competitive advantage. Products can be copied, prices can be undercut, and features can be replicated. But a strong brand—one that creates emotional connections and stands for something meaningful—cannot be duplicated. Brand strategy is the foundation that determines whether you compete on price or command premium positioning.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Cost of Weak Brand Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Most businesses operate without clear brand strategy. They have logos and color schemes, but lack coherent positioning, differentiated messaging, or authentic purpose. This creates multiple problems. Marketing becomes inconsistent as different team members interpret the brand differently. Customer acquisition costs rise because generic positioning fails to resonate. Price pressure intensifies because undifferentiated brands compete on price. Employee retention suffers because teams lack inspiring purpose.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We've seen companies waste millions on marketing campaigns that contradict their brand positioning, product launches that dilute brand equity, and rebrands that alienate existing customers—all because they lacked strategic brand foundations. Strong brand strategy prevents these expensive mistakes by providing clear guardrails for all brand decisions.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Positioning: Finding Your Unique Space</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Positioning determines how you're perceived relative to competitors. Effective positioning occupies a distinctive space in customers' minds—a space that's valuable, defensible, and aligned with your capabilities. Poor positioning tries to be everything to everyone, resulting in being nothing to anyone.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our positioning process starts with competitive analysis. We map how competitors position themselves, identify overcrowded positions and open territories, and assess which positions are most valuable to target customers. We analyze your unique strengths, capabilities, and differentiators to find positioning that's both distinctive and credible.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We test positioning concepts with target audiences to validate resonance. The best positioning isn't what you want to claim—it's what customers will believe and value. We iterate until we find positioning that's ownable, meaningful, and differentiating.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  A SaaS client was positioned as "the most feature-rich platform" in their category. This positioning failed because customers didn't want more features—they wanted simpler solutions. We repositioned them as "the only platform that works out of the box" emphasizing ease over capability. This positioning shift increased trial-to-paid conversion by 67% and reduced churn by 34%.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Messaging Framework: Communicating Your Value</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Positioning determines what you stand for. Messaging determines how you communicate it. A messaging framework provides structure for all brand communications, ensuring consistency while allowing flexibility for different audiences and contexts.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop messaging hierarchies that cascade from high-level brand promise through key pillars to specific proof points. This structure ensures all communications ladder up to core brand positioning while providing tactical flexibility for different channels and campaigns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our frameworks include value proposition statements, elevator pitches, key messages for different audiences, supporting evidence, and response to common objections. We provide messaging for every stage of the customer journey from initial awareness through consideration to purchase and advocacy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also define brand voice and tone guidelines. Voice is your brand's personality—is it authoritative or approachable, serious or playful, formal or casual? Tone is how voice adapts to different contexts—you might be empathetic in customer service but confident in sales. Clear voice and tone guidelines ensure consistency across all communications.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Purpose & Values: Standing for Something</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern consumers, especially younger demographics, expect brands to stand for something beyond profit. Purpose-driven brands grow 2x faster than competitors and command premium pricing. But purpose must be authentic—performative purpose backfires spectacularly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We help you articulate authentic purpose rooted in your company's origins, founder motivations, and actual capabilities. Purpose isn't invented in workshops—it's discovered through deep examination of why your company truly exists and what positive impact it can credibly create.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define core values that guide decision-making and shape culture. Values must be specific enough to be actionable and distinctive enough to differentiate. Generic values like "integrity" or "excellence" mean nothing because every company claims them. Distinctive values like Patagonia's "We're in business to save our home planet" or Netflix's "Freedom and Responsibility" actually guide decisions and shape behavior.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Purpose and values aren't just external marketing—they're internal culture tools. They attract aligned employees, guide difficult decisions, and create cohesion. When everyone understands what the brand stands for, decisions become easier and execution becomes more consistent.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Visual Identity: Making Your Brand Recognizable</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Visual identity is how your brand looks. While not the entirety of brand strategy, visual identity is critical because humans process visual information 60,000x faster than text. Your visual identity must express brand personality, support positioning, and create instant recognition.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop comprehensive visual systems, not just logos. This includes logo design and variations, color palettes with psychological rationale, typography systems, iconography, photography styles, illustration approaches, and layout principles. Every visual element reinforces brand personality and positioning.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our visual identities are designed for flexibility and scalability. They work across all touchpoints from tiny mobile screens to massive billboards, from digital applications to physical packaging. They're distinctive enough to own but flexible enough to evolve.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We consider cultural context and global applicability. Colors, symbols, and imagery carry different meanings in different cultures. A visual identity that works in North America might fail in Asia. We ensure your visual system works across all markets you serve or plan to enter.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Audience Segmentation: Knowing Who You Serve</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Effective brand strategy requires deep audience understanding. Not just demographics (age, income, location) but psychographics (values, motivations, aspirations), behaviors (how they make decisions, what influences them), and pain points (what problems they're trying to solve).
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop detailed audience personas that bring target customers to life. These personas include demographics, psychographics, behaviors, goals, challenges, information sources, and decision criteria. They help everyone on your team understand who they're serving and what matters to them.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We segment audiences based on needs and behaviors, not just demographics. Two people with identical demographics might have completely different needs and respond to different messaging. Behavioral segmentation reveals these differences and enables more targeted, effective communication.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We prioritize segments based on attractiveness (size, growth, profitability) and fit (alignment with your capabilities and positioning). Not all segments are equally valuable. Focus creates stronger brands than trying to serve everyone.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Architecture: Organizing Your Portfolio</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Companies with multiple products or services need brand architecture—the organizing structure that defines relationships between corporate brand and product brands. Poor architecture creates confusion, dilutes equity, and wastes marketing resources.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We evaluate three primary architecture models. Branded house (like Google: Google Search, Google Maps, Google Drive) leverages master brand equity across all products. House of brands (like Procter & Gamble: Tide, Gillette, Pampers) creates independent brands that don't reference the parent. Hybrid approaches (like Marriott: Marriott Hotels, Courtyard by Marriott, Ritz-Carlton) balance master brand leverage with product differentiation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Architecture choice depends on multiple factors: how similar or different your products are, whether master brand equity helps or hurts product positioning, whether you're targeting same or different audiences, and your strategic goals for growth and acquisitions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design architecture that maximizes efficiency (leveraging existing equity rather than building from scratch) while maintaining clarity (ensuring customers understand what each brand offers and how they relate).
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Experience: Delivering on Your Promise</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Brand isn't what you say—it's what customers experience. Every interaction shapes brand perception. Inconsistent experiences erode brand equity even if messaging is perfect. Brand experience design ensures every touchpoint reinforces brand promises.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We map complete customer journeys identifying all touchpoints from initial awareness through purchase and beyond. For each touchpoint, we define desired customer perceptions, required brand behaviors, and specific experience standards.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify moments of truth—critical interactions that disproportionately shape brand perception. A luxury hotel might identify check-in, room entry, and checkout as moments of truth requiring exceptional execution. We design these moments to create memorable positive experiences that reinforce brand positioning.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We also identify and fix experience gaps—places where actual experience contradicts brand promises. If your brand promises "effortless" but your checkout process requires 15 steps, that gap destroys credibility. We systematically eliminate contradictions between brand promise and customer reality.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Guidelines: Ensuring Consistency</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Brand guidelines document how to apply your brand across all contexts. Without clear guidelines, brand execution becomes inconsistent as different people interpret brand standards differently. Guidelines ensure everyone—employees, agencies, partners—applies the brand correctly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create comprehensive guidelines covering visual identity (logo usage, colors, typography, imagery), messaging (voice, tone, key messages), and brand behaviors (how the brand acts in different contexts). Guidelines balance specificity (clear enough to ensure consistency) with flexibility (adaptable enough for different applications).
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Modern guidelines are digital, searchable, and regularly updated rather than static PDFs. We create online brand portals that provide easy access to assets, examples, and guidance. We include good and bad examples showing correct and incorrect applications.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide training on brand guidelines to ensure understanding and adoption. Guidelines only work if people use them. Training ensures everyone understands not just the rules but the strategic rationale behind them.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Evolution: Staying Relevant</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Brands must evolve to stay relevant. Markets change, competitors emerge, customer preferences shift, and cultural contexts evolve. Brands that fail to adapt become obsolete. But evolution must be strategic—changing too much destroys equity while changing too little creates irrelevance.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create brand evolution roadmaps that plan how brands will adapt over time. This includes identifying signals that indicate need for refresh, defining what elements are sacred (never change) versus flexible (can evolve), and planning evolution timelines.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We distinguish between brand refresh (updating execution while maintaining core positioning) and rebrand (fundamental repositioning). Refresh updates visual identity, messaging, and experience to feel contemporary while maintaining brand essence. Rebrand changes core positioning, usually in response to major strategic shifts or market changes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We plan brand extensions—how to leverage brand equity into new categories or audiences. Extensions must fit brand positioning and values while offering genuine customer value. Poor extensions (like Colgate frozen dinners or Harley-Davidson perfume) damage master brand equity.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Repositioning for 10x Growth</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A B2B software company approached us stuck at $10M ARR. They'd plateaued for three years despite strong product and satisfied customers. Their problem wasn't product—it was brand. They were positioned as "enterprise software" targeting IT departments, but their product actually solved marketing problems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We repositioned them from IT tool to marketing platform, shifting target audience from IT managers to CMOs. We rebuilt messaging around marketing outcomes rather than technical capabilities. We redesigned visual identity to feel creative rather than corporate. We renamed the product to emphasize marketing value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results were dramatic. Within 18 months, ARR grew from $10M to $45M. Average deal size increased 3x because marketing budgets exceeded IT budgets. Sales cycles shortened by 40% because marketing buyers made faster decisions than IT committees. The company raised Series B at $200M valuation and is now approaching $100M ARR.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  This case illustrates brand strategy's power. Same product, same team, same market—but different positioning unlocked exponential growth by targeting the right audience with the right message.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Brand Strategy Deliverables</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our brand strategy engagements deliver comprehensive documentation:
                </p>

                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Brand Strategy Document:</strong> Complete strategy including positioning, purpose, values, and strategic rationale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Messaging Framework:</strong> Hierarchical messaging structure with key messages for all audiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Visual Identity System:</strong> Complete visual standards including logo, colors, typography, and imagery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Audience Personas:</strong> Detailed profiles of target customer segments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Brand Guidelines:</strong> Comprehensive application standards for all brand elements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Experience Maps:</strong> Customer journey documentation with touchpoint standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <span className="text-muted-foreground"><strong>Implementation Roadmap:</strong> Phased plan for rolling out new brand strategy</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Timeline and Investment</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Brand strategy development typically takes 8-12 weeks from kickoff to final delivery. The process includes stakeholder interviews, competitive analysis, audience research, strategy development, testing, and refinement. Investment ranges from $50K for focused positioning projects to $200K+ for complete brand development including visual identity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  This investment creates lasting value. Strong brand strategy provides foundation for all marketing, guides product development, shapes company culture, and creates competitive advantage that compounds over years. It's not an expense—it's strategic infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                Ready to Build a Powerful Brand?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start with a free brand audit. We'll assess your current brand positioning and identify opportunities for differentiation.
              </p>
              <Link href="/audit">
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">
                  Get Free Brand Audit <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

