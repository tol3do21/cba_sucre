import { CBA } from "@/lib/data";

const SOCIAL = ["F","Ig","Yt","in","X"];
const LINKS  = ["Sistema académico","Bolsa de trabajo","Voluntariado USA","Biblioteca digital","Reglamento"];

export function A2Footer() {
  return (
    <footer id="contacto" style={{ background: "#071A30", color: "#fff" }}>
      {/* Red rule */}
      <div style={{ height: 5, background: "#B22234", borderTop: "1px solid #8E1A28", borderBottom: "1px solid #8E1A28" }} />

      <div className="wrap" style={{ padding: "clamp(40px,5vw,60px) clamp(20px,4vw,56px) clamp(24px,3vw,32px)" }}>

        {/* Masthead */}
        <div style={{ textAlign: "center", marginBottom: 36, paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ fontSize: 10, letterSpacing: 5, color: "#C9A961", fontWeight: 700, marginBottom: 6 }}>★  EST. 1962  ★</div>
          <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(22px,3vw,36px)", fontWeight: 900, letterSpacing: -0.5, fontStyle: "italic" }}>The Bolivian–American</div>
          <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 12, letterSpacing: 7, marginTop: 4, opacity: 0.8 }}>·  C · B · A  ·  S U C R E  ·</div>
        </div>

        {/* 4 cols */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: "clamp(24px,3vw,40px)", marginBottom: 28 }}>

          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#C9A961", fontWeight: 700, marginBottom: 12 }}>QUIÉNES SOMOS</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.72, margin: "0 0 16px" }}>
              Institución cultural y educativa binacional. Centro oficial EducationUSA en Sucre. Acreditada por la Embajada de los EE.UU. en Bolivia.
            </p>
            <div style={{ display: "flex", gap: 6 }}>
              {SOCIAL.map((s) => (
                <div key={s} style={{ width: 30, height: 30, border: "1px solid rgba(255,255,255,0.25)", display: "grid", placeItems: "center", fontSize: 10, cursor: "pointer" }}>{s}</div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#C9A961", fontWeight: 700, marginBottom: 12 }}>VISÍTANOS</div>
            <div style={{ fontSize: 13, lineHeight: 1.85, opacity: 0.82, fontFamily: "var(--font-playfair),Georgia,serif", fontStyle: "italic" }}>
              {CBA.address}<br />Sucre · Bolivia
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.7, opacity: 0.65, marginTop: 10 }}>{CBA.hours}</div>
          </div>

          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#C9A961", fontWeight: 700, marginBottom: 12 }}>CONTACTO</div>
            <div style={{ fontSize: 13, lineHeight: 1.85, opacity: 0.82 }}>
              {CBA.phone}<br />{CBA.email}<br />WhatsApp · +591 7XXX-XXXX
            </div>
          </div>

          <div>
            <div style={{ fontSize: 10, letterSpacing: 2, color: "#C9A961", fontWeight: 700, marginBottom: 12 }}>ENLACES</div>
            <div style={{ display: "grid", gap: 7 }}>
              {LINKS.map((l) => (
                <a key={l} href="#" style={{ fontSize: 13, opacity: 0.78, color: "#fff", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "14px clamp(20px,4vw,56px)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, fontSize: 11, opacity: 0.55, letterSpacing: 0.5, fontStyle: "italic" }}>
        <span>© 2026 Centro Boliviano Americano · Sucre · Todos los derechos reservados</span>
        <span>Diseñado con ★ en Sucre · Edición especial America 250</span>
      </div>
    </footer>
  );
}
