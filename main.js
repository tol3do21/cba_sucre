// CBA Sucre Web - Interactivity
// Pure Vanilla JS

// ── Programs Data — 7mo Término 2026 ──
// Fuente: Tablero oficial de cursos CBA Sucre (Junio 18 – Julio 7, 2026)
const PROGRAMS_DATA = {

  // ── NIVEL NIÑOS ─────────────────────────────────────────────────────────
  // Series: Backpack Starter (Pearson) y Big English (Pearson)
  // Rangos de nivel: Backpack Starter 3, 5 · Big English 1.1 – 5.4 · Big English Review 2
  kids: {
    id: "kids",
    label: "Niños",
    ageRange: "6 – 11 años",
    duration: "10 niveles · 2 años",
    blurb: "Inglés interactivo a través del juego, canciones y actividades lúdicas con las series Backpack y Big English de Pearson, diseñadas para estimular la curiosidad natural y sentar bases sólidas desde la infancia.",
    imgBadge: "Backpack · Big English",
    bullets: [
      "Textos oficiales: Backpack Starter y Big English (Pearson)",
      "Proyectos con canciones, videos y juegos de roles",
      "Grupos de máximo 14 niños por aula",
      "Evaluaciones trimestrales con reporte a los padres"
    ],
    schedule: ["Lun & Mié · 16:00 – 17:30", "Mar & Jue · 16:00 – 17:30", "Sábados · 9:00 – 12:00"],
    levels: ["A1", "A1+", "A2"],
    photo: "images/kids.jpg",
    photoPosition: "center",
    photoScale: "1"
  },

  // ── NIVEL ADOLESCENTES ──────────────────────────────────────────────────
  // Series: Wider World (Pearson / BBC)
  // Rangos: Wider World Starter 4 – 6.C · Wider World 1.3 – 4.5
  teens: {
    id: "teens",
    label: "Adolescentes",
    ageRange: "12 – 16 años",
    duration: "12 niveles · 2½ años",
    blurb: "Fomenta el desarrollo lingüístico y de habilidades del siglo XXI con la serie Wider World de Pearson, producida en co-edición con la BBC. Conecta el inglés con temas del mundo real relevantes para los jóvenes.",
    imgBadge: "Wider World · Pearson / BBC",
    bullets: [
      "Textos oficiales: Wider World (Pearson & BBC)",
      "Preparación para certificaciones Cambridge KET / PET / FCE",
      "Proyectos colaborativos, debates y clubes culturales",
      "Asesoramiento gratuito para estudios con EducationUSA"
    ],
    schedule: ["Lun & Mié · 17:45 – 19:15", "Mar & Jue · 17:45 – 19:15", "Sábados · 14:00 – 17:00"],
    levels: ["A1", "A1+", "A2", "A2+", "B1", "B1+", "B2"],
    photo: "images/adoslecentes.jpg",
    photoPosition: "center 60%",
    photoScale: "1.05"
  },

  // ── NIVEL JÓVENES Y ADULTOS ────────────────────────────────────────────
  // Series: Top Notch Fundamentals → Top Notch → Summit → Grammar → Conversation → CBATELP
  // Rangos: Top Notch Fundamentals 2 – 6.B · Top Notch 1.2 – 3.5 · Summit 1.2 – 2.3
  //         Grammar A.1 – B.3 · Conversation 1 – 2.B · CBATELP 2 – 3
  adults: {
    id: "adults",
    label: "Adultos",
    ageRange: "17+ años",
    duration: "14 niveles · 3 años",
    blurb: "Programa de alta exigencia académica y profesional. Emplea las series Top Notch Fundamentals, Top Notch y Summit de Pearson, alcanzando niveles avanzados B2/C1 certificados por el Ministerio de Educación de Bolivia.",
    imgBadge: "Top Notch · Summit · Pearson",
    bullets: [
      "Textos oficiales: Top Notch Fundamentals, Top Notch y Summit (Pearson)",
      "Módulos de Grammar A, Grammar B y Conversation avanzado",
      "Programa CBATELP: certificación institucional de alto nivel",
      "Preparación TOEFL iBT y certificación del Ministerio de Educación"
    ],
    schedule: ["Lun a Vie · 7:00 – 8:30", "Lun a Vie · 19:00 – 20:30", "Sábados · 9:00 – 13:00"],
    levels: ["A1", "A1+", "A2", "A2+", "B1", "B1+", "B2", "B2+", "C1", "C2"],
    photo: "images/jovenes_adultos.jpg",
    photoPosition: "center 80%",
    photoScale: "1"
  }
};

const CALENDAR_DATA = {
  Enero: [
    { d: 1, tag: "all", title: "Feriado · Año Nuevo" },
    { d: 12, tag: "all", title: "Inicio de Clases · 1º Periodo" },
    { d: 30, tag: "all", title: "Fin de curso · 1º Periodo" }
  ],
  Febrero: [
    { d: 2, tag: "all", title: "Inicio de Clases · 2º Periodo" },
    { d: 16, tag: "all", title: "Feriado · Lunes de Carnaval" },
    { d: 17, tag: "all", title: "Feriado · Martes de Carnaval" },
    { d: 27, tag: "all", title: "Fin de curso · 2º Periodo" }
  ],
  Marzo: [
    { d: 2, tag: "all", title: "Inicio de Clases · 3º Periodo" },
    { d: 24, tag: "all", title: "Fin de curso · 3º Periodo" },
    { d: 26, tag: "all", title: "Inicio de Clases · 4º Periodo" }
  ],
  Abril: [
    { d: 3, tag: "all", title: "Feriado · Viernes Santo" },
    { d: 20, tag: "all", title: "Fin de curso · 4º Periodo" },
    { d: 22, tag: "all", title: "Inicio de Clases · 5º Periodo" }
  ],
  Mayo: [
    { d: 1, tag: "all", title: "Feriado · Día del Trabajo" },
    { d: 18, tag: "all", title: "Inicio de Clases · 6º Periodo" },
    { d: 25, tag: "all", title: "Feriado · Grito Libertario de Chuquisaca" }
  ],
  Junio: [
    { d: 4, tag: "all", title: "Feriado · Corpus Christi" },
    { d: 11, tag: "all", title: "Fin de curso · 6º Periodo" },
    { d: 15, tag: "all", title: "Inicio de Clases · 7º Periodo" },
    { d: 21, tag: "all", title: "Feriado · Año Nuevo Andino" }
  ],
  Julio: [
    { d: 7, tag: "all", title: "Fin de curso · 7º Periodo" },
    { d: 9, tag: "all", title: "Inicio de Clases · 8º Periodo" },
    { d: 31, tag: "all", title: "Fin de curso · 8º Periodo" }
  ],
  Agosto: [
    { d: 3, tag: "all", title: "Inicio de Clases · 9º Periodo" },
    { d: 6, tag: "all", title: "Feriado · Día de la Independencia de Bolivia" },
    { d: 26, tag: "all", title: "Fin de curso · 9º Periodo" },
    { d: 28, tag: "all", title: "Inicio de Clases · 10º Periodo" }
  ],
  Septiembre: [
    { d: 22, tag: "all", title: "Fin de curso · 10º Periodo" },
    { d: 24, tag: "all", title: "Inicio de Clases · 11º Periodo" }
  ],
  Octubre: [
    { d: 16, tag: "all", title: "Fin de curso · 11º Periodo" },
    { d: 19, tag: "all", title: "Inicio de Clases · 12º Periodo" }
  ],
  Noviembre: [
    { d: 2, tag: "all", title: "Feriado · Todos Santos" },
    { d: 11, tag: "all", title: "Fin de curso · 12º Periodo" },
    { d: 13, tag: "all", title: "Inicio de Clases · 13º Periodo" }
  ],
  Diciembre: [
    { d: 4, tag: "all", title: "Fin de curso · 13º Periodo" },
    { d: 25, tag: "all", title: "Feriado · Navidad" }
  ]
};

// ── DOM Elements and Initial States ──
let activeProgramTab = "teens";
let activeCalendarMonth = ""; // Determinado dinámicamente en initCalendar()
let activeCalendarFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initCountdown();
  initProgramsTab();
  initCalendar();
  initInscriptionForm();
});

// ── Mobile Menu Navigation ──
function initMobileMenu() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const navDrawer = document.getElementById("mobile-nav");
  if (menuBtn && navDrawer) {
    menuBtn.addEventListener("click", () => {
      navDrawer.classList.toggle("hidden");
    });

    // Close drawer when link clicked
    navDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navDrawer.classList.add("hidden");
      });
    });
  }
}

// ── America 250 Countdown ──
function initCountdown() {
  const targetDate = new Date("July 4, 2026 00:00:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (distance < 0) {
      if (daysEl) daysEl.innerHTML = "00";
      if (hoursEl) hoursEl.innerHTML = "00";
      if (minutesEl) minutesEl.innerHTML = "00";
      if (secondsEl) secondsEl.innerHTML = "00";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerHTML = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, "0");
    if (minutesEl) minutesEl.innerHTML = String(minutes).padStart(2, "0");
    if (secondsEl) secondsEl.innerHTML = String(seconds).padStart(2, "0");
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

// ── Programs Tabs Switcher ──
function initProgramsTab() {
  const buttons = {
    kids: document.getElementById("tab-btn-kids"),
    teens: document.getElementById("tab-btn-teens"),
    adults: document.getElementById("tab-btn-adults")
  };

  // Apply active styling to a tab card
  function setTabActive(btn) {
    if (!btn) return;
    btn.classList.remove("bg-white", "text-navy");
    btn.classList.add("bg-navy", "text-white");
    btn.setAttribute("aria-pressed", "true");
    const accent = btn.querySelector(".prog-tab-accent");
    const divider = btn.querySelector(".prog-tab-divider");
    if (accent) accent.classList.remove("hidden");
    if (divider) { divider.classList.remove("bg-navy/12"); divider.classList.add("bg-white/20"); }
    btn.querySelectorAll(".prog-tab-title, .prog-tab-age, .prog-tab-duration, .prog-tab-eyebrow")
      .forEach(el => el.classList.remove("text-navy"));
  }

  // Apply inactive styling to a tab card
  function setTabInactive(btn) {
    if (!btn) return;
    btn.classList.remove("bg-navy", "text-white");
    btn.classList.add("bg-white", "text-navy");
    btn.setAttribute("aria-pressed", "false");
    const accent = btn.querySelector(".prog-tab-accent");
    const divider = btn.querySelector(".prog-tab-divider");
    if (accent) accent.classList.add("hidden");
    if (divider) { divider.classList.remove("bg-white/20"); divider.classList.add("bg-navy/12"); }
    btn.querySelectorAll(".prog-tab-title, .prog-tab-age, .prog-tab-duration, .prog-tab-eyebrow")
      .forEach(el => el.classList.add("text-navy"));
  }

  function switchTab(tabName) {
    activeProgramTab = tabName;
    const data = PROGRAMS_DATA[tabName];

    // 1. Update tab button styles
    Object.keys(buttons).forEach(key => {
      key === tabName ? setTabActive(buttons[key]) : setTabInactive(buttons[key]);
    });

    // 2. Photo: zoom animation on switch (dynamic scaling & positioning)
    const imgInner = document.getElementById("program-img-inner");
    if (imgInner) {
      const baseScale = parseFloat(data.photoScale || "1.05");
      const zoomScale = baseScale + 0.07; // 7% extra zoom on tab transition

      imgInner.style.transition = "none";
      imgInner.style.transform = `scale(${zoomScale})`;
      imgInner.style.backgroundPosition = data.photoPosition || "center";
      imgInner.style.backgroundImage = `url(${data.photo})`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          imgInner.style.transition = "transform 0.7s ease-out";
          imgInner.style.transform = `scale(${baseScale})`;
        });
      });
    }

    // 3. Photo label & editorial badge
    const imgLabelEl = document.getElementById("program-img-label");
    const imgBadgeEl = document.getElementById("program-img-badge");
    if (imgLabelEl) imgLabelEl.textContent = `Inglés para ${data.label.toLowerCase()}`;
    if (imgBadgeEl) imgBadgeEl.textContent = data.imgBadge || "";

    // 4. Fade-out → update text content → fade-in
    const contentEl = document.getElementById("program-content");
    const descEl = document.getElementById("program-desc");
    const bulletsEl = document.getElementById("program-bullets");
    const badgesEl = document.getElementById("program-badges");

    if (contentEl) {
      contentEl.style.transition = "opacity 0.15s ease, transform 0.15s ease";
      contentEl.style.opacity = "0";
      contentEl.style.transform = "translateY(8px)";
    }

    setTimeout(() => {
      if (descEl) descEl.innerHTML = data.blurb;

      if (bulletsEl) {
        bulletsEl.innerHTML = data.bullets.map(bullet => `
          <div class="flex gap-2.5 items-start text-xs md:text-sm text-ink leading-relaxed">
            <svg class="w-4 h-4 text-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
            </svg>
            <span>${bullet}</span>
          </div>
        `).join("");
      }

      // MCER level badges — first N filled based on program range
      if (badgesEl && data.levels) {
        const fillCount = { kids: 3, teens: 4, adults: 6 }[tabName] || 3;
        badgesEl.innerHTML = data.levels.map((lvl, i) => `
          <span class="px-2.5 py-1 text-[9px] font-bold tracking-wider border border-navy ${i < fillCount ? "bg-navy text-white" : "bg-transparent text-navy"
          }">${lvl}</span>
        `).join("");
      }

      if (contentEl) {
        contentEl.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        contentEl.style.opacity = "1";
        contentEl.style.transform = "translateY(0)";
      }
    }, 150);

    // 5. Schedules (right column — no fade, stays stable)
    const schedulesEl = document.getElementById("program-schedules");
    if (schedulesEl) {
      schedulesEl.innerHTML = data.schedule.map(time => `
        <div class="px-3.5 py-2.5 bg-cream text-navy border-l-4 border-red font-semibold text-xs leading-tight">${time}</div>
      `).join("");
    }
  }

  // Attach event listeners
  Object.keys(buttons).forEach(key => {
    const btn = buttons[key];
    if (btn) btn.addEventListener("click", () => switchTab(key));
  });

  // Initial state: Adolescentes
  switchTab("teens");
}

// ── Academic Calendar Filters ──
function initCalendar() {
  const calendarMonths = Object.keys(CALENDAR_DATA);
  const monthsEs = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  // Auto-detect current month from user system clock
  const currentMonthIdx = new Date().getMonth(); // 0 - 11
  
  // Calculate 3 visible months based on current time
  const visibleMonths = [
    monthsEs[currentMonthIdx],
    monthsEs[(currentMonthIdx + 1) % 12],
    monthsEs[(currentMonthIdx + 2) % 12]
  ].filter(m => calendarMonths.includes(m)); // Ensure they exist in our database

  activeCalendarMonth = visibleMonths.length > 0 ? visibleMonths[0] : calendarMonths[0];

  // Update dynamic subtitle
  const subtitleEl = document.getElementById("calendar-dynamic-subtitle");
  if (subtitleEl && visibleMonths.length >= 3) {
    subtitleEl.textContent = `Ciclo ${visibleMonths[0]} — ${visibleMonths[2]}`;
  }

  // Dynamically render the 3 month buttons (compact layout)
  const tabsContainer = document.getElementById("month-tabs-container");
  if (tabsContainer) {
    tabsContainer.innerHTML = visibleMonths.map(month => `
      <button class="month-tab-btn flex-1 py-3 px-3 relative bg-transparent text-navy border-none font-playfair text-lg md:text-2xl font-bold italic focus:outline-none transition-all duration-200" data-month="${month}">
        ${month}
        <div class="absolute inset-x-0 top-0 h-[3px] bg-red hidden month-accent-bar"></div>
      </button>
    `).join("");
  }

  const container = document.getElementById("calendar-items");

  function renderCalendar() {
    if (!container) return;

    const items = CALENDAR_DATA[activeCalendarMonth] || [];
    if (items.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-muted italic text-sm border-t border-navy/10">
          No hay eventos programados en este mes.
        </div>
      `;
      return;
    }

    container.innerHTML = items.map((item, index) => {
      let badgeColor = "#0A2540"; // Default Navy
      let badgeLabel = "Académico";

      const titleLower = item.title.toLowerCase();
      if (titleLower.includes("feriado")) {
        badgeColor = "#B22234"; // Red
        badgeLabel = "Feriado";
      } else if (titleLower.includes("independencia") || titleLower.includes("grito")) {
        badgeColor = "#C9A961"; // Gold
        badgeLabel = "Evento";
      } else if (titleLower.includes("inicio")) {
        badgeColor = "#C9A961"; // Gold
        badgeLabel = "Inicio";
      } else if (titleLower.includes("fin")) {
        badgeColor = "#0EA5E9"; // Cyan
        badgeLabel = "Fin";
      }

      const isFirst = index === 0;
      const borderStyle = isFirst ? "" : "border-t border-navy/10";
      
      let actionHtml = "";
      let rowClasses = `grid grid-cols-[64px_100px_1fr_auto] gap-4 items-center p-4 ${borderStyle}`;
      let isClickable = false;

      // Smart UX: Only show action button and make row clickable if it's an "Inicio" event
      if (badgeLabel === "Inicio") {
        actionHtml = `<span class="text-[10px] tracking-widest text-red font-bold uppercase whitespace-nowrap transition-transform group-hover:translate-x-1">Inscribirme →</span>`;
        rowClasses += " group hover:bg-cream/40 cursor-pointer transition-colors duration-200";
        isClickable = true;
      }

      const rowHtml = `
          <div class="font-serif text-2xl md:text-3xl font-extrabold text-navy italic leading-none text-center w-[64px]">${item.d}</div>
          <div class="flex items-center gap-2 text-[10px] tracking-widest font-bold uppercase" style="color: ${badgeColor}">
            <span class="w-2 h-2 rounded-full flex-shrink-0" style="background-color: ${badgeColor}"></span>
            <span>${badgeLabel}</span>
          </div>
          <div class="font-serif text-sm md:text-base text-navy font-bold leading-tight">${item.title}</div>
          <div>${actionHtml}</div>
      `;

      if (isClickable) {
        return `<a href="#inscripcion" class="block no-underline text-inherit ${rowClasses}">${rowHtml}</a>`;
      } else {
        return `<div class="${rowClasses}">${rowHtml}</div>`;
      }
    }).join("");
  }

  function setMonth(month) {
    activeCalendarMonth = month;
    const tabButtons = document.querySelectorAll(".month-tab-btn");
    tabButtons.forEach(btn => {
      const btnMonth = btn.getAttribute("data-month");
      if (btnMonth === month) {
        btn.classList.remove("bg-transparent", "text-navy");
        btn.classList.add("bg-navy", "text-white");
        const bar = btn.querySelector(".month-accent-bar");
        if (bar) bar.classList.remove("hidden");
      } else {
        btn.classList.remove("bg-navy", "text-white");
        btn.classList.add("bg-transparent", "text-navy");
        const bar = btn.querySelector(".month-accent-bar");
        if (bar) bar.classList.add("hidden");
      }
    });
    
    // Scroll dynamically selected tab button into view on mobile
    const activeBtn = document.querySelector(`.month-tab-btn[data-month="${month}"]`);
    if (activeBtn && tabsContainer) {
      const containerRect = tabsContainer.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      if (btnRect.left < containerRect.left || btnRect.right > containerRect.right) {
        activeBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
    
    renderCalendar();
  }

  // Attach dynamic event listeners to tabs
  const tabButtons = document.querySelectorAll(".month-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => setMonth(btn.getAttribute("data-month")));
  });

  // Init and select month
  setMonth(activeCalendarMonth);
}

// ── Pre-Inscription Form Validation ──
function initInscriptionForm() {
  const form = document.getElementById("inscription-form");
  if (!form) return;

  // Setup Interactive Options Selection in Form
  const programButtons = {
    kids: document.getElementById("form-prog-kids"),
    teens: document.getElementById("form-prog-teens"),
    adults: document.getElementById("form-prog-adults")
  };

  let selectedProgram = "teens";

  function updateOptionsUI(buttonsGroup, activeKey) {
    Object.keys(buttonsGroup).forEach(key => {
      const btn = buttonsGroup[key];
      if (!btn) return;
      if (key === activeKey) {
        btn.classList.remove("bg-white", "border-black/15");
        btn.classList.add("bg-navy", "text-white", "border-navy");
      } else {
        btn.classList.remove("bg-navy", "text-white", "border-navy");
        btn.classList.add("bg-white", "border-black/15");
        btn.classList.add("text-navy");
      }
    });
  }

  // Event listeners for program selectors
  Object.keys(programButtons).forEach(key => {
    const btn = programButtons[key];
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        selectedProgram = key;
        updateOptionsUI(programButtons, key);
      });
    }
  });

  // Initialize option button styles
  updateOptionsUI(programButtons, "teens");

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullNameInput = document.getElementById("form-name");
    const whatsappInput = document.getElementById("form-phone");

    let isValid = true;

    // Basic validation helper
    function validateField(inputEl) {
      if (!inputEl) return false;
      if (inputEl.value.trim() === "") {
        inputEl.classList.remove("border-navy/18");
        inputEl.classList.add("border-red", "bg-red/5");
        return false;
      } else {
        inputEl.classList.remove("border-red", "bg-red/5");
        inputEl.classList.add("border-navy/18");
        return true;
      }
    }

    if (!validateField(fullNameInput)) isValid = false;
    if (!validateField(whatsappInput)) isValid = false;

    if (isValid) {
      const name = fullNameInput.value.trim();
      const phone = whatsappInput.value.trim();

      let programLabel = "Adolescentes";
      if (selectedProgram === "kids") programLabel = "Niños";
      else if (selectedProgram === "adults") programLabel = "Jóvenes y Adultos";

      // WhatsApp message structure
      const text = `Hola CBA Sucre. Mi nombre es ${name} (contacto: ${phone}) y estoy interesado en inscribirme al programa de ${programLabel}. Quisiera consultar los detalles.`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/59162900082?text=${encodedText}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Show Success Toast Notification
      showToast(`¡Consulta generada! Redirigiendo a WhatsApp...`);

      // Reset inputs
      if (fullNameInput) fullNameInput.value = "";
      if (whatsappInput) whatsappInput.value = "";
    } else {
      showToast("Por favor completa todos los campos requeridos.", true);
    }
  });
}

// ── Success/Error Toast notification ──
function showToast(message, isError = false) {
  // Check if a toast is already displayed and remove it
  const existingToast = document.querySelector(".custom-toast");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  // Centered on mobile with padding margins, bottom-right on desktop
  toast.className = "custom-toast fixed bottom-6 left-6 right-6 md:left-auto md:right-6 z-50 p-4 max-w-sm border shadow-lg transition-all duration-300 transform translate-y-10 opacity-0";

  if (isError) {
    toast.style.backgroundColor = "#B22234";
    toast.style.color = "#fff";
    toast.style.borderColor = "#8E1A28";
  } else {
    toast.style.backgroundColor = "#0A2540";
    toast.style.color = "#fff";
    toast.style.borderColor = "#C9A961";
    toast.style.borderWidth = "1px";
  }

  toast.innerHTML = `
    <div class="flex items-center gap-3">
      <span class="text-sm font-semibold">${message}</span>
    </div>
  `;

  document.body.appendChild(toast);

  // Force layout reflow to register initial styles before triggering transition
  toast.offsetHeight;

  // Animate Entrance
  toast.classList.remove("translate-y-10", "opacity-0");

  // Auto Remove
  setTimeout(() => {
    toast.classList.add("translate-y-10", "opacity-0");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

// ── Pop-up Gallery Logic ──
const galleryData = {
  biblioteca: {
    title: "Biblioteca Bilingüe",
    images: [
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80"
    ]
  },
  educationusa: {
    title: "EducationUSA",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      "https://images.unsplash.com/photo-1519452314545-5606d04269e8?w=800&q=80"
    ]
  },
  maker: {
    title: "Maker Space Sucre",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
    ]
  },
  cultura: {
    title: "Cultura y Eventos",
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;
  
  const titleEl = document.getElementById("gallery-title");
  const gridEl = document.getElementById("gallery-grid");
  const closeBtn = document.getElementById("gallery-close");
  const galleryBtns = document.querySelectorAll(".gallery-btn");

  function openModal(galleryId) {
    const data = galleryData[galleryId];
    if (!data) return;

    // Set Title
    titleEl.textContent = data.title;
    
    // Inject Images
    gridEl.innerHTML = data.images.map(url => `
      <div class="aspect-[4/3] overflow-hidden bg-navy/50 rounded-sm">
        <img src="${url}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Gallery Image" loading="lazy">
      </div>
    `).join("");

    // Show Modal
    modal.classList.remove("hidden");
    // Small delay to allow display:block to apply before animating opacity
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
    }, 10);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  function closeModal() {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      gridEl.innerHTML = ""; // clean up
      document.body.style.overflow = ""; // Restore scrolling
    }, 300);
  }

  // Attach Listeners
  galleryBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.getAttribute("data-gallery");
      openModal(id);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
