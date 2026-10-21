import type { ComponentType } from "react";
import { StepFourScreen } from "./screens/step-four-screen";
import { StepOneScreen } from "./screens/step-one-screen";
import { StepThreeScreen } from "./screens/step-three-screen";
import { StepTwoScreen } from "./screens/step-two-screen";

/**
 * Media slot for one step's phone screen.
 *
 * To use a real asset: drop the file in `public/how-it-works/`, then change
 * `type` to `"image"` or `"video"` and point `src` at it (`.png`, `.webp` and
 * `.gif` for images; `.mp4`/`.webm` for video, with an optional `poster`).
 * Nothing else needs to change. If the file is missing or fails to load, the
 * placeholder screen is shown instead.
 */
export type StepMedia = {
  type: "image" | "video" | "component";
  src: string;
  poster?: string;
  alt: string;
};

/** Panel background, mapped to existing brand tokens in the CSS module. */
export type StepPanelTone = "brand-soft" | "brand" | "navy" | "warm";

export type HowStep = {
  id: string;
  label: string;
  title: string;
  bullets: readonly string[];
  panel: StepPanelTone;
  media: StepMedia;
  /** Animated placeholder, also the fallback when real media fails to load. */
  placeholder: ComponentType;
};

export const HOW_STEPS: readonly HowStep[] = [
  {
    id: "setup",
    label: "SET UP",
    title: "Set up your property.",
    bullets: [
      "Download the app and sign in",
      "Tap New inspection",
      "Enter the property type and bedrooms",
      "Start from a pre-filled setup. Customise anything.",
    ],
    panel: "brand-soft",
    media: {
      type: "component",
      src: "/how-it-works/step-1.png",
      alt: "Tenify app: setting up a new inspection for a property",
    },
    placeholder: StepOneScreen,
  },
  {
    id: "inspect",
    label: "INSPECT",
    title: "Begin your inspection.",
    bullets: [
      "Walk room by room",
      "Follow the on-screen guide",
      "Add notes and photo evidence",
    ],
    panel: "brand",
    media: {
      type: "component",
      src: "/how-it-works/step-2.png",
      alt: "Tenify app: inspecting a living room, adding notes and a photo",
    },
    placeholder: StepTwoScreen,
  },
  {
    id: "generate",
    label: "GENERATE",
    title: "Generate your report.",
    bullets: [
      "Review and edit before you publish",
      "Add landlord and tenant details",
    ],
    panel: "navy",
    media: {
      type: "component",
      src: "/how-it-works/step-3.png",
      alt: "Tenify app: reviewing a report before generating it",
    },
    placeholder: StepThreeScreen,
  },
  {
    id: "share",
    label: "SHARE",
    title: "Save and share.",
    bullets: [
      "Your report is ready.",
      "Download it",
      "Share with the people who need it",
      "That's it.",
    ],
    panel: "warm",
    media: {
      type: "component",
      src: "/how-it-works/step-4.png",
      alt: "Tenify app: a finished report ready to download and share",
    },
    placeholder: StepFourScreen,
  },
];
