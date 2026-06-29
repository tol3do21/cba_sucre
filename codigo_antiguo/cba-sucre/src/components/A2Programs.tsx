"use client";

import { useState } from "react";
import { PROGRAMS } from "@/lib/data";

export function A2Programs() {
  const [active, setActive] = useState("teens");
  const p = PROGRAMS.find((x) => x.id === active)!;

  return (
    <section id="programas" style={{ background: "#F5EFE0", padding: "clamp(50px,6vw,80px) 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p className="eyebrow">★ ★ ★  Programas de Inglés  ★ ★ ★</p>
          <h2 className="section-h2" style={{ fontSize: "clamp(38px,5.5vw,72px)", marginBottom: 14 }}>
            Una clase para <em>cada</em> edad.
          </h2>
          <p style={{ fontSize: 14, color: "#5B6470", fontStyle: "italic", maxWidth: 520, margin: "0 auto", lineHeight: 1.65 }}>
            Docentes certificados por el Departamento de Estado de EE.UU. · Currícula Cambridge & marco común europeo.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid #0A2540", background: "#fff" }}>
          {PROGRAMS.filter(x => x.id !== "special").map((prog, i) => (
            <button key={prog.id} onClick={() => setActive(prog.id)} style={{
              position: "relative",
              background: active === prog.id ? "#0A2540" : "#fff",
              color: active === prog.id ? "#fff" : "#0A2540",
              border: "none",
              borderRight: i < 2 ? `1px solid ${active === prog.id ? "rgba(255,255,255,0.12)" : "#0A2540"}` : "none",
              padding: "clamp(16px,2vw,28px) clamp(12px,1.5vw,22px)",
              textAlign: "left", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 8,
            }}>
              {active === prog.id && (
                <div style={{ position: "absolute", inset: "0 0 auto 0", height: 3, background: "#B22234" }} />
              )}
              <div style={{ fontSize: 9, letterSpacing: 3, fontWeight: 700, opacity: 0.6 }}>NIVEL · 0{i + 1}</div>
              <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(20px,2.5vw,32px)", fontWeight: 900, fontStyle: "italic", lineHeight: 1.05 }}>
                {prog.label}
              </div>
              <div style={{ fontSize: 12, opacity: 0.75, fontStyle: "italic", fontFamily: "var(--font-playfair),Georgia,serif" }}>
                {prog.ageRange}
              </div>
              <div style={{ height: 1, background: active === prog.id ? "rgba(255,255,255,0.15)" : "rgba(10,37,64,0.12)", margin: "4px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: 0.5 }}>
                <span style={{ opacity: 0.65 }}>{prog.duration}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 220px", border: "1px solid #0A2540", borderTop: "none", background: "#fff" }}>

          {/* Photo */}
          <div style={{
            backgroundImage: `url(${p.photo})`, backgroundSize: "cover", backgroundPosition: "center",
            minHeight: 340, position: "relative",
          }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,37,64,0.15),rgba(10,37,64,0.65))" }} />
            <div style={{ position: "absolute", left: 16, bottom: 16, color: "#fff", fontFamily: "var(--font-playfair),Georgia,serif", fontStyle: "italic", fontSize: 14 }}>
              Inglés para {p.label.toLowerCase()}
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: "clamp(24px,3vw,36px)", borderLeft: "1px solid rgba(10,37,64,0.12)", borderRight: "1px solid rgba(10,37,64,0.12)" }}>
            <p style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontStyle: "italic", fontSize: "clamp(16px,1.6vw,22px)", lineHeight: 1.5, color: "#0A2540", marginTop: 0, marginBottom: 20 }}>
              {p.blurb}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 16px", marginBottom: 22 }}>
              {p.bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12.5, color: "#1A1A1A", lineHeight: 1.45 }}>
                  <span style={{ color: "#B22234", fontSize: 10, marginTop: 3, flexShrink: 0 }}>★</span>{b}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingTop: 16, borderTop: "1px solid rgba(10,37,64,0.1)" }}>
              {["A1","A1+","A2","A2+","B1","B1+","B2","B2+","C1","C2"].map((lv, i) => (
                <span key={lv} style={{
                  padding: "3px 8px", fontSize: 10, fontWeight: 700, letterSpacing: 0.5,
                  border: "1px solid #0A2540",
                  background: i < 3 ? "#0A2540" : "transparent",
                  color: i < 3 ? "#fff" : "#0A2540",
                }}>{lv}</span>
              ))}
            </div>
          </div>

          {/* Schedules */}
          <div style={{ padding: "clamp(20px,2.5vw,28px)" }}>
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#5B6470", fontWeight: 700, marginBottom: 12 }}>HORARIOS</div>
            <div style={{ display: "grid", gap: 6, marginBottom: 20 }}>
              {p.schedule.map((s) => (
                <div key={s} style={{ padding: "9px 11px", background: "#F5EFE0", fontSize: 11.5, color: "#0A2540", borderLeft: "3px solid #B22234", lineHeight: 1.35 }}>{s}</div>
              ))}
            </div>
            <button className="btn btn-red" style={{ width: "100%", textAlign: "center", padding: "12px 16px", fontSize: 10 }}>
              Inscribirme →
            </button>
            <p style={{ marginTop: 10, fontSize: 11, color: "#5B6470", fontStyle: "italic", textAlign: "center" }}>
              Cupos limitados · 14 por aula
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
