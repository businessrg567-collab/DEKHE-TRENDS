#!/bin/bash
# Script to verify all blog post URLs using curl

BASE_URL="http://localhost:5000"
API_URL="${BASE_URL}/api/posts"

echo "========================================"
echo "  BLOG POSTS URL VERIFICATION"
echo "========================================"
echo ""

# All 20 blog post slugs
declare -a SLUGS=(
    "future-consumer-behavior-gen-z-millennials-2025"
    "sustainable-business-practices-competitive-advantage-2025"
    "artificial-intelligence-marketing-customer-engagement-2025"
    "voice-commerce-shopping-behavior-2025"
    "social-commerce-revolution-shopping-social-media-2025"
    "metaverse-virtual-commerce-digital-frontier-2025"
    "micro-influencer-marketing-smaller-audiences-bigger-results-2025"
    "circular-economy-business-models-sustainability-value-2025"
    "hyper-personalization-one-to-one-customer-experiences-2025"
    "subscription-economy-recurring-revenue-models-2025"
    "blockchain-web3-digital-ownership-brand-consumer-relationships-2025"
    "omnichannel-retail-seamless-customer-experiences-2025"
    "video-marketing-dominance-attention-economy-2025"
    "privacy-first-marketing-data-privacy-regulations-2025"
    "creator-economy-content-creators-media-companies-2025"
    "augmented-reality-shopping-try-before-you-buy-2025"
    "purpose-driven-brands-social-impact-business-value-2025"
    "future-ecommerce-trends-online-retail-2025"
    "community-led-growth-brand-building-community-engagement-2025"
    "data-driven-decision-making-marketing-analytics-insights-2025"
)

echo "Step 1: Checking API endpoint..."
echo "GET ${API_URL}"
echo ""

if curl -s -f "${API_URL}" > /dev/null 2>&1; then
    POST_COUNT=$(curl -s "${API_URL}" | jq '. | length' 2>/dev/null || echo "0")
    echo "✓ API endpoint is accessible"
    echo "  Found ${POST_COUNT} blog posts"
    echo ""
else
    echo "✗ API endpoint failed"
    echo "  Make sure the server is running on port 5000"
    exit 1
fi

echo "Step 2: Verifying individual blog post URLs..."
echo ""

SUCCESS=0
FAILED=0

for SLUG in "${SLUGS[@]}"; do
    POST_API_URL="${API_URL}/${SLUG}"
    
    echo -n "Testing: ${SLUG} ... "
    
    HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "${POST_API_URL}")
    
    if [ "${HTTP_CODE}" = "200" ]; then
        echo "✓ OK (${HTTP_CODE})"
        SUCCESS=$((SUCCESS + 1))
    else
        echo "✗ FAILED (${HTTP_CODE})"
        FAILED=$((FAILED + 1))
    fi
done

echo ""
echo "========================================"
echo "  VERIFICATION SUMMARY"
echo "========================================"
echo ""
echo "Total Blog Posts: ${#SLUGS[@]}"
echo "✓ Successful: ${SUCCESS}"
echo "✗ Failed: ${FAILED}"
echo ""

if [ "${SUCCESS}" -eq "${#SLUGS[@]}" ]; then
    echo "🎉 ALL BLOG POSTS ARE ACCESSIBLE!"
else
    echo "⚠ Some blog posts need attention"
    echo ""
    echo "To seed missing posts, run:"
    echo "  curl -X POST ${BASE_URL}/api/posts/seed"
fi

echo ""
echo "All API URLs:"
for SLUG in "${SLUGS[@]}"; do
    echo "  ${API_URL}/${SLUG}"
done

