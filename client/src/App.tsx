import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
          <Route path="/industries" component={Industries} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/:slug" component={PostDetail} />
          <Route path="/about" component={About} />
          <Route path="/audit" component={Audit} />
          <Route path="/contact" component={Contact} />
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
      <Router />
    </QueryClientProvider>
  );
}

export default App;
