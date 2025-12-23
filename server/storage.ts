
import { db } from "./db";
import {
  leads,
  posts,
  type InsertLead,
  type Lead,
  type Post,
  type InsertPost
} from "@shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Leads
  createLead(lead: InsertLead): Promise<Lead>;
  
  // Posts
  getPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
}

// In-memory storage fallback for when database is not available
const inMemoryPosts = new Map<string, Post>();

export class DatabaseStorage implements IStorage {
  private useInMemory = false;

  async createLead(insertLead: InsertLead): Promise<Lead> {
    try {
      const [lead] = await db.insert(leads).values(insertLead).returning();
      return lead;
    } catch (error) {
      console.warn("Database error, returning mock lead:", error);
      // Return mock lead for development
      return {
        id: Date.now(),
        ...insertLead,
        createdAt: new Date(),
      } as Lead;
    }
  }

  async getPosts(): Promise<Post[]> {
    try {
      const dbPosts = await db.select().from(posts).orderBy(desc(posts.publishedAt));
      // Also merge with in-memory posts
      const memoryPosts = Array.from(inMemoryPosts.values());
      const allPosts = [...dbPosts, ...memoryPosts];
      // Remove duplicates by slug
      const uniquePosts = Array.from(
        new Map(allPosts.map(post => [post.slug, post])).values()
      );
      return uniquePosts.sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });
    } catch (error) {
      console.warn("Database error, using in-memory posts:", error);
      this.useInMemory = true;
      return Array.from(inMemoryPosts.values()).sort((a, b) => {
        const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
        const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
        return dateB - dateA;
      });
    }
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    try {
      const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
      if (post) return post;
    } catch (error) {
      console.warn("Database error checking post by slug:", error);
      this.useInMemory = true;
    }
    
    // Check in-memory storage
    return inMemoryPosts.get(slug);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    try {
      const [post] = await db.insert(posts).values(insertPost).returning();
      // Also store in memory as backup
      inMemoryPosts.set(post.slug, post);
      return post;
    } catch (error) {
      console.warn("Database error, storing post in memory:", error);
      this.useInMemory = true;
      // Store in memory
      const post: Post = {
        id: Date.now(),
        ...insertPost,
        publishedAt: new Date(),
      } as Post;
      inMemoryPosts.set(post.slug, post);
      return post;
    }
  }
}

export const storage = new DatabaseStorage();
