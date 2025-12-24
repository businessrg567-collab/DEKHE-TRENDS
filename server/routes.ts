
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
    await storage.createPost({
      title: "The Rise of Micro-Communities in 2025",
      slug: "micro-communities-2025",
      category: "Upcoming Trends",
      excerpt: "Why mass social media is dying and niche communities are becoming the new goldmine for brands.",
      content: "As users fatigue from algorithmic feeds, we are seeing a massive shift towards private, gated micro-communities. Brands that pivot to community-led growth will win...",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
    });

    await storage.createPost({
      title: "Sustainable Packaging: No Longer Optional",
      slug: "sustainable-packaging-trends",
      category: "Market Signals",
      excerpt: "Consumer data shows a 40% drop in loyalty for brands using single-use plastics. Here is the shift.",
      content: "The data is clear: sustainability is a baseline expectation, not a differentiator. Our analysis of D2C trends suggests...",
      imageUrl: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&q=80&w=1600"
    });

    await storage.createPost({
      title: "Why 'Authenticity' is the New Currency",
      slug: "authenticity-marketing",
      category: "Data-Backed Predictions",
      excerpt: "Polished production is out. Raw, unedited content is driving 3x more conversions.",
      content: "Our tracker picked up a significant spike in engagement for 'lo-fi' content across TikTok and Reels. This signifies a shift...",
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600"
    });
  }
}
