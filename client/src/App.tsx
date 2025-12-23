import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";
import { useEffect } from "react";

// Pages
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Insights from "@/pages/Insights";
import PostDetail from "@/pages/PostDetail";
import About from "@/pages/About";
import Audit from "@/pages/Audit";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Sitemap from "@/pages/Sitemap";

// Service Pages - Individual imports
import TrendReporting from "@/pages/services/TrendReporting";
import CompetitorIntelligence from "@/pages/services/CompetitorIntelligence";
import ProductValidation from "@/pages/services/ProductValidation";
import GrowthStrategy from "@/pages/services/GrowthStrategy";
import BrandStrategy from "@/pages/services/BrandStrategy";
import ContentMarketing from "@/pages/services/ContentMarketing";
import SocialMediaStrategy from "@/pages/services/SocialMediaStrategy";
import SEOStrategy from "@/pages/services/SEOStrategy";
import EmailMarketing from "@/pages/services/EmailMarketing";
import InfluencerMarketing from "@/pages/services/InfluencerMarketing";
import PaidAdvertising from "@/pages/services/PaidAdvertising";
import ConversionOptimization from "@/pages/services/ConversionOptimization";
import CustomerRetention from "@/pages/services/CustomerRetention";
import MarketResearch from "@/pages/services/MarketResearch";
import DigitalTransformation from "@/pages/services/DigitalTransformation";
import EcommerceStrategy from "@/pages/services/EcommerceStrategy";
import CommunityBuilding from "@/pages/services/CommunityBuilding";
import VideoMarketing from "@/pages/services/VideoMarketing";
import DataAnalytics from "@/pages/services/DataAnalytics";
import CrisisManagement from "@/pages/services/CrisisManagement";

// City Pages
import { Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Surat, Lucknow, Kanpur, Nagpur, Indore, Thane, Bhopal, Visakhapatnam, Patna, Vadodara, Ludhiana } from "@/pages/cities";

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/services/trend-reporting" component={TrendReporting} />
          <Route path="/services/competitor-intelligence" component={CompetitorIntelligence} />
          <Route path="/services/product-validation" component={ProductValidation} />
          <Route path="/services/growth-strategy" component={GrowthStrategy} />
          <Route path="/services/brand-strategy" component={BrandStrategy} />
          <Route path="/services/content-marketing" component={ContentMarketing} />
          <Route path="/services/social-media-strategy" component={SocialMediaStrategy} />
          <Route path="/services/seo-strategy" component={SEOStrategy} />
          <Route path="/services/email-marketing" component={EmailMarketing} />
          <Route path="/services/influencer-marketing" component={InfluencerMarketing} />
          <Route path="/services/paid-advertising" component={PaidAdvertising} />
          <Route path="/services/conversion-optimization" component={ConversionOptimization} />
          <Route path="/services/customer-retention" component={CustomerRetention} />
          <Route path="/services/market-research" component={MarketResearch} />
          <Route path="/services/digital-transformation" component={DigitalTransformation} />
          <Route path="/services/ecommerce-strategy" component={EcommerceStrategy} />
          <Route path="/services/community-building" component={CommunityBuilding} />
          <Route path="/services/video-marketing" component={VideoMarketing} />
          <Route path="/services/data-analytics" component={DataAnalytics} />
          <Route path="/services/crisis-management" component={CrisisManagement} />
          <Route path="/industries" component={Industries} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/:slug" component={PostDetail} />
          <Route path="/about" component={About} />
          <Route path="/audit" component={Audit} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route path="/sitemap" component={Sitemap} />
          
          {/* City Routes */}
          <Route path="/mumbai" component={Mumbai} />
          <Route path="/delhi" component={Delhi} />
          <Route path="/bangalore" component={Bangalore} />
          <Route path="/hyderabad" component={Hyderabad} />
          <Route path="/chennai" component={Chennai} />
          <Route path="/kolkata" component={Kolkata} />
          <Route path="/pune" component={Pune} />
          <Route path="/ahmedabad" component={Ahmedabad} />
          <Route path="/jaipur" component={Jaipur} />
          <Route path="/surat" component={Surat} />
          <Route path="/lucknow" component={Lucknow} />
          <Route path="/kanpur" component={Kanpur} />
          <Route path="/nagpur" component={Nagpur} />
          <Route path="/indore" component={Indore} />
          <Route path="/thane" component={Thane} />
          <Route path="/bhopal" component={Bhopal} />
          <Route path="/visakhapatnam" component={Visakhapatnam} />
          <Route path="/patna" component={Patna} />
          <Route path="/vadodara" component={Vadodara} />
          <Route path="/ludhiana" component={Ludhiana} />
          
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CookieConsent />
      <Router />
    </QueryClientProvider>
  );
}

export default App;

