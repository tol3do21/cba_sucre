"use client";

import { useEffect, useState } from "react";
import { StarsBg } from "./StarsBg";
import { USA250 } from "@/lib/data";

const TARGET = new Date("2026-07-04T00:00:00");

function useCountdown() {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const update = () => setDiff(Math.max(0, TARGET.getTime() - Date.now()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return [d, h, m, s];
}

export function AHero() {
  const [d, h, m, s] = useCountdown();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="usa250" style={{ position: "relative", background: "#0A2540", color: "#fff", overflow: "hidden" }}>
      <StarsBg id="heroStars" opacity={0.15} />

      {/* Flag stripe bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, background: "#B22234" }} />
        <div style={{ flex: 1, background: "#fff" }} />
        <div style={{ flex: 1, background: "#B22234" }} />
      </div>

      <div className="wrap" style={{ position: "relative", padding: "clamp(40px,6vw,80px) clamp(20px,4vw,56px) clamp(80px,8vw,130px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "clamp(30px,4vw,60px)", alignItems: "center" }}>

          {/* Left */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#B22234", padding: "5px 14px",
              fontSize: 10, letterSpacing: 3, fontWeight: 700, marginBottom: 24,
            }}>★ EDICIÓN ESPECIAL · 2026</div>

            <h1 style={{
              fontFamily: "var(--font-playfair),Georgia,serif",
              fontSize: "clamp(52px,7vw,96px)",
              lineHeight: 0.9, fontWeight: 900,
              margin: "0 0 20px", letterSpacing: -2,
            }}>
              America
              <br />
              <span style={{ color: "#C9A961", fontStyle: "italic" }}>two-fifty</span>
            </h1>

            <p style={{
              fontSize: "clamp(14px,1.3vw,18px)",
              lineHeight: 1.6, opacity: 0.85,
              maxWidth: 500, margin: "0 0 30px",
            }}>{USA250.blurb}</p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#eventos" className="btn btn-red" style={{ fontSize: 11 }}>Ver agenda America 250 →</a>
              <a href="#inscripcion" className="btn btn-ghost" style={{ fontSize: 11 }}>Inscríbete a clases</a>
            </div>
          </div>

          {/* Right — Countdown */}
          <div style={{ position: "relative" }}>
            {/* Medallion */}
            <div style={{
              position: "absolute", top: -18, right: -18, zIndex: 2,
              width: 100, height: 100, borderRadius: "50%",
              background: "#B22234", color: "#fff",
              display: "grid", placeItems: "center", textAlign: "center",
              fontFamily: "var(--font-playfair),Georgia,serif",
              transform: "rotate(-8deg)",
              border: "4px double #F5EFE0",
              boxShadow: "0 12px 28px rgba(0,0,0,0.4)",
            }}>
              <div>
                <div style={{ fontSize: 8, letterSpacing: 2, opacity: 0.8, fontFamily: "var(--font-inter),sans-serif", fontWeight: 700 }}>1776</div>
                <div style={{ fontSize: 32, fontWeight: 900, fontStyle: "italic", lineHeight: 1 }}>250</div>
                <div style={{ fontSize: 8, letterSpacing: 2, opacity: 0.8, fontFamily: "var(--font-inter),sans-serif", fontWeight: 700 }}>2026</div>
              </div>
            </div>

            {/* Widget */}
            <div style={{
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(4px)",
              padding: "clamp(16px,2vw,24px)",
            }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: "#C9A961", marginBottom: 6 }}>⎯ COUNTDOWN ⎯</div>
              <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 15, marginBottom: 16, opacity: 0.9 }}>
                Independence Day · {USA250.date}
              </div>

               <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 16 }}>
                {[
                  [mounted ? String(d).padStart(2,"0") : "--", "DÍAS"],
                  [mounted ? String(h).padStart(2,"0") : "--", "HRS"],
                  [mounted ? String(m).padStart(2,"0") : "--", "MIN"],
                  [mounted ? String(s).padStart(2,"0") : "--", "SEG"],
                ].map(([n, l]) => (
                  <div key={l} style={{
                    background: "#071A30", padding: "12px 4px",
                    textAlign: "center", border: "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 8, letterSpacing: 2, opacity: 0.55, marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>

              <div style={{ fontSize: 11, opacity: 0.65, lineHeight: 1.5, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 14 }}>
                Junto a la Embajada de los Estados Unidos en Bolivia y el Departamento de Estado de EE.UU.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
