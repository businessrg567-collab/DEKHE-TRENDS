import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    
    // Enable analytics and other tracking here
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    
    // Disable analytics and tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  const handleClose = () => {
    setShowBanner(false);
    // Set a temporary flag to show again later
    sessionStorage.setItem("cookieBannerClosed", "true");
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-card/95 backdrop-blur-lg border-2 border-primary/30 rounded-2xl shadow-2xl p-6 md:p-8 relative">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Cookie className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-bold font-display mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-0">
                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
                    <a href="/privacy-policy" className="text-primary hover:underline font-semibold">
                      Privacy Policy
                    </a>.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0">
                  <Button
                    onClick={handleDecline}
                    variant="outline"
                    className="rounded-full border-2 border-accent/50 hover:bg-accent/10 font-semibold whitespace-nowrap"
                  >
                    Decline
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="rounded-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 font-bold shadow-lg whitespace-nowrap"
                  >
                    Accept All
                  </Button>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-muted-foreground">
                  🇮🇳 This website complies with Indian IT Act 2000 and GDPR regulations. 
                  We respect your data privacy rights. You can withdraw consent at any time.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

