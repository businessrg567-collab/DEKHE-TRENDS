const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// All routes from App.tsx
const routes = [
  // Main Pages
  { path: '/', file: 'client/src/pages/Home.tsx', name: 'Home' },
  { path: '/services', file: 'client/src/pages/Services.tsx', name: 'Services' },
  { path: '/industries', file: 'client/src/pages/Industries.tsx', name: 'Industries' },
  { path: '/insights', file: 'client/src/pages/Insights.tsx', name: 'Insights' },
  { path: '/insights/:slug', file: 'client/src/pages/PostDetail.tsx', name: 'PostDetail (Dynamic)' },
  { path: '/about', file: 'client/src/pages/About.tsx', name: 'About' },
  { path: '/audit', file: 'client/src/pages/Audit.tsx', name: 'Audit' },
  { path: '/contact', file: 'client/src/pages/Contact.tsx', name: 'Contact' },
  { path: '/privacy-policy', file: 'client/src/pages/PrivacyPolicy.tsx', name: 'Privacy Policy' },
  { path: '/terms-of-service', file: 'client/src/pages/TermsOfService.tsx', name: 'Terms of Service' },
  { path: '/sitemap', file: 'client/src/pages/Sitemap.tsx', name: 'Sitemap' },
  
  // Service Pages
  { path: '/services/trend-reporting', file: 'client/src/pages/services/TrendReporting.tsx', name: 'Trend Reporting' },
  { path: '/services/competitor-intelligence', file: 'client/src/pages/services/CompetitorIntelligence.tsx', name: 'Competitor Intelligence' },
  { path: '/services/product-validation', file: 'client/src/pages/services/ProductValidation.tsx', name: 'Product Validation' },
  { path: '/services/growth-strategy', file: 'client/src/pages/services/GrowthStrategy.tsx', name: 'Growth Strategy' },
  { path: '/services/brand-strategy', file: 'client/src/pages/services/BrandStrategy.tsx', name: 'Brand Strategy' },
  { path: '/services/content-marketing', file: 'client/src/pages/services/ContentMarketing.tsx', name: 'Content Marketing' },
  { path: '/services/social-media-strategy', file: 'client/src/pages/services/SocialMediaStrategy.tsx', name: 'Social Media Strategy' },
  { path: '/services/seo-strategy', file: 'client/src/pages/services/SEOStrategy.tsx', name: 'SEO Strategy' },
  { path: '/services/email-marketing', file: 'client/src/pages/services/EmailMarketing.tsx', name: 'Email Marketing' },
  { path: '/services/influencer-marketing', file: 'client/src/pages/services/InfluencerMarketing.tsx', name: 'Influencer Marketing' },
  { path: '/services/paid-advertising', file: 'client/src/pages/services/PaidAdvertising.tsx', name: 'Paid Advertising' },
  { path: '/services/conversion-optimization', file: 'client/src/pages/services/ConversionOptimization.tsx', name: 'Conversion Optimization' },
  { path: '/services/customer-retention', file: 'client/src/pages/services/CustomerRetention.tsx', name: 'Customer Retention' },
  { path: '/services/market-research', file: 'client/src/pages/services/MarketResearch.tsx', name: 'Market Research' },
  { path: '/services/digital-transformation', file: 'client/src/pages/services/DigitalTransformation.tsx', name: 'Digital Transformation' },
  { path: '/services/ecommerce-strategy', file: 'client/src/pages/services/EcommerceStrategy.tsx', name: 'Ecommerce Strategy' },
  { path: '/services/community-building', file: 'client/src/pages/services/CommunityBuilding.tsx', name: 'Community Building' },
  { path: '/services/video-marketing', file: 'client/src/pages/services/VideoMarketing.tsx', name: 'Video Marketing' },
  { path: '/services/data-analytics', file: 'client/src/pages/services/DataAnalytics.tsx', name: 'Data Analytics' },
  { path: '/services/crisis-management', file: 'client/src/pages/services/CrisisManagement.tsx', name: 'Crisis Management' },
  
  // City Pages
  { path: '/mumbai', file: 'client/src/pages/cities/Mumbai.tsx', name: 'Mumbai' },
  { path: '/delhi', file: 'client/src/pages/cities/Delhi.tsx', name: 'Delhi' },
  { path: '/bangalore', file: 'client/src/pages/cities/Bangalore.tsx', name: 'Bangalore' },
  { path: '/hyderabad', file: 'client/src/pages/cities/Hyderabad.tsx', name: 'Hyderabad' },
  { path: '/chennai', file: 'client/src/pages/cities/Chennai.tsx', name: 'Chennai' },
  { path: '/kolkata', file: 'client/src/pages/cities/Kolkata.tsx', name: 'Kolkata' },
  { path: '/pune', file: 'client/src/pages/cities/Pune.tsx', name: 'Pune' },
  { path: '/ahmedabad', file: 'client/src/pages/cities/Ahmedabad.tsx', name: 'Ahmedabad' },
  { path: '/jaipur', file: 'client/src/pages/cities/Jaipur.tsx', name: 'Jaipur' },
  { path: '/surat', file: 'client/src/pages/cities/Surat.tsx', name: 'Surat' },
  { path: '/lucknow', file: 'client/src/pages/cities/Lucknow.tsx', name: 'Lucknow' },
  { path: '/kanpur', file: 'client/src/pages/cities/Kanpur.tsx', name: 'Kanpur' },
  { path: '/nagpur', file: 'client/src/pages/cities/Nagpur.tsx', name: 'Nagpur' },
  { path: '/indore', file: 'client/src/pages/cities/Indore.tsx', name: 'Indore' },
  { path: '/thane', file: 'client/src/pages/cities/Thane.tsx', name: 'Thane' },
  { path: '/bhopal', file: 'client/src/pages/cities/Bhopal.tsx', name: 'Bhopal' },
  { path: '/visakhapatnam', file: 'client/src/pages/cities/Visakhapatnam.tsx', name: 'Visakhapatnam' },
  { path: '/patna', file: 'client/src/pages/cities/Patna.tsx', name: 'Patna' },
  { path: '/vadodara', file: 'client/src/pages/cities/Vadodara.tsx', name: 'Vadodara' },
  { path: '/ludhiana', file: 'client/src/pages/cities/Ludhiana.tsx', name: 'Ludhiana' },
];

// Static files
const staticFiles = [
  { path: '/sitemap.html', file: 'public/sitemap.html', name: 'HTML Sitemap (Static)' },
  { path: '/sitemap.xml', file: 'public/sitemap.xml', name: 'XML Sitemap (Static)' },
  { path: '/robots.txt', file: 'public/robots.txt', name: 'Robots.txt (Static)' },
];

function checkFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  const exists = fs.existsSync(fullPath);
  
  if (!exists) {
    return { exists: false, hasExport: false, error: 'File not found' };
  }
  
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    const hasDefaultExport = /export\s+default/.test(content);
    const hasNamedExport = /export\s+(const|function|class|let)\s+\w+/.test(content);
    
    return {
      exists: true,
      hasExport: hasDefaultExport || hasNamedExport,
      hasDefaultExport,
      size: fs.statSync(fullPath).size,
      lines: content.split('\n').length,
    };
  } catch (error) {
    return { exists: true, hasExport: false, error: error.message };
  }
}

function verifyPages() {
  console.log('\n' + '='.repeat(80));
  console.log(colors.cyan + '🔍 VERIFYING ALL PAGES AND ROUTES' + colors.reset);
  console.log('='.repeat(80) + '\n');
  
  let totalRoutes = 0;
  let verifiedRoutes = 0;
  let failedRoutes = [];
  let warnings = [];
  
  // Verify React Routes
  console.log(colors.blue + '📄 REACT ROUTES (SPA Pages)' + colors.reset);
  console.log('-'.repeat(80));
  
  routes.forEach((route, index) => {
    totalRoutes++;
    const result = checkFile(route.file);
    
    if (result.exists && result.hasExport) {
      verifiedRoutes++;
      const status = result.hasDefaultExport ? '✅' : '⚠️';
      const exportType = result.hasDefaultExport ? 'default export' : 'named export';
      console.log(`${status} [${String(index + 1).padStart(2, '0')}] ${route.path.padEnd(40)} → ${route.name}`);
      console.log(`    ${colors.green}✓${colors.reset} File: ${route.file}`);
      console.log(`    ${colors.green}✓${colors.reset} ${exportType} found`);
      console.log(`    ${colors.cyan}ℹ${colors.reset} Size: ${(result.size / 1024).toFixed(2)} KB, Lines: ${result.lines}`);
      
      if (!result.hasDefaultExport) {
        warnings.push(`${route.path} - Uses named export instead of default`);
      }
    } else {
      failedRoutes.push(route);
      console.log(`${colors.red}❌${colors.reset} [${String(index + 1).padStart(2, '0')}] ${route.path.padEnd(40)} → ${route.name}`);
      console.log(`    ${colors.red}✗${colors.reset} File: ${route.file}`);
      if (result.error) {
        console.log(`    ${colors.red}✗${colors.reset} Error: ${result.error}`);
      } else if (!result.exists) {
        console.log(`    ${colors.red}✗${colors.reset} File does not exist`);
      } else if (!result.hasExport) {
        console.log(`    ${colors.red}✗${colors.reset} No export found`);
      }
    }
    console.log('');
  });
  
  // Verify Static Files
  console.log('\n' + colors.blue + '📁 STATIC FILES (Public Folder)' + colors.reset);
  console.log('-'.repeat(80));
  
  staticFiles.forEach((file, index) => {
    totalRoutes++;
    const result = checkFile(file.file);
    
    if (result.exists) {
      verifiedRoutes++;
      console.log(`${colors.green}✅${colors.reset} [${String(routes.length + index + 1).padStart(2, '0')}] ${file.path.padEnd(40)} → ${file.name}`);
      console.log(`    ${colors.green}✓${colors.reset} File: ${file.file}`);
      console.log(`    ${colors.cyan}ℹ${colors.reset} Size: ${(result.size / 1024).toFixed(2)} KB, Lines: ${result.lines}`);
    } else {
      failedRoutes.push(file);
      console.log(`${colors.red}❌${colors.reset} [${String(routes.length + index + 1).padStart(2, '0')}] ${file.path.padEnd(40)} → ${file.name}`);
      console.log(`    ${colors.red}✗${colors.reset} File: ${file.file}`);
      console.log(`    ${colors.red}✗${colors.reset} File does not exist`);
    }
    console.log('');
  });
  
  // Summary
  console.log('\n' + '='.repeat(80));
  console.log(colors.cyan + '📊 VERIFICATION SUMMARY' + colors.reset);
  console.log('='.repeat(80));
  console.log(`Total Routes:     ${totalRoutes}`);
  console.log(`${colors.green}Verified:          ${verifiedRoutes}${colors.reset}`);
  console.log(`${colors.red}Failed:            ${failedRoutes.length}${colors.reset}`);
  console.log(`${colors.yellow}Warnings:          ${warnings.length}${colors.reset}`);
  
  if (warnings.length > 0) {
    console.log('\n' + colors.yellow + '⚠️  WARNINGS:' + colors.reset);
    warnings.forEach(warning => {
      console.log(`  • ${warning}`);
    });
  }
  
  if (failedRoutes.length > 0) {
    console.log('\n' + colors.red + '❌ FAILED ROUTES:' + colors.reset);
    failedRoutes.forEach(route => {
      console.log(`  • ${route.path} → ${route.file}`);
    });
    console.log('\n' + colors.red + 'Please fix the above issues before deploying.' + colors.reset);
    process.exit(1);
  } else {
    console.log('\n' + colors.green + '✅ ALL PAGES VERIFIED SUCCESSFULLY!' + colors.reset);
    console.log(colors.green + '🚀 Your website is ready to deploy!' + colors.reset);
  }
  
  // Generate URL list
  console.log('\n' + '='.repeat(80));
  console.log(colors.cyan + '🌐 ALL VERIFIED URLs' + colors.reset);
  console.log('='.repeat(80));
  console.log('\n' + colors.blue + 'Local Development URLs:' + colors.reset);
  routes.forEach(route => {
    if (!route.path.includes(':')) {
      console.log(`  http://localhost:5000${route.path}`);
    }
  });
  staticFiles.forEach(file => {
    console.log(`  http://localhost:5000${file.path}`);
  });
  
  console.log('\n' + colors.blue + 'Production URLs:' + colors.reset);
  routes.forEach(route => {
    if (!route.path.includes(':')) {
      console.log(`  https://dekhetrends.com${route.path}`);
    }
  });
  staticFiles.forEach(file => {
    console.log(`  https://dekhetrends.com${file.path}`);
  });
  
  console.log('\n');
}

// Run verification
verifyPages();

