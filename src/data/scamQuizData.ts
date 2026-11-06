import { QuizQuestion } from '../types';

export const SCAM_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    scenario: "A WhatsApp forward from a family group contact",
    channel: "WhatsApp",
    sender: "Uncle / Family Group Member",
    messageText: "🎉 *SHUBH DIWALI 2026 MEGA GIFT!* 🎁\nCadbury & Tata are giving *FREE ₹5,000 Diwali Chocolate & Dry Fruit Gift Hampers* to all Indian citizens! Claim yours in 2 minutes before stocks end:\n👉 http://cadbury-diwali-freegift.xyz/claim\nForward this to 5 family groups to activate your gift box!",
    isScam: true,
    correctExplanation: "This is a classic festive WhatsApp forward phishing scam! Neither Cadbury nor Tata conducts giveaways on unverified .xyz domains. Forwarding requirements are designed to exploit family trust and make the scam viral.",
    cyberRedFlags: [
      "Suspicious top-level domain (.xyz instead of official corporate domain)",
      "Unbelievable promise of free expensive goods to everyone",
      "Demand to forward to other WhatsApp groups (social virality hook)",
      "Insecure unencrypted HTTP protocol"
    ],
    safetyTip: "Never click or forward such links. Inform the family member privately that their message is a known cyber scam."
  },
  {
    id: 2,
    scenario: "Instagram Sponsored Ad showing 90% Discount on iPhone 16",
    channel: "Instagram Ad",
    sender: "Sponsored: 'Flipkart Dhamaka Deals 2026'",
    messageText: "🔥 *FESTIVE FLASH CLEARANCE!* 🔥\nBrand new Apple iPhone 16 Pro (128GB) for just *₹8,999* (Original: ₹1,19,900)! Only 25 units left for Dhanteras.\nBuy directly on: www.flipkart-superdeals-sale.top\n*Hurry, offer expires in 14 minutes! Prepaid UPI Only.*",
    isScam: true,
    correctExplanation: "This is a predatory counterfeit shopping site! No legitimate vendor sells a brand-new ₹1,20,000 flagship phone for ₹8,999. Notice the fake domain 'flipkart-superdeals-sale.top' (not the authentic flipkart.com) and the pressure to pay via UPI immediately.",
    cyberRedFlags: [
      "Absurd 90%+ discount on premium electronics",
      "Counterfeit domain name (.top domain impersonating Flipkart)",
      "Artificial countdown urgency ('Only 14 minutes left')",
      "Cash on Delivery disabled; forcing irreversible UPI advance"
    ],
    safetyTip: "Always purchase high-value electronics only through the official verified application (Flipkart/Amazon) or authorized physical stores."
  },
  {
    id: 3,
    scenario: "Phone Call offering Dhanteras Cashback",
    channel: "Phone Call",
    sender: "Unknown caller claiming to be 'Amazon Customer Support'",
    messageText: "Sir/Madam, congratulations! You have been selected as our Lucky Festive Customer and won ₹3,500 Diwali loyalty cashback. I have sent a reward request to your PhonePe/Google Pay. Please open your app now and enter your 4-digit or 6-digit UPI PIN to claim the ₹3,500 into your bank.",
    isScam: true,
    correctExplanation: "This is a fraudulent UPI Collect scam! A UPI PIN is NEVER required to receive money or cashback. Entering your PIN authorizes money to be SENT from your account to the caller's bank account.",
    cyberRedFlags: [
      "Caller demanding you enter your UPI PIN to 'receive' money",
      "Unsolicited call announcing an unverified lottery win",
      "Pressure to act immediately on the call"
    ],
    safetyTip: "Golden Rule of UPI: Entering your PIN ALWAYS debits money from your account. Terminate the call and block the number immediately."
  },
  {
    id: 4,
    scenario: "SMS regarding a stuck festive courier delivery parcel",
    channel: "SMS",
    sender: "+91 98451 23419",
    messageText: "India Post Alert: Your festive gift parcel #IN98412 cannot be delivered due to an incomplete street address. Please update your address and pay ₹5 re-delivery fee within 12 hours to prevent parcel return: http://indiapost-parcels.com/update.apk",
    isScam: true,
    correctExplanation: "This is an APK Trojan and phishing scam! Scammers capitalize on the anxiety of missing festive gifts. The link asks you to download an Android APK file that steals your SMS OTPs and personal data, while charging unauthorized fees on your card.",
    cyberRedFlags: [
      "Sent from a random personal 10-digit mobile number, not official India Post sender header",
      "URL links to an .apk (Android application package) download",
      "Demanding a trivial ₹5 fee to capture sensitive credit/debit card details",
      "False urgency: 'Parcel will be returned within 12 hours'"
    ],
    safetyTip: "Never download APK files from SMS. Check parcel statuses only on the official indiapost.gov.in portal or inside the app where you placed the original order."
  },
  {
    id: 5,
    scenario: "Push Notification inside the official Amazon India application",
    channel: "Official App",
    sender: "Amazon India App (Installed from Google Play Store)",
    messageText: "Great Indian Festival: Dhanteras Special Gold Coins & Kitchen Appliances now live. Enjoy up to 10% instant bank discount on select credit cards. Tap to view deals inside the Amazon app.",
    isScam: false,
    correctExplanation: "This is a legitimate festive announcement! It appears directly inside the official verified application installed from the app store, does not ask for UPI PINs or external link clicks, and applies authentic bank partner discounts through official checkout.",
    cyberRedFlags: [],
    safetyTip: "Official in-app notifications and verified storefront pages are the safest way to browse and shop for festive deals."
  }
];

