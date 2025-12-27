import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { Users, CheckCircle2, ArrowRight, Heart, MessageCircle, TrendingUp, Target, Award, Zap, Globe, Star, Shield } from "lucide-react";

export default function CommunityBuilding() {
  return (
    <>
      <SEO
        title="Community Building & Engagement - Build Loyal Brand Communities"
        description="Strategic community building services that create engaged brand communities. Turn customers into advocates through authentic community experiences."
        keywords="community building, brand community, community management, community engagement, online community, customer community, community strategy"
      />
      
      <StructuredData type="Service" data={{ name: "Community Building & Engagement", description: "Strategic services that build and nurture engaged brand communities", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "Community Management" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Build Belonging</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  Community <span className="gradient-text">Building</span> That Creates Loyalty
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Build engaged brand communities that drive retention, advocacy, and growth. Community members stay 3-5x longer and spend 2-3x more than non-community customers.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get Community Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete Community System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "Community Strategy", description: "Comprehensive community strategies defining purpose, structure, and engagement models. We design communities around shared interests, goals, or identities that create genuine belonging." },
                  { icon: Globe, title: "Platform Selection & Setup", description: "Expert guidance on community platform selection—Discord, Circle, Slack, Facebook Groups, or custom. We implement and configure platforms for optimal engagement." },
                  { icon: Users, title: "Member Acquisition", description: "Strategic programs that attract ideal community members. We identify where target members congregate and create compelling reasons to join your community." },
                  { icon: MessageCircle, title: "Engagement Programming", description: "Regular activities, discussions, and events that keep members active. We design engagement calendars that provide consistent value and maintain momentum." },
                  { icon: Heart, title: "Community Management", description: "Professional moderation and facilitation that maintains positive environments. We enforce guidelines, resolve conflicts, and nurture healthy community culture." },
                  { icon: Star, title: "Member Recognition", description: "Programs that recognize and reward active members. Recognition creates status, motivates participation, and identifies potential community leaders." },
                  { icon: Award, title: "Leadership Development", description: "Cultivating community leaders and advocates who help moderate, create content, and welcome new members. Leaders multiply community management capacity." },
                  { icon: TrendingUp, title: "Growth & Scaling", description: "Systematic approaches to growing communities while maintaining culture. We scale communities through sub-groups, chapters, and structured onboarding." },
                  { icon: Shield, title: "Guidelines & Governance", description: "Clear community guidelines and governance structures that maintain quality. We establish rules, consequences, and decision-making processes." },
                  { icon: Zap, title: "Community Analytics", description: "Comprehensive tracking of community health metrics. We measure engagement, sentiment, and business impact to optimize community strategies." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why Community Creates Competitive Advantage</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Brand communities create loyalty that transcends transactional relationships. Community members don't just buy products—they identify with brands, defend them in conversations, and recruit new members. This emotional investment creates retention and advocacy impossible to achieve through marketing alone. Community members stay 3-5x longer, spend 2-3x more, and refer 10x more customers than non-community members. Yet most brands ignore community building, focusing solely on transactions. This leaves massive value on the table. Strategic community building creates sustainable competitive advantages that compound over time.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">The Power of Belonging</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Humans have fundamental needs for belonging and connection. Communities fulfill these needs by creating spaces where people with shared interests, goals, or identities can connect. When brands facilitate these connections, they become more than vendors—they become facilitators of meaningful relationships.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Community creates switching costs beyond product features or pricing. Leaving a community means losing relationships, status, and shared experiences. These emotional and social costs make community members far less likely to churn than transactional customers.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Communities generate user-generated content, peer support, and organic advocacy that marketing can't buy. Community members create content, answer questions, and recommend brands to friends. This authentic promotion is more credible and effective than paid advertising.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Communities provide invaluable feedback and insights. Community members share honest opinions, suggest improvements, and identify problems. This feedback loop enables continuous product and experience improvement.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Community Strategy Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Successful communities require clear strategy. Random forums or social groups rarely create value. We develop comprehensive community strategies that align with business goals and member needs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define community purpose—why does this community exist? What value does it provide members? Purpose must be meaningful to members, not just brands. Communities built around genuine member needs thrive; those built solely for brand benefit fail.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify target members—who should join? What characteristics, interests, or goals do they share? Clear member profiles enable targeted recruitment and ensure community cohesion. Diverse interests create fragmented communities; shared interests create engaged ones.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We design community structure—will it be single large group or multiple sub-communities? How will conversations be organized? What roles exist? Structure impacts engagement and scalability. We design structures that facilitate connection while maintaining manageability.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish engagement models—how will members interact? What activities will occur? How frequently? Engagement models determine whether communities feel vibrant or dead. We design regular activities that provide consistent value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We define success metrics—what indicates healthy community? Active members? Engagement rates? Business impact? Clear metrics enable measurement and optimization. We track both community health metrics and business outcomes.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Platform Selection & Implementation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Platform choice significantly impacts community success. Different platforms suit different community types, sizes, and engagement models. We help select and implement optimal platforms.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Discord:</strong> Best for real-time chat communities, particularly gaming, tech, and creator communities. Discord offers voice channels, rich media, and bot integrations. It's ideal for highly engaged, synchronous communities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Circle/Mighty Networks:</strong> Best for professional communities, courses, and membership sites. These platforms combine forums, courses, and events in integrated experiences. They're ideal for monetized communities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Facebook Groups:</strong> Best for reaching existing Facebook users and leveraging platform features. Facebook Groups offer massive reach but limited customization. They work well for consumer brands with broad audiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Slack:</strong> Best for professional communities and B2B audiences. Slack's workplace familiarity makes adoption easy for business users. It's ideal for communities focused on professional development or industry discussions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Custom Platforms:</strong> Best for enterprises with unique requirements or desire for complete control. Custom platforms provide ultimate flexibility but require significant investment. We recommend custom only when platform limitations genuinely constrain strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement chosen platforms, configure settings, design information architecture, and establish moderation tools. We ensure platforms are optimized for engagement and easy to navigate.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Member Acquisition Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Building communities requires attracting ideal members. We develop acquisition strategies that bring right people together.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify where target members currently congregate—which platforms, groups, or forums? We meet potential members where they are rather than expecting them to find us. We participate authentically in existing communities before inviting members to ours.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create compelling value propositions—why should people join? What unique value does community provide? Clear value propositions drive membership. We emphasize benefits members care about—learning, networking, exclusive access, or belonging.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We leverage existing customers as initial members. Current customers already have brand affinity and shared interests. We invite engaged customers first to establish community foundation before broader recruitment.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement referral mechanics that incentivize members to invite others. Community members are best recruiters—they understand value and can authentically recommend membership. We make inviting easy and rewarding.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We use content marketing to attract members. Educational content, resources, and insights demonstrate community value before people join. Content attracts aligned members while filtering misaligned ones.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Engagement Programming</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Active communities require consistent engagement programming. Without regular activities and content, communities become ghost towns. We design engagement calendars that maintain momentum.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Discussion Topics:</strong> Regular discussion prompts that spark conversations. We post questions, share news, or highlight member achievements. Consistent topics create habits and expectations.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Events & Meetups:</strong> Virtual or in-person events that bring members together. AMAs, workshops, networking sessions, or social gatherings all strengthen connections. Events create memorable shared experiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Challenges & Contests:</strong> Gamified activities that drive participation. Challenges create goals, contests create excitement. Both generate content and engagement.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Educational Content:</strong> Workshops, courses, or resources that provide learning value. Educational programming attracts members seeking growth and establishes community as valuable resource.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Member Spotlights:</strong> Featuring member stories, achievements, or expertise. Spotlights recognize members, provide role models, and demonstrate community diversity.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Exclusive Access:</strong> Early product access, special discounts, or insider information available only to community. Exclusivity creates value and rewards membership.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Community Management Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Professional community management maintains healthy, positive environments. Poor moderation leads to toxicity that drives members away. We provide expert community management.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish clear community guidelines defining acceptable behavior. Guidelines set expectations and provide basis for moderation. We balance being welcoming with maintaining standards.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We moderate proactively, addressing issues before they escalate. We remove spam, mediate conflicts, and enforce guidelines consistently. Fair, transparent moderation builds trust.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We facilitate conversations, asking questions, connecting members, and keeping discussions on-track. Good facilitation makes members feel heard and valued.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We welcome new members warmly, helping them understand community norms and find relevant discussions. Strong onboarding increases new member retention significantly.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We monitor community health through engagement metrics, sentiment analysis, and member feedback. We identify issues early and adjust strategies to maintain positive environments.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Leadership Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Community leaders multiply management capacity and strengthen community culture. We identify and develop leaders who help moderate, create content, and welcome members.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We identify potential leaders through engagement patterns. Active, helpful members who embody community values make excellent leaders. We invite high-potential members into leadership roles.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We provide training and support for community leaders. We teach moderation skills, provide guidelines, and offer ongoing coaching. Supported leaders are effective leaders.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We recognize and reward leaders publicly. Recognition motivates continued contribution and demonstrates value of leadership. We provide exclusive benefits, special access, or compensation when appropriate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We create leadership structures with clear roles and responsibilities. Defined roles prevent overlap and ensure comprehensive coverage. We establish moderators, content creators, event organizers, and welcomers.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Scaling Communities</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Growing communities while maintaining culture requires intentional scaling strategies. Unmanaged growth dilutes culture and reduces engagement. We scale communities systematically.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implement sub-communities for different interests or locations. Sub-communities maintain intimacy within larger structures. Members find relevant discussions without overwhelming noise.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We establish structured onboarding that socializes new members into community norms. Onboarding prevents cultural dilution as communities grow. New members learn expectations and find their place.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We grow leadership capacity proportionally to membership. More members require more moderators and facilitators. We develop leadership pipelines that scale with growth.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We sometimes limit growth intentionally to maintain quality. Exclusivity can increase perceived value. We balance growth goals with community health.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Building 50K Member Community</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A fitness brand wanted to build community around their products. They launched Facebook Group that grew to 5K members but had minimal engagement. Members joined but didn't participate. Community provided little business value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We rebuilt community strategy: migrated to dedicated platform (Circle), defined clear purpose around fitness journey support, implemented structured onboarding, created engagement calendar with daily prompts and weekly challenges, developed leadership program with 20 active moderators, and launched exclusive benefits for members.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 18 months: Community grew from 5K to 50K members. Daily active users increased from 2% to 35%. Community members had 60% higher retention than non-members. Community-driven word-of-mouth became #2 customer acquisition source. Community became core competitive advantage.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Community Service Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Community Strategy:</strong> Comprehensive strategy defining purpose, structure, and engagement models</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Platform Setup:</strong> Implementation and configuration of community platform</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Community Guidelines:</strong> Clear rules and governance structures</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Engagement Programming:</strong> Regular activities, events, and content</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Community Management:</strong> Professional moderation and facilitation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Leadership Development:</strong> Training and support for community leaders</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Analytics & Reporting:</strong> Community health metrics and business impact measurement</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Community building requires long-term commitment. Initial strategy and setup take 4-6 weeks. Community growth and engagement are ongoing—communities require continuous nurturing. Investment ranges from $10K for strategy and setup to $50K+ for comprehensive programs including ongoing management. Monthly management fees typically range from $3K-15K depending on community size and engagement requirements.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Community ROI compounds over time. Early stages require investment with minimal return. As communities grow and mature, business impact accelerates. Most clients see positive ROI within 12-18 months as community-driven retention, advocacy, and acquisition offset investment. Long-term value is substantial—thriving communities become sustainable competitive advantages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Build Your Brand Community?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free community strategy consultation. We'll discuss your goals and recommend optimal approaches.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free Consultation <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

