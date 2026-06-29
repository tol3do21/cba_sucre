import { CBA } from "@/lib/data";

const MILESTONES = [
  ["1962", "Fundación",          "Nace el CBA Sucre con apoyo de la Embajada de EE.UU."],
  ["1985", "Kinder bilingüe",    "Primer programa pre-escolar bilingüe de Chuquisaca."],
  ["1998", "Acreditación",       "Centro examinador oficial Cambridge, TOEFL, ECCE y ECPE."],
  ["2007", "Resolución Ministerial","Acreditación Nº 281/07 — Enseñanza Técnico Medio."],
  ["2010", "EducationUSA",       "Centro oficial de asesoría para universidades de EE.UU."],
  ["2026", "America 250",        "Sede oficial de la celebración del sesquicentenario."],
];

export function A2About() {
  return (
    <section id="nosotros" style={{ background: "#F5EFE0", padding: "clamp(50px,6vw,90px) 0" }}>
      <div className="wrap">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <p className="eyebrow">★ ★ ★  Quiénes Somos  ★ ★ ★</p>
          <h2 className="section-h2" style={{ fontSize: "clamp(32px,5vw,68px)" }}>
            Más de <em>60 años</em> tendiendo puentes.
          </h2>
        </div>

        {/* Misión + Pilares */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(30px,4vw,60px)", marginBottom: 64, alignItems: "flex-start" }}>

          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#B22234", fontWeight: 700, marginBottom: 12 }}>MISIÓN INSTITUCIONAL</div>
            <blockquote style={{
              fontFamily: "var(--font-playfair),Georgia,serif",
              fontSize: "clamp(16px,1.7vw,21px)", fontStyle: "italic",
              color: "#0A2540", lineHeight: 1.55,
              margin: "0 0 20px", paddingLeft: 18, borderLeft: "3px solid #B22234",
            }}>
              "{CBA.mision}"
            </blockquote>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "#1A1A1A" }}>
              Somos una <strong>Fundación Educativa y Cultural</strong> sin fines de lucro, reconocida por el
              Ministerio de Educación de Bolivia. Promovemos el intercambio académico y cultural entre
              Bolivia, los Estados Unidos y otros países.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, color: "#B22234", fontWeight: 700, marginBottom: 14 }}>PILARES FUNDAMENTALES</div>
            <div style={{ border: "1px solid #0A2540" }}>
              {[
                ["01", "Educación sin discriminación", "Enseñanza de inglés, español y quechua sin restricción de edad, con metodología actualizada y tecnología moderna."],
                ["02", "Intercambio cultural",         "Actividades culturales e intercambio bilateral entre Bolivia y los Estados Unidos."],
                ["03", "Asesoría y exámenes",          "Asesoría educativa universitaria y administración de exámenes TOEFL, ECCE y ECPE."],
              ].map(([n, t, d], i) => (
                <div key={n as string} style={{ display: "grid", gridTemplateColumns: "52px 1fr", borderTop: i > 0 ? "1px solid rgba(10,37,64,0.15)" : "none" }}>
                  <div style={{ background: "#0A2540", color: "#C9A961", display: "grid", placeItems: "center", fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 19, fontStyle: "italic", fontWeight: 900 }}>{n}</div>
                  <div style={{ padding: "16px 18px" }}>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 15, color: "#0A2540", fontWeight: 700, marginBottom: 3 }}>{t}</div>
                    <div style={{ fontSize: 12.5, color: "#5B6470", lineHeight: 1.5 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Timeline */}
        <div style={{ borderTop: "1px solid rgba(10,37,64,0.15)", paddingTop: 48 }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: 36 }}>★ ★ ★  Historia  ★ ★ ★</p>
          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: 36, height: 1, background: "#0A2540" }} />
            <div style={{ position: "absolute", left: 0, right: 0, top: 39, height: 1, background: "#0A2540" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}>
              {MILESTONES.map(([y, t, d], i) => (
                <div key={y as string} style={{ position: "relative", paddingTop: 58, textAlign: "center" }}>
                  <div style={{
                    position: "absolute", top: 27, left: "50%", transform: "translateX(-50%)",
                    width: 16, height: 16, borderRadius: "50%",
                    background: i === MILESTONES.length - 1 ? "#B22234" : "#0A2540",
                    border: "3px solid #F5EFE0",
                  }} />
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(20px,2.2vw,30px)", color: "#0A2540", fontWeight: 900, fontStyle: "italic", letterSpacing: -0.5 }}>{y}</div>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 13, color: "#B22234", fontWeight: 700, marginTop: 3 }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: "#1A1A1A", lineHeight: 1.5, marginTop: 6 }}>{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
