// CBA Sucre Web - Interactivity
// Pure Vanilla JS

// ── Programs Data — 7mo Término 2026 ──
// Fuente: Tablero oficial de cursos CBA Sucre (Junio 18 – Julio 7, 2026)
const PROGRAMS_DATA = {

  // ── NIVEL NIÑOS ─────────────────────────────────────────────────────────
  // Series: Big English (Pearson)
  kids: {
    id: "kids",
    label: "Niños",
    ageRange: "7 – 11 años",
    duration: "2 años",
    blurb: "Inglés interactivo a través del juego, canciones y actividades lúdicas con la serie Big English de Pearson, diseñada para estimular la curiosidad natural y sentar bases sólidas desde la infancia.",
    imgBadge: "Big English · Pearson",
    bullets: [
      "Textos oficiales: Big English (Pearson)",
      "Proyectos con canciones, videos y juegos de roles",
      "Grupos de máximo 14 niños por aula",
      "Evaluaciones por módulo con reporte a los padres"
    ],
    schedule: ["Lun a Vie · 9:00 – 10:00 AM", "Lun a Vie · 15:00 – 16:00 PM", "Lun a Vie · 16:00 – 17:00 PM"],
    levels: ["A1", "A1+", "A2"],
    photo: "images/kids.jpg",
    photoPosition: "center",
    photoScale: "1"
  },

  // ── NIVEL ADOLESCENTES ──────────────────────────────────────────────────
  // Series: Wider World (Pearson)
  teens: {
    id: "teens",
    label: "Adolescentes",
    ageRange: "12 – 14 años",
    duration: "2½ años",
    blurb: "Fomenta el desarrollo lingüístico y de habilidades del siglo XXI con la serie Wider World de Pearson. Conecta el inglés con temas del mundo real relevantes para los jóvenes.",
    imgBadge: "Wider World · Pearson",
    bullets: [
      "Textos oficiales: Wider World (Pearson)",
      "Desarrollo de fluidez conversacional y pensamiento crítico",
      "Proyectos colaborativos, debates y clubes culturales"
    ],
    schedule: ["Lun a Vie · 9:00 – 10:00 AM", "Lun a Vie · 15:00 – 16:00 PM", "Lun a Vie · 16:00 – 17:00 PM", "Lun a Vie · 18:00 – 19:00 PM"],
    levels: ["A1", "A1+", "A2", "A2+", "B1", "B1+", "B2"],
    photo: "images/adoslecentes.jpg",
    photoPosition: "center 60%",
    photoScale: "1.05"
  },

  // ── NIVEL JÓVENES Y ADULTOS ────────────────────────────────────────────
  // Series: Top Notch → Summit → Grammar → Conversation → CBATELP
  adults: {
    id: "adults",
    label: "Adultos",
    ageRange: "15+ años",
    duration: "3 años",
    blurb: "Programa de alta exigencia académica y profesional con las series Top Notch y Summit de Pearson, alcanzando niveles avanzados B2/C1 certificados por el Ministerio de Educación de Bolivia.",
    imgBadge: "Top Notch · Summit · Pearson",
    bullets: [
      "Textos oficiales: Top Notch y Summit (Pearson)",
      "Módulos de Grammar A, Grammar B y Conversation avanzado",
      "Programa CBATELP: certificación institucional de alto nivel",
      "Preparación para el examen TOEFL iBT",
      "Examen de identificación de nivel al ingreso"
    ],
    schedule: ["Lun a Vie · 8:30 – 10:00 AM", "Lun a Vie · 17:00 – 18:30 PM", "Lun a Vie · 18:30 – 20:00 PM", "Lun a Vie · 20:00 – 21:30 PM"],
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
  fetchContent();
});

// ── CMS Content Fetcher ──
async function fetchContent() {
  try {
    const res = await fetch('data/content.json');
    if (!res.ok) throw new Error("No se pudo cargar content.json");
    const data = await res.json();
    
    // Inyectar datos en el DOM
    if (data.site_info && data.site_info.notification_text) {
      const notifEl = document.getElementById("notification-text");
      if (notifEl) notifEl.textContent = data.site_info.notification_text;
    }
  } catch (err) {
    console.error("Error cargando CMS content:", err);
  }
}

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

  let timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
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

// ── Pop-up Gallery Logic (Split Modal: Gallery + Info) ──
const galleryData = {

  biblioteca: {
    title: "Biblioteca \"Robert Callahan\"",
    badge: "American Spaces · Biblioteca Pública",
    badgeColor: "gold",
    description: "La Biblioteca Pública \"Robert Callahan\" es uno de los espacios culturales y educativos más completos de Sucre. Con más de 3,000 volúmenes en inglés y español, ofrece acceso gratuito a recursos físicos y digitales en su sede de la Calle Calvo #332.",
    contact: "📍 Calle Calvo #332 · ☎ 4 6443155 · Lun–Vie 15:00–20:00",
    features: [
      "Más de 3,000 volúmenes en inglés y español (colección general y de referencia)",
      "Lectura en sala abierta y gratuita para toda la comunidad",
      "Acceso digital a la plataforma eLibraryUSA (bases de datos y revistas)",
      "Intercambio y venta periódica de libros",
      "Estación Digital: computadoras de acceso público con WiFi",
      "Tours virtuales con el Smithsonian Institution y otras instituciones",
      "Exhibiciones culturales y eventos especiales Freedom 250"
    ],
    cta: { text: "Contactar biblioteca →", href: "tel:+59146443155", style: "outline" },
    images: [
      "images/biblioteca_1.webp",
      "images/biblioteca_2.webp",
      "images/biblioteca_3.webp"
    ]
  },

  educationusa: {
    title: "EducationUSA Sucre",
    badge: "Asesoría Oficial · 100% Gratuita",
    badgeColor: "red",
    description: "Centro oficial de asesoramiento del Departamento de Estado de los EE.UU., ubicado dentro del CBA Sucre. Todos sus servicios son completamente gratuitos para estudiantes bolivianos que deseen estudiar en universidades norteamericanas.",
    contact: "📍 Calle Calvo #301 · 🔗 linktr.ee/EdUSAbo · 📸 @EdUSAbo",
    features: [
      "Asesoramiento individual y grupal sobre universidades en Estados Unidos",
      "Información sobre más de 4,000 instituciones educativas acreditadas",
      "Orientación sobre financiamiento, becas parciales y totales disponibles",
      "Preparación y orientación para exámenes TOEFL iBT, SAT, GRE, GMAT, USMLE y LSAT",
      "Servicio al Visitante Internacional para asesores de universidades extranjeras",
      "Sesiones informativas con representantes de universidades de EE.UU.",
      "Orientación para trámite de visa de estudiante F-1 y J-1",
      "Todos los servicios son 100% gratuitos · Sin excepción",
      "Chat & Coffee: sesiones de información y asesoría específica · Jueves 17:30"
    ],
    cta: { text: "Solicitar asesoría → linktr.ee/EdUSAbo", href: "https://linktr.ee/EdUSAbo", style: "red", external: true },
    images: [
      "images/educationusa_1.webp",
      "images/educationusa_2.webp",
      "images/educationusa_3.webp"
    ]
  },

  maker: {
    title: "Maker Space Sucre",
    badge: "Innovación · American Spaces",
    badgeColor: "gold",
    description: "Un espacio de innovación tecnológica y creatividad abierto a toda la comunidad sucrense. Combinamos robótica, programación, impresión 3D y diseño digital para impulsar la educación y habilidades STEM.",
    contact: "📍 Calle Calvo #332 · Dentro de la Biblioteca CBA Sucre",
    features: [
      "Cursos y talleres de Robótica",
      "Cursos y talleres de Programación",
      "Cursos y talleres de Diseño en 3D e Impresión 3D",
      "Promovemos la educación y habilidades STEM en niños y jóvenes",
      "Kits interactivos con Arduino, Raspberry Pi y sensores",
      "Espacio colaborativo de innovación abierto a toda la comunidad"
    ],
    cta: { text: "Consultar talleres disponibles →", href: "#contacto", style: "outline" },
    images: [
      "images/educationusa_4.webp",
      "images/biblioteca_3.webp",
      "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&q=80"
    ]
  },

  cultura: {
    title: "Eventos y Cultura",
    badge: "Comunidad · Intercambio Cultural",
    badgeColor: "navy",
    description: "Más de 70 años fomentando el intercambio cultural entre Bolivia y los Estados Unidos. Organizamos eventos únicos que conectan a la comunidad sucrense con la cultura, historia y valores norteamericanos.",
    contact: "📍 Calle Calvo #301, Sucre · Para eventos especiales consultar fechas",
    features: [
      "Proyecciones de cine independiente americano en pantalla grande",
      "Festivales culturales anuales: Halloween, Thanksgiving, 4th of July",
      "Conversatorios y charlas con visitantes y artistas de EE.UU.",
      "Exposiciones de fotografía, arte y muestra Freedom 250",
      "Eventos oficiales Freedom 250 en colaboración con la Embajada de EE.UU.",
      "Clubes de conversación en inglés abiertos a toda la comunidad"
    ],
    cta: { text: "Ver calendario de eventos →", href: "#calendario", style: "outline" },
    images: [
      "images/cultura_1.webp",
      "images/cultura_2.webp",
      "images/cultura_3.webp"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal     = document.getElementById("gallery-modal");
  if (!modal) return;

  const modalInner = document.getElementById("gallery-modal-inner");
  const closeBtn   = document.getElementById("gallery-close");
  const galleryBtns = document.querySelectorAll(".gallery-btn");

  // Badge color map
  const badgeClasses = {
    gold:  "bg-gold text-navy",
    red:   "bg-red text-white",
    navy:  "bg-white/10 border border-white/25 text-white"
  };

  function openModal(galleryId) {
    const data = galleryData[galleryId];
    if (!data || !modalInner) return;

    const badgeClass = badgeClasses[data.badgeColor] || badgeClasses.navy;
    const ctaTarget  = data.cta.external ? 'target="_blank" rel="noopener noreferrer"' : "";
    const ctaClass   = data.cta.style === "red"
      ? "bg-red hover:bg-red-deep text-white"
      : "bg-white/10 hover:bg-white text-white hover:text-navy border border-white/30 backdrop-blur-sm";

    // Features list HTML
    const featuresHtml = data.features.map(f => `
      <div class="flex items-start gap-3">
        <svg class="w-3.5 h-3.5 text-gold flex-shrink-0 mt-[3px]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
        </svg>
        <span class="text-[12.5px] leading-relaxed text-white/80">${f}</span>
      </div>
    `).join("");

    // Thumbnails strip HTML
    const thumbsHtml = data.images.map((url, i) => `
      <button class="gallery-thumb flex-shrink-0 w-16 h-11 overflow-hidden border-2 transition-all duration-200 focus:outline-none ${i === 0 ? "border-gold opacity-100" : "border-transparent opacity-50 hover:opacity-90"}" data-src="${url}" aria-label="Ver imagen ${i + 1}">
        <img src="${url}" class="w-full h-full object-cover pointer-events-none" alt="" loading="lazy">
      </button>
    `).join("");

    // Build split layout
    modalInner.innerHTML = `
      <!-- Columna Izquierda: Galería de imágenes -->
      <div class="w-full md:w-[55%] flex flex-col bg-black flex-shrink-0">
        <!-- Imagen principal -->
        <div class="relative overflow-hidden flex-1" style="min-height: 240px;">
          <img id="modal-main-img" src="${data.images[0]}" class="w-full h-full object-cover" style="transition: opacity 0.25s ease;" alt="${data.title}">
          <!-- Contador de imágenes -->
          <div id="modal-img-counter" class="absolute bottom-3 right-3 bg-black/65 text-white text-[10px] tracking-widest font-bold px-2.5 py-1 backdrop-blur-sm">1 / ${data.images.length}</div>
        </div>
        <!-- Tiras de miniaturas -->
        <div class="flex gap-2 p-3 bg-black/90 flex-shrink-0 overflow-x-auto" style="scrollbar-width: none;">
          ${thumbsHtml}
        </div>
      </div>

      <!-- Columna Derecha: Información -->
      <div class="w-full md:w-[45%] flex flex-col bg-navy-deep text-white flex-shrink-0" style="overflow-y: auto; max-height: 88vh;">
        <div class="p-6 md:p-8 flex flex-col gap-5 h-full">

          <!-- Badge + Título -->
          <div>
            <span class="inline-block px-3 py-1 text-[9px] tracking-widest font-bold uppercase mb-3 ${badgeClass}">${data.badge}</span>
            <h3 class="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">${data.title}</h3>
          </div>

          <!-- Descripción -->
          <p class="text-[13px] leading-relaxed text-white/70 pb-4 border-b border-white/10">${data.description}</p>

          <!-- Lista de servicios/características -->
          <div class="flex flex-col gap-3 flex-1">
            <div class="text-[9px] tracking-widest font-bold text-gold/80 uppercase mb-1">Lo que ofrecemos</div>
            ${featuresHtml}
          </div>

          <!-- Datos de contacto -->
          <div class="text-[11px] text-white/45 leading-relaxed border-t border-white/8 pt-3">
            ${data.contact}
          </div>

          <!-- Botón CTA -->
          <div>
            <a href="${data.cta.href}" ${ctaTarget} class="flex items-center justify-center w-full py-3 px-5 text-[11px] tracking-widest font-bold uppercase transition-all duration-200 no-underline ${ctaClass}">
              ${data.cta.text}
            </a>
          </div>
        </div>
      </div>
    `;

    // Lógica de miniaturas — clic para cambiar imagen principal
    const thumbBtns = modalInner.querySelectorAll(".gallery-thumb");
    const mainImgEl = document.getElementById("modal-main-img");
    const counterEl = document.getElementById("modal-img-counter");

    thumbBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-src");

        // Fade out → cambiar src → fade in
        if (mainImgEl) {
          mainImgEl.style.opacity = "0";
          setTimeout(() => {
            mainImgEl.src = src;
            mainImgEl.style.opacity = "1";
          }, 220);
        }

        // Actualizar contador
        if (counterEl) counterEl.textContent = `${idx + 1} / ${data.images.length}`;

        // Actualizar borde activo en miniaturas
        thumbBtns.forEach(t => {
          t.classList.remove("border-gold", "opacity-100");
          t.classList.add("border-transparent", "opacity-50");
        });
        btn.classList.remove("border-transparent", "opacity-50");
        btn.classList.add("border-gold", "opacity-100");
      });
    });

    // Mostrar modal con transición
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
    }, 10);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    setTimeout(() => {
      modal.classList.add("hidden");
      if (modalInner) modalInner.innerHTML = "";
      document.body.style.overflow = "";
    }, 300);
  }

  // Listeners en botones de galería
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

// ── CBA Assistant Chatbot Logic ──
function initChatbot() {
  const fab = document.getElementById('chatbot-fab');
  const windowEl = document.getElementById('chatbot-window');
  const closeBtn = document.getElementById('chatbot-close');
  const messagesEl = document.getElementById('chatbot-messages');
  const optionsEl = document.getElementById('chatbot-options');

  if (!fab || !windowEl || !messagesEl || !optionsEl) return;

  let isOpen = false;
  let initialized = false;

  const chatFlow = {
    start: {
      text: "¡Hola! Soy el Asistente CBA. ¿En qué puedo ayudarte hoy?",
      options: [
        { label: "📘 Programas y Cursos", target: "programs" },
        { label: "🕒 Horarios y Precios", target: "pricing" },
        { label: "📍 Ubicación", target: "location" },
        { label: "💬 Hablar con un asesor", target: "whatsapp", action: true }
      ]
    },
    programs: {
      text: "Ofrecemos programas para diferentes edades:<br><br>• <strong>Niños</strong> (7–11 años) · Big English · Pearson<br>• <strong>Adolescentes</strong> (12–14 años) · Wider World · Pearson<br>• <strong>Jóvenes y Adultos</strong> (15+) · Top Notch & Summit · Pearson<br><br>Preparación y administración oficial de exámenes TOEFL iBT y SAT.",
      options: [
        { label: "💬 Hablar con un asesor", target: "whatsapp", action: true },
        { label: "↩ Volver al inicio", target: "start" }
      ]
    },
    pricing: {
      text: "Nuestros costos varían según el programa. Para darte un monto exacto y revisar la disponibilidad de horarios, un asesor puede ayudarte con mucho gusto.",
      options: [
        { label: "💬 Contactar asesor", target: "whatsapp", action: true },
        { label: "↩ Volver al inicio", target: "start" }
      ]
    },
    location: {
      text: "Nos encontramos en el corazón de Sucre:<br><br>📍 <strong>Calle Calvo #301</strong> esq. Potosí<br>🕐 Lun–Vie: 9:00 – 12:00 y 15:30 – 19:30<br>🕐 Sáb y Dom: Cerrado<br><br>¡Te esperamos!",
      options: [
        { label: "↩ Volver al inicio", target: "start" }
      ]
    }
  };

  function openChat() {
    isOpen = true;
    windowEl.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
    windowEl.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
    if (!initialized) {
      initialized = true;
      setTimeout(() => loadStep('start'), 300);
    }
  }

  function closeChat() {
    isOpen = false;
    windowEl.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
    windowEl.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
  }

  fab.addEventListener('click', () => {
    isOpen ? closeChat() : openChat();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeChat);

  function appendMessage(sender, html) {
    const wrapper = document.createElement('div');
    wrapper.className = `flex ${sender === 'bot' ? 'items-start gap-2' : 'justify-end'}`;

    if (sender === 'bot') {
      const avatar = document.createElement('img');
      avatar.src = 'logos/logo-cba.png';
      avatar.alt = 'CBA';
      avatar.className = 'w-6 h-6 rounded-full object-contain bg-white border border-navy/10 flex-shrink-0 mt-0.5 p-0.5';
      wrapper.appendChild(avatar);
    }

    const bubble = document.createElement('div');
    bubble.className = `max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed shadow-sm ${
      sender === 'bot'
        ? 'bg-white text-navy rounded-tl-sm border border-black/5'
        : 'bg-navy text-white rounded-tr-sm'
    }`;
    bubble.innerHTML = html;
    wrapper.appendChild(bubble);
    messagesEl.appendChild(wrapper);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const wrapper = document.createElement('div');
    wrapper.className = 'flex items-start gap-2';
    wrapper.id = 'typing-indicator';

    const avatar = document.createElement('img');
    avatar.src = 'logos/logo-cba.png';
    avatar.alt = 'CBA';
    avatar.className = 'w-6 h-6 rounded-full object-contain bg-white border border-navy/10 flex-shrink-0 mt-0.5 p-0.5';

    const bubble = document.createElement('div');
    bubble.className = 'bg-white rounded-2xl rounded-tl-sm px-4 py-3.5 shadow-sm border border-black/5 flex items-center gap-1.5';
    bubble.innerHTML = `
      <div class="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style="animation-delay:0ms"></div>
      <div class="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style="animation-delay:150ms"></div>
      <div class="w-1.5 h-1.5 bg-navy/40 rounded-full animate-bounce" style="animation-delay:300ms"></div>
    `;
    wrapper.appendChild(avatar);
    wrapper.appendChild(bubble);
    messagesEl.appendChild(wrapper);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function hideTyping() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
  }

  function loadStep(stepKey) {
    const step = chatFlow[stepKey];
    if (!step) return;

    optionsEl.innerHTML = '';
    showTyping();

    setTimeout(() => {
      hideTyping();
      appendMessage('bot', step.text);
      step.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'w-full text-left px-4 py-2.5 bg-white border border-black/10 rounded-xl text-[12px] text-navy font-semibold hover:bg-cream hover:border-gold transition-colors focus:outline-none';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => handleOptionClick(opt));
        optionsEl.appendChild(btn);
      });
    }, 700);
  }

  function handleOptionClick(opt) {
    optionsEl.innerHTML = '';
    appendMessage('user', opt.label);

    if (opt.action && opt.target === 'whatsapp') {
      setTimeout(() => {
        showTyping();
        setTimeout(() => {
          hideTyping();
          appendMessage('bot', '¡Genial! Te estoy redirigiendo a WhatsApp con uno de nuestros asesores...');
          setTimeout(() => {
            window.open('https://wa.me/59162900082', '_blank');
            closeChat();
          }, 1500);
        }, 700);
      }, 300);
      return;
    }

    setTimeout(() => loadStep(opt.target), 300);
  }
}

document.addEventListener('DOMContentLoaded', initChatbot);
