import type { ReactNode } from "react";
import { SUPPORT_EMAIL } from "@/lib/site-config";

const inlineLink =
  "font-bold text-brand underline underline-offset-4 hover:underline-offset-[6px]";

function linkifyText(text: string): ReactNode {
  if (!text.includes(SUPPORT_EMAIL) && !text.includes("hello@tenify.ae")) {
    return text;
  }

  const parts = text.split(/(hello@tenify\.ae)/g);
  return parts.map((part, index) =>
    part === "hello@tenify.ae" ? (
      <a
        key={index}
        href={`mailto:${SUPPORT_EMAIL}`}
        className={inlineLink}
      >
        {SUPPORT_EMAIL}
      </a>
    ) : (
      part
    )
  );
}

/** Render FAQ answer text with inline email links and bullet lists. */
export function FaqAnswer({ answer }: { answer: string }) {
  const lines = answer.split("\n");
  const blocks: ReactNode[] = [];
  let bulletBuffer: string[] = [];
  let key = 0;

  const flushBullets = () => {
    if (bulletBuffer.length === 0) return;
    blocks.push(
      <ul key={key++} className="list-disc space-y-1 pl-5">
        {bulletBuffer.map((item, i) => (
          <li key={i}>{linkifyText(item)}</li>
        ))}
      </ul>
    );
    bulletBuffer = [];
  };

  for (const line of lines) {
    if (line.startsWith("- ")) {
      bulletBuffer.push(line.slice(2));
    } else {
      flushBullets();
      if (line.length > 0) {
        blocks.push(
          <p key={key++} className={blocks.length > 0 ? "mt-3" : undefined}>
            {linkifyText(line)}
          </p>
        );
      }
    }
  }
  flushBullets();

  if (blocks.length === 1) {
    return <>{blocks[0]}</>;
  }

  return <div className="flex flex-col gap-0">{blocks}</div>;
}
