import { usePosts } from "@/hooks/use-posts";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

export default function Insights() {
  const { data: posts, isLoading, error } = usePosts();

  if (error) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-destructive">
        Error loading insights. Please try again later.
      </div>
    );
  }

  return (
    <>
      <SEO 
        title="Market Insights & Trend Analysis Blog | Dekhe Trends"
        description="Deep dives into emerging trends, cultural shifts, and market opportunities. Stay informed with our latest analysis and data-backed predictions."
        canonical="https://dekhetrends.com/insights"
      />
      
      <div className="pt-24 pb-12 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">Market <span className="text-primary">Insights</span></h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Deep dives into emerging trends, cultural shifts, and market opportunities.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-2xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/insights/${post.slug}`} className="group block h-full">
                  <div className="bg-gradient-to-br from-card to-card/50 border border-accent/20 hover:border-primary/50 rounded-2xl overflow-hidden transition-all h-full flex flex-col">
                    <div className="aspect-[16/9] bg-gradient-to-br from-primary/30 to-accent/30 relative overflow-hidden">
                      {/* Placeholder for images since we don't have real assets yet */}
                      {post.imageUrl ? (
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <span className="text-white/20 font-display font-bold text-4xl">Dekhe</span>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm hover:bg-background">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs text-muted-foreground mb-3">
                        {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : 'Draft'}
                      </div>
                      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-semibold text-primary inline-flex items-center">
                        Read Analysis &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {/* Empty State if no posts */}
            {posts?.length === 0 && (
              <div className="col-span-full py-20 text-center border border-dashed border-white/10 rounded-2xl">
                <p className="text-muted-foreground">No insights published yet. Check back soon.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
