import { useEffect } from "react";
import { useLocation } from "wouter";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title,
  description,
  keywords = "trend intelligence, market research, competitor analysis, brand strategy, growth marketing, trend forecasting, consumer insights, market trends",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
  author = "Dekhe Trends",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  const [location] = useLocation();
  const fullTitle = title.includes("Dekhe Trends") ? title : `${title} | Dekhe Trends`;
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://dekhetrends.com";
  const currentUrl = `${siteUrl}${location}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        if (selector.includes("property=")) {
          element.setAttribute("property", selector.match(/property="([^"]+)"/)?.[1] || "");
        } else if (selector.includes("name=")) {
          element.setAttribute("name", selector.match(/name="([^"]+)"/)?.[1] || "");
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Helper function to update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Basic meta tags
    updateMetaTag('meta[name="description"]', "content", description);
    updateMetaTag('meta[name="keywords"]', "content", keywords);
    updateMetaTag('meta[name="author"]', "content", author);
    updateMetaTag('meta[name="robots"]', "content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    
    // Open Graph meta tags
    updateMetaTag('meta[property="og:title"]', "content", fullTitle);
    updateMetaTag('meta[property="og:description"]', "content", description);
    updateMetaTag('meta[property="og:type"]', "content", ogType);
    updateMetaTag('meta[property="og:url"]', "content", currentUrl);
    updateMetaTag('meta[property="og:image"]', "content", `${siteUrl}${ogImage}`);
    updateMetaTag('meta[property="og:site_name"]', "content", "Dekhe Trends");
    updateMetaTag('meta[property="og:locale"]', "content", "en_US");

    // Twitter Card meta tags
    updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "content", fullTitle);
    updateMetaTag('meta[name="twitter:description"]', "content", description);
    updateMetaTag('meta[name="twitter:image"]', "content", `${siteUrl}${ogImage}`);
    updateMetaTag('meta[name="twitter:creator"]', "content", "@dekhetrends");
    updateMetaTag('meta[name="twitter:site"]', "content", "@dekhetrends");

    // Article specific meta tags
    if (publishedTime) {
      updateMetaTag('meta[property="article:published_time"]', "content", publishedTime);
    }
    if (modifiedTime) {
      updateMetaTag('meta[property="article:modified_time"]', "content", modifiedTime);
    }
    if (author) {
      updateMetaTag('meta[property="article:author"]', "content", author);
    }

    // Canonical URL
    updateLinkTag("canonical", canonicalUrl);

    // Additional SEO tags
    updateMetaTag('meta[name="theme-color"]', "content", "#8b5cf6");
    updateMetaTag('meta[name="apple-mobile-web-app-capable"]', "content", "yes");
    updateMetaTag('meta[name="apple-mobile-web-app-status-bar-style"]', "content", "black-translucent");

  }, [fullTitle, description, keywords, ogImage, ogType, currentUrl, canonicalUrl, author, publishedTime, modifiedTime, siteUrl]);

  return null;
}

// Structured Data Component for JSON-LD
interface StructuredDataProps {
  type: "Organization" | "Article" | "Service" | "WebPage" | "FAQPage" | "BreadcrumbList";
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = `structured-data-${type.toLowerCase()}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };

    script.textContent = JSON.stringify(structuredData);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [type, data]);

  return null;
}

