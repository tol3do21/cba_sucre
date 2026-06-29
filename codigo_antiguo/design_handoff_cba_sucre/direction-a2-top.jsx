// Direction A2 — Embassy Classic · Editorial Masthead
// Same visual language as A (navy/red/cream/gold, Playfair, stars)
// but laid out like a classic broadsheet newspaper — cream-dominant,
// big italic display, asymmetric editorial composition.

const A2_W = 1440;

const a2Styles = {
  navy: "#0A2540",
  navyDeep: "#071A30",
  red: "#B22234",
  redDeep: "#8E1A28",
  cream: "#F5EFE0",
  creamDeep: "#EBE2CC",
  gold: "#C9A961",
  ink: "#1a1a1a",
  muted: "#5b6470",
  rule: "#0A2540",
};

function A2Rule({ thick = false, color }) {
  return (
    <div style={{
      height: thick ? 6 : 1, background: color || a2Styles.rule,
      borderTop: thick ? `1px solid ${color || a2Styles.rule}` : "none",
      borderBottom: thick ? `1px solid ${color || a2Styles.rule}` : "none",
      boxShadow: thick ? `inset 0 0 0 1px ${a2Styles.cream}` : "none",
    }} />
  );
}


function A2Programs() {
  const [active, setActive] = React.useState("teens");
  return (
    <section style={{ background: a2Styles.cream, padding: "70px 56px" }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: a2Styles.red, fontWeight: 700, marginBottom: 10 }}>★ ★ ★  PROGRAMAS DE INGLÉS  ★ ★ ★</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, margin: 0, color: a2Styles.navy, letterSpacing: -2, lineHeight: 1 }}>
          Una clase para <em>cada</em> edad.
        </h2>
        <div style={{ marginTop: 16, fontSize: 14, color: a2Styles.muted, fontStyle: "italic", maxWidth: 560, marginInline: "auto", lineHeight: 1.6 }}>
          Diseñados con docentes certificados por el Departamento de Estado de EE.UU. · Currícula Cambridge & marco común europeo.
        </div>
      </div>

      {/* 4-column comparison cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginBottom: 0, border: `1px solid ${a2Styles.navy}`, background: "#fff" }}>
        {PROGRAMS.map((p, i) => (
          <button key={p.id} onClick={() => setActive(p.id)} style={{
            background: active === p.id ? a2Styles.navy : "#fff", color: active === p.id ? "#fff" : a2Styles.navy,
            border: "none", borderRight: i < 3 ? `1px solid ${active === p.id ? "rgba(255,255,255,0.15)" : a2Styles.navy}` : "none",
            padding: "30px 24px", textAlign: "left", cursor: "pointer", display: "flex", flexDirection: "column", gap: 10,
            position: "relative",
          }}>
            {active === p.id && <div style={{ position: "absolute", left: 0, right: 0, top: -1, height: 4, background: a2Styles.red }} />}
            <div style={{ fontSize: 10, letterSpacing: 3, fontWeight: 700, opacity: 0.7 }}>NIVEL  ·  0{i + 1}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, fontWeight: 900, lineHeight: 1, fontStyle: "italic" }}>
              {p.label}
            </div>
            <div style={{ fontSize: 13, opacity: 0.85, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>{p.ageRange}</div>
            <div style={{ height: 1, background: active === p.id ? "rgba(255,255,255,0.2)" : "rgba(10,37,64,0.15)", margin: "8px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: 1 }}>
              <span style={{ opacity: 0.7 }}>{p.duration.split("·")[0].trim()}</span>
              <span style={{ fontWeight: 700, color: active === p.id ? a2Styles.gold : a2Styles.red }}>{p.price}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Expanded detail panel */}
      {(() => {
        const p = PROGRAMS.find((x) => x.id === active);
        return (
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr 0.9fr", gap: 0, border: `1px solid ${a2Styles.navy}`, borderTop: "none", background: "#fff" }}>
            <div style={{ background: `url(${p.photo}) center/cover`, minHeight: 380, position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,37,64,0.2), rgba(10,37,64,0.6))" }} />
              <div style={{ position: "absolute", left: 20, bottom: 20, color: "#fff", fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 16 }}>
                Inglés para {p.label.toLowerCase()}
              </div>
            </div>
            <div style={{ padding: "36px 36px", borderRight: `1px solid rgba(10,37,64,0.15)`, borderLeft: `1px solid rgba(10,37,64,0.15)` }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 26, lineHeight: 1.4, color: a2Styles.navy, marginBottom: 22, fontWeight: 400 }}>
                {p.blurb}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {p.bullets.map((b) => (
                  <div key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: a2Styles.ink, lineHeight: 1.5 }}>
                    <span style={{ color: a2Styles.red, fontSize: 11, marginTop: 4 }}>★</span>{b}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 26, paddingTop: 18, borderTop: `1px solid rgba(10,37,64,0.15)`, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["A1", "A1+", "A2", "A2+", "B1", "B1+", "B2", "B2+", "C1", "C2"].map((lv, i) => (
                  <div key={lv} style={{ padding: "4px 9px", fontSize: 10, fontWeight: 700, letterSpacing: 0.5, border: `1px solid ${a2Styles.navy}`, background: i < 3 ? a2Styles.navy : "transparent", color: i < 3 ? "#fff" : a2Styles.navy }}>{lv}</div>
                ))}
              </div>
            </div>
            <div style={{ padding: "30px 28px" }}>
              <div style={{ fontSize: 10, letterSpacing: 3, color: a2Styles.muted, fontWeight: 700, marginBottom: 14 }}>HORARIOS</div>
              <div style={{ display: "grid", gap: 8, marginBottom: 24 }}>
                {p.schedule.map((s) => (
                  <div key={s} style={{ padding: "10px 12px", background: a2Styles.cream, fontSize: 12, color: a2Styles.navy, borderLeft: `3px solid ${a2Styles.red}` }}>{s}</div>
                ))}
              </div>
              <button style={{ width: "100%", background: a2Styles.red, color: "#fff", border: "none", padding: "14px 18px", fontSize: 11, letterSpacing: 2, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
                Inscribirme →
              </button>
              <div style={{ marginTop: 14, fontSize: 11, color: a2Styles.muted, fontStyle: "italic", textAlign: "center" }}>
                Cupos limitados · 14 por aula
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}


Object.assign(window, { A2Programs, A2Rule, a2Styles, A2_W });
