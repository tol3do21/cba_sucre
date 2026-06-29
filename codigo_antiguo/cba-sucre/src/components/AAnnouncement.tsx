export function AAnnouncement() {
  return (
    <div style={{ background: "#F5EFE0", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 16,
        padding: "11px clamp(20px,4vw,56px)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "#1A1A1A" }}>
          <span style={{
            background: "#B22234", color: "#fff",
            padding: "2px 9px", fontSize: 10, letterSpacing: 2, fontWeight: 700, flexShrink: 0,
          }}>NUEVO</span>
          <span>
            Inscripciones abiertas para el ciclo <strong>Mayo – Julio 2026</strong>.
            Niveles disponibles para todas las edades.
          </span>
        </div>
        <a href="#inscripcion" style={{
          fontSize: 11, color: "#0A2540", fontWeight: 700,
          letterSpacing: 1.5, textTransform: "uppercase",
          textDecoration: "none", whiteSpace: "nowrap",
        }}>Inscribirme →</a>
      </div>
    </div>
  );
}
