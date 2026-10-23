import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Tenify",
  description:
    "What Tenify collects, how it is used, who sees it and how to delete it.",
};

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" markdown={privacyPolicy} />;
}
