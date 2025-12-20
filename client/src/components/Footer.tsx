import { Link } from "wouter";
import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-display">
                Trend<span className="text-primary">Intel</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Decoding future market signals for forward-thinking brands. We turn noise into actionable intelligence.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Trend Reporting</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Competitor Intel</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Product Validation</Link></li>
              <li><Link href="/audit" className="hover:text-primary transition-colors">Free Audit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>© 2024 TrendIntel Agency. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
}
