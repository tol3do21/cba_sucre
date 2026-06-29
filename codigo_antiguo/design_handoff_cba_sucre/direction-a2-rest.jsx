// Direction A2 — rest: calendar, events, USA250, fulbright, inscription, about, footer
// Same content as A but laid out as a broadsheet — horizontal strips,
// editorial column rhythms, big italic headlines.

function A2Calendar() {
  const [cycle, setCycle] = React.useState("Mayo");
  const [filter, setFilter] = React.useState("Todos");
  const colorMap = { kids: a2Styles.red, teens: a2Styles.gold, adults: a2Styles.navy, special: "#5b8c5a" };
  // Compact week strip data
  const weeks = {
    Mayo: [
      { d: 3, tag: "kids", title: "Inicio · Niños ciclo 1" },
      { d: 5, tag: "teens", title: "Inicio · Adolescentes" },
      { d: 7, tag: "adults", title: "Inicio · Adultos AM/PM" },
      { d: 10, tag: "special", title: "Quechua para extranjeros" },
      { d: 12, tag: "kids", title: "Apertura Kinder bilingüe" },
      { d: 22, tag: "adults", title: "Feria de Universidades" },
      { d: 28, tag: "special", title: "Conversation Club" },
    ],
    Junio: [
      { d: 2, tag: "kids", title: "Eval. trimestral · Niños" },
      { d: 9, tag: "teens", title: "Cambridge KET mock test" },
      { d: 14, tag: "adults", title: "TOEFL prep intensivo" },
      { d: 15, tag: "special", title: "Festival Cine Indie USA" },
      { d: 21, tag: "teens", title: "Debate Club · Final" },
      { d: 26, tag: "kids", title: "Show de fin de ciclo" },
    ],
    Julio: [
      { d: 4, tag: "special", title: "★ Independence Day · USA250" },
      { d: 8, tag: "adults", title: "IELTS prep intensivo" },
      { d: 12, tag: "kids", title: "Inicio ciclo 2 · Niños" },
      { d: 19, tag: "teens", title: "Inscripciones FCE" },
      { d: 25, tag: "adults", title: "Workshop Business English" },
    ],
  };
  const visible = weeks[cycle].filter((e) => filter === "Todos" || e.tag === filter);
  return (
    <section style={{ background: "#fff", padding: "80px 56px", borderTop: `1px solid ${a2Styles.navy}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.4fr", gap: 50, alignItems: "flex-start" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 4, color: a2Styles.red, fontWeight: 700, marginBottom: 10 }}>★ CALENDARIO ACADÉMICO</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, margin: "0 0 22px", color: a2Styles.navy, letterSpacing: -2, lineHeight: 0.95 }}>
            Ciclo<br /><em>Mayo — Julio</em>
          </h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.65, color: a2Styles.ink, marginBottom: 28, fontStyle: "italic" }}>
            Selecciona un mes y filtra por programa para ver las fechas clave. Las inscripciones cierran 5 días antes del inicio del ciclo.
          </p>
          <div style={{ fontSize: 10, letterSpacing: 3, color: a2Styles.muted, fontWeight: 700, marginBottom: 10 }}>FILTRAR POR PROGRAMA</div>
          <div style={{ display: "grid", gap: 6 }}>
            {[["Todos los programas", "Todos", a2Styles.navy], ["Niños 6–11", "kids", colorMap.kids], ["Adolescentes 12–16", "teens", colorMap.teens], ["Adultos 17+", "adults", colorMap.adults], ["Cursos especiales", "special", colorMap.special]].map(([l, id, c]) => (
              <button key={id} onClick={() => setFilter(id)} style={{
                display: "flex", alignItems: "center", gap: 12, background: filter === id ? a2Styles.cream : "transparent",
                border: `1px solid ${filter === id ? a2Styles.navy : "rgba(0,0,0,0.12)"}`,
                padding: "10px 14px", fontSize: 13, color: a2Styles.ink, cursor: "pointer", textAlign: "left",
                fontFamily: "'Inter', sans-serif",
              }}>
                <span style={{ width: 10, height: 10, background: c, borderRadius: "50%" }} />{l}
              </button>
            ))}
          </div>
        </div>
        <div>
          {/* Cycle tabs */}
          <div style={{ display: "flex", borderBottom: `2px solid ${a2Styles.navy}`, marginBottom: 0 }}>
            {["Mayo", "Junio", "Julio"].map((m) => (
              <button key={m} onClick={() => setCycle(m)} style={{
                flex: 1, padding: "18px 16px", background: cycle === m ? a2Styles.navy : "transparent",
                color: cycle === m ? "#fff" : a2Styles.navy, border: "none",
                fontFamily: "'Playfair Display', serif", fontSize: 26, fontStyle: "italic", fontWeight: 700, cursor: "pointer",
                position: "relative",
              }}>
                {m}
                {cycle === m && <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 4, background: a2Styles.red }} />}
              </button>
            ))}
          </div>
          {/* Event list rows */}
          <div style={{ border: `1px solid ${a2Styles.navy}`, borderTop: "none" }}>
            {visible.length === 0 && (
              <div style={{ padding: "40px 24px", textAlign: "center", color: a2Styles.muted, fontStyle: "italic" }}>
                No hay eventos para este filtro en {cycle}.
              </div>
            )}
            {visible.map((e, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "80px 90px 1fr auto", gap: 20, alignItems: "center",
                padding: "16px 22px", borderTop: i > 0 ? `1px solid rgba(10,37,64,0.1)` : "none",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 900, color: a2Styles.navy, lineHeight: 1, fontStyle: "italic" }}>
                  {String(e.d).padStart(2, "0")}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, letterSpacing: 1.5, color: colorMap[e.tag], fontWeight: 700, textTransform: "uppercase" }}>
                  <span style={{ width: 8, height: 8, background: colorMap[e.tag], borderRadius: "50%" }} />
                  {e.tag === "kids" ? "Niños" : e.tag === "teens" ? "Adolesc." : e.tag === "adults" ? "Adultos" : "Especial"}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: a2Styles.navy, fontWeight: 700, lineHeight: 1.25 }}>
                  {e.title}
                </div>
                <a style={{ fontSize: 11, letterSpacing: 1.5, color: a2Styles.red, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>Detalles →</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function A2Stars() {
  return (
    <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.16 }}>
      <defs>
        <pattern id="a2Stars" width="70" height="70" patternUnits="userSpaceOnUse">
          <path d="M35 20 L38 30 L48 30 L40 36.5 L43 47 L35 41 L27 47 L30 36.5 L22 30 L32 30 Z" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#a2Stars)" />
    </svg>
  );
}

function A2Events() {
  return (
    <section style={{ background: a2Styles.navy, color: "#fff", padding: "90px 56px", position: "relative", overflow: "hidden" }}>
      <A2Stars />
      <div style={{ position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div style={{ fontSize: 11, letterSpacing: 4, color: a2Styles.gold, fontWeight: 700, marginBottom: 10 }}>★ ★ ★  AGENDA AMERICA 250  ★ ★ ★</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, margin: 0, letterSpacing: -2, lineHeight: 1 }}>
            Un año de <em style={{ color: a2Styles.gold }}>celebraciones</em>.
          </h2>
        </div>

        {/* Featured + sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 24 }}>
          {/* Big feature */}
          <article style={{ background: a2Styles.red, padding: 0, position: "relative", overflow: "hidden", minHeight: 460 }}>
            <div style={{
              position: "absolute", inset: 0,
              background: `linear-gradient(180deg, rgba(178,34,52,0.5), rgba(178,34,52,0.95)), url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80) center/cover`,
            }} />
            <div style={{ position: "relative", padding: "44px 44px", color: "#fff", display: "flex", flexDirection: "column", height: "100%", minHeight: 460 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
                <span style={{ background: "#fff", color: a2Styles.red, padding: "5px 14px", fontSize: 10, letterSpacing: 3, fontWeight: 700 }}>★ EVENTO ESTELAR</span>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: "italic" }}>{EVENTS[0].date}</div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, lineHeight: 0.98, margin: "0 0 18px", letterSpacing: -1.5, fontWeight: 900 }}>
                  Independence Day<br /><em>The Big 250</em>
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.55, opacity: 0.95, margin: "0 0 22px", maxWidth: 540, fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>
                  Concierto, food trucks, fuegos artificiales y la ceremonia oficial con la Embajada de los Estados Unidos.
                </p>
              </div>
              <div style={{ display: "flex", gap: 30, alignItems: "center", borderTop: `1px solid rgba(255,255,255,0.3)`, paddingTop: 18 }}>
                <div style={{ fontSize: 12, letterSpacing: 1.5 }}>📍 {EVENTS[0].place}</div>
                <div style={{ fontSize: 12, letterSpacing: 1.5, opacity: 0.85 }}>🎟 Entrada libre · cupo limitado</div>
                <button style={{ marginLeft: "auto", background: "#fff", color: a2Styles.red, border: "none", padding: "12px 22px", fontSize: 11, letterSpacing: 2, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
                  Reservar →
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {EVENTS.slice(1).map((e, i) => (
              <article key={i} style={{
                background: "rgba(255,255,255,0.06)", border: `1px solid rgba(255,255,255,0.15)`,
                padding: 22, display: "flex", flexDirection: "column", gap: 8, flex: 1,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, letterSpacing: 2 }}>
                  <span style={{ background: a2Styles.gold, color: a2Styles.navy, padding: "3px 10px", fontWeight: 700 }}>{e.tag.toUpperCase()}</span>
                  <span style={{ opacity: 0.7, fontFamily: "'Playfair Display', serif", fontSize: 14, fontStyle: "italic" }}>{e.date}</span>
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, margin: "4px 0 0", lineHeight: 1.15, fontWeight: 700 }}>{e.title}</h4>
                <div style={{ fontSize: 12, opacity: 0.8, lineHeight: 1.5 }}>{e.desc}</div>
                <div style={{ fontSize: 11, letterSpacing: 1, opacity: 0.7, marginTop: "auto", paddingTop: 8, borderTop: `1px solid rgba(255,255,255,0.15)` }}>📍 {e.place}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function A2Fulbright() {
  return (
    <section style={{ background: a2Styles.cream, padding: "90px 56px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 60, alignItems: "center" }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 4, color: a2Styles.red, fontWeight: 700, marginBottom: 12 }}>★ EDUCATIONUSA ADVISING · BECAS</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, margin: "0 0 22px", color: a2Styles.navy, letterSpacing: -2, lineHeight: 0.96 }}>
            Tu camino a una<br /><em style={{ color: a2Styles.red }}>universidad</em> en EE.UU.
          </h2>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 21, fontStyle: "italic", color: a2Styles.ink, lineHeight: 1.5, marginBottom: 22, paddingLeft: 18, borderLeft: `3px solid ${a2Styles.red}` }}>
            "Estudiar en EE.UU. cambió mi forma de ver el mundo."
            <div style={{ fontSize: 13, fontStyle: "italic", marginTop: 10, color: a2Styles.muted, fontFamily: "'Inter', sans-serif" }}>— Andrea M. · Fulbright 2024 · Cornell University</div>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: a2Styles.ink, marginBottom: 28 }}>
            Como centro oficial <strong>EducationUSA</strong>, te asesoramos en cada paso: aplicaciones, exámenes, becas Fulbright y Humphrey, y el proceso de visa. Asesoría gratuita para estudiantes bolivianos.
          </p>
          <button style={{ background: a2Styles.navy, color: "#fff", border: "none", padding: "16px 28px", fontSize: 12, letterSpacing: 2.5, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
            Solicitar asesoría gratuita →
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: `1px solid ${a2Styles.navy}` }}>
          {[
            ["120+", "Becarios Fulbright desde 1962", a2Styles.red],
            ["38", "Universidades aliadas", a2Styles.navy],
            ["TOEFL", "Centro autorizado iBT", a2Styles.navy],
            ["IELTS", "Preparación oficial", a2Styles.red],
          ].map(([n, l, bg], i) => (
            <div key={l} style={{
              background: bg, color: "#fff", padding: "44px 32px",
              borderRight: i % 2 === 0 ? `1px solid rgba(255,255,255,0.2)` : "none",
              borderBottom: i < 2 ? `1px solid rgba(255,255,255,0.2)` : "none",
              minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "flex-end",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 14, right: 18, fontSize: 9, letterSpacing: 3, opacity: 0.55 }}>{String(i + 1).padStart(2, "0")} / 04</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 900, lineHeight: 1, marginBottom: 10, letterSpacing: -2, fontStyle: typeof n === "string" && n.length > 4 ? "normal" : "italic" }}>{n}</div>
              <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.4 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function A2Inscription() {
  return (
    <section style={{ background: "#fff", padding: "90px 56px", borderTop: `1px solid ${a2Styles.navy}`, borderBottom: `1px solid ${a2Styles.navy}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.4fr", gap: 60 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: 4, color: a2Styles.red, fontWeight: 700, marginBottom: 10 }}>★ PRE-INSCRIPCIÓN EN LÍNEA</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 60, margin: "0 0 22px", color: a2Styles.navy, letterSpacing: -2, lineHeight: 0.95 }}>
            Reserva tu cupo<br /><em>en minutos</em>.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: a2Styles.ink, marginBottom: 26 }}>
            Completa el formulario y te contactaremos en menos de 24 horas para confirmar el horario y procesar el pago.
          </p>
          <div style={{ borderTop: `1px solid rgba(10,37,64,0.15)`, paddingTop: 22 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, color: a2Styles.muted, fontWeight: 700, marginBottom: 14 }}>POR QUÉ EL CBA</div>
            {[
              ["Docentes certificados", "Por el Departamento de Estado de EE.UU."],
              ["Currícula Cambridge", "Niveles A1 — C2 reconocidos internacionalmente"],
              ["Centro examinador oficial", "TOEFL iBT · IELTS · Cambridge YLE/KET/PET/FCE"],
            ].map(([t, d]) => (
              <div key={t} style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: `1px solid rgba(10,37,64,0.08)` }}>
                <span style={{ color: a2Styles.red, fontSize: 14, lineHeight: 1.4 }}>★</span>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: a2Styles.navy, fontWeight: 700 }}>{t}</div>
                  <div style={{ fontSize: 12, color: a2Styles.muted, marginTop: 2 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline single-page form */}
        <div style={{ background: a2Styles.cream, padding: "44px 44px", border: `1px solid ${a2Styles.navy}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28, borderBottom: `2px solid ${a2Styles.navy}`, paddingBottom: 12 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: a2Styles.navy, fontWeight: 700, fontStyle: "italic" }}>
              Formulario de inscripción
            </div>
            <div style={{ fontSize: 11, letterSpacing: 2, color: a2Styles.muted, fontWeight: 700 }}>CICLO MAYO – JUL 2026</div>
          </div>

          {/* Personal */}
          <div style={{ fontSize: 10, letterSpacing: 3, color: a2Styles.muted, fontWeight: 700, marginBottom: 12 }}>★ 1. DATOS PERSONALES</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 24 }}>
            {[
              ["Nombre completo", "María Camila Rojas"],
              ["Fecha de nacimiento", "DD / MM / AAAA"],
              ["Correo electrónico", "tu@email.com"],
              ["Celular / WhatsApp", "+591 7..."],
            ].map(([l, ph]) => (
              <div key={l}>
                <div style={{ fontSize: 10, letterSpacing: 1.5, color: a2Styles.navy, marginBottom: 5, fontWeight: 700 }}>{l}</div>
                <div style={{ padding: "12px 14px", background: "#fff", border: `1px solid rgba(10,37,64,0.2)`, fontSize: 13, color: "#aaa" }}>{ph}</div>
              </div>
            ))}
          </div>

          {/* Program */}
          <div style={{ fontSize: 10, letterSpacing: 3, color: a2Styles.muted, fontWeight: 700, marginBottom: 12 }}>★ 2. ELIGE PROGRAMA</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 18 }}>
            {PROGRAMS.map((p, i) => (
              <div key={p.id} style={{
                padding: "14px 12px", background: i === 1 ? a2Styles.navy : "#fff", color: i === 1 ? "#fff" : a2Styles.navy,
                border: `1px solid ${i === 1 ? a2Styles.navy : "rgba(10,37,64,0.2)"}`, cursor: "pointer", textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, fontStyle: "italic" }}>{p.label}</div>
                <div style={{ fontSize: 10, opacity: 0.75, marginTop: 2 }}>{p.ageRange}</div>
              </div>
            ))}
          </div>

          {/* Schedule + modality row */}
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 16, marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 1.5, color: a2Styles.navy, marginBottom: 6, fontWeight: 700 }}>HORARIO PREFERIDO</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
                {PROGRAMS[1].schedule.map((s, i) => (
                  <div key={s} style={{ padding: "10px 12px", background: "#fff", border: `1px solid ${i === 0 ? a2Styles.navy : "rgba(10,37,64,0.2)"}`, fontSize: 11.5, cursor: "pointer", textAlign: "center", lineHeight: 1.3 }}>{s}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, letterSpacing: 1.5, color: a2Styles.navy, marginBottom: 6, fontWeight: 700 }}>MODALIDAD</div>
              <div style={{ display: "flex", gap: 6 }}>
                {["Presencial", "Híbrido", "En línea"].map((m, i) => (
                  <div key={m} style={{ flex: 1, padding: "10px 8px", background: i === 0 ? a2Styles.cream : "#fff", border: `1px solid ${i === 0 ? a2Styles.navy : "rgba(10,37,64,0.2)"}`, fontSize: 11.5, textAlign: "center", cursor: "pointer" }}>{m}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: `1px solid rgba(10,37,64,0.15)` }}>
            <div style={{ fontSize: 12, color: a2Styles.muted, fontStyle: "italic", maxWidth: 320 }}>
              Al enviar aceptas nuestros términos. Te contactaremos en menos de <strong>24 horas</strong>.
            </div>
            <button style={{ background: a2Styles.red, color: "#fff", border: "none", padding: "16px 32px", fontSize: 12, letterSpacing: 2.5, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
              Enviar inscripción  ★
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function A2About() {
  const milestones = [
    ["1962", "Fundación", "Nace el CBA Sucre con apoyo de la Embajada de los Estados Unidos."],
    ["1985", "Kinder bilingüe", "Apertura del programa pre-escolar — el primero en Chuquisaca."],
    ["1998", "Acreditación", "Centro examinador oficial Cambridge & TOEFL."],
    ["2010", "EducationUSA", "Inauguración del centro de asesoría para universidades EE.UU."],
    ["2020", "Híbrido", "Lanzamiento de modalidad híbrida y aulas digitales."],
    ["2026", "America 250", "Sede oficial de la celebración del sesquicentenario en Bolivia."],
  ];
  return (
    <section style={{ background: a2Styles.cream, padding: "90px 56px" }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: a2Styles.red, fontWeight: 700, marginBottom: 10 }}>★ ★ ★  DESDE 1962  ★ ★ ★</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 72, margin: 0, color: a2Styles.navy, letterSpacing: -2, lineHeight: 1 }}>
          Más de <em>60 años</em> tendiendo puentes.
        </h2>
        <div style={{ marginTop: 14, fontSize: 14, color: a2Styles.muted, fontStyle: "italic", maxWidth: 620, marginInline: "auto", lineHeight: 1.6 }}>
          El Centro Boliviano Americano de Sucre nació como iniciativa binacional para acercar las culturas de Bolivia y los Estados Unidos a través de la educación, el arte y el intercambio académico.
        </div>
      </div>

      {/* Horizontal timeline */}
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 36, height: 1, background: a2Styles.navy }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 39, height: 1, background: a2Styles.navy }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 18 }}>
          {milestones.map(([y, t, d], i) => (
            <div key={y} style={{ position: "relative", paddingTop: 60 }}>
              <div style={{ position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)", width: 18, height: 18, background: i === milestones.length - 1 ? a2Styles.red : a2Styles.navy, borderRadius: "50%", border: `3px solid ${a2Styles.cream}` }} />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 34, color: a2Styles.navy, fontWeight: 900, fontStyle: "italic", textAlign: "center", letterSpacing: -1 }}>{y}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: a2Styles.red, fontWeight: 700, textAlign: "center", marginTop: 4 }}>{t}</div>
              <div style={{ fontSize: 12, color: a2Styles.ink, lineHeight: 1.5, marginTop: 8, textAlign: "center" }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function A2Footer() {
  return (
    <footer style={{ background: a2Styles.navyDeep, color: "#fff" }}>
      <A2Rule thick color={a2Styles.red} />
      <div style={{ padding: "60px 56px 30px" }}>
        {/* Repeat masthead */}
        <div style={{ textAlign: "center", marginBottom: 40, paddingBottom: 30, borderBottom: `1px solid rgba(255,255,255,0.2)` }}>
          <div style={{ fontSize: 10, letterSpacing: 6, color: a2Styles.gold, fontWeight: 700, marginBottom: 6 }}>★  EST. 1962  ★</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, fontWeight: 900, letterSpacing: -1, fontStyle: "italic" }}>
            The Bolivian–American
          </div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, letterSpacing: 8, marginTop: 4, fontWeight: 600 }}>
            ·  C · B · A  ·  S U C R E  ·
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr 1fr", gap: 40, marginBottom: 30 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 2, color: a2Styles.gold, fontWeight: 700, marginBottom: 12 }}>QUIÉNES SOMOS</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, opacity: 0.75, marginTop: 0 }}>
              Institución cultural y educativa binacional. Centro oficial EducationUSA en Sucre. Acreditada por la Embajada de los Estados Unidos en Bolivia.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {["F", "Ig", "Yt", "in", "X"].map((s) => (
                <div key={s} style={{ width: 32, height: 32, border: `1px solid rgba(255,255,255,0.3)`, display: "grid", placeItems: "center", fontSize: 11 }}>{s}</div>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 2, color: a2Styles.gold, fontWeight: 700, marginBottom: 12 }}>VISÍTANOS</div>
            <div style={{ fontSize: 13, lineHeight: 1.85, opacity: 0.85, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              {CBA.address}<br />Sucre · Bolivia
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.7, opacity: 0.7, marginTop: 10 }}>{CBA.hours}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 2, color: a2Styles.gold, fontWeight: 700, marginBottom: 12 }}>CONTACTO</div>
            <div style={{ fontSize: 13, lineHeight: 1.85, opacity: 0.85 }}>
              {CBA.phone}<br />{CBA.email}<br />WhatsApp · +591 7XXX-XXXX
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 2, color: a2Styles.gold, fontWeight: 700, marginBottom: 12 }}>ENLACES</div>
            <div style={{ display: "grid", gap: 6, fontSize: 13, opacity: 0.85 }}>
              <div>Sistema académico</div>
              <div>Bolsa de trabajo</div>
              <div>Voluntariado USA</div>
              <div>Biblioteca digital</div>
              <div>Reglamento</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 56px", borderTop: `1px solid rgba(255,255,255,0.1)`, display: "flex", justifyContent: "space-between", fontSize: 11, opacity: 0.6, letterSpacing: 1, fontStyle: "italic" }}>
        <div>© 2026 Centro Boliviano Americano · Sucre · Todos los derechos reservados</div>
        <div>Diseñado con ★ en Sucre · Edición especial America 250</div>
      </div>
    </footer>
  );
}

function DirectionA2() {
  return (
    <div style={{ width: A2_W, fontFamily: "'Inter', system-ui, sans-serif", color: a2Styles.ink, background: a2Styles.cream }}>
      {/* Top: institutional nav + announcement + navy hero (de V1) */}
      <AHeader />
      <AAnnouncement />
      <AHero />
      {/* Body: editorial (de V2) */}
      <A2Programs />
      <A2Calendar />
      <A2Events />
      <A2Fulbright />
      <A2Inscription />
      <A2About />
      <A2Footer />
    </div>
  );
}

Object.assign(window, { DirectionA2, A2Calendar, A2Events, A2Fulbright, A2Inscription, A2About, A2Footer });
