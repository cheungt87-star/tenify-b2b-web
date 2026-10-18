export interface FAQItem {
  question: string;
  answer: string;
  section?: string;
}

export interface FAQSection {
  id: string;
  title: string;
  faqs: FAQItem[];
}

export const FAQ_DATA: FAQSection[] = [
  {
    id: "getting-started",
    title: "Getting started",
    faqs: [
      {
        question: "What is Tenify?",
        answer:
          "Tenify is an app that helps you inspect a property and create a photo report documenting its condition. You go through each room, take photos, rate what you see, and get a report you can save and share.",
      },
      {
        question: "Who is Tenify for: tenants, landlords, or both?",
        answer:
          "All three. Tenants use it to document condition at move-in or move-out. Landlords use it before or after a tenancy. Agents and property managers use it for inspections and documentation.",
      },
      {
        question: "How much does Tenify cost?",
        answer:
          "Reports are free until 31 December 2026. We'll let you know before any charge starts. See Payments for details.",
      },
      {
        question: "Do I need an account to use Tenify?",
        answer:
          "Yes. An account keeps your reports safe and lets you find them again. Sign-up takes a minute.",
      },
      {
        question: "Which devices does Tenify work on?",
        answer: "iPhone only for now. Android is planned.",
      },
      {
        question: "Do I need an internet connection to inspect a property?",
        answer:
          "No. You can inspect and take photos offline. You need a connection when you save your report, because that uploads it.",
      },
    ],
  },
  {
    id: "account",
    title: "My account",
    faqs: [
      {
        question: "How do I create an account?",
        answer:
          "Open the app, tap Sign up, and enter your name, email and a password. You can also continue with Apple or Google.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Tap Forgot password on the sign-in screen and enter your email. We'll send a reset link. Follow it to set a new password.",
      },
      {
        question: "Can I use my account on more than one device?",
        answer:
          "Yes. Sign in with the same account on each device. Drafts stay on that phone only. Your finished reports appear on every device you sign into.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Go to Profile, tap Delete account, and confirm. This can't be undone.",
      },
    ],
  },
  {
    id: "using-app",
    title: "Using the app",
    faqs: [
      {
        question: "How do I start a new inspection?",
        answer: "Tap New inspection on the home screen and follow the steps.",
      },
      {
        question: "What does the 1 to 5 condition scale mean?",
        answer: "1: Poor, 2: Worn, 3: Fair, 4: Good, 5: Excellent.",
      },
      {
        question: "How many photos can I add per item?",
        answer: "Up to 3 photos per item.",
      },
      {
        question: "Can I pause an inspection and come back later?",
        answer:
          "Yes. Your progress is saved on your phone. Close the app and come back when you're ready.",
      },
      {
        question: "What if I lose signal during an inspection?",
        answer:
          "Keep going. Everything works offline. Connect to Wi-Fi or mobile data when you save.",
      },
    ],
  },
  {
    id: "reports",
    title: "Inspection reports",
    faqs: [
      {
        question: "How do I generate a report?",
        answer:
          "Finish the rooms, then tap Preview report. Check it, then tap Save report.",
      },
      {
        question: "What is included in a report?",
        answer:
          "Property and contact details, a summary of findings, recommended actions, room-by-room results, furnishings and fixtures with ratings, photos and comments.",
      },
      {
        question: "How do I share a report?",
        answer: "Open the report and tap Share. Pick an app, or copy a link.",
      },
      {
        question: "What does 'Copy link' do, and how long does the link work?",
        answer:
          "It creates a private link to the report. Anyone with the link can open it. The link works for 7 days. Create a new one after that.",
      },
      {
        question: "Can I download a report as a PDF?",
        answer:
          "Yes. Reports are PDFs. Use Share and choose Save to Files.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    faqs: [
      {
        question: "Do I have to pay to use Tenify?",
        answer:
          "Not right now. Reports are free until 31 December 2026.",
      },
      {
        question: "What will a report cost after 31 December 2026?",
        answer:
          "400 dirhams. We'll show it before you pay.",
      },
      {
        question: "Which payment methods can I use?",
        answer:
          "Payment is handled by Apple, using the payment method on your Apple ID.",
      },
    ],
  },
  {
    id: "using-reports",
    title: "Using property inspection reports",
    faqs: [
      {
        question: "Why should I conduct a property inspection?",
        answer:
          "Property inspections create a timestamped record of condition that protects all parties involved. Having documented evidence helps prevent disputes about what existed at the time of inspection, and provides clear reference if questions about condition arise later.",
      },
      {
        question: "Is a Tenify report legally binding and will Ejari or RERA accept it?",
        answer:
          "A Tenify report isn't a signed legal document like an official check-in form. But it's powerful—it's a timestamped record with photos and comments documenting property condition. Without proof, disputes come down to one party's word against another's. With a Tenify report, both parties can review the same photos and facts. It's not an official Ejari or RERA document, but it's way better than having nothing in a disagreement about property condition.",
      },
      {
        question: "Should I share the report with other parties?",
        answer:
          "Yes. Sharing the report creates a mutual record and shows transparency. All relevant parties can refer to the same documented evidence if questions arise later. Share promptly after the inspection to ensure timely communication.",
      },
      {
        question: "Does Tenify replace an official condition report or check-in form?",
        answer:
          "No. Many leases and agreements require an official condition report or check-in form signed by all parties. Use Tenify as a supplement, not a replacement. Use both: the official form for legal protection and Tenify for detailed documentation and photos.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and data",
    faqs: [
      {
        question: "What data does Tenify collect?",
        answer:
          "Account details: name, email, account type. Property and contact details you enter. Inspection answers, comments and photos saved in a report.",
      },
      {
        question: "Where are photos and reports stored?",
        answer:
          "Photos stay on your phone until you save. When you save, reports are uploaded to secure cloud storage and the copy on your phone is deleted.",
      },
      {
        question: "Who can see reports?",
        answer:
          "Only the account holder and anyone they choose to share the report with.",
      },
      {
        question: "Does Tenify share my data with third parties?",
        answer: "No. We don't share data with third parties.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Reports are stored in secure cloud storage with encryption. Only the account holder can access reports, and they control who sees them through sharing settings. Accounts are protected by sign-in. For full details, see our Privacy Policy.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    faqs: [
      {
        question: "I tap 'Save report' and nothing happens.",
        answer:
          "Update to the latest version from the App Store and try again. Make sure you're online. Still stuck? Email hello@tenify.ae. Don't delete the app, as the inspection is still on your phone.",
      },
      {
        question: "I cannot sign in.",
        answer:
          "Check that your email and password are correct. Try Forgot password. If you signed up with Apple or Google, use Continue with Apple or Continue with Google instead.",
      },
      {
        question: "Saved reports are missing on a new phone.",
        answer:
          "Sign in with the same account and reports will appear. They're stored in the cloud, so they work on every phone you sign into.",
      },
      {
        question: "The camera will not open.",
        answer:
          "Go to iPhone Settings, then Tenify, and turn on Camera.",
      },
      {
        question: "How do I contact support?",
        answer:
          "Email hello@tenify.ae. We reply within 24 hours.",
      },
    ],
  },
];

// Get all FAQs flattened for simple list views
export function getAllFAQs(): FAQItem[] {
  return FAQ_DATA.flatMap((section) =>
    section.faqs.map((faq) => ({ ...faq, section: section.title }))
  );
}

// Get FAQs for homepage (subset of most relevant ones)
export function getHomepageFAQs(count = 5): FAQItem[] {
  const allFAQs = getAllFAQs();
  return allFAQs.slice(0, count);
}
