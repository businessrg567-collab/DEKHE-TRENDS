import { LeadForm } from "@/components/LeadForm";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Audit() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-background flex items-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
              Claim Your <br /><span className="text-primary">Free Growth Audit</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Understand exactly where your brand stands in the market landscape. Our analysts will review your digital footprint and identify high-leverage opportunities.
            </p>
            
            <div className="space-y-6 bg-card/50 p-8 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold">What you'll get:</h3>
              <ul className="space-y-4">
                {[
                  "Current Trend Alignment Score",
                  "Competitor Gap Analysis (Top 3)",
                  "3 Actionable 'Quick Wins'",
                  "No commitment required"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-3 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] rounded-full" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold font-display mb-6">Request Your Audit</h2>
              <LeadForm type="audit" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
