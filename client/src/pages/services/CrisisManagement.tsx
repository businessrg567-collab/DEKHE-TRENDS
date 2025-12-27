import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Shield, CheckCircle2, ArrowRight, AlertTriangle, MessageCircle, TrendingUp, Users, Eye, Zap, Target, Award, Clock } from "lucide-react";

export default function CrisisManagement() {
  return (
    <>
      <SEO
        title="Crisis Management & Reputation Protection - Protect Your Brand"
        description="Strategic crisis management and reputation protection services. Prepare for, respond to, and recover from brand crises that threaten reputation and business."
        keywords="crisis management, reputation management, crisis communication, brand protection, crisis response, reputation repair, PR crisis, crisis planning"
      />
      
      <StructuredData type="Service" data={{ name: "Crisis Management & Reputation Protection", description: "Strategic crisis management that protects brand reputation during challenging times", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Crisis Management" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Protect Your Brand</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Crisis <span className="gradient-text">Management</span> That Protects Reputation
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Prepare for, respond to, and recover from brand crises. Expert crisis management protects reputation, minimizes damage, and enables faster recovery when challenges arise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Crisis Plan <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Crisis Management System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: AlertTriangle, title: "Crisis Preparedness", description: "Comprehensive crisis planning that prepares organizations for potential issues. We identify risks, develop response protocols, and train teams before crises occur." },
                  { icon: Eye, title: "Reputation Monitoring", description: "Continuous monitoring of brand mentions, sentiment, and emerging issues. Early detection enables proactive response before problems escalate." },
                  { icon: Zap, title: "Rapid Response", description: "24/7 crisis response capabilities that enable immediate action. Speed is critical in crisis management—delays allow problems to spiral." },
                  { icon: MessageCircle, title: "Crisis Communication", description: "Strategic messaging that addresses concerns while protecting reputation. We craft responses that are honest, empathetic, and effective." },
                  { icon: Users, title: "Stakeholder Management", description: "Coordinated communication with customers, employees, media, and other stakeholders. Different audiences need different messages." },
                  { icon: Target, title: "Social Media Crisis Response", description: "Specialized social media crisis management. Social crises spread rapidly—expert response contains damage and controls narrative." },
                  { icon: Shield, title: "Legal Coordination", description: "Collaboration with legal counsel to ensure responses protect both reputation and legal position. We balance transparency with legal prudence." },
                  { icon: TrendingUp, title: "Recovery Strategy", description: "Post-crisis recovery plans that rebuild trust and reputation. Crisis management doesn't end when crisis does—recovery requires strategic effort." },
                  { icon: Award, title: "Reputation Repair", description: "Active reputation rebuilding through positive content, community engagement, and strategic initiatives. We help brands recover from reputational damage." },
                  { icon: Clock, title: "Crisis Simulation", description: "Crisis simulation exercises that test plans and train teams. Practice builds confidence and reveals gaps before real crises occur." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Crisis Management is Essential</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every brand will face crises. Product failures, customer complaints, employee issues, social media backlash, data breaches, executive scandals—crises come in many forms. How brands respond determines whether crises become minor setbacks or existential threats. Poor crisis management destroys reputations built over decades. Expert crisis management protects brands, maintains stakeholder trust, and enables faster recovery. Yet most businesses are unprepared—no crisis plans, no trained teams, no response protocols. When crises hit, they scramble reactively, making mistakes that amplify damage. We prepare businesses for inevitable crises and guide them through challenges when they arise.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Crisis Reality</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crises are inevitable. No matter how well-run, every organization eventually faces challenges that threaten reputation. Product defects, service failures, employee misconduct, regulatory issues, or simple mistakes—crises have countless sources. The question isn't if crises will occur but when and how prepared you'll be.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media accelerates crisis dynamics. Issues that once took days to develop now explode in hours. Negative content spreads globally before brands can respond. This acceleration demands faster detection and response. Brands that respond slowly lose control of narratives.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reputation damage has real business impact. Crises drive customer churn, reduce sales, increase acquisition costs, and decrease employee morale. Stock prices fall. Partnerships end. Crises that could have been contained through expert management instead cause lasting damage.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Recovery from poorly managed crises takes years. Trust, once lost, rebuilds slowly. Customers remember how brands handled crises. Poor crisis response creates permanent reputation scars. Expert crisis management minimizes damage and accelerates recovery.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Crisis Preparedness Planning</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Preparation is the foundation of effective crisis management. Organizations that plan for crises respond more effectively when they occur. We develop comprehensive crisis preparedness programs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We conduct risk assessments identifying potential crisis scenarios. What could go wrong? How likely? How severe? Risk assessment reveals which scenarios deserve planning attention. We prioritize high-probability, high-impact scenarios.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop crisis response plans for each scenario. Plans specify who does what, how decisions are made, and what messages are communicated. Plans provide structure during chaos, enabling faster, more effective response.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish crisis teams with clear roles and responsibilities. Who leads crisis response? Who communicates with media? Who manages social media? Who coordinates with legal? Clear roles prevent confusion and ensure comprehensive response.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create communication templates for common scenarios. Pre-approved templates enable faster response while ensuring messages are legally sound and strategically appropriate. Templates provide starting points that can be quickly customized.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We train crisis teams through simulation exercises. Simulations test plans, build muscle memory, and reveal gaps. Teams that practice crisis response perform better during real crises. We conduct regular simulations to maintain readiness.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Reputation Monitoring & Early Detection</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Early crisis detection enables proactive response before issues escalate. We implement monitoring systems that surface emerging problems quickly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor social media for brand mentions, sentiment shifts, and emerging issues. Social listening tools track conversations across platforms. We identify negative sentiment spikes that signal potential crises.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We track review sites, forums, and complaint platforms where customers voice dissatisfaction. Patterns of complaints often precede public crises. Early detection enables proactive resolution before issues go viral.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor news and media coverage for emerging stories. Media coverage can amplify issues or create new crises. Early awareness enables preparation and proactive outreach to journalists.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement alert systems that notify crisis teams immediately when monitoring detects issues. Automated alerts ensure rapid awareness regardless of time or day. Speed is critical—hours matter in crisis response.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Crisis Response Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When crises occur, response strategy determines outcomes. We guide organizations through crisis response with proven frameworks.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Assess Situation:</strong> First step is understanding what happened, how serious it is, and what's at stake. We gather facts, assess severity, and determine appropriate response level. Not every issue requires full crisis response—we help determine proportional responses.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Activate Crisis Team:</strong> We convene crisis teams and assign responsibilities. We establish command centers (physical or virtual) that coordinate response. We implement decision-making processes that enable rapid, coordinated action.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Develop Response Strategy:</strong> We determine response approach—acknowledge and apologize, explain and defend, or stay silent. Strategy depends on facts, fault, and stakeholder expectations. We craft strategies that protect reputation while addressing legitimate concerns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Craft Messages:</strong> We develop clear, honest, empathetic messages that address concerns. Messages acknowledge problems, explain actions being taken, and demonstrate commitment to resolution. We tailor messages for different stakeholder groups.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Execute Response:</strong> We coordinate communication across channels—social media, press releases, customer emails, employee communications. Consistent messaging across channels prevents confusion and demonstrates control.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Monitor & Adjust:</strong> We track response effectiveness and adjust strategy as situations evolve. Crises are dynamic—initial responses might need refinement as new information emerges or stakeholder reactions become clear.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Crisis Communication Principles</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Effective crisis communication follows proven principles. Poor communication amplifies crises; expert communication contains them.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Speed:</strong> Respond quickly before narratives solidify. Silence creates vacuum that others fill with speculation. Even if full information isn't available, acknowledge awareness and commitment to transparency. Speed demonstrates control and concern.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Honesty:</strong> Tell truth even when uncomfortable. Lies or evasions always surface eventually, destroying credibility. Honesty builds trust and credibility. Admitting mistakes shows integrity and responsibility.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Empathy:</strong> Demonstrate genuine concern for those affected. Stakeholders want to know you care, not just that you're managing PR. Empathy humanizes brands and builds goodwill.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Accountability:</strong> Take responsibility when appropriate. Blame-shifting destroys credibility. Accountability demonstrates maturity and commitment to improvement. Explain what went wrong and what you're doing to prevent recurrence.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Consistency:</strong> Ensure all spokespeople deliver consistent messages. Contradictions create confusion and suggest disorganization. Unified messaging demonstrates control and competence.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Transparency:</strong> Share information openly within legal and competitive constraints. Transparency builds trust and prevents speculation. Regular updates demonstrate commitment to keeping stakeholders informed.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Social Media Crisis Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Social media crises require specialized approaches. Social platforms accelerate crisis dynamics and demand real-time response.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor social conversations in real-time during crises. We track sentiment, identify influential voices, and spot emerging narratives. Real-time monitoring enables rapid response to developments.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We respond quickly on social platforms where crises unfold. Social audiences expect immediate engagement. We acknowledge concerns, provide information, and demonstrate responsiveness. We balance speed with accuracy—rushing responses can create new problems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We engage directly with concerned individuals when appropriate. Personal responses demonstrate care and can defuse anger. We move complex issues to private channels while maintaining public transparency about overall response.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify and engage with influencers who can help or harm. Influencer amplification can escalate or de-escalate crises. We provide influencers with accurate information and demonstrate responsiveness to their concerns.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We correct misinformation firmly but respectfully. False information spreads rapidly on social media. We provide facts without being defensive or dismissive of legitimate concerns.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Stakeholder Management</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Different stakeholders have different concerns and need different communication. We coordinate multi-stakeholder communication strategies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Customers:</strong> Need to know how crisis affects them and what you're doing to resolve it. Customer communication emphasizes empathy, accountability, and concrete actions. We provide clear information about impacts and remedies.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Employees:</strong> Need information to do their jobs and respond to questions. Employee communication happens early—employees should hear from leadership before external audiences. We provide talking points and FAQs that enable employees to respond confidently.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Media:</strong> Need facts, context, and access to spokespeople. Media relations during crises requires balance—being accessible and transparent while controlling narrative. We prepare spokespeople, provide statements, and coordinate interviews.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Investors:</strong> Need to understand business impact and management response. Investor communication emphasizes facts, financial implications, and leadership competence. We coordinate with investor relations to ensure appropriate disclosure.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Partners:</strong> Need reassurance that relationships remain solid. Partner communication maintains confidence and prevents defections. We proactively reach out to key partners with information and reassurance.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Recovery & Reputation Repair</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crisis management doesn't end when immediate crisis passes. Recovery requires strategic effort to rebuild trust and reputation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We develop recovery plans that outline steps to rebuild reputation. Plans include concrete actions that demonstrate change, communication strategies that rebuild trust, and metrics that track recovery progress.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement visible improvements that address root causes. Actions speak louder than words. We help organizations make real changes that prevent recurrence and demonstrate commitment to improvement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create positive content that rebuilds reputation. Customer success stories, community initiatives, and thought leadership content gradually shift narratives. We don't erase crises but balance them with positive stories.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We engage with communities and stakeholders to rebuild relationships. Recovery requires ongoing dialogue and demonstrated commitment. We facilitate conversations that rebuild trust over time.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor reputation metrics tracking recovery progress. Sentiment analysis, brand perception surveys, and customer feedback reveal whether reputation is recovering. We adjust strategies based on data.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Containing Product Recall Crisis</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A consumer products company discovered safety defect requiring product recall. Recall affected 2 million units. Company faced potential reputation disaster, customer safety concerns, and regulatory scrutiny. They engaged us for crisis management.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented comprehensive crisis response: activated crisis team within hours, coordinated with legal and regulatory teams, developed honest, empathetic communication strategy, launched multi-channel customer notification, established 24/7 customer support, engaged proactively with media, and implemented visible safety improvements.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results: Crisis was contained without lasting reputation damage. Customer satisfaction with recall handling was 85%. Media coverage was balanced, emphasizing company's responsible response. Brand perception recovered to pre-crisis levels within 6 months. Crisis that could have destroyed brand instead demonstrated company's commitment to safety and responsibility.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Crisis Management Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Crisis Preparedness Plan:</strong> Comprehensive plans for potential crisis scenarios</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Crisis Team Structure:</strong> Defined roles, responsibilities, and protocols</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Communication Templates:</strong> Pre-approved message templates for rapid response</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Monitoring System:</strong> Reputation monitoring and alert systems</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>24/7 Response Capability:</strong> On-call crisis response team</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Crisis Simulation:</strong> Regular training exercises and plan updates</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Recovery Strategy:</strong> Post-crisis reputation rebuilding plans</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crisis preparedness programs take 4-6 weeks to develop. Implementation includes plan development, team training, and simulation exercises. Ongoing monitoring and retainer services ensure readiness when crises occur. Investment ranges from $25K for crisis preparedness programs to $100K+ for comprehensive programs including ongoing monitoring and guaranteed response. Crisis response retainers typically range from $5K-15K/month ensuring 24/7 access to crisis expertise.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Crisis management ROI is measured in damage prevented. A single well-managed crisis can save millions in lost revenue, legal costs, and reputation damage. Most clients view crisis preparedness as insurance—hoping never to need it but invaluable when crises occur. Organizations with crisis plans respond 3-5x faster and experience 50-70% less reputation damage than unprepared organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Protect Your Brand?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free crisis preparedness assessment. We'll evaluate your readiness and recommend improvements.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Assessment <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

