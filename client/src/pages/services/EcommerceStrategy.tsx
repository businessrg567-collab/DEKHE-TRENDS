import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEO, StructuredData } from "@/components/SEO";
import { ShoppingCart, CheckCircle2, ArrowRight, TrendingUp, Target, BarChart3, Package, CreditCard, Truck, Users, Star, Zap } from "lucide-react";

export default function EcommerceStrategy() {
  return (
    <>
      <SEO
        title="E-commerce Strategy & Optimization - Scale Online Sales"
        description="Comprehensive e-commerce strategy and optimization services. Launch, grow, and optimize online stores that drive revenue and customer satisfaction."
        keywords="ecommerce strategy, online store optimization, ecommerce marketing, conversion rate optimization, ecommerce platform, online retail, ecommerce growth"
      />
      
      <StructuredData type="Service" data={{ name: "E-commerce Strategy & Optimization", description: "Strategic services that launch and scale profitable online stores", provider: { "@type": "Organization", name: "Dekhe Trends" }, serviceType: "E-commerce Consulting" }} />

      <div className="min-h-screen pt-24 pb-12">
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
                  <ShoppingCart className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Scale Online Revenue</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight">
                  E-commerce <span className="gradient-text">Strategy</span> That Drives Sales
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                  Launch, grow, and optimize online stores that generate revenue. We provide end-to-end e-commerce strategy from platform selection through conversion optimization and growth marketing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/audit"><Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">Get E-commerce Strategy <ArrowRight className="ml-2" /></Button></Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-16 text-center">Complete E-commerce System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { icon: Target, title: "E-commerce Strategy", description: "Comprehensive e-commerce strategies aligned with business goals. We define target markets, positioning, pricing, and go-to-market plans that drive profitable growth." },
                  { icon: ShoppingCart, title: "Platform Selection & Setup", description: "Expert guidance on platform selection—Shopify, WooCommerce, Magento, or custom. We implement, configure, and optimize platforms for your specific needs." },
                  { icon: Package, title: "Product Catalog Optimization", description: "Strategic product organization, descriptions, imagery, and SEO. We optimize catalogs for discoverability, conversion, and customer experience." },
                  { icon: CreditCard, title: "Checkout Optimization", description: "Systematic checkout improvements that reduce abandonment and increase completion rates. Every friction point removed increases revenue." },
                  { icon: TrendingUp, title: "Conversion Rate Optimization", description: "Data-driven CRO that increases percentage of visitors who purchase. Small conversion improvements generate massive revenue gains." },
                  { icon: Users, title: "Customer Acquisition", description: "Multi-channel acquisition strategies including SEO, paid ads, email, and social. We build sustainable customer acquisition engines." },
                  { icon: Star, title: "Customer Retention", description: "Retention programs that increase lifetime value through repeat purchases. Email marketing, loyalty programs, and personalization that keep customers coming back." },
                  { icon: Truck, title: "Fulfillment & Operations", description: "Operational optimization including inventory management, order fulfillment, and customer service. Efficient operations enable profitable scaling." },
                  { icon: BarChart3, title: "Analytics & Reporting", description: "Comprehensive tracking and analysis of e-commerce performance. We measure what matters and optimize based on data." },
                  { icon: Zap, title: "Growth Marketing", description: "Systematic growth strategies that scale revenue profitably. We identify and execute highest-leverage growth opportunities." }
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
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12 text-center">Why E-commerce Strategy Matters</h2>
              
              <div className="prose prose-lg prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce is no longer optional—it's essential. Online sales continue growing while physical retail stagnates. Customers expect to buy online with seamless experiences, fast shipping, and easy returns. Businesses without strong e-commerce presence lose market share to competitors who do. But launching an online store isn't enough—most e-commerce businesses fail due to poor strategy, inadequate marketing, or operational issues. Success requires comprehensive strategy covering platform selection, conversion optimization, customer acquisition, and operational excellence. We build e-commerce systems that generate profitable, sustainable revenue growth.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">E-commerce Opportunity</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce enables businesses to reach customers globally without physical presence. Geographic limitations disappear. A small business can sell worldwide. This expanded reach creates massive growth opportunities impossible with physical retail alone.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce provides superior unit economics compared to physical retail. No rent for prime locations. Lower staffing costs. Better inventory management. These advantages enable higher margins and faster growth. Many successful D2C brands operate profitably online while traditional retailers struggle.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce generates valuable data impossible to collect in physical stores. Every click, view, and purchase provides insights into customer behavior and preferences. This data enables personalization, optimization, and strategic decisions that physical retailers can't match.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce scales efficiently. Adding capacity doesn't require opening new stores—it requires optimizing digital infrastructure. Scaling e-commerce is faster and cheaper than scaling physical retail. This scalability enables rapid growth when product-market fit is achieved.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Platform Selection Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Platform choice significantly impacts e-commerce success. Different platforms suit different business models, technical capabilities, and growth stages. We help select and implement optimal platforms.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Shopify:</strong> Best for most businesses launching or growing e-commerce. Shopify balances ease of use, features, and scalability. It handles technical complexity while providing flexibility through apps and customization. Shopify Plus serves enterprise needs. We recommend Shopify for 70% of clients.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>WooCommerce:</strong> Best for businesses already using WordPress or needing maximum customization. WooCommerce is free and infinitely flexible but requires more technical expertise. It's ideal for content-heavy sites or unique business models.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>BigCommerce:</strong> Best for businesses with large catalogs or complex B2B requirements. BigCommerce offers robust features out-of-box and handles high-volume efficiently. It's particularly strong for wholesale and B2B scenarios.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Custom Solutions:</strong> Best for enterprises with unique requirements that platforms can't accommodate. Custom development provides ultimate flexibility but requires significant investment and ongoing maintenance. We recommend custom only when platform limitations are genuine constraints.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We evaluate platforms based on your specific needs—product types, transaction volume, technical capabilities, budget, and growth plans. We implement chosen platforms, configure settings, integrate necessary tools, and optimize for performance.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Product Catalog Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Product pages are where conversions happen. Optimized product catalogs drive discovery, build desire, and facilitate purchase. We optimize every element of product presentation.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Product Organization:</strong> Logical category structures and navigation that help customers find products easily. We design taxonomies that match how customers think and search. Good organization reduces friction and increases discovery.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Product Descriptions:</strong> Compelling copy that sells benefits, addresses objections, and includes target keywords for SEO. We write descriptions that convert while ranking in search. We test different approaches to find what resonates.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Product Photography:</strong> High-quality images that showcase products from multiple angles. Images are the most important conversion element—customers can't touch products online, so images must communicate quality and details. We provide photography guidelines and recommend professional photography.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Product Videos:</strong> Video demonstrations that show products in use. Video increases conversion rates 80% on average. We help create product videos that educate and persuade.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Reviews & Social Proof:</strong> Customer reviews, ratings, and user-generated content that build trust. Products with reviews convert 270% better than products without. We implement review systems and strategies to generate reviews.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Product SEO:</strong> Optimization of titles, descriptions, and metadata for search engines. Product pages should rank for relevant searches. We optimize for both conversion and SEO, balancing persuasive copy with keyword inclusion.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Checkout Optimization</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  70% of shopping carts are abandoned. Checkout optimization recovers lost revenue by reducing abandonment and increasing completion rates. We systematically optimize checkout flows.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Checkout Flow:</strong> We streamline checkout to minimum necessary steps. Every additional step increases abandonment. We test one-page versus multi-step checkouts to find optimal structure for your audience.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Guest Checkout:</strong> Allowing purchase without account creation reduces friction significantly. We implement guest checkout while still capturing email for marketing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Form Optimization:</strong> Minimizing form fields, using smart defaults, and optimizing field types. Every unnecessary field increases abandonment. We reduce fields to absolute essentials.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Trust Indicators:</strong> Security badges, guarantee information, and payment icons that overcome purchase anxiety. Trust indicators increase checkout completion 15-30%.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Payment Options:</strong> Multiple payment methods including credit cards, PayPal, Apple Pay, and buy-now-pay-later options. More payment options increase conversion by accommodating different preferences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Shipping Options:</strong> Clear shipping costs and delivery timeframes. Unexpected shipping costs are the #1 abandonment reason. We display shipping early and offer multiple options.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Cart Recovery:</strong> Automated email sequences that recover abandoned carts. Cart recovery emails can recapture 10-30% of abandoned carts. We implement multi-email sequences with strategic timing.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Customer Acquisition Strategy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Driving qualified traffic is essential for e-commerce success. We build multi-channel acquisition strategies that generate sustainable customer flow.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>SEO for E-commerce:</strong> Optimizing product pages, category pages, and content for organic search. SEO provides sustainable, low-cost traffic. We implement technical SEO, on-page optimization, and content strategies that drive rankings.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Paid Advertising:</strong> Google Shopping, Facebook/Instagram ads, and other paid channels that drive immediate traffic. We manage campaigns that achieve profitable ROAS through continuous optimization.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Email Marketing:</strong> Building email lists and sending campaigns that drive repeat purchases. Email is the highest-ROI channel for e-commerce. We implement welcome series, promotional campaigns, and automated sequences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Social Commerce:</strong> Selling directly on social platforms and leveraging social for traffic. Instagram Shopping, Facebook Shops, and TikTok Shopping enable discovery and purchase without leaving platforms.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Influencer Marketing:</strong> Partnering with influencers who reach target audiences. Influencer partnerships drive awareness and sales, particularly for lifestyle and fashion brands.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Content Marketing:</strong> Creating valuable content that attracts organic traffic and builds authority. Buying guides, how-tos, and educational content drive SEO traffic that converts.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Retention & Lifetime Value</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Acquiring customers is expensive. Maximizing lifetime value through retention and repeat purchases is essential for profitability. We implement retention strategies that increase customer value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Email Marketing:</strong> Post-purchase sequences, promotional campaigns, and personalized recommendations that drive repeat purchases. We segment customers and send relevant messages that convert.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Loyalty Programs:</strong> Points-based or tiered programs that reward repeat purchases. Loyalty programs increase retention 20-40% and provide data on customer preferences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Subscription Models:</strong> Recurring revenue through subscriptions or auto-replenishment. Subscriptions dramatically increase lifetime value and provide predictable revenue.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Personalization:</strong> Product recommendations, personalized emails, and customized experiences based on browsing and purchase history. Personalization increases conversion rates and average order value.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Customer Service:</strong> Excellent support that resolves issues quickly and builds loyalty. Great service turns one-time buyers into repeat customers and advocates.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Operations & Fulfillment</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Operational excellence enables profitable scaling. Poor operations create customer dissatisfaction and limit growth. We optimize operations for efficiency and customer satisfaction.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Inventory Management:</strong> Systems and processes that maintain optimal inventory levels. Too little inventory means lost sales; too much ties up capital. We implement inventory planning and management systems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Order Fulfillment:</strong> Efficient picking, packing, and shipping processes. Fast, accurate fulfillment creates positive customer experiences. We optimize fulfillment workflows and recommend 3PL partners when appropriate.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Shipping Strategy:</strong> Balancing shipping costs, speed, and customer expectations. We negotiate carrier rates, optimize packaging, and design shipping strategies that satisfy customers while controlling costs.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong>Returns Management:</strong> Easy returns processes that build trust while minimizing costs. Generous return policies increase conversion but must be managed efficiently. We design return processes that balance customer satisfaction with operational efficiency.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">Case Study: Scaling to $10M Annual Revenue</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A D2C home goods brand launched on Shopify generating $500K first-year revenue. Growth stalled at $1.5M due to poor conversion rates, high customer acquisition costs, and operational inefficiencies. They approached us for comprehensive e-commerce strategy.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We implemented complete optimization: redesigned product pages with better imagery and copy, optimized checkout reducing abandonment 40%, launched SEO program that grew organic traffic 300%, implemented email marketing generating 35% of revenue, built loyalty program increasing repeat purchase rate 60%, and optimized operations reducing fulfillment costs 25%.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Results in 24 months: Revenue grew from $1.5M to $10M. Conversion rate increased from 1.2% to 3.1%. Customer acquisition cost decreased 45%. Customer lifetime value increased 2.3x. Profitability improved from breakeven to 18% net margin. E-commerce became a thriving, profitable business.
                </p>

                <h3 className="text-2xl font-bold mt-12 mb-6">E-commerce Service Deliverables</h3>
                <ul className="space-y-3 my-6">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>E-commerce Strategy:</strong> Comprehensive strategy covering platform, positioning, and go-to-market</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Platform Setup:</strong> Implementation and configuration of chosen platform</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Catalog Optimization:</strong> Product page optimization for conversion and SEO</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Conversion Optimization:</strong> Systematic CRO improving site-wide conversion rates</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Marketing Strategy:</strong> Multi-channel acquisition and retention programs</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Operations Optimization:</strong> Fulfillment and operational improvements</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" /><span className="text-muted-foreground"><strong>Ongoing Management:</strong> Continued optimization and growth support</span></li>
                </ul>

                <h3 className="text-2xl font-bold mt-12 mb-6">Investment & Timeline</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce projects vary widely in scope. Platform setup and initial optimization take 6-8 weeks. Ongoing optimization and growth marketing are continuous. Investment ranges from $25K for platform setup and initial optimization to $100K+ for comprehensive e-commerce programs including ongoing management. Monthly retainers for ongoing optimization typically range from $5K-20K depending on revenue and scope.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  E-commerce delivers measurable ROI. Conversion improvements and acquisition optimization typically generate 5-10x return on investment within first year. As revenue scales, absolute returns increase while maintaining strong ROI. Most clients see positive ROI within 3-6 months as optimizations compound.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-12 border border-primary/30">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Scale Your E-commerce Business?</h2>
              <p className="text-xl text-muted-foreground mb-8">Start with a free e-commerce audit. We'll analyze your store and identify growth opportunities.</p>
              <Link href="/audit"><Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100">Get Free E-commerce Audit <ArrowRight className="ml-2" /></Button></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

