import { AuthorizedApp } from '../types';

export const AUTHORIZED_APPS: AuthorizedApp[] = [
  {
    name: "Amazon India",
    category: "Festive Electronics, Gold, Home & Gifts",
    officialDomain: "amazon.in",
    officialAppStore: "Amazon India Shop on Google Play / Apple App Store",
    description: "Primary authorized e-commerce ecosystem for Great Indian Festival and festive deals in India.",
    howToVerify: [
      "Always ensure the web URL starts with https://www.amazon.in/ (not .xyz or amazon-deals.com)",
      "Look for the verified developer 'Amazon Mobile LLC' on Google Play Store",
      "Check that your order updates appear directly inside the 'Your Orders' tab"
    ],
    fakeCloneExamples: [
      "amazon-festive-deals.xyz",
      "amzon-diwali-luckybox.online",
      "amazon-spin-wheel-reward.top"
    ]
  },
  {
    name: "Flipkart",
    category: "Big Billion Days, Fashion, Electronics & Appliances",
    officialDomain: "flipkart.com",
    officialAppStore: "Flipkart: Online Shopping App on Google Play / Apple App Store",
    description: "Official authorized platform for genuine brand deals, SuperCoins, and festive discounts.",
    howToVerify: [
      "Official domain is exclusively flipkart.com (notice exact spelling)",
      "Look for 'Flipkart Internet Private Limited' as the verified app developer",
      "All authentic contests and scratch cards are hosted strictly inside the app, never on external WhatsApp links"
    ],
    fakeCloneExamples: [
      "flipkart-dhamaka-offers.site",
      "fl1pkart-festive-sale.com",
      "flipkart-diwali-lottery.in"
    ]
  },
  {
    name: "Myntra",
    category: "Ethnic Festive Wear, Kurtas, Sarees & Designer Fashion",
    officialDomain: "myntra.com",
    officialAppStore: "Myntra: Fashion Shopping App on Google Play / Apple App Store",
    description: "Trusted authorized fashion destination for authentic traditional attire for Dhanteras and Diwali puja.",
    howToVerify: [
      "Official domain is strictly https://www.myntra.com/",
      "Verified developer is 'Myntra Designs Pvt. Ltd.'",
      "Return and refund policies are explicitly documented in your app account"
    ],
    fakeCloneExamples: [
      "myntra-ethnic-dhamaka.top",
      "myntra-fashion-loot.xyz",
      "buy-myntra-festive.shop"
    ]
  },
  {
    name: "Tata Neu & Tata CLiQ",
    category: "Tanishq Gold, Electronics (Croma), Luxury & Home",
    officialDomain: "tataneu.com / tatacliq.com",
    officialAppStore: "Tata Neu / Tata CLiQ on official app stores",
    description: "Official Tata enterprise platforms for authentic Tanishq Dhanteras gold coins, jewelry, and electronics.",
    howToVerify: [
      "Verify 'Tata Digital Limited' as the registered entity",
      "Official domains end in tataneu.com, tatacliq.com, or tanishq.co.in",
      "Official gold coin purchases always include a tamper-evident assay certification"
    ],
    fakeCloneExamples: [
      "tanishq-gold-free-gift.online",
      "tata-diwali-lottery-reward.site",
      "croma-clearance-festive.shop"
    ]
  },
  {
    name: "Ajio (Reliance Retail)",
    category: "Handcrafted Festive Ethnic Wear & Footwear",
    officialDomain: "ajio.com",
    officialAppStore: "Ajio: Online Shopping App on Google Play / Apple App Store",
    description: "Authorized digital fashion arm of Reliance Retail with verified merchant accountability.",
    howToVerify: [
      "Verify https://www.ajio.com/ in the browser address bar",
      "Published and maintained by 'Reliance Retail Ltd.'",
      "Official customer service accessible directly through registered customer portal"
    ],
    fakeCloneExamples: [
      "ajio-festive-clearance.xyz",
      "reliance-diwali-gift.shop",
      "ajio-special-loot.top"
    ]
  }
];

export const SAFE_CHECK_PRESETS = [
  { url: "https://www.amazon.in/gp/goldbox", isSafe: true, reason: "Legitimate Amazon India domain (amazon.in) with valid HTTPS." },
  { url: "https://www.flipkart.com/the-big-billion-days-store", isSafe: true, reason: "Legitimate Flipkart India official domain (flipkart.com)." },
  { url: "https://www.myntra.com/festive-ethnic-wear", isSafe: true, reason: "Legitimate Myntra fashion domain (myntra.com) with official encryption." },
  { url: "http://diwali-free-gold-gift.xyz/claim-now", isSafe: false, reason: "Dangerous Scam! Uses sketchy .xyz TLD, non-SSL http protocol, and bait keywords." },
  { url: "http://amzon-festive-sale.top/iphone-999", isSafe: false, reason: "Dangerous Typosquatting! Misspelled 'amzon' with fake .top extension advertising ₹999 iPhone." },
  { url: "https://indiapost-parcels-update.com/pay-five-rupees", isSafe: false, reason: "Dangerous Phishing! Official India Post uses indiapost.gov.in, not commercial .com domains." },
  { url: "https://cybercrime.gov.in", isSafe: true, reason: "Official Government of India National Cybercrime Reporting Portal (.gov.in)." }
];

