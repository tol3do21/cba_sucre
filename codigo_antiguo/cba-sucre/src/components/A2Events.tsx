import { EVENTS } from "@/lib/data";
import { StarsBg } from "./StarsBg";

export function A2Events() {
  return (
    <section id="eventos" style={{ background: "#0A2540", color: "#fff", padding: "clamp(50px,6vw,90px) 0", position: "relative", overflow: "hidden" }}>
      <StarsBg id="eventsStars" opacity={0.14} />
      <div className="wrap" style={{ position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <p style={{ fontSize: 10, letterSpacing: 4, color: "#C9A961", fontWeight: 700, margin: "0 0 10px" }}>★ ★ ★  AGENDA AMERICA 250  ★ ★ ★</p>
          <h2 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(32px,5vw,68px)", margin: 0, letterSpacing: -1.5, lineHeight: 1.05 }}>
            Un año de <em style={{ color: "#C9A961" }}>celebraciones</em>.
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20 }}>

          {/* Featured */}
          <article style={{ position: "relative", overflow: "hidden", minHeight: 420 }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg,rgba(178,34,52,0.55),rgba(178,34,52,0.96)),url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80) center/cover",
            }} />
            <div style={{ position: "relative", padding: "clamp(28px,3vw,44px)", display: "flex", flexDirection: "column", height: "100%", minHeight: 420 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <span style={{ background: "#fff", color: "#B22234", padding: "4px 12px", fontSize: 10, letterSpacing: 3, fontWeight: 700 }}>★ EVENTO ESTELAR</span>
                <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 18, fontStyle: "italic" }}>{EVENTS[0].date}</span>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(28px,4vw,52px)", lineHeight: 1, margin: "0 0 14px", letterSpacing: -1, fontWeight: 900 }}>
                  Independence Day<br /><em>The Big 250</em>
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, opacity: 0.92, margin: 0, fontStyle: "italic", fontFamily: "var(--font-playfair),Georgia,serif" }}>
                  {EVENTS[0].desc}
                </p>
              </div>
              <div style={{ display: "flex", gap: 20, alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.25)", paddingTop: 16, marginTop: 20, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12 }}>📍 {EVENTS[0].place}</span>
                <span style={{ fontSize: 12, opacity: 0.8 }}>🎟 Entrada libre · cupo limitado</span>
                <button className="btn" style={{ marginLeft: "auto", background: "#fff", color: "#B22234", padding: "10px 20px", fontSize: 10 }}>Reservar →</button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {EVENTS.slice(1).map((e, i) => (
              <article key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "clamp(16px,2vw,22px)", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                  <span style={{ background: "#C9A961", color: "#0A2540", padding: "3px 9px", fontSize: 9, letterSpacing: 2, fontWeight: 700 }}>{e.tag.toUpperCase()}</span>
                  <span style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 13, fontStyle: "italic", opacity: 0.7 }}>{e.date}</span>
                </div>
                <h4 style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(16px,1.6vw,21px)", margin: "2px 0 0", lineHeight: 1.2, fontWeight: 700 }}>{e.title}</h4>
                <p style={{ fontSize: 12, opacity: 0.75, lineHeight: 1.5, margin: 0 }}>{e.desc}</p>
                <div style={{ fontSize: 11, opacity: 0.6, marginTop: "auto", paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.1)" }}>📍 {e.place}</div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
