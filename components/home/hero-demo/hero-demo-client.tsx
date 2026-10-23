"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import heroPhoto from "@/public/landing/hero-yellow.jpg";
import styles from "./hero-demo.module.css";

type Props = {
  primaryCta: ReactNode;
  secondaryCta: ReactNode;
};

export function HeroDemoClient({ primaryCta, secondaryCta }: Props) {
  return (
    <section id="top" className={styles.hero}>
      <Image
        src={heroPhoto}
        alt="Woman celebrating on a sofa in her new rented home"
        fill
        sizes="100vw"
        quality={85}
        priority
        placeholder="blur"
        className={styles.photoImg}
      />
      <div className={styles.wash} aria-hidden="true" />

      <div className={styles.frame}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Professional property condition reports
          </p>
          <h1 className={styles.headline}>Move in with confidence.</h1>
          <p className={styles.sub}>
            Document the exact move-in condition, clearly and professionally.
            Room by room. Evidenced. Free until the end of 2026.
          </p>
          <div className={styles.cta}>
            <div className={styles.ctaItem}>{primaryCta}</div>
            <div className={styles.ctaItem}>{secondaryCta}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
