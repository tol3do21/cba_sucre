import { BECAS } from "@/lib/data";

export function A2Fulbright() {
  return (
    <section id="becas" style={{ background: "#F5EFE0", padding: "clamp(50px,6vw,90px) 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <p className="eyebrow">★ EducationUSA Advising · Becas</p>
          <h2 className="section-h2" style={{ fontSize: "clamp(32px,5vw,62px)", marginBottom: 14 }}>
            Tu camino a una <em style={{ color: "#B22234" }}>universidad</em> en EE.UU.
          </h2>
          <p style={{ fontSize: 14.5, color: "#5B6470", fontStyle: "italic", maxWidth: 580, margin: "0 auto", lineHeight: 1.65 }}>
            Centro oficial <strong style={{ color: "#0A2540" }}>EducationUSA</strong>. Asesoría gratuita, exámenes internacionales
            y más de 120 ex-becarios Fulbright desde 1962.
          </p>
        </div>

        {/* Pitch + Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(30px,4vw,60px)", alignItems: "flex-start", marginBottom: 56 }}>

          <div>
            <blockquote style={{
              fontFamily: "var(--font-playfair),Georgia,serif",
              fontSize: "clamp(16px,1.6vw,20px)", fontStyle: "italic",
              color: "#1A1A1A", lineHeight: 1.55, margin: "0 0 20px",
              paddingLeft: 18, borderLeft: "3px solid #B22234",
            }}>
              "Estudiar en EE.UU. cambió mi forma de ver el mundo."
              <footer style={{ fontSize: 12, fontStyle: "italic", marginTop: 8, color: "#5B6470", fontFamily: "var(--font-inter),sans-serif" }}>
                — Andrea M. · Fulbright 2024 · Cornell University
              </footer>
            </blockquote>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "#1A1A1A", marginBottom: 24 }}>
              El CBA Sucre administra exámenes <strong>TOEFL PBT & iBT</strong>, <strong>ECCE</strong> y <strong>ECPE</strong> con material
              y personal especializado. Lazos activos con <strong>38 universidades aliadas</strong> en EE.UU.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn btn-navy">Solicitar asesoría gratuita →</button>
              <button className="btn btn-outline-navy">Ver exámenes disponibles</button>
            </div>
          </div>

          {/* Stats 2×2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid #0A2540" }}>
            {[
              ["120+", "Becarios Fulbright desde 1962", "#B22234"],
              ["38",   "Universidades aliadas en EE.UU.", "#0A2540"],
              ["TOEFL","Centro autorizado PBT & iBT",   "#0A2540"],
              ["ECCE", "Exámenes Cambridge oficiales",  "#B22234"],
            ].map(([n, l, bg], i) => (
              <div key={l as string} style={{
                background: bg as string, color: "#fff",
                padding: "clamp(24px,3vw,40px) clamp(20px,2.5vw,30px)",
                borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.18)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.18)" : "none",
                minHeight: 170, display: "flex", flexDirection: "column", justifyContent: "flex-end",
                position: "relative",
              }}>
                <div style={{ position: "absolute", top: 12, right: 14, fontSize: 9, letterSpacing: 3, opacity: 0.5 }}>{String(i+1).padStart(2,"0")}/04</div>
                <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(32px,4vw,56px)", fontWeight: 900, lineHeight: 1, marginBottom: 8, letterSpacing: -1.5, fontStyle: "italic" }}>{n}</div>
                <div style={{ fontSize: 12.5, opacity: 0.88, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors / Partner Badges */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 40,
          flexWrap: "wrap",
          padding: "24px 0",
          margin: "36px 0 48px",
          borderTop: "1px solid rgba(10,37,64,0.12)",
          borderBottom: "1px solid rgba(10,37,64,0.12)",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "#5B6470", textTransform: "uppercase" }}>
            Aliados y Programas Oficiales:
          </span>
          <img src="/logos/logo-american-spaces.png" alt="American Spaces" style={{ height: 36, objectFit: "contain", opacity: 0.95 }} />
          <img src="/logos/logo-america250.png" alt="America 250" style={{ height: 36, objectFit: "contain", opacity: 0.95 }} />
          <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 14, fontWeight: 800, color: "#0A2540", letterSpacing: 1 }}>
            EducationUSA
          </span>
          <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 14, fontWeight: 800, color: "#B22234", letterSpacing: 1.5 }}>
            ABLA
          </span>
          <span style={{ fontFamily: "var(--font-inter),sans-serif", fontSize: 14, fontWeight: 800, color: "#C9A961", letterSpacing: 1.5 }}>
            FEBI
          </span>
        </div>

        {/* 3 becas */}
        <div style={{ paddingTop: 12 }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 8 }}>★ Programas de Becas Disponibles</p>
          <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(26px,3.5vw,40px)", color: "#0A2540", textAlign: "center", margin: "0 0 36px", letterSpacing: -1 }}>
            Tres caminos hacia los <em>Estados Unidos</em>
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid #0A2540" }}>
            {BECAS.map((b, i) => (
              <div key={b.id} style={{
                padding: "clamp(24px,3vw,36px) clamp(20px,2.5vw,30px)",
                borderRight: i < 2 ? "1px solid #0A2540" : "none",
                background: "#fff", display: "flex", flexDirection: "column", gap: 12,
              }}>
                <span style={{ alignSelf: "flex-start", background: b.bg, color: "#fff", padding: "3px 10px", fontSize: 9, letterSpacing: 2, fontWeight: 700 }}>BECA 0{i+1}</span>
                <h4 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(18px,2vw,24px)", fontWeight: 700, color: "#0A2540", margin: 0, lineHeight: 1.2 }}>{b.nombre}</h4>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#1A1A1A", margin: 0 }}>{b.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid rgba(10,37,64,0.12)", fontSize: 12, color: "#5B6470", fontStyle: "italic" }}>
                  <strong style={{ color: "#0A2540", fontStyle: "normal" }}>Requisitos:</strong> {b.requisitos}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
