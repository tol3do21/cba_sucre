"use client";

import { useState } from "react";
import { CALENDAR_WEEKS } from "@/lib/data";

const COLOR_MAP: Record<string, string> = { kids: "#B22234", teens: "#C9A961", adults: "#0A2540", special: "#5B8C5A" };
const TAG_LABELS: Record<string, string> = { kids: "Niños", teens: "Adolesc.", adults: "Adultos", special: "Especial" };

export function A2Calendar() {
  const [cycle, setCycle] = useState("Mayo");
  const [filter, setFilter] = useState("Todos");
  const [showModal, setShowModal] = useState(false);
  const visible = CALENDAR_WEEKS[cycle].filter((e) => filter === "Todos" || e.tag === filter);

  return (
    <section id="calendario" style={{ background: "#fff", borderTop: "1px solid #0A2540", padding: "clamp(50px,6vw,80px) 0" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "clamp(24px,4vw,50px)", alignItems: "flex-start" }}>

          {/* Filters */}
          <div>
            <p className="eyebrow">★ Calendario Académico</p>
            <h2 className="section-h2" style={{ fontSize: "clamp(28px,4vw,52px)", marginBottom: 16 }}>
              Ciclo<br /><em>Mayo — Julio</em>
            </h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#1A1A1A", marginBottom: 22, fontStyle: "italic" }}>
              Selecciona un mes y filtra por programa. Las inscripciones cierran 5 días antes del inicio.
            </p>
            <div style={{ display: "grid", gap: 5 }}>
              {([
                ["Todos los programas", "Todos", "#0A2540"],
                ["Niños 6–11",          "kids",  COLOR_MAP.kids],
                ["Adolescentes 12–16",  "teens", COLOR_MAP.teens],
                ["Adultos 17+",         "adults",COLOR_MAP.adults],
                ["Eventos y Cultura",   "special",COLOR_MAP.special],
              ] as [string,string,string][]).map(([l, id, c]) => (
                <button key={id} onClick={() => setFilter(id)} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  background: filter === id ? "#F5EFE0" : "transparent",
                  border: `1px solid ${filter === id ? "#0A2540" : "rgba(0,0,0,0.1)"}`,
                  padding: "9px 12px", fontSize: 12.5, color: "#1A1A1A",
                  cursor: "pointer", textAlign: "left",
                }}>
                  <span style={{ width: 9, height: 9, background: c, borderRadius: "50%", flexShrink: 0 }} />
                  {l}
                </button>
              ))}
            </div>

            <div style={{ marginTop: 24, borderTop: "1px solid rgba(10,37,64,0.15)", paddingTop: 18 }}>
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-outline-navy"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  fontSize: 10,
                  padding: "10px 14px",
                  cursor: "pointer",
                }}
              >
                Ver Calendario 2026 ↗
              </button>
            </div>
          </div>

          {/* Events */}
          <div>
            <div style={{ display: "flex", borderBottom: "2px solid #0A2540" }}>
              {["Mayo","Junio","Julio"].map((m) => (
                <button key={m} onClick={() => setCycle(m)} style={{
                  flex: 1, padding: "14px 12px", position: "relative",
                  background: cycle === m ? "#0A2540" : "transparent",
                  color: cycle === m ? "#fff" : "#0A2540",
                  border: "none",
                  fontFamily: "var(--font-playfair),Georgia,serif",
                  fontSize: "clamp(18px,2vw,26px)", fontStyle: "italic", fontWeight: 700, cursor: "pointer",
                }}>
                  {m}
                  {cycle === m && <div style={{ position: "absolute", inset: "0 0 auto 0", height: 3, background: "#B22234" }} />}
                </button>
              ))}
            </div>

            <div style={{ border: "1px solid #0A2540", borderTop: "none" }}>
              {visible.length === 0 ? (
                <div style={{ padding: "36px 20px", textAlign: "center", color: "#5B6470", fontStyle: "italic", fontSize: 14 }}>
                  No hay eventos para este filtro en {cycle}.
                </div>
              ) : visible.map((e, i) => (
                <div key={i} style={{
                  display: "grid", gridTemplateColumns: "64px 80px 1fr auto",
                  gap: 16, alignItems: "center",
                  padding: "14px 18px",
                  borderTop: i > 0 ? "1px solid rgba(10,37,64,0.08)" : "none",
                }}>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 900, color: "#0A2540", lineHeight: 1, fontStyle: "italic" }}>
                    {String(e.d).padStart(2,"0")}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, letterSpacing: 1.5, color: COLOR_MAP[e.tag], fontWeight: 700, textTransform: "uppercase" }}>
                    <span style={{ width: 7, height: 7, background: COLOR_MAP[e.tag], borderRadius: "50%", flexShrink: 0 }} />
                    {TAG_LABELS[e.tag]}
                  </div>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(14px,1.4vw,18px)", color: "#0A2540", fontWeight: 700, lineHeight: 1.3 }}>
                    {e.title}
                  </div>
                  <a style={{ fontSize: 10, letterSpacing: 1.5, color: "#B22234", fontWeight: 700, textTransform: "uppercase", cursor: "pointer", whiteSpace: "nowrap" }}>
                    Ver →
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10,37,64,0.85)",
            backdropFilter: "blur(8px)",
            display: "grid",
            placeItems: "center",
            padding: 24,
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              background: "#fff",
              border: "3px solid #0A2540",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "#B22234",
                color: "#fff",
                border: "none",
                width: 32,
                height: 32,
                borderRadius: "50%",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                zIndex: 10,
              }}
            >
              ✕
            </button>
            <img
              src="/images/calendario-2026.jpg"
              alt="Calendario Académico 2026"
              style={{
                display: "block",
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
