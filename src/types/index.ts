export interface Recipient {
  name: string;
  year: number;
  description: string;
  photo: string;
}

export interface Event {
  title: string;
  date: string;
  description: string;
  link?: string;
  comingSoon?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Donor {
  name: string;
  tier: string;
  amount: string;
  description: string;
}

