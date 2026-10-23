"use client";

import { useEffect, useRef, useState } from "react";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";

const ARTBOARD_W = 528;
const ARTBOARD_H = 520;

function LockIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function SampleTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-7 items-center rounded-full bg-navy-900 px-3.5 text-[11px] font-semibold tracking-[0.14em] text-true-white uppercase ${className}`}
    >
      Sample
    </span>
  );
}

function ExecutiveSummaryPage() {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-true-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="box-border h-[46px] bg-[#2c3945] px-3 pt-[9px]">
        <div className="flex justify-between text-[5px] tracking-[0.6px] text-[#c9d2d9]">
          <span>Marina Building</span>
          <span>SUMMARY</span>
        </div>
        <div className="mt-[7px] text-[11px] font-bold text-true-white">Executive summary</div>
      </div>
      <div className="px-3 pt-2.5">
        <div className="flex gap-1">
          {[
            { n: "5", label: "ROOMS" },
            { n: "36", label: "FIXTURES" },
            { n: "16", label: "FURNISHINGS" },
            { n: "2", label: "ACTION", color: "text-[#d03a2f]" },
            { n: "3", label: "REVIEW", color: "text-[#d9731a]" },
          ].map((stat) => (
            <div key={stat.label} className="flex-1 rounded border border-[#e3e7ea] px-[5px] py-1">
              <div className={`text-[10px] font-bold ${stat.color ?? ""}`}>{stat.n}</div>
              <div className="text-[4px] text-[#6b7780]">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-2.5 text-[6px] font-bold tracking-[0.6px]">INSPECTION RECORD</div>
        <div className="mt-1 border-t border-navy-900">
          {[
            ["Lounge/living area", "7   5   7   0   1"],
            ["Kitchen", "12   5   6   1   1"],
            ["Master bedroom", "7   5   7   1   1"],
            ["Master en-suite", "4   0   0   0   0"],
          ].map(([room, counts]) => (
            <div
              key={room}
              className="flex justify-between border-b border-[#eceff1] py-[3px] text-[5.5px] font-semibold"
            >
              <span>{room}</span>
              <span className="font-normal text-[#6b7780]">{counts}</span>
            </div>
          ))}
        </div>
        <div className="mt-2.5 text-[6px] font-bold tracking-[0.6px]">ACTION NEEDED</div>
        <div className="mt-1 overflow-hidden rounded border border-[#e3e7ea]">
          <div className="flex justify-between bg-[#c93a34] px-1.5 py-[3px] text-[4.5px] font-bold tracking-[0.5px] text-true-white">
            <span>REPAIR, REPLACE OR REMOVE</span>
            <span>2 items</span>
          </div>
          <div className="flex justify-between border-b border-[#eceff1] px-1.5 py-1 text-[5.5px]">
            <b>Kettle</b>
            <span className="text-[#6b7780]">Kettle lid broken</span>
          </div>
          <div className="flex justify-between px-1.5 py-1 text-[5.5px]">
            <b>Mirror</b>
            <span className="text-[#6b7780]">Mirror light switch broken</span>
          </div>
        </div>
        <div className="mt-2 overflow-hidden rounded border border-[#e3e7ea]">
          <div className="flex justify-between bg-[#fdebc8] px-1.5 py-[3px] text-[4.5px] font-bold tracking-[0.5px] text-[#a85a12]">
            <span>REVIEW FOR REPAIR OR REPLACEMENT</span>
            <span>3 items</span>
          </div>
          <div className="flex justify-between border-b border-[#eceff1] px-1.5 py-1 text-[5.5px]">
            <b>Walls</b>
            <span className="text-[#6b7780]">Drill holes in wall behind TV</span>
          </div>
          <div className="flex justify-between px-1.5 py-1 text-[5.5px]">
            <b>Switches &amp; sockets</b>
            <span className="text-[#6b7780]">Face plate coming loose</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function KitchenFrontPage() {
  return (
    <div aria-hidden="true" className="relative h-[480px] w-[292px]">
      <div className="box-border h-12 bg-[#2c3945] px-3 pt-[9px]">
        <div className="flex justify-between text-[5px] tracking-[0.6px] text-[#c9d2d9]">
          <span>Marina Building</span>
          <span>KITCHEN</span>
        </div>
        <div className="mt-[7px] text-xs font-bold text-true-white">Kitchen</div>
      </div>
      <div className="px-3 pt-[9px]">
        <div className="flex gap-1.5 text-[5.5px] text-[#4b5963]">
          <span>
            <b>12</b> fixtures
          </span>
          <span>
            <b>5</b> furnishings
          </span>
          <span>
            <b className="text-[#d03a2f]">1</b> action
          </span>
          <span>
            <b className="text-[#d9731a]">1</b> review
          </span>
          <span>
            <b>6</b> photos
          </span>
        </div>
        <div className="mt-2 text-[6.5px] font-bold tracking-[0.6px]">FIXTURES</div>
        <div className="mt-1 overflow-hidden rounded-[5px] border border-[#f0d9a8]">
          <div className="bg-[#fdebc8] px-2 py-1 text-[5px] font-bold tracking-[0.5px] text-[#a85a12]">
            REVIEW NEEDED
          </div>
          <div className="flex justify-between gap-1.5 px-2 py-[7px]">
            <div>
              <div className="text-[7.5px] font-bold">Switches &amp; sockets</div>
              <div className="mt-[3px] text-[5.5px] text-[#4b5963]">Face plate coming loose</div>
            </div>
            <div
              className="h-14 w-[84px] shrink-0 rounded"
              style={{
                background: "linear-gradient(135deg,#a8a49d 0%,#5d5a56 55%,#26231f 100%)",
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute top-[178px] right-3 left-3 h-[50px] overflow-hidden rounded-[5px] border border-[#cfe5d6] bg-true-white">
        <div className="flex justify-between bg-[#dfeee3] px-2 py-1 text-[5px] font-bold tracking-[0.5px] text-[#2d6a4f]">
          <span>NO ACTION NEEDED</span>
          <span className="font-medium">11 fixtures</span>
        </div>
        <div className="grid grid-cols-3 gap-1 px-2 py-1.5 text-[6px] font-semibold">
          <span>✓ Sink</span>
          <span>✓ Hob</span>
          <span>✓ Oven</span>
          <span>✓ Hood</span>
          <span>✓ Fridge</span>
          <span>✓ Lights</span>
        </div>
      </div>
      <div className="absolute top-[238px] left-3 text-[6.5px] font-bold tracking-[0.6px]">FURNISHINGS</div>

      {(
        [
          {
            top: 252,
            border: "border-[#eac3bf]",
            badge: "bg-[#c93a34] text-true-white",
            badgeLabel: "ACTION NEEDED",
            title: "Kettle",
            rating: "POOR",
            note: "Kettle lid broken",
            photo: "linear-gradient(135deg,#6f7a80 0%,#2d3438 100%)",
          },
          {
            top: 336,
            border: "border-[#cfe5d6]",
            badge: "bg-[#dfeee3] text-[#2d6a4f]",
            badgeLabel: "NO ACTION NEEDED",
            title: "Microwave",
            rating: "GOOD",
            note: "Works as expected",
            photo: "linear-gradient(135deg,#8a8f93 0%,#1f2427 100%)",
          },
          {
            top: 420,
            border: "border-[#cfe5d6]",
            badge: "bg-[#dfeee3] text-[#2d6a4f]",
            badgeLabel: "NO ACTION NEEDED",
            title: "Dining table",
            rating: "GOOD",
            note: "Light wear",
            photo: "linear-gradient(135deg,#b9b2a6 0%,#7a7264 100%)",
          },
        ] as const
      ).map((item) => (
        <div
          key={item.title}
          className={`absolute right-3 left-3 h-[76px] overflow-hidden rounded-[5px] border bg-true-white ${item.border}`}
          style={{ top: item.top }}
        >
          <div className={`px-2 py-1 text-[5px] font-bold tracking-[0.5px] ${item.badge}`}>
            {item.badgeLabel}
          </div>
          <div className="flex justify-between gap-1.5 px-2 py-[7px]">
            <div className="flex gap-1.5">
              <span className="w-3.5 shrink-0" />
              <div>
                <div className="text-[8px] font-bold">
                  {item.title}{" "}
                  <span className="text-[5.5px] tracking-[0.5px] text-[#6b7780]">{item.rating}</span>
                </div>
                <div className="mt-1 text-[6px] text-[#4b5963]">{item.note}</div>
              </div>
            </div>
            <div className="h-12 w-[84px] shrink-0 rounded" style={{ background: item.photo }} />
          </div>
        </div>
      ))}

      <div
        className="absolute inset-x-0 top-[150px] bottom-0 backdrop-blur-[2px]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom,transparent 0,#000 36px)",
          maskImage: "linear-gradient(to bottom,transparent 0,#000 36px)",
        }}
      />
      <div
        className="absolute inset-x-0 top-[186px] bottom-0 backdrop-blur-[5px]"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom,transparent 0,#000 36px)",
          maskImage: "linear-gradient(to bottom,transparent 0,#000 36px)",
        }}
      />
      <div
        className="absolute inset-x-0 top-[250px] bottom-0 backdrop-blur-[9px]"
        style={{
          background:
            "linear-gradient(to bottom,rgba(255,255,255,0.08) 0%,rgba(0,76,54,0.5) 55%,rgba(0,76,54,0.9) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom,transparent 0,#000 40px)",
          maskImage: "linear-gradient(to bottom,transparent 0,#000 40px)",
        }}
      />
      <div
        className="absolute inset-x-0 top-[150px] bottom-0"
        style={{
          background:
            "linear-gradient(112deg,rgba(255,255,255,0) 30%,rgba(255,255,255,0.3) 48%,rgba(255,255,255,0) 66%)",
        }}
      />

      <span className="absolute top-[272px] left-[21px] flex size-3.5 items-center justify-center rounded-full bg-[#c93a34] text-[7px] font-bold text-true-white shadow-[0_0_0_2px_rgba(255,255,255,0.5)]">
        1
      </span>
      <span className="absolute top-[357px] left-[21px] flex size-3.5 items-center justify-center rounded-full bg-[#3f8f68] text-[7px] font-bold text-true-white shadow-[0_0_0_2px_rgba(255,255,255,0.5)]">
        4
      </span>
      <span className="absolute top-[441px] left-[21px] flex size-3.5 items-center justify-center rounded-full bg-[#3f8f68] text-[7px] font-bold text-true-white shadow-[0_0_0_2px_rgba(255,255,255,0.5)]">
        4
      </span>
      {[289, 373, 457].map((top) => (
        <span
          key={top}
          className="absolute left-[218px] flex size-[22px] items-center justify-center rounded-full bg-navy-900 text-true-white shadow-[0_0_0_3px_rgba(255,255,255,0.4)]"
          style={{ top }}
        >
          <LockIcon size={11} />
        </span>
      ))}
    </div>
  );
}

/**
 * Two overlapping miniature report pages inside the sample CTA card.
 * Kitchen page is clear at the top and progressively frosted below, with lock teasers.
 */
export function GatedReportPreview() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const update = () => {
      setScale(Math.min(1, node.clientWidth / ARTBOARD_W));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={frameRef}
      className="relative mx-auto w-full max-w-[528px]"
      style={{ height: ARTBOARD_H * scale }}
    >
      <div
        className="absolute top-0 left-1/2 origin-top"
        style={{
          width: ARTBOARD_W,
          height: ARTBOARD_H,
          transform: `translateX(-50%) scale(${scale})`,
        }}
      >
        <div aria-hidden="true" className="absolute top-[32px] left-[8px] h-[470px] w-[300px]">
          <ExecutiveSummaryPage />
          <div className="absolute inset-0 rounded-lg bg-[rgba(0,48,34,0.4)]" />
        </div>

        <SampleTag className="absolute top-0 right-2 z-10" />

        <div
          role="img"
          aria-label="Preview of the Kitchen page of a sample report. The top is readable and the rest is hidden behind frosted glass."
          className="absolute top-0 left-[216px] z-[1] h-[480px] w-[292px] overflow-hidden rounded-lg bg-true-white shadow-[0_14px_36px_rgba(0,0,0,0.32),0_0_90px_rgba(120,235,185,0.4)]"
        >
          <KitchenFrontPage />
        </div>

        <div className="pointer-events-none absolute top-[200px] left-[216px] z-10 flex w-[292px] justify-center">
          <SampleReportDialog className="pointer-events-auto inline-flex h-[42px] items-center gap-2 whitespace-nowrap rounded-full bg-navy-900 px-[18px] text-[13px] font-semibold text-true-white shadow-[0_0_0_6px_rgba(255,255,255,0.22),0_8px_20px_rgba(0,0,0,0.35)] transition-colors hover:bg-navy-700">
            <LockIcon />
            See every item and photo
          </SampleReportDialog>
        </div>
      </div>
    </div>
  );
}
