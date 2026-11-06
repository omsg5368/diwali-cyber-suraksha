import { DiyaItem } from '../types';

export const FESTIVE_SHLOKAS = [
  {
    shloka: "ॐ नमो भगवते महासुदर्शनाय वासुदेवाय धन्वन्तरयेः अमृतकलश हस्ताय सर्वभय विनाशाय सर्वरोगनिवारणाय त्रिलोकपतये त्रिलोकनाथाय श्री महाविष्णुस्वरूप श्रीधन्वन्तरि स्वरूप श्री श्री श्री औषधचक्र नारायणाय नमः॥",
    translation: "Salutations to Lord Dhanvantari, who holds the nectar of life, dispels all fear, cures all ailments, and brings health and longevity.",
    deity: "Lord Dhanvantari (Dhanteras)"
  },
  {
    shloka: "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद श्रीं ह्रीं श्रीं ॐ महालक्ष्म्यै नमः॥",
    translation: "Salutations to Goddess Mahalakshmi, the embodiment of auspicious fortune, abundance, grace, and noble prosperity.",
    deity: "Maa Mahalakshmi (Deepavali)"
  },
  {
    shloka: "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय। मृत्योर्मा अमृतं गमय। ॐ शान्तिः शान्तिः शान्तिः॥",
    translation: "Lead us from falsehood to truth, from darkness into light, from mortality to immortality. May peace prevail.",
    deity: "Upanishadic Invocation (Festival of Lights)"
  }
];

export const INITIAL_DIYAS: DiyaItem[] = [
  {
    id: 1,
    title: "Diya of Health (Arogya)",
    hindiTitle: "आरोग्य दीप",
    blessing: "May Lord Dhanvantari bless our parents, elders, and loved ones with enduring vitality, sound mind, and radiant health.",
    cyberPrinciple: "Healthy Digital Habits: Never rush into online offers. Pause and reflect before clicking any link.",
    isLit: false,
  },
  {
    id: 2,
    title: "Diya of Prosperity (Samriddhi)",
    hindiTitle: "समृद्धि दीप",
    blessing: "May Goddess Mahalakshmi fill your home with noble wealth, honest abundance, and peace of mind this festive season.",
    cyberPrinciple: "Protected Hard-Earned Wealth: Guard your bank balance. Never share UPI PINs or OTPs for 'cashback'.",
    isLit: false,
  },
  {
    id: 3,
    title: "Diya of Wisdom (Vidya & Vivek)",
    hindiTitle: "विवेक दीप",
    blessing: "May the divine flame grant discerning wisdom to distinguish genuine blessings from illusory deceit.",
    cyberPrinciple: "Cyber Discretion: Always verify domain names and reject too-good-to-be-true 90% discount traps.",
    isLit: false,
  },
  {
    id: 4,
    title: "Diya of Family Unity (Prem & Shanti)",
    hindiTitle: "प्रेम एवं शांति दीप",
    blessing: "May the laughter of children, warmth of siblings, and contentment of elders illuminate our family home.",
    cyberPrinciple: "Community Protection: When you spot a scam WhatsApp forward, warn the family group immediately.",
    isLit: false,
  },
  {
    id: 5,
    title: "Diya of Cyber Shield (Suraksha)",
    hindiTitle: "सुरक्षा दीप",
    blessing: "May our entire family circle stay shielded from predatory scammers, deceptive schemes, and digital harms.",
    cyberPrinciple: "Zero-Trust Shopping: Rely strictly on authorized platforms like Amazon, Flipkart, and Myntra.",
    isLit: false,
  },
];

export const DEFAULT_GREETING_TEMPLATES = {
  dhanteras: "Shubh Dhanteras! On this auspicious day of wealth and health, may Lord Dhanvantari grant you robust well-being and Maa Lakshmi bestow peace and abundance. Stay blessed, happy, and digitally secure! 🪔✨",
  diwali: "Wishing you and all family members a luminous, joyous, and prosperous Deepavali! May the sacred diyas illuminate your life with peace, joy, and success. Happy Diwali! 🪔🎆",
  both: "Warmest greetings of Shubh Dhanteras and Happy Diwali to our beloved family! May this festival of lights usher in good health, prosperity, and joy. Let us celebrate with wisdom and keep our digital homes safe! 🪔✨🛡️"
};

