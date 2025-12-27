import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Cpu, CheckCircle2, ArrowRight, Zap, TrendingUp, Users, Target, BarChart3, Globe, Award, Settings, Rocket } from "lucide-react";

export default function DigitalTransformation() {
  return (
    <>
      <SEO
        title="Digital Transformation Consulting - Modernize Your Business"
        description="Strategic digital transformation consulting that modernizes operations, improves customer experience, and drives growth through technology adoption."
        keywords="digital transformation, digital strategy, business modernization, technology adoption, digital operations, customer experience transformation, digital innovation"
      />
      
      <StructuredData type="Service" data={{ name: "Digital Transformation", description: "Strategic consulting that modernizes businesses through technology and digital operations", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Digital Consulting" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Cpu className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Modernize & Scale</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Digital <span className="gradient-text">Transformation</span> That Drives Growth
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Modernize your business through strategic digital transformation. We help traditional businesses adopt digital technologies, optimize operations, and compete in the digital economy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Transformation Roadmap <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Transformation Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Digital Strategy Development", description: "Comprehensive digital strategies aligned with business goals. We assess current state, define future vision, and create roadmaps that guide transformation initiatives." },
                  { icon: Users, title: "Customer Experience Transformation", description: "Reimagine customer experiences for the digital age. We design omnichannel experiences, implement digital touchpoints, and optimize customer journeys." },
                  { icon: Settings, title: "Operations Digitization", description: "Modernize operations through automation, workflow optimization, and digital tools. We eliminate manual processes and increase operational efficiency." },
                  { icon: BarChart3, title: "Data & Analytics Implementation", description: "Build data infrastructure and analytics capabilities. We implement systems that collect, analyze, and activate data for better decision-making." },
                  { icon: Globe, title: "Digital Marketing Transformation", description: "Shift from traditional to digital marketing. We build digital marketing capabilities, implement marketing technology, and train teams." },
                  { icon: Rocket, title: "E-commerce Implementation", description: "Launch or optimize e-commerce operations. We design platforms, implement technology, and build capabilities for online selling." },
                  { icon: Zap, title: "Technology Stack Modernization", description: "Upgrade legacy systems to modern technology. We assess current tech, recommend improvements, and manage implementation." },
                  { icon: TrendingUp, title: "Digital Business Models", description: "Develop new digital revenue streams. We identify opportunities for subscription models, digital products, or platform businesses." },
                  { icon: Award, title: "Change Management", description: "Manage organizational change that accompanies transformation. We ensure adoption, train teams, and build digital culture." },
                  { icon: Cpu, title: "Innovation Programs", description: "Build capabilities for continuous innovation. We establish processes, tools, and culture that enable ongoing digital evolution." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Digital Transformation is Essential</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Digital transformation isn't optional anymore—it's survival. Businesses that fail to digitize face declining relevance, shrinking margins, and eventual obsolescence. Digital-native competitors operate more efficiently, serve customers better, and grow faster. Traditional businesses must transform or be disrupted. But transformation isn't just about technology—it's about reimagining business models, operations, and customer experiences for the digital age. Successful transformation requires strategic vision, careful planning, and expert execution. We guide businesses through transformation journeys that modernize operations while maintaining stability.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Digital Imperative</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Customer expectations have fundamentally changed. Modern customers expect seamless digital experiences—mobile apps, online ordering, instant support, personalized recommendations. Businesses that can't deliver digital experiences lose customers to competitors who can. Digital isn't a channel anymore—it's the primary way customers interact with businesses.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Operational efficiency requires digital tools. Manual processes are slow, error-prone, and expensive. Digital automation increases speed, reduces costs, and improves accuracy. Businesses operating with legacy systems and manual workflows can't compete with digitally-optimized competitors on cost or speed.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Data-driven decision making is the new competitive advantage. Digital businesses collect data from every interaction, analyze patterns, and optimize continuously. Traditional businesses making decisions based on intuition and quarterly reports can't match the agility and precision of data-driven competitors.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  New business models enabled by digital technology create disruption. Subscription models, marketplaces, and platform businesses leverage digital technology to scale rapidly with minimal marginal costs. Traditional transaction-based businesses struggle to compete with these scalable digital models.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Digital Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Successful transformation starts with clear strategy. Random technology adoption without strategic direction wastes resources and creates chaos. We develop comprehensive digital strategies that align transformation with business goals.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We assess current digital maturity across multiple dimensions—customer experience, operations, technology, data, culture. Assessment reveals strengths to leverage and gaps to address. We benchmark against competitors and industry leaders to understand relative position.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define future vision—what does success look like? How will you compete digitally? What capabilities are required? Vision provides direction and inspires teams. We ensure vision is ambitious yet achievable, stretching the organization without breaking it.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create detailed transformation roadmaps sequencing initiatives over 12-36 months. Roadmaps prioritize based on impact, feasibility, and dependencies. We identify quick wins that build momentum and foundational initiatives that enable future progress.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish governance structures and success metrics. Who owns transformation? How are decisions made? What metrics indicate progress? Clear governance and measurement ensure accountability and enable course correction.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Experience Transformation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Digital transformation must start with customers. Technology for technology's sake adds complexity without value. We reimagine customer experiences to leverage digital capabilities while solving real customer needs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We map current customer journeys identifying friction points and opportunities. Where do customers struggle? What manual processes frustrate them? What digital capabilities would add value? Journey mapping reveals transformation priorities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design future-state experiences leveraging digital touchpoints. Mobile apps that enable self-service. Chatbots that provide instant support. Personalization engines that recommend relevant products. We design experiences that are genuinely better, not just digital versions of analog processes.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement omnichannel strategies that provide seamless experiences across touchpoints. Customers start transactions on mobile, continue on desktop, and complete in-store. Omnichannel requires integrated systems and unified data—we design architectures that enable true omnichannel.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We measure customer experience improvements through satisfaction scores, NPS, and behavioral metrics. We continuously optimize based on data and feedback. Digital enables rapid iteration—we build cultures of continuous improvement.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Operations Digitization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Operational efficiency drives profitability. Digital tools automate manual work, eliminate errors, and accelerate processes. We systematically digitize operations to reduce costs and increase capacity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify automation opportunities—repetitive tasks, data entry, report generation, approval workflows. We implement RPA (robotic process automation), workflow automation, and AI-powered tools that handle routine work. Automation frees employees for higher-value activities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We digitize paper-based processes. Documents become digital, signatures become electronic, filing cabinets become cloud storage. Digital documents are searchable, shareable, and secure. Paperless operations are faster and cheaper.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement collaboration tools that enable distributed work. Cloud-based project management, video conferencing, and shared workspaces allow teams to collaborate effectively regardless of location. Digital collaboration tools became essential during COVID and remain valuable for hybrid work.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We optimize supply chains through digital visibility and automation. Real-time tracking, automated ordering, and predictive analytics improve efficiency and reduce costs. Digital supply chains are more resilient and responsive.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Data & Analytics Capabilities</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Data is the fuel of digital business. We build data infrastructure and analytics capabilities that enable data-driven decision making.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement data collection systems that capture interactions across touchpoints. Website analytics, CRM systems, transaction databases, and IoT sensors all generate valuable data. We ensure data is captured consistently and stored accessibly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build data warehouses and lakes that consolidate data from disparate sources. Unified data enables comprehensive analysis impossible with siloed systems. We implement modern data architectures that scale and perform.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop analytics capabilities—dashboards, reports, and self-service tools that make data accessible to decision makers. We implement predictive analytics and machine learning models that forecast outcomes and recommend actions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish data governance ensuring quality, security, and compliance. We define data ownership, establish quality standards, and implement security controls. Good governance makes data trustworthy and usable.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Technology Modernization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Legacy technology constrains transformation. Old systems are inflexible, expensive to maintain, and lack modern capabilities. We modernize technology stacks to enable digital business.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We assess current technology identifying technical debt, security risks, and capability gaps. We prioritize modernization based on business impact and technical risk. Not everything needs replacing immediately—we focus on highest-priority systems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We recommend modern alternatives—cloud platforms, SaaS applications, and API-based architectures. Modern technology is more flexible, scalable, and cost-effective than legacy systems. We help select appropriate solutions and manage implementation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We migrate data and processes carefully to minimize disruption. We plan migrations in phases, test thoroughly, and maintain fallback options. We ensure business continuity throughout technology transitions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish modern development practices—agile methodologies, DevOps, continuous integration/deployment. Modern practices enable faster innovation and more reliable systems.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Change Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technology is the easy part of transformation. People and culture are the hard parts. We manage organizational change to ensure transformation succeeds.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop change strategies addressing resistance, building buy-in, and managing transitions. We identify stakeholders, understand concerns, and develop communication plans that build support.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We train teams on new tools, processes, and ways of working. Training ensures people can actually use new capabilities. We provide multiple learning formats—workshops, documentation, videos, coaching—to accommodate different learning styles.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We build digital culture—mindsets and behaviors that embrace change, experimentation, and continuous learning. Culture change is slowest but most important aspect of transformation. We work with leadership to model and reinforce desired behaviors.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We celebrate wins and learn from failures. Transformation is long and difficult. Celebrating progress maintains momentum. Learning from failures prevents repeated mistakes. We create feedback loops that enable continuous improvement.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Traditional Retailer's Digital Transformation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A 50-year-old retail chain was losing customers to online competitors. They had 200 physical stores but minimal digital presence. Sales declined 15% annually. Leadership recognized need for transformation but didn't know where to start.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We developed comprehensive transformation strategy: launched e-commerce platform, implemented omnichannel inventory system, digitized in-store experience with mobile POS and clienteling tools, built customer data platform, trained staff on digital tools, and launched digital marketing programs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 24 months: Online sales grew from 2% to 35% of revenue. Overall revenue grew 25% reversing decline. Customer satisfaction increased 40%. Operating costs decreased 15% through automation. Digital transformation saved the business and positioned it for continued growth.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Transformation Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Digital Maturity Assessment:</strong> Comprehensive evaluation of current digital capabilities</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Transformation Strategy:</strong> Vision, roadmap, and implementation plan</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Technology Recommendations:</strong> Specific platform and tool selections</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Implementation Support:</strong> Project management and technical guidance</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Change Management:</strong> Training, communication, and adoption programs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Ongoing Advisory:</strong> Continued strategic guidance through transformation</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Digital transformation is multi-year journey. Initial strategy development takes 6-8 weeks. Implementation timelines vary dramatically based on scope—simple initiatives take months while comprehensive transformations take 2-3 years. Investment ranges from $50K for strategy development to $500K+ for comprehensive transformation programs including implementation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Transformation delivers compounding returns. Early initiatives generate quick wins and build momentum. Later initiatives leverage earlier investments, accelerating impact. Most clients see positive ROI within 12-18 months as efficiency gains and revenue growth offset transformation costs. Long-term value is substantial—transformed businesses grow faster, operate more efficiently, and compete more effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free digital maturity assessment. We'll evaluate your current state and identify transformation opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Assessment <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

