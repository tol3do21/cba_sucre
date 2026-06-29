"use client";

import { useState } from "react";
import { PROGRAMS } from "@/lib/data";

export function A2Inscription() {
  const [prog, setProg] = useState("teens");
  const [sched, setSched] = useState(0);
  const [mode, setMode] = useState(0);
  const active = PROGRAMS.find((p) => p.id === prog)!;

  return (
    <section id="inscripcion" style={{ background: "#fff", padding: "clamp(50px,6vw,90px) 0", borderTop: "1px solid #0A2540", borderBottom: "1px solid #0A2540" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.35fr", gap: "clamp(30px,4vw,60px)" }}>

          {/* Pitch */}
          <div>
            <p className="eyebrow">★ Pre-inscripción en línea</p>
            <h2 className="section-h2" style={{ fontSize: "clamp(30px,4.5vw,56px)", marginBottom: 18 }}>
              Reserva tu cupo<br /><em>en minutos</em>.
            </h2>
            <p style={{ fontSize: 14.5, lineHeight: 1.75, color: "#1A1A1A", marginBottom: 28 }}>
              Completa el formulario y te contactaremos en menos de 24 horas para confirmar horario y pago.
            </p>

            <div style={{ borderTop: "1px solid rgba(10,37,64,0.12)", paddingTop: 22 }}>
              <div style={{ fontSize: 9, letterSpacing: 3, color: "#5B6470", fontWeight: 700, marginBottom: 14 }}>POR QUÉ EL CBA</div>
              {[
                ["Docentes certificados",    "Por el Departamento de Estado de EE.UU."],
                ["Currícula Cambridge",      "Niveles A1–C2 reconocidos internacionalmente"],
                ["Centro examinador oficial","TOEFL iBT · IELTS · Cambridge YLE/KET/PET/FCE"],
              ].map(([t, d]) => (
                <div key={t as string} style={{ display: "flex", gap: 12, padding: "11px 0", borderBottom: "1px solid rgba(10,37,64,0.08)" }}>
                  <span style={{ color: "#B22234", fontSize: 13, flexShrink: 0, marginTop: 1 }}>★</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 15, color: "#0A2540", fontWeight: 700 }}>{t}</div>
                    <div style={{ fontSize: 12, color: "#5B6470", marginTop: 2 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#F5EFE0", padding: "clamp(28px,3vw,44px)", border: "1px solid #0A2540" }}>
            {/* Form header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24, paddingBottom: 14, borderBottom: "2px solid #0A2540" }}>
              <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: "clamp(18px,2vw,26px)", color: "#0A2540", fontWeight: 700, fontStyle: "italic" }}>
                Formulario de inscripción
              </div>
              <div style={{ fontSize: 10, letterSpacing: 2, color: "#5B6470", fontWeight: 700 }}>CICLO MAY–JUL 2026</div>
            </div>

            {/* 1. Personal */}
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#5B6470", fontWeight: 700, marginBottom: 12 }}>★ 1. DATOS PERSONALES</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 22 }}>
              {[
                ["Nombre completo",     "María Camila Rojas"],
                ["Fecha de nacimiento", "DD / MM / AAAA"],
                ["Correo electrónico",  "tu@email.com"],
                ["Celular / WhatsApp",  "+591 7..."],
              ].map(([label, ph]) => (
                <div key={label as string}>
                  <div style={{ fontSize: 10, letterSpacing: 1.5, color: "#0A2540", marginBottom: 5, fontWeight: 700 }}>{label}</div>
                  <input type="text" placeholder={ph as string} style={{ display: "block", width: "100%", padding: "10px 12px", background: "#fff", border: "1px solid rgba(10,37,64,0.18)", fontSize: 13, color: "#1A1A1A", outline: "none", fontFamily: "inherit" }} />
                </div>
              ))}
            </div>

            {/* 2. Programa */}
            <div style={{ fontSize: 9, letterSpacing: 3, color: "#5B6470", fontWeight: 700, marginBottom: 10 }}>★ 2. ELIGE PROGRAMA</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 18 }}>
              {PROGRAMS.filter((p) => p.id !== "special").map((p) => (
                <button key={p.id} onClick={() => setProg(p.id)} style={{
                  padding: "12px 8px", textAlign: "center", cursor: "pointer",
                  background: prog === p.id ? "#0A2540" : "#fff",
                  color: prog === p.id ? "#fff" : "#0A2540",
                  border: `1px solid ${prog === p.id ? "#0A2540" : "rgba(10,37,64,0.18)"}`,
                }}>
                  <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 15, fontWeight: 700, fontStyle: "italic" }}>{p.label}</div>
                  <div style={{ fontSize: 9.5, opacity: 0.7, marginTop: 2 }}>{p.ageRange}</div>
                </button>
              ))}
            </div>

            {/* 3. Horario + Modalidad */}
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 14, marginBottom: 22 }}>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 1.5, color: "#0A2540", marginBottom: 8, fontWeight: 700 }}>★ 3. HORARIO PREFERIDO</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 5 }}>
                  {active.schedule.slice(0,3).map((s, i) => (
                    <button key={s} onClick={() => setSched(i)} style={{
                      padding: "9px 6px", background: "#fff", fontSize: 10.5,
                      border: `1px solid ${sched === i ? "#0A2540" : "rgba(10,37,64,0.15)"}`,
                      fontWeight: sched === i ? 700 : 400,
                      cursor: "pointer", textAlign: "center", lineHeight: 1.3, color: "#0A2540",
                    }}>{s}</button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 9, letterSpacing: 1.5, color: "#0A2540", marginBottom: 8, fontWeight: 700 }}>MODALIDAD</div>
                <div style={{ display: "flex", gap: 5 }}>
                  {["Presencial","Híbrido","En línea"].map((m, i) => (
                    <button key={m} onClick={() => setMode(i)} style={{
                      flex: 1, padding: "9px 4px", fontSize: 10.5, textAlign: "center",
                      cursor: "pointer", color: "#0A2540",
                      background: mode === i ? "#F5EFE0" : "#fff",
                      border: `1px solid ${mode === i ? "#0A2540" : "rgba(10,37,64,0.15)"}`,
                      fontWeight: mode === i ? 700 : 400,
                    }}>{m}</button>
                  ))}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid rgba(10,37,64,0.12)", gap: 16, flexWrap: "wrap" }}>
              <p style={{ fontSize: 11.5, color: "#5B6470", fontStyle: "italic", margin: 0, maxWidth: 280 }}>
                Al enviar aceptas nuestros términos. Te contactaremos en menos de <strong>24 horas</strong>.
              </p>
              <button className="btn btn-red" style={{ whiteSpace: "nowrap", padding: "13px 26px", fontSize: 11 }}>
                Enviar inscripción ★
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
