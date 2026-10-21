"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import heroPhoto from "@/public/landing/hero-yellow.jpg";
import { PhoneShell } from "./phone/phone-shell";
import styles from "./hero-demo.module.css";

type Props = {
  primaryCta: ReactNode;
  secondaryCta: ReactNode;
};

export function HeroDemoClient({ primaryCta, secondaryCta }: Props) {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section id="top" ref={heroRef} className={styles.hero}>
      <p className={styles.srOnly}>
        Animated demo: Tenify guides you through inspecting a door scuff,
        photographs the damage, generates a property condition report, and
        shares it with your landlord on WhatsApp.
      </p>

      <div className={styles.frame}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Professional property condition reports
          </p>
          <h1 className={styles.headline}>
            <span className={styles.headlineLead}>Move in with</span>
            <span className={styles.headlineAccent}>confidence.</span>
          </h1>
          <p className={styles.sub}>
            Document the exact move-in condition, clearly and professionally,
            with Tenify. Room by room. Evidenced. Free until the end of 2026.
          </p>
          <div className={styles.cta}>
            <div className={styles.ctaItem}>{primaryCta}</div>
            <div className={styles.ctaItem}>{secondaryCta}</div>
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.photo}>
            <Image
              src={heroPhoto}
              alt="Woman relaxing on a sofa in her new rented home"
              width={heroPhoto.width}
              height={heroPhoto.height}
              sizes="(max-width: 980px) 100vw, 52vw"
              priority
              placeholder="blur"
              className={styles.photoImg}
            />
          </div>
          <PhoneShell heroRef={heroRef} />
        </div>
      </div>
    </section>
  );
}
