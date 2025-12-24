import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="container px-4 md:px-6">
        {/* Mission */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-display mb-8"
          >
            We Decode the <span className="text-primary">Chaos</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            In a world of infinite data, clarity is the ultimate luxury. TrendIntel exists to filter the signal from the noise and empower brands to act with conviction.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square flex items-center justify-center border border-accent/30">
            {/* Image Placeholder */}
            <span className="text-4xl font-bold text-white/30">Our Office</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold font-display mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2021 by a team of data scientists and cultural anthropologists, TrendIntel started with a simple question: "Why do most trend reports fail?"
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              The answer was context. Data without culture is just numbers. Culture without data is just guessing. We built a proprietary engine that merges both, giving our clients a 360-degree view of what's next.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold font-display mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Radical Truth", desc: "We tell you what the data says, not what you want to hear." },
              { title: "Speed Matters", desc: "Insights have a shelf life. We deliver faster than anyone else." },
              { title: "Context is King", desc: "A number means nothing without the human story behind it." }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 rounded-2xl transition-colors">
                <h3 className="text-xl font-bold mb-4 font-display text-primary">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
