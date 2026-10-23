const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}

export function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.8}>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}

export function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <rect x="5" y="5" width="14" height="16" rx="2" />
      <path d="M9 5a3 3 0 0 1 6 0" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}

export function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
      <path d="M4 11l8-7 8 7" />
      <path d="M6.5 9.5V20h11V9.5" />
    </svg>
  );
}

export function ReportsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4" />
      <path d="M9.5 12h5M9.5 16h5" />
    </svg>
  );
}

export function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.4-3.4 3.9-5 7-5s5.6 1.6 7 5" />
    </svg>
  );
}

export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
      <path d="M5 19l1-3.6L16.2 5.2a2 2 0 0 1 2.6 0l.4.4a2 2 0 0 1 0 2.6L9 18.4z" />
      <path d="M14.5 7l2.5 2.5" />
    </svg>
  );
}

export function SofaIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <path d="M6 12V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4" />
      <path d="M4 13a2 2 0 0 1 4 0v1h8v-1a2 2 0 0 1 4 0v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
    </svg>
  );
}

export function KitchenIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <rect x="7" y="3" width="10" height="18" rx="1.5" />
      <path d="M7 10h10" />
      <path d="M10 6v1.5M10 13v2" />
    </svg>
  );
}

export function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" />
      <path d="M3 18h18" />
      <path d="M5 11V8a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 8v3" />
    </svg>
  );
}

export function BathIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <path d="M4 12h16v1.5A5.5 5.5 0 0 1 14.5 19h-5A5.5 5.5 0 0 1 4 13.5z" />
      <path d="M6 12V6.5A2.5 2.5 0 0 1 10.5 5" />
    </svg>
  );
}

export function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21" />
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={2}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5" />
      <path d="M12 7.8h.01" strokeWidth={2.8} />
    </svg>
  );
}

export function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <path d="M4 7h16" />
      <path d="M9.5 7V4.8A.8.8 0 0 1 10.3 4h3.4a.8.8 0 0 1 .8.8V7" />
      <path d="M6.5 7l1 13h9l1-13" />
      <path d="M10 11v5.5M14 11v5.5" />
    </svg>
  );
}

export function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} strokeWidth={1.9}>
      <path d="M12 3.5s6 6.3 6 10a6 6 0 0 1-12 0c0-3.7 6-10 6-10z" />
    </svg>
  );
}
