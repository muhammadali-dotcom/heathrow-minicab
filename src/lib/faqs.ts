export type Faq = {
  id: string;
  question: string;
  answer: string;
};

// Answers as confirmed by the business. Keep them free of provider names, card types,
// cancellation cutoffs or other policy details that haven't been confirmed.
export const FAQS: Faq[] = [
  {
    id: "flight-delays",
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor your flight and adjust pickup arrangements for delays. Please also contact us if your flight is delayed so we can confirm your updated pickup details.",
  },
  {
    id: "meeting-driver",
    question: "Where will I meet my driver at Heathrow?",
    answer:
      "Your meeting arrangement is confirmed when you book. Depending on your booking, your driver will meet you inside arrivals with a name board or at an agreed pickup location. Check your confirmation and contact us if you need help.",
  },
  {
    id: "waiting-charges",
    question: "Are there any waiting charges?",
    answer:
      "Your pickup includes 15 minutes of free waiting, starting at your agreed pickup time. Charges apply after that at the rate confirmed before you book.",
  },
  {
    id: "payments",
    question: "How can I pay?",
    answer:
      "We accept cash and online payment. Please confirm your preferred payment method and any payment instructions when booking.",
  },
  {
    id: "cancellations",
    question: "Can I change or cancel my booking?",
    answer:
      "Please call us as soon as possible if you need to change or cancel your booking. We’ll confirm your options and any applicable charges before proceeding.",
  },
];
