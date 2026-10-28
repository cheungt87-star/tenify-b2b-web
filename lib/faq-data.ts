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
        question: "What can I do with Tenify?",
        answer:
          "- Inspect room by room\n- Rate the condition of furnishings and fixtures\n- Flag faulty items\n- Photograph each item\n- Generate a report and share it with other parties",
      },
      {
        question: "How much does Tenify cost?",
        answer:
          "Free until 31 December 2026. After that, 400 dirhams per report.",
      },
      {
        question: "Which devices does Tenify work on?",
        answer: "Tenify is on iPhone for now.",
      },
      {
        question: "Do I need an account to use Tenify?",
        answer:
          "Yes. An account lets you sign in and use the app. Sign-up takes a minute. Reports stay on this phone, not in your account.",
      },
      {
        question: "How long does an inspection take?",
        answer:
          "It depends on the property. A studio takes far less time than a furnished villa. You can pause and continue later.",
      },
      {
        question: "Do I need an internet connection to inspect a property?",
        answer:
          "No. You can inspect, take photos and save your report offline. A connection is only needed to sign in.",
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
        question: "Can I sign up with Apple or Google?",
        answer:
          "Yes. Tap Continue with Apple or Continue with Google on the sign-up or sign-in screen.",
      },
      {
        question: "Should I sign up as a tenant, landlord, or other?",
        answer:
          "Choose what fits you best. This just tells us how to describe you in the app and report. It doesn't change anything you can do.",
      },
      {
        question: "I already have an account. How do I sign in?",
        answer:
          "On the welcome screen, tap Sign in and use your email and password. Or tap Continue with Apple or Google. Don't create a new account—use the same one.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Tap Forgot password on the sign-in screen and enter your email. We'll send a reset link. Follow it to set a new password.",
      },
      {
        question: "I did not receive the verification or reset email. What now?",
        answer:
          "- Check your spam or junk folder.\n- Confirm the email address is spelled correctly.\n- Wait a few minutes, then request it again.\n- Still nothing? Email hello@tenify.ae from the address on your account.",
      },
      {
        question: "How do I change my name, email, or phone number?",
        answer:
          "Go to Profile and tap the detail you want to change. All fields are editable.",
      },
      {
        question: "Can I change my account type later?",
        answer:
          "Yes. Go to Profile and change your account type (tenant, landlord, or agent) anytime.",
      },
      {
        question: "Can I use my account on more than one device?",
        answer:
          "Yes. Sign in with the same account on each device. Drafts and finished reports stay on that phone only. They do not sync across devices.",
      },
      {
        question: "How do I sign out?",
        answer: "Go to Profile and tap Sign out.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Go to Profile, tap Delete account, and confirm. This can't be undone.",
      },
      {
        question: "What happens to my reports if I delete my account?",
        answer:
          "Deleting your account removes your login. Reports on this phone stay until you delete them in the app.",
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
        question: "How do I add the property and contact details?",
        answer:
          "Before you start inspecting, enter the property address and contact information for all relevant parties. These details get captured at the start and appear on the report.",
      },
      {
        question: "How do I add or rename rooms?",
        answer:
          "Tap Add room and pick from the list. If the room isn't listed, add a custom name. We review custom names and may add them to the list.",
      },
      {
        question: "What are items and how do I add a custom one?",
        answer:
          "Items are the things you inspect in each room, such as the sofa, walls or air conditioning. Tap Add item to choose one or enter your own.",
      },
      {
        question: "How do I rate the condition of a furnishing?",
        answer:
          "Tap an item to open it. Choose a rating from 1 to 5, then add a photo and any comment.",
      },
      {
        question: "What does the 1 to 5 condition scale mean?",
        answer: "- 1: Poor\n- 2: Worn\n- 3: Fair\n- 4: Good\n- 5: Excellent",
      },
      {
        question: "How do I flag something as faulty?",
        answer:
          "Open the item and tap Item is faulty. The rating becomes 1. Add a comment to describe what's wrong.",
      },
      {
        question:
          "Why can I only take photos with the camera? Can I upload from my library?",
        answer:
          "Photos must be taken right in the app. This keeps reports reliable—it captures the property's condition on the inspection day. You can't add old photos from your phone.",
      },
      {
        question: "How many photos can I add per item?",
        answer: "Up to 3 photos per item.",
      },
      {
        question: "Can I add a comment to an item?",
        answer:
          "Yes. Type a comment on any item to describe its condition or flag issues.",
      },
      {
        question: "How do I retake or delete a photo?",
        answer: "Open the item and tap the photo. Choose Retake or Delete.",
      },
      {
        question: "Can I pause an inspection and come back later?",
        answer:
          "Yes. Progress is saved on your phone. Close the app and come back when you're ready.",
      },
      {
        question: "Where do I find unfinished inspections (drafts)?",
        answer: "On the home screen, under In progress.",
      },
      {
        question: "How long are drafts kept?",
        answer:
          "Drafts and finished reports both live on this phone. They stay until you delete them or uninstall the app.",
      },
      {
        question: "What if I lose signal during an inspection?",
        answer:
          "Keep going. Inspecting and saving work offline. Sign-in needs a connection.",
      },
      {
        question: "Can two people work on the same inspection?",
        answer:
          "No. One inspection belongs to one account. Once saved, the report can be shared with anyone.",
      },
      {
        question: "Can I edit an inspection after I save the report?",
        answer:
          "No. Saved reports are final so they stay reliable. If something's wrong, start a new inspection.",
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
          "- Property and contact details\n- A summary of findings\n- Recommended actions\n- Room-by-room results\n- Furnishings and fixtures with ratings\n- Photos and comments",
      },
      {
        question: "Are photos included in the report?",
        answer:
          "Yes. Photos taken during inspection appear next to the item they belong to.",
      },
      {
        question: "How do I save a report?",
        answer:
          "On the report preview, tap Save report and confirm. The PDF is written to this phone. No upload.",
      },
      {
        question: "Where do I find saved reports?",
        answer: "On the Reports tab. Reports are stored on this iPhone only.",
      },
      {
        question: "Can I see reports on a new phone or after reinstalling?",
        answer:
          "No. Reports are not stored in your account. After a new phone or reinstall, the Reports tab is empty unless you restore from an iPhone backup or from copies you saved to Files.",
      },
      {
        question: "How do I share a report?",
        answer:
          "Open the report and tap Share. Pick an app from the share sheet, such as WhatsApp, Mail or AirDrop.",
      },
      {
        question: "How do I share a report on WhatsApp?",
        answer:
          "Open the report, tap Share, then choose WhatsApp. Pick the contact and send the PDF.",
      },
      {
        question: "How long are saved reports kept?",
        answer:
          "Saved reports stay on this phone until you delete them or uninstall the app. Tenify does not delete them for you.",
      },
      {
        question: "Can I download a report as a PDF?",
        answer:
          "Yes. Reports are PDFs. Use Share and choose Save to Files, or use Export all reports in Profile.",
      },
      {
        question: "Why is a report large, and does that affect sharing?",
        answer:
          "Photos make reports large, especially for big furnished homes. If a file is too big to send, save it to Files or send it by AirDrop.",
      },
      {
        question: "Can I delete a report?",
        answer:
          "Yes. Open the report, tap Delete, then confirm. This removes the report from this iPhone. This can't be undone.",
      },
      {
        question: "Can other parties add their own comments to a report?",
        answer:
          "Not in the app. They can send comments separately. You can add them to a new inspection if needed.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    faqs: [
      {
        question: "What changes after 31 December 2026?",
        answer:
          "We plan to charge 400 dirhams to unlock a finished report. Creating an inspection stays free. We'll show the price before you pay.",
      },
      {
        question: "What is a watermarked report?",
        answer:
          "A report with a Tenify watermark. Unlock it to remove the watermark and get the clean version.",
      },
      {
        question: "How do I unlock a report?",
        answer: "Open the report and tap Unlock. Confirm with Apple.",
      },
      {
        question: "Which payment methods can I use?",
        answer:
          "Payment is handled by Apple, using the payment method on your Apple ID.",
      },
      {
        question: "Do I pay per report or per property?",
        answer: "Per report.",
      },
      {
        question: "I paid but my report is still watermarked. What now?",
        answer:
          "Close and reopen the app, then check again. Still there? Email hello@tenify.ae with your receipt.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Apple handles refunds for in-app purchases. Request one at reportaproblem.apple.com.",
      },
      {
        question:
          "Will I be charged for reports I created before 31 December 2026?",
        answer: "No. Reports saved during the free period stay free.",
      },
      {
        question: "Where can I see my receipts?",
        answer:
          "Apple emails a receipt after each purchase. You can also see it in your Apple ID purchase history.",
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
          "An inspection gives you a dated record of the property's condition, with photos. If a question about condition comes up later, everyone can refer to the same facts.",
      },
      {
        question: "When is the best time to conduct an inspection?",
        answer:
          "Inspect before any major changes to the property. This gives a clear view of the full condition, including floors, walls, and built-in fixtures. Additional inspections can be done at different points in time to document any changes.",
      },
      {
        question:
          "Can a report be used as evidence in a property condition dispute?",
        answer:
          "A Tenify report is a dated record of condition, with photos and comments. People often use records like this to show what a property looked like on a given day. Whether a report is accepted is for the people involved, and any authority, to decide.",
      },
      {
        question:
          "Is a Tenify report legally binding and will Ejari or RERA accept it?",
        answer:
          "No. A Tenify report is not a signed legal document, and it is not an Ejari or RERA document. It is a dated record of condition, with photos and comments, that both sides can read. If your lease or an authority asks for a specific form, complete that form as well.",
      },
      {
        question: "Is Tenify affiliated with Ejari, RERA or the Dubai Land Department?",
        answer:
          "No. Tenify is independent. It is not affiliated with Ejari, RERA or the Dubai Land Department.",
      },
      {
        question: "Should I share the report with other parties?",
        answer:
          "Yes. Sharing the report creates a mutual record and shows transparency. All relevant parties can refer to the same documented evidence if questions arise later. Share promptly after the inspection to ensure timely communication.",
      },
      {
        question: "What if parties disagree about the inspection findings?",
        answer:
          "Discuss the differences calmly. The report documents the inspection from one perspective. If parties can't agree, document the disagreement in writing and keep copies. If there's a formal dispute later, all documented positions can be used as evidence.",
      },
      {
        question: "What should I do if I find unexpected condition issues?",
        answer:
          "Document with photos and comments in Tenify right away. Share the report with relevant parties immediately. If the issue is serious, also send a separate email describing it. Request confirmation of receipt so there's clear record of communication.",
      },
      {
        question:
          "Can I use Tenify to document condition at different points in time?",
        answer:
          "Yes. Conduct multiple inspections and compare them over time. This documents any changes in condition between inspection dates, which helps all parties understand what occurred during the interval.",
      },
      {
        question:
          "Does Tenify replace an official condition report or check-in form?",
        answer:
          "No. If your lease or agent asks for a check-in form, complete it as well. Tenify adds the detail: room by room, with photos.",
      },
      {
        question: "How can I make an inspection report as strong as possible?",
        answer:
          "- Take close-up photos of any damage or wear.\n- Write clear comments describing the condition of each item.\n- Be honest and objective. Don't exaggerate or hide issues.\n- Complete the inspection promptly, not days later.\n- Share the report with relevant parties immediately.",
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
          "- Account details: name, email, account type\n- Sample report emails, if you request one on the website\n- Crash reports and basic technical details\n- Inspection answers, comments and photos stay on your phone. Tenify does not receive them.",
      },
      {
        question: "Where are photos and reports stored?",
        answer:
          "On this phone. Answers, photos and finished reports stay on your iPhone. Tenify does not receive them when you save.",
      },
      {
        question: "Who can see reports?",
        answer:
          "Only you, plus anyone you choose to share the PDF with. A recipient sees the whole report, including names and photos.",
      },
      {
        question: "Does Tenify share my data with third parties?",
        answer:
          "Tenify does not sell your data. Sign-in, crash and website providers may handle account or technical data under contract. Reports stay on your phone unless you share them.",
      },
      {
        question: "Why does Tenify need camera access?",
        answer:
          "To take photos for reports. Photos are taken in the app only.",
      },
      {
        question: "Why does Tenify ask for microphone or speech access?",
        answer:
          "Optional voice dictation for inspection notes. You can always type instead. Dictation runs on the device; Tenify does not keep the audio recording.",
      },
      {
        question: "Can I see or export my data?",
        answer:
          "Your reports are on your phone. Use Export all reports in Profile, or Share and Save to Files. For other account data, email hello@tenify.ae.",
      },
      {
        question: "How do I delete my data?",
        answer:
          "Delete reports in the app first if you want them gone. Then go to Profile and delete your account to remove your login. Closing the account does not delete reports on the phone.",
      },
      {
        question: "How long does Tenify keep my data?",
        answer:
          "Accounts stay until you delete them. Saved reports stay on your phone until you delete them or uninstall the app. Tenify cannot recover a report you delete.",
      },
      {
        question: "Is my data secure?",
        answer:
          "Reports stay on your phone and are covered by your iPhone passcode and device encryption. Account data is encrypted in transit and at rest. For full details, see the Privacy Policy.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    faqs: [
      {
        question: 'I tap "Save report" and nothing happens.',
        answer:
          "Update to the latest version from the App Store and try again. If the phone is low on space, free some up and try again. The inspection stays on your phone. Still stuck? Email hello@tenify.ae. Don't delete the app.",
      },
      {
        question:
          "My report is cut off, has blank pages, or is missing sections.",
        answer:
          "Update to the latest version. If it still looks wrong, email hello@tenify.ae with a screenshot. We'll fix it.",
      },
      {
        question: "Photos are not showing in the report.",
        answer:
          "Check that each item has a photo before you save. If a photo's missing, retake it. Still missing? Email us.",
      },
      {
        question: "The app is slow when I start a new report.",
        answer:
          "Close and reopen the app. Update to the latest version. Tell us if it continues.",
      },
      {
        question:
          "The app crashed or froze during an inspection. Did I lose my work?",
        answer:
          "No. Progress is stored on your phone. Reopen the app and continue from where you left off.",
      },
      {
        question: "I cannot sign in.",
        answer:
          "Check that your email and password are correct. Try Forgot password. If you signed up with Apple or Google, use Continue with Apple or Continue with Google instead.",
      },
      {
        question: "The camera will not open.",
        answer:
          "Go to iPhone Settings, then Tenify, and turn on Camera.",
      },
      {
        question: "I cannot share a report on WhatsApp.",
        answer:
          "The file may be too large. Save it to Files or send it by AirDrop instead.",
      },
      {
        question: "Saved reports are missing on a new phone.",
        answer:
          "Reports are stored on the iPhone only, not in your account. Sign-in will not bring them back. Restore from an iPhone backup, or from PDFs you saved to Files.",
      },
      {
        question: "The report shows the wrong name or a placeholder name.",
        answer:
          "Update to the latest version. Check your name in Profile. Email us if it still looks wrong.",
      },
      {
        question: "How do I update the app?",
        answer:
          "Open the App Store, tap your profile picture, and update Tenify.",
      },
      {
        question: "How do I contact support?",
        answer: "Email hello@tenify.ae. We reply within 24 hours.",
      },
      {
        question: "How do I send feedback or request a feature?",
        answer:
          'Email hello@tenify.ae with the subject "Feedback". We read every message.',
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
