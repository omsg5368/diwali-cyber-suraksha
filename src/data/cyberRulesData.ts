import { CyberRule } from '../types';

export const CYBER_RULES: CyberRule[] = [
  {
    id: "rule-1",
    number: "01",
    title: "Never Click on Random Links & WhatsApp Forwards",
    hindiSubtitle: "अज्ञात लिंक्स और व्हाट्सएप फॉरवर्ड पर कभी क्लिक न करें",
    summary: "Scammers flood festive WhatsApp groups with fake gifts, free sweets hampers, and lucky lottery links.",
    dangerDesc: "Clicking unknown links leads to malicious phishing pages designed to siphon phone data, install spyware APKs, or hijack your WhatsApp account.",
    safeAction: "Delete the message immediately. If a relative forwarded it, gently inform them that it is a scam. Never forward unverified gift links.",
    redFlags: [
      "URLs ending in odd extensions like .xyz, .top, .online, .club, or .site",
      "Headlines like 'Diwali 2026: Free ₹5,000 Cadbury Gift Box for all families!'",
      "Messages urging you to forward to 10 WhatsApp contacts to claim a prize",
      "Shortened or disguised URLs (e.g., bit.ly, tinyurl, or random IP addresses)"
    ],
    realWorldScam: "The 'Free Festive Hamper' Phishing Trap: A link promises a luxury sweets hamper from a famous brand. Once clicked, it prompts you to enter your name, address, and mobile OTP, compromising your identity and banking credentials.",
    badge: "Link Vigilance"
  },
  {
    id: "rule-2",
    number: "02",
    title: "Beware of Unrealistic '90% OFF' Discount Shopping Portals",
    hindiSubtitle: "सोशल मीडिया और अनजान वेबसाइट्स के भारी डिस्काउंट से सावधान",
    summary: "Fake e-commerce websites mimic real stores to advertise iPhones, gold coins, or designer kurtas at impossible 80% to 90% discounts.",
    dangerDesc: "These are fraudulent fly-by-night portals promoted via Instagram, Facebook, and Telegram ads. You pay via UPI/Card, the goods never arrive, and your financial data is compromised.",
    safeAction: "Remember the golden security maxim: If a festival deal seems too good to be true, it is 100% a scam. Stick strictly to verified storefronts.",
    redFlags: [
      "Brand-new iPhone 16 advertised for ₹9,999 on an unfamiliar website",
      "Cash on Delivery (COD) disabled; forcing immediate upfront UPI payment",
      "No physical address, no registered company CIN number, and non-working customer care numbers",
      "Lookalike domains with slight misspellings (e.g., amzn-festivesale.com)"
    ],
    realWorldScam: "The 'Dhamaka Festive Mega Sale' Portal: A sponsored ad on Instagram showcases dry fruit gift boxes worth ₹3,000 for just ₹299. Thousands of shoppers pay via UPI; the site vanishes 48 hours later with zero orders fulfilled.",
    badge: "Discount Shield"
  },
  {
    id: "rule-3",
    number: "03",
    title: "Shop Exclusively Through Authorized Apps & Official Portals",
    hindiSubtitle: "केवल अधिकृत ऐप्स (Amazon, Flipkart, Myntra) और आधिकारिक साइट्स से ही खरीदें",
    summary: "Conduct all festive shopping through genuine, verified applications downloaded from official app stores.",
    dangerDesc: "Rogue third-party shopping APKs and fake web wrappers can read your SMS messages, intercept 2FA OTPs, and drain your savings.",
    safeAction: "Only install apps from Google Play Store or Apple App Store. For web shopping, manually type the official URL (e.g., amazon.in, flipkart.com, myntra.com) in your browser.",
    redFlags: [
      "Links asking you to download a shopping app via WhatsApp or SMS (.apk file)",
      "Unverified third-party app stores or browser pop-up install prompts",
      "Absence of the lock icon (HTTPS) or SSL certificate warnings in the browser",
      "Website interface that looks clunky, broken, or plagiarized"
    ],
    realWorldScam: "The Fake Shopping APK: An SMS claims 'Download the Flipkart Festive Special App for extra 50% discount'. The downloaded APK requests SMS permissions and silently forwards banking OTPs to criminal syndicates.",
    badge: "Authorized Channels Only"
  },
  {
    id: "rule-4",
    number: "04",
    title: "The Golden UPI Rule: PIN is ONLY for PAYING, Never Receiving",
    hindiSubtitle: "यूपीआई पिन केवल पैसे भेजने के लिए होता है, कैशबैक पाने के लिए नहीं",
    summary: "No bank, payment app, or merchant EVER asks for a UPI PIN to credit money or festive cashback to your account.",
    dangerDesc: "Scammers pose as customer support or prize organizers and send a 'UPI Collect' request claiming 'Enter your PIN to receive ₹2,000 Dhanteras reward'. The instant you enter your PIN, money is deducted from your bank.",
    safeAction: "If anyone tells you to enter your UPI PIN, approve a notification, or scan a QR code to 'receive' money, terminate the call immediately. You NEVER need a PIN to receive funds.",
    redFlags: [
      "Caller says: 'Open Google Pay / PhonePe and enter your secret 4-digit or 6-digit PIN to claim cashback'",
      "Receiving a UPI 'Collect Request' on your payment app from an unknown VPA",
      "Scammer asking you to share your screen via AnyDesk, TeamViewer, or RustDesk",
      "Caller claiming your festive cashback is pending approval"
    ],
    realWorldScam: "The 'Dhanteras Cashback Claim' Scam: A caller claims you won a ₹1,500 festive loyalty reward from your credit card. They send a UPI collect request of ₹1,500 and ask you to 'Enter PIN to accept'. The victim loses ₹1,500 instead of gaining anything.",
    badge: "Zero-Trust UPI"
  },
  {
    id: "rule-5",
    number: "05",
    title: "Beware of Fake Courier & Delivery Address SMS Scams",
    hindiSubtitle: "फर्जी कूरियर और पार्सल डिलीवरी एसएमएस से रहें सावधान",
    summary: "With millions of festive gifts in transit, scammers send spoofed SMS claiming your courier parcel is held.",
    dangerDesc: "The message claims: 'India Post / Blue Dart: Your festive parcel could not be delivered due to incomplete house number. Click here to update address or pay ₹5 re-delivery fee'. The link leads to phishing or installs malware.",
    safeAction: "Track your orders only inside the official merchant application (Amazon, Flipkart, etc.). Never click on links in SMS messages regarding parcel delivery.",
    redFlags: [
      "SMS from a personal mobile number (+91 98xxx xxxxx) rather than a verified sender ID (like AX-AMAZON or AD-POSTS)",
      "Urgent threats: 'Parcel will be returned or destroyed within 12 hours if not verified'",
      "Demands to pay small nominal fees (₹5, ₹10) with credit card details",
      "Suspicious link like 'indiapost-parcels-update.com'"
    ],
    realWorldScam: "The ₹5 Redelivery Phishing Gate: Victim clicks an SMS link pretending to be a parcel service and enters credit card details to pay a trivial ₹5 fee. The scammers use the captured card and OTP to charge ₹50,000.",
    badge: "Courier Safety"
  }
];
