// Direction A — Embassy Classic
// Navy + red + cream, Playfair Display serif, institutional feel.

const A_W = 1440;

const aStyles = {
  navy: "#0A2540",
  navyDeep: "#071A30",
  red: "#B22234",
  redDeep: "#8E1A28",
  cream: "#F5EFE0",
  gold: "#C9A961",
  ink: "#1a1a1a",
  muted: "#5b6470",
};

function AStarsBg() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
      <defs>
        <pattern id="aStars" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M30 18 L33 27 L42 27 L34.5 33 L37.5 42 L30 36.5 L22.5 42 L25.5 33 L18 27 L27 27 Z" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#aStars)" />
    </svg>
  );
}

function AHeader() {
  return (
    <header style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "18px 56px", background: aStyles.navy, color: "#fff",
      borderBottom: `4px solid ${aStyles.red}`,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{
          width: 46, height: 46, borderRadius: "50%", background: "#fff",
          display: "grid", placeItems: "center", color: aStyles.navy,
          fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 22,
          border: `3px solid ${aStyles.red}`,
        }}>C</div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700 }}>
            Centro Boliviano Americano
          </div>
          <div style={{ fontSize: 11, letterSpacing: 2, opacity: 0.7, textTransform: "uppercase" }}>
            Sucre · Bolivia · Est. 1962
          </div>
        </div>
      </div>
      <nav style={{ display: "flex", gap: 30, fontSize: 13, fontWeight: 500, letterSpacing: 0.4 }}>
        {["Programas", "Calendario", "Eventos", "USA250", "Becas", "Nosotros", "Contacto"].map((x, i) => (
          <a key={x} style={{ color: "#fff", textDecoration: "none", borderBottom: i === 0 ? `2px solid ${aStyles.gold}` : "none", paddingBottom: 4 }}>{x}</a>
        ))}
      </nav>
      <div style={{ display: "flex", gap: 10 }}>
        <button style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "9px 16px", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer" }}>
          Sistema académico
        </button>
        <button style={{ background: aStyles.red, color: "#fff", border: "none", padding: "9px 18px", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", fontWeight: 700, cursor: "pointer" }}>
          Inscríbete
        </button>
      </div>
    </header>
  );
}

function AHero() {
  return (
    <section style={{ position: "relative", background: aStyles.navy, color: "#fff", overflow: "hidden" }}>
      <AStarsBg />
      {/* Red bottom stripes */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 70, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, background: aStyles.red }} />
        <div style={{ flex: 1, background: "#fff" }} />
        <div style={{ flex: 1, background: aStyles.red }} />
      </div>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, padding: "70px 56px 130px" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: aStyles.red, padding: "6px 14px", fontSize: 11, letterSpacing: 3, fontWeight: 700, marginBottom: 26 }}>
            <span>★</span> EDICIÓN ESPECIAL · 2026
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: 96, lineHeight: 0.92, fontWeight: 900,
            margin: "0 0 24px", letterSpacing: -2.5,
          }}>
            America
            <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginTop: 4 }}>
              <span style={{ color: aStyles.gold, fontStyle: "italic" }}>two-fifty</span>
              <span style={{ fontSize: 18, letterSpacing: 6, fontWeight: 600, opacity: 0.75, fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>desde Sucre</span>
            </div>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, maxWidth: 520, opacity: 0.85, margin: "0 0 32px" }}>
            {USA250.blurb}
          </p>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ background: "#fff", color: aStyles.navy, border: "none", padding: "16px 26px", fontSize: 13, letterSpacing: 2, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
              Ver agenda America 250 →
            </button>
            <button style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", padding: "16px 26px", fontSize: 13, letterSpacing: 2, fontWeight: 600, textTransform: "uppercase", cursor: "pointer" }}>
              Inscríbete a clases
            </button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{
            border: `1px solid rgba(255,255,255,0.2)`, padding: 18, background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(2px)",
          }}>
            <div style={{ fontSize: 11, letterSpacing: 3, color: aStyles.gold, marginBottom: 8 }}>⎯ COUNTDOWN ⎯</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, marginBottom: 18 }}>
              Independence Day · {USA250.date}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
              {[["86", "DÍAS"], ["14", "HRS"], ["32", "MIN"], ["08", "SEG"]].map(([n, l]) => (
                <div key={l} style={{ background: aStyles.navyDeep, padding: "14px 6px", textAlign: "center", border: `1px solid rgba(255,255,255,0.1)` }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 900 }}>{n}</div>
                  <div style={{ fontSize: 9, letterSpacing: 2, opacity: 0.6 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18, padding: "14px 0", borderTop: `1px solid rgba(255,255,255,0.15)`, fontSize: 12, opacity: 0.7, lineHeight: 1.5 }}>
              Junto a la Embajada de los Estados Unidos en Bolivia y el Departamento de Estado de EE.UU.
            </div>
          </div>
          <div style={{
            position: "absolute", top: -22, right: -22, width: 124, height: 124, borderRadius: "50%",
            background: aStyles.red, color: "#fff", display: "grid", placeItems: "center", textAlign: "center",
            fontFamily: "'Playfair Display', serif", lineHeight: 1, transform: "rotate(-8deg)",
            border: `5px double ${aStyles.cream}`, boxShadow: "0 14px 32px rgba(0,0,0,0.35)",
          }}>
            <div>
              <div style={{ fontSize: 9, letterSpacing: 3, opacity: 0.85, marginBottom: 4, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>1776</div>
              <div style={{ fontSize: 40, fontWeight: 900, fontStyle: "italic" }}>250</div>
              <div style={{ fontSize: 9, letterSpacing: 3, opacity: 0.85, marginTop: 4, fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AAnnouncement() {
  return (
    <div style={{ background: aStyles.cream, padding: "14px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, borderBottom: `1px solid rgba(0,0,0,0.06)` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 13, color: aStyles.ink }}>
        <span style={{ background: aStyles.red, color: "#fff", padding: "3px 10px", fontSize: 10, letterSpacing: 2, fontWeight: 700 }}>NUEVO</span>
        Inscripciones abiertas para el ciclo <strong>Mayo – Julio 2026</strong>. Niveles disponibles para todas las edades.
      </div>
      <a style={{ fontSize: 12, color: aStyles.navy, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Inscribirme →</a>
    </div>
  );
}


Object.assign(window, { AHeader, AHero, AAnnouncement, aStyles, A_W });
