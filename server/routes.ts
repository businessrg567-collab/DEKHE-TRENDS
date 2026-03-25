
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
        title: "Why Your Competitor's AI Chatbot is Stealing Your Customers (And What to Do About It)",
        slug: "ai-chatbot-stealing-customers",
        category: "AI in Business",
        excerpt: "That 24/7 chatbot on your competitor's website isn't just answering questions—it's converting visitors while you sleep. Here's what's really happening.",
        content: `I got a call last week from a business owner who was furious. "My competitor has this AI thing on their website," he said. "People are buying from them at 2 AM. How is that fair?"

Fair or not, it's happening. And if you're not paying attention, you're losing customers to businesses that are.

## The Midnight Customer Problem

Here's something most business owners don't think about: Your website gets traffic 24/7, but you're only available 9-5. What happens to the person who visits your site at 11 PM with their credit card ready?

They leave. They go to your competitor. They forget about you.

Unless you have an AI chatbot that can actually help them.

## What AI Chatbots Actually Do

Modern AI chatbots in 2026 are doing things that would blow your mind:

- They qualify leads while you sleep
- They handle objections better than most salespeople
- They book meetings directly into your calendar
- They upsell and cross-sell

## Real Numbers from Real Businesses

A law firm in Delhi added an AI chatbot in January. Before the chatbot, their website converted 2.3% of visitors into consultation requests. After the chatbot, that number jumped to 8.7%.

An e-commerce store in Mumbai was losing 60% of potential customers who had questions about products. They added an AI chatbot that could answer product questions, compare items, and handle returns. Their cart abandonment rate dropped from 68% to 41% in two months.

## The Bottom Line

Your competitors are implementing this right now. The businesses that move fast on AI adoption are building advantages that will be hard to overcome.

The question isn't whether AI chatbots work. The question is how long you're willing to lose customers to competitors who figured this out before you did.`,
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "I Spent ₹2 Lakhs on AI Marketing Tools. Here's What Actually Worked.",
        slug: "ai-marketing-tools-what-works",
        category: "AI Tools",
        excerpt: "Spoiler: Most AI marketing tools are overhyped garbage. But the 3 that actually delivered results changed everything about how we work.",
        content: `Let me save you some money and a lot of frustration.

Over the past year, I've tested 27 different AI marketing tools. Some were recommended by "experts" on LinkedIn. Some had impressive demos. Some had great marketing (ironic, right?).

Most of them were useless.

But three of them completely changed how we run marketing campaigns.

## Tool #1: ChatGPT Plus (₹1,600/month)

Forget Jasper. Forget Copy.ai. ChatGPT Plus with GPT-4 does everything they do, but better, for a fraction of the cost.

What I use it for:
- First drafts of blog posts
- Email sequences
- Social media content ideas
- Ad copy variations
- Brainstorming campaign concepts

ROI: We're producing 3X more content with the same team size.

## Tool #2: Midjourney (₹2,400/month)

Stock photos are dead. Midjourney creates custom images that are actually unique.

What I use it for:
- Blog post featured images
- Social media graphics
- Ad creatives
- Website illustrations

ROI: We were spending ₹15,000-20,000/month on stock photos and freelance designers. Now we spend ₹2,400/month.

## Tool #3: Zapier with AI (₹6,000/month)

Most marketing automation tools are overcomplicated. Zapier with AI features actually works.

What I use it for:
- Auto-categorizing leads
- Summarizing customer feedback
- Smart email routing
- Social media monitoring

ROI: Our response time went from 4-6 hours to under 10 minutes. Conversion rate on leads increased by 34%.

## The Bottom Line

Don't buy AI tools because they're trendy. Buy them because they solve specific problems and deliver measurable ROI.`,
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "Your Marketing Team is Scared of AI. Here's How to Fix That.",
        slug: "marketing-team-scared-of-ai",
        category: "AI Adoption",
        excerpt: "AI isn't going to replace your marketing team. But marketers who use AI will replace those who don't. Here's how to get your team on board.",
        content: `"If we use AI, will I lose my job?"

That's the question I heard from three different team members last month. And honestly, I get it.

The internet is full of headlines about AI replacing jobs. Your team sees those headlines too. They're worried.

But here's what's actually happening in marketing: AI isn't replacing marketers. It's replacing marketers who refuse to adapt.

## The Real Fear

Your team isn't scared of AI. They're scared of becoming irrelevant.

They've spent years building skills. They're good at what they do. And now there's this technology that can do some of their work in seconds.

That's terrifying.

## What AI is Actually Good At

AI is incredible at:
- Generating first drafts
- Analyzing large amounts of data
- Handling repetitive tasks
- Creating variations of existing content

AI is terrible at:
- Understanding nuance and context
- Making strategic decisions
- Building relationships
- Creating truly original ideas

Your marketing team does all the things AI can't do.

## How to Introduce AI to Your Team

Step 1: Start with pain points, not capabilities.

Don't say: "Look at this cool AI tool!"
Say: "Remember how you hate spending 2 hours formatting reports? This AI tool does it in 30 seconds."

Step 2: Let them experiment without pressure.

Give your team AI tools to play with. No deadlines. No expectations. Just exploration.

Step 3: Show them how AI makes their work better, not obsolete.

A graphic designer using AI isn't being replaced—they're exploring concepts faster.

## The Truth About AI and Jobs

AI will eliminate some marketing jobs. Specifically, jobs that involve repetitive, low-skill tasks.

But AI will also create new opportunities for marketers who adapt.

Your team's job isn't to compete with AI. It's to use AI to become better at the things only humans can do.`,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "Why AI-Generated Content Fails (And How to Make It Actually Work)",
        slug: "ai-content-fails-how-to-fix",
        category: "Content Marketing",
        excerpt: "Everyone's using AI to create content. Most of it is terrible. Here's why—and how to create AI-assisted content that people actually want to read.",
        content: `I can spot AI-generated content from a mile away. So can your audience.

You know the signs: Generic opening paragraphs. Overly formal language. Lists that sound like they came from a template.

The internet is drowning in this stuff. And it's making content marketing harder for everyone.

But here's the thing: AI isn't the problem. How people are using AI is the problem.

## The AI Content Trap

Business owners discover AI can write content. They get excited. They think: "I can publish 10 blog posts per week now!"

So they do. They feed AI a topic, copy-paste the output, hit publish.

Three months later, they're confused. "Why isn't this working?"

Because quantity without quality is just noise.

## What Makes AI Content Terrible

AI content fails for specific, fixable reasons:

1. It's too generic
2. It has no personality
3. It lacks specific examples
4. It's predictable
5. It doesn't take risks

## How to Actually Use AI for Content

Step 1: Use AI for structure, not final content.

Ask AI to create an outline. This is where AI shines.

Step 2: Use AI for first drafts, not final drafts.

Let AI write the first version. Then rewrite it in your voice.

Step 3: Add what AI can't: Your unique perspective.

AI can tell people what SEO is. You can tell them about the client who ignored SEO and lost 60% of their traffic.

Step 4: Edit ruthlessly.

AI loves filler words. Cut them.
AI writes long sentences. Shorten them.
AI uses formal language. Make it conversational.

Step 5: Add personality.

Use contractions. Vary sentence length. Ask questions. Be human.

## The Bottom Line

AI is a powerful tool. But like any tool, it's only as good as the person using it.

Use it to become more productive. Don't use it as an excuse to publish mediocre content.`,
        imageUrl: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=1600"
      },
      {
        title: "The AI Marketing Mistake That's Costing You Customers",
        slug: "ai-marketing-mistake-costing-customers",
        category: "AI Strategy",
        excerpt: "You're using AI for marketing. Your competitors are too. But one critical mistake is making your AI marketing backfire.",
        content: `A restaurant owner in Bangalore called me last month, frustrated.

"We're using AI for everything," he said. "Social media posts, email marketing, even customer responses. But our engagement is down 40%."

I looked at their content. The problem was obvious.

Everything sounded the same. Every post had the same structure. Every email had the same tone.

They'd automated themselves into irrelevance.

## The Mistake: Letting AI Remove Your Humanity

AI is a tool. A powerful one. But when you use it to automate everything, you lose the one thing that makes people choose you: Your humanity.

People don't buy from businesses. They buy from people they trust.

## Where This Shows Up

Social Media: Every post follows the same formula. It's predictable. It's boring.

Email Marketing: Every email sounds like it came from a template. Open rates drop.

Customer Service: AI chatbots that can't handle nuance. Customers get frustrated.

## The 80/20 Rule for AI Marketing

AI should handle 80% of the work. Humans should add the 20% that matters most.

AI handles:
- First drafts
- Data analysis
- Scheduling
- Repetitive tasks

Humans add:
- Personal stories
- Unique insights
- Brand personality
- Emotional connection

That 20% human touch is what makes people care.

## How to Add Humanity to AI Marketing

1. Share real stories
2. Have opinions
3. Show your process
4. Respond personally
5. Break the formula

## The Test

Before publishing AI-generated content, ask yourself:

"If I saw this from another business, would I engage with it?"

If the answer is no, add more humanity.`,
        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600"
      }
    ];
    
    // Add all blog posts to database
    for (const post of blogPosts) {
      await storage.createPost(post);
    }
    
    console.log(`✓ Seeded ${blogPosts.length} blog posts to database`);
  }
}
