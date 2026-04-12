import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // === LEADS ===
  app.post(api.leads.create.path, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // === POSTS ===
  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  await seedDatabase();

  return httpServer;
}

// SEED DATA FUNCTION
export async function seedDatabase() {
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    const blogPosts = [
      {
        title: "The Day I Discovered Why My Client's ₹5 Lakh Marketing Budget Was Completely Wasted",
        slug: "marketing-budget-wasted-lessons-learned",
        category: "Marketing Strategy",
        excerpt: "A successful restaurant owner was spending ₹5 lakhs monthly on marketing with zero results. What we discovered changed everything about how I approach marketing strategy.",
        content: `The phone call came at 11 PM on a Tuesday.

"I need help. I'm spending ₹5 lakhs every month on marketing and I'm getting nothing. My restaurant is empty while my competitor across the street is packed every night."

Vikram owned a premium restaurant in Bandra. Beautiful interiors, excellent food, great location. But despite spending more on marketing than most restaurants earn in profit, his tables were empty.

His competitor? A smaller place with average food and no marketing budget. Yet customers lined up outside every evening.

I agreed to investigate. What I found shocked me and completely changed how I think about marketing effectiveness.`,
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "How I Helped a Struggling Local Business Generate ₹50 Lakhs in 6 Months Using One Simple Strategy",
        slug: "local-business-50-lakhs-revenue-simple-strategy",
        category: "Local Business Marketing",
        excerpt: "A small electronics store was on the verge of closing. One overlooked marketing strategy not only saved the business but made it the most successful store in the area.",
        content: `The owner was packing boxes when I walked into his electronics store.

"I'm done," Suresh said, barely looking up. "Twenty-three years in business, and I can't compete anymore. Everyone buys online now."

His store in Jayanagar, Bangalore, had been the go-to place for electronics for over two decades. But in the past three years, revenue had dropped 70%. Online retailers and big-box stores were killing his business.`,
        imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "The Website Mistake That's Costing You 60% of Your Potential Customers",
        slug: "website-mistake-costing-60-percent-customers",
        category: "Website & Conversion Optimization",
        excerpt: "Most business websites make the same critical mistake that drives away more than half of their visitors. Here's how to fix it and dramatically increase your conversions.",
        content: `I was reviewing a client's website analytics when I noticed something alarming.

Their website was getting 15,000 visitors per month, but only 2,400 were staying longer than 10 seconds. The rest were leaving immediately.

This wasn't a traffic quality problem. These were people actively searching for their services. They were the perfect target audience.

Yet 84% of visitors were bouncing within seconds of arriving.`,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600"
      }
    ];
    
    // Add all blog posts to database
    for (const post of blogPosts) {
      await storage.createPost(post);
    }
    
    console.log(`✓ Seeded ${blogPosts.length} blog posts to database`);
  }
}