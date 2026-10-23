import type { ReactNode } from "react";

const container = "mx-auto max-w-[860px] px-5 sm:px-10";

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|([\w.+-]+@[\w-]+\.[\w.]+)/g;

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(INLINE)) {
    const index = m.index ?? 0;
    if (index > last) parts.push(text.slice(last, index));
    if (m[1]) {
      parts.push(
        <strong key={key++} className="font-semibold text-neutral-900">
          {m[1]}
        </strong>,
      );
    } else if (m[2]) {
      parts.push(
        <a key={key++} href={m[3]} className="underline underline-offset-2 hover:text-navy-900">
          {m[2]}
        </a>,
      );
    } else if (m[4]) {
      parts.push(
        <a
          key={key++}
          href={`mailto:${m[4]}`}
          className="underline underline-offset-2 hover:text-navy-900"
        >
          {m[4]}
        </a>,
      );
    }
    last = index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

function parse(markdown: string) {
  const blocks: Block[] = [];
  let updated = "";
  let para: string[] = [];
  let list: string[] = [];

  const flushPara = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
    para = [];
  };
  const flushList = () => {
    if (list.length) blocks.push({ type: "ul", items: list });
    list = [];
  };

  for (const raw of markdown.split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
    } else if (line.startsWith("# ")) {
      continue;
    } else if (line.startsWith("Last updated:")) {
      updated = line;
    } else if (line.startsWith("## ")) {
      flushPara();
      flushList();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2));
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return { blocks, updated };
}

export function LegalPage({ title, markdown }: { title: string; markdown: string }) {
  const { blocks, updated } = parse(markdown);

  return (
      <main className="flex-1">
        <section className="bg-true-white">
          <div className={`${container} flex flex-col gap-4 py-16 md:py-24`}>
            <p className="eyebrow">Legal</p>
            <h1 className="h2-display text-balance">{title}</h1>
            {updated ? <p className="text-sm text-neutral-600">{updated}</p> : null}
          </div>
        </section>

        <section className="bg-true-white">
          <div className={`${container} flex flex-col gap-4 py-12 md:py-16`}>
            {blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i} className="mt-6 text-[22px] font-extrabold text-navy-900 first:mt-0">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="flex list-disc flex-col gap-2 pl-5 text-neutral-700">
                    {block.items.map((item, j) => (
                      <li key={j}>{renderInline(item)}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-neutral-700">
                  {renderInline(block.text)}
                </p>
              );
            })}
          </div>
        </section>
      </main>
  );
}
