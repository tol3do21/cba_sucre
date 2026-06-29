// CBA Sucre Web - Interactivity
// Pure Vanilla JS

// Data matching the old Next.js data.ts
const PROGRAMS_DATA = {
  kids: {
    id: "kids",
    label: "Niños",
    ageRange: "6 – 11 años",
    duration: "10 niveles · 2 años",
    blurb: "Inglés interactivo a través del juego, canciones y proyectos dinámicos. Diseñado para estimular la curiosidad y sentar bases sólidas desde la infancia.",
    bullets: [
      "Metodología lúdica y humanista",
      "Grupos de máximo 14 niños por aula",
      "Material didáctico y multimedia interactivo",
      "Reporte de progreso y evaluación trimestral"
    ],
    schedule: ["Lun & Mié · 16:00 – 17:30", "Mar & Jue · 16:00 – 17:30", "Sábados · 9:00 – 12:00"],
    photo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80"
  },
  teens: {
    id: "teens",
    label: "Adolescentes",
    ageRange: "12 – 16 años",
    duration: "12 niveles · 2½ años",
    blurb: "Fomenta el desarrollo lingüístico y de habilidades del siglo XXI usando la serie de textos Wider World de Pearson en co-edición con la BBC, conectando el inglés con el mundo real.",
    bullets: [
      "Textos oficiales: Wider World (Pearson & BBC)",
      "Preparación para certificaciones Cambridge KET / PET / FCE",
      "Proyectos colaborativos, debates y clubes culturales",
      "Asesoramiento gratuito para estudios con EducationUSA"
    ],
    schedule: ["Lun & Mié · 17:45 – 19:15", "Mar & Jue · 17:45 – 19:15", "Sábados · 14:00 – 17:00"],
    photo: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80"
  },
  adults: {
    id: "adults",
    label: "Adultos",
    ageRange: "17+ años",
    duration: "14 niveles · 3 años",
    blurb: "Enfoque profesional y académico de alta exigencia. Emplea la serie de textos Top Notch y Summit de Pearson, logrando un nivel avanzado (B2/C1) certificado por el Ministerio de Educación.",
    bullets: [
      "Textos oficiales: Top Notch y Summit (Pearson)",
      "Preparación avanzada TOEFL iBT y el programa TLP",
      "Certificación a Nivel Capacitación de Inglés Avanzado (M.E.)",
      "Conversation Clubs semanales y redacción de ensayos"
    ],
    schedule: ["Lun a Vie · 7:00 – 8:30", "Lun a Vie · 19:00 – 20:30", "Sábados · 9:00 – 13:00"],
    photo: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80"
  }
};

const CALENDAR_DATA = {
  Mayo: [
    { d: 1, tag: "all", title: "Feriado · Día del Trabajo" },
    { d: 12, tag: "kids", title: "Apertura Kinder bilingüe" },
    { d: 15, tag: "all", title: "Fin de curso · 5º Periodo" },
    { d: 18, tag: "all", title: "Inicio de Clases · 6º Periodo" },
    { d: 22, tag: "adults", title: "Feria de Universidades" },
    { d: 25, tag: "all", title: "Feriado · Primer Grito de Libertad" }
  ],
  Junio: [
    { d: 2, tag: "kids", title: "Eval. trimestral · Niños" },
    { d: 4, tag: "all", title: "Feriado · Corpus Christi" },
    { d: 9, tag: "teens", title: "Cambridge KET mock test" },
    { d: 11, tag: "all", title: "Fin de curso · 6º Periodo" },
    { d: 14, tag: "adults", title: "TOEFL prep intensivo" },
    { d: 15, tag: "all", title: "Inicio de Clases · 7º Periodo" },
    { d: 21, tag: "teens", title: "Debate Club · Final" },
    { d: 26, tag: "kids", title: "Show de fin de ciclo" }
  ],
  Julio: [
    { d: 4, tag: "all", title: "★ Independence Day · USA250" },
    { d: 6, tag: "all", title: "Feriado · Receso regional" },
    { d: 7, tag: "all", title: "Fin de curso · 7º Periodo" },
    { d: 8, tag: "adults", title: "IELTS prep intensivo" },
    { d: 9, tag: "all", title: "Inicio de Clases · 8º Periodo" },
    { d: 19, tag: "teens", title: "Inscripciones FCE" },
    { d: 25, tag: "adults", title: "Workshop Business English" }
  ]
};

// ── DOM Elements and Initial States ──
let activeProgramTab = "teens";
let activeCalendarMonth = "Mayo";
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
  
  function switchTab(tabName) {
    activeProgramTab = tabName;
    const data = PROGRAMS_DATA[tabName];
    
    // Update active tab buttons styles
    Object.keys(buttons).forEach(key => {
      const btn = buttons[key];
      if (!btn) return;
      
      const dividerEl = btn.querySelector(".accent-divider");
      
      if (key === tabName) {
        btn.classList.remove("bg-white", "text-navy");
        btn.classList.add("bg-navy", "text-white");
        // Add borders/badge top accent
        const topAccent = btn.querySelector(".accent-bar");
        if (topAccent) topAccent.classList.remove("hidden");
        
        // Divider color when active
        if (dividerEl) {
          dividerEl.classList.remove("bg-navy/12");
          dividerEl.classList.add("bg-white/20");
        }
      } else {
        btn.classList.remove("bg-navy", "text-white");
        btn.classList.add("bg-white", "text-navy");
        
        const topAccent = btn.querySelector(".accent-bar");
        if (topAccent) topAccent.classList.add("hidden");
        
        // Divider color when inactive
        if (dividerEl) {
          dividerEl.classList.remove("bg-white/20");
          dividerEl.classList.add("bg-navy/12");
        }
      }
    });
    
    // Update container content
    const imgEl = document.getElementById("program-img");
    const imgLabelEl = document.getElementById("program-img-label");
    const descEl = document.getElementById("program-desc");
    const bulletsEl = document.getElementById("program-bullets");
    const schedulesEl = document.getElementById("program-schedules");
    const badgesEl = document.getElementById("program-badges");
    
    if (imgEl) imgEl.style.backgroundImage = `url(${data.photo})`;
    if (imgLabelEl) imgLabelEl.innerHTML = `Inglés para ${data.label.toLowerCase()}`;
    if (descEl) descEl.innerHTML = data.blurb;
    
    // Bullets list
    if (bulletsEl) {
      bulletsEl.innerHTML = data.bullets.map(bullet => `
        <div class="flex gap-2.5 items-start text-xs md:text-sm text-ink leading-relaxed">
          <svg class="w-4 h-4 text-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
          </svg>
          <span>${bullet}</span>
        </div>
      `).join("");
    }
    
    // Schedules list
    if (schedulesEl) {
      schedulesEl.innerHTML = data.schedule.map(time => `
        <div class="px-3 py-2 bg-cream text-navy border-l-4 border-red font-semibold text-xs md:text-sm leading-none">
          ${time}
        </div>
      `).join("");
    }
  }
  
  // Attach event listeners
  Object.keys(buttons).forEach(key => {
    const btn = buttons[key];
    if (btn) {
      btn.addEventListener("click", () => switchTab(key));
    }
  });
  
  // Set initial Adolescentes tab
  switchTab("teens");
}

// ── Academic Calendar Filters ──
function initCalendar() {
  const monthButtons = {
    Mayo: document.getElementById("month-btn-mayo"),
    Junio: document.getElementById("month-btn-junio"),
    Julio: document.getElementById("month-btn-julio")
  };
  
  const filterButtons = {
    all: document.getElementById("filter-btn-all"),
    kids: document.getElementById("filter-btn-kids"),
    teens: document.getElementById("filter-btn-teens"),
    adults: document.getElementById("filter-btn-adults")
  };
  
  const container = document.getElementById("calendar-items");
  
  function renderCalendar() {
    if (!container) return;
    
    const items = CALENDAR_DATA[activeCalendarMonth];
    const filtered = items.filter(item => {
      if (activeCalendarFilter === "all") return true;
      return item.tag === activeCalendarFilter || item.tag === "all";
    });
    
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-muted italic text-sm border-t border-navy/10">
          No hay eventos programados para esta categoría en este mes.
        </div>
      `;
      return;
    }
    
    container.innerHTML = filtered.map((item, index) => {
      let badgeColor = "#0A2540"; // Default Navy
      let badgeLabel = "Académico";
      
      if (item.tag === "kids") { badgeColor = "#B22234"; badgeLabel = "Niños"; }
      else if (item.tag === "teens") { badgeColor = "#C9A961"; badgeLabel = "Adolescentes"; }
      else if (item.tag === "adults") { badgeColor = "#0A2540"; badgeLabel = "Adultos"; }
      else if (item.tag === "all") {
        if (item.title.toLowerCase().includes("feriado")) {
          badgeColor = "#B22234"; // Red
          badgeLabel = "Feriado";
        } else if (item.title.toLowerCase().includes("independence")) {
          badgeColor = "#C9A961"; // Gold
          badgeLabel = "Evento";
        }
      }
      
      const isFirst = index === 0;
      const borderStyle = isFirst ? "" : "border-t border-navy/10";
      
      return `
        <div class="grid grid-cols-[64px_100px_1fr_auto] gap-4 items-center p-4 ${borderStyle}">
          <div class="font-serif text-2xl md:text-3xl font-extrabold text-navy italic leading-none">${item.d}</div>
          <div class="flex items-center gap-2 text-[10px] tracking-widest font-bold uppercase" style="color: ${badgeColor}">
            <span class="w-2 h-2 rounded-full flex-shrink-0" style="background-color: ${badgeColor}"></span>
            <span>${badgeLabel}</span>
          </div>
          <div class="font-serif text-sm md:text-base text-navy font-bold leading-tight">${item.title}</div>
          <a href="#inscripcion" class="text-[10px] tracking-widest text-red font-bold uppercase cursor-pointer hover:underline whitespace-nowrap">Ver →</a>
        </div>
      `;
    }).join("");
  }
  
  function setMonth(month) {
    activeCalendarMonth = month;
    Object.keys(monthButtons).forEach(key => {
      const btn = monthButtons[key];
      if (!btn) return;
      if (key === month) {
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
    renderCalendar();
  }
  
  function setFilter(filter) {
    activeCalendarFilter = filter;
    Object.keys(filterButtons).forEach(key => {
      const btn = filterButtons[key];
      if (!btn) return;
      if (key === filter) {
        btn.classList.remove("bg-transparent", "border-black/10");
        btn.classList.add("bg-cream", "border-navy");
        const dot = btn.querySelector(".filter-dot");
        if (dot) dot.classList.remove("hidden");
      } else {
        btn.classList.remove("bg-cream", "border-navy");
        btn.classList.add("bg-transparent", "border-black/10");
        const dot = btn.querySelector(".filter-dot");
        if (dot) dot.classList.add("hidden");
      }
    });
    renderCalendar();
  }
  
  // Attach event listeners
  Object.keys(monthButtons).forEach(key => {
    const btn = monthButtons[key];
    if (btn) btn.addEventListener("click", () => setMonth(key));
  });
  
  Object.keys(filterButtons).forEach(key => {
    const btn = filterButtons[key];
    if (btn) btn.addEventListener("click", () => setFilter(key));
  });
  
  // Init
  setMonth("Mayo");
  setFilter("all");
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
