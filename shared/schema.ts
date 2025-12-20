
import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === LEADS (Audit Requests & Contact) ===
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  brand: text("brand"),
  industry: text("industry"),
  website: text("website"),
  goal: text("goal"),
  // Type distinguishes where the lead came from: 'audit', 'contact', 'newsletter'
  type: text("type").notNull(), 
  createdAt: timestamp("created_at").defaultNow(),
});

// === INSIGHTS / BLOG POSTS ===
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(), // e.g., 'Upcoming Trends', 'Market Signals'
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  publishedAt: timestamp("published_at").defaultNow(),
  imageUrl: text("image_url"),
});

// === SCHEMAS ===
export const insertLeadSchema = createInsertSchema(leads).omit({ id: true, createdAt: true });
export const insertPostSchema = createInsertSchema(posts).omit({ id: true, publishedAt: true });

// === TYPES ===
export type Lead = typeof leads.$inferSelect;
export type InsertLead = z.infer<typeof insertLeadSchema>;

export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;
