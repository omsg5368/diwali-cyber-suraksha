export interface DiyaItem {
  id: number;
  title: string;
  hindiTitle: string;
  blessing: string;
  cyberPrinciple: string;
  isLit: boolean;
}

export interface CyberRule {
  id: string;
  number: string;
  title: string;
  hindiSubtitle: string;
  summary: string;
  dangerDesc: string;
  safeAction: string;
  redFlags: string[];
  realWorldScam: string;
  badge: string;
}

export interface AuthorizedApp {
  name: string;
  category: string;
  officialDomain: string;
  officialAppStore: string;
  description: string;
  howToVerify: string[];
  fakeCloneExamples: string[];
}

export interface QuizQuestion {
  id: number;
  scenario: string;
  channel: 'WhatsApp' | 'Instagram Ad' | 'Phone Call' | 'SMS' | 'Official App';
  sender: string;
  messageText: string;
  isScam: boolean;
  correctExplanation: string;
  cyberRedFlags: string[];
  safetyTip: string;
}

export interface CustomCardState {
  recipientName: string;
  occasion: 'dhanteras' | 'diwali' | 'both';
  senderName: string;
  customBlessing: string;
  includeCyberTips: boolean;
}
