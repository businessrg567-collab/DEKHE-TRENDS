import { LeadForm } from "@/components/LeadForm";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us - Get in Touch with Dekhe Trends | Digital Marketing Agency"
        description="Contact Dekhe Trends for digital marketing services across India. Get expert consultation for SEO, social media, branding, and growth strategies."
        canonical="https://dekhetrends.com/contact"
      />
      
      <div className="min-h-screen pt-24 pb-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary font-medium text-sm"
              >
                Get in Touch
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold font-display mb-6"
              >
                Let's Grow Your <span className="gradient-text">Business Together</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Ready to transform your digital presence? Our team is here to help you achieve your marketing goals.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-card to-card/50 border border-accent/30 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 blur-[60px] rounded-full" />
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold font-display mb-6">Send Us a Message</h2>
                  <LeadForm type="contact" />
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold font-display mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Have questions? We're here to help. Reach out to us through any of these channels and we'll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid gap-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "hello@dekhetrends.com",
                      link: "mailto:hello@dekhetrends.com"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+91 98765 43210",
                      link: "tel:+919876543210"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "Serving 20+ Cities Across India",
                      link: null
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Mon - Sat: 9:00 AM - 7:00 PM IST",
                      link: null
                    }
                  ].map((item, index) => (
                    <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                            {item.link ? (
                              <a 
                                href={item.link} 
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item.content}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.content}</p>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                {/* Why Choose Us */}
                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <h3 className="text-lg font-bold font-display mb-4 flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-primary" />
                    Why Work With Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Free consultation & audit",
                      "Customized strategies for your business",
                      "Transparent pricing with no hidden costs",
                      "Dedicated account manager",
                      "Proven track record across 20+ cities",
                      "Results-driven approach"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <MessageSquare className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>

            {/* Cities We Serve */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold font-display mb-6">Cities We Serve</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
                  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
                  "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
                  "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ludhiana"
                ].map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}

