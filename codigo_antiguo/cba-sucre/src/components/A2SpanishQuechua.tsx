import { SPANISH_QUECHUA } from "@/lib/data";

export function A2SpanishQuechua() {
  return (
    <section id="espanol-quechua" style={{ background: "#fff", borderTop: "1px solid #0A2540", padding: "clamp(50px,6vw,90px) 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <p className="eyebrow">★ Más allá del inglés</p>
          <h2 className="section-h2" style={{ fontSize: "clamp(30px,4.5vw,60px)", marginBottom: 14 }}>
            Español, <em>Quechua</em> y Kinder Bilingüe.
          </h2>
          <p style={{ fontSize: 14.5, color: "#5B6470", fontStyle: "italic", maxWidth: 560, margin: "0 auto", lineHeight: 1.65 }}>
            El único centro en Bolivia que ofrece inglés, español para extranjeros y la lengua ancestral quechua bajo un mismo techo.
          </p>
        </div>

        {/* 3 cols */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1px solid #0A2540" }}>

          {/* Español */}
          <div style={{ padding: "clamp(28px,3vw,44px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #0A2540" }}>
            <span style={{ display: "inline-block", background: "#B22234", color: "#fff", padding: "3px 10px", fontSize: 9, letterSpacing: 2, fontWeight: 700, marginBottom: 18 }}>PARA EXTRANJEROS</span>
            <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 700, color: "#0A2540", margin: "0 0 14px", fontStyle: "italic", lineHeight: 1.1 }}>
              {SPANISH_QUECHUA.spanish.title}
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#1A1A1A", marginBottom: 20 }}>{SPANISH_QUECHUA.spanish.desc}</p>
            <div style={{ display: "grid", gap: 7, marginBottom: 22 }}>
              {SPANISH_QUECHUA.spanish.bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12.5, color: "#1A1A1A" }}>
                  <span style={{ color: "#B22234", fontSize: 10, marginTop: 3, flexShrink: 0 }}>★</span>{b}
                </div>
              ))}
            </div>
            <div style={{ padding: "12px 14px", background: "#F5EFE0", borderLeft: "3px solid #B22234", fontSize: 13, color: "#0A2540", fontStyle: "italic", lineHeight: 1.5 }}>
              ¿Viniste a descubrir Sucre? Aprende español mientras vives la ciudad.
            </div>
          </div>

          {/* Quechua */}
          <div style={{ padding: "clamp(28px,3vw,44px) clamp(22px,2.5vw,36px)", borderRight: "1px solid #0A2540", background: "#0A2540", color: "#fff" }}>
            <span style={{ display: "inline-block", background: "#C9A961", color: "#0A2540", padding: "3px 10px", fontSize: 9, letterSpacing: 2, fontWeight: 700, marginBottom: 18 }}>LENGUA ANCESTRAL</span>
            <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 700, color: "#fff", margin: "0 0 14px", fontStyle: "italic", lineHeight: 1.1 }}>
              {SPANISH_QUECHUA.quechua.title}
            </h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, opacity: 0.85, marginBottom: 20 }}>{SPANISH_QUECHUA.quechua.desc}</p>
            <div style={{ display: "grid", gap: 7, marginBottom: 22 }}>
              {SPANISH_QUECHUA.quechua.bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 12.5 }}>
                  <span style={{ color: "#C9A961", fontSize: 10, marginTop: 3, flexShrink: 0 }}>★</span>{b}
                </div>
              ))}
            </div>
            <div style={{ padding: "12px 14px", background: "rgba(255,255,255,0.07)", borderLeft: "3px solid #C9A961", fontSize: 13, fontStyle: "italic", lineHeight: 1.5, opacity: 0.9 }}>
              "Ama suwa, ama llulla, ama qhilla" — No robes, no mientas, no seas perezoso.
            </div>
          </div>

          {/* Servicios */}
          <div style={{ padding: "clamp(28px,3vw,44px) clamp(22px,2.5vw,36px)" }}>
            <span style={{ display: "inline-block", background: "#0A2540", color: "#fff", padding: "3px 10px", fontSize: 9, letterSpacing: 2, fontWeight: 700, marginBottom: 18 }}>SERVICIOS ADICIONALES</span>

            {[
              ["Kinder Bilingüe", "El primer kinder bilingüe de Chuquisaca (desde 1985), para niños de 3 a 5 años. Inmersión en inglés desde la primera infancia."],
              ["Biblioteca", "Colección de libros, revistas y material audiovisual en inglés disponible para estudiantes y público general."],
              ["Oportunidades Laborales", "Bolsa de trabajo activa y voluntariado con organizaciones de EE.UU. para ex-alumnos y estudiantes avanzados."],
            ].map(([t, d], i) => (
              <div key={t as string} style={{ paddingBottom: i < 2 ? 22 : 0, marginBottom: i < 2 ? 22 : 0, borderBottom: i < 2 ? "1px solid rgba(10,37,64,0.1)" : "none" }}>
                <h4 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(16px,1.6vw,20px)", fontWeight: 700, color: "#0A2540", margin: "0 0 8px", fontStyle: "italic" }}>{t}</h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: "#1A1A1A", margin: 0 }}>{d}</p>
              </div>
            ))}

            <button className="btn btn-red" style={{ marginTop: 20, fontSize: 10, padding: "10px 16px" }}>
              Ver oportunidades →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
