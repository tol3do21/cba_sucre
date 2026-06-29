/* ═══════════════════════════════════════════════════
   CBA Sucre · script.js
   Interactividad completa en Vanilla JS
   ═══════════════════════════════════════════════════ */

/* ── Datos ── */
const PROGRAMS = {
  kids: {
    label: 'Niños',
    age: '7 – 11 años',
    dur: 'Múltiples niveles',
    blurb: 'Inglés a través del juego, canciones y proyectos con los libros PARADE STARTER y NEW PARADE. Grupos pequeños con docentes certificados.',
    bullets: ['Libros PARADE STARTER (7–10 años)', 'NEW PARADE para 11–12 años', 'Total Physical Response', 'Communicative Approach', 'Máximo 14 estudiantes por aula', 'Material audiovisual incluido'],
    schedule: ['09:00 – 10:00', '15:00 – 16:00', '16:00 – 17:00'],
    photo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80',
  },
  teens: {
    label: 'Adolescentes',
    age: '12 – 14 años',
    dur: 'Múltiples niveles',
    blurb: 'Inglés con el libro SUCCESS — la última palabra en textos para adolescentes, con temáticas y personajes apropiados para su edad.',
    bullets: ['Libro SUCCESS (edición adolescentes)', 'Temáticas y personajes de la edad', 'Habilidades de comprensión', 'Dinámicas interactivas', 'Preparación Cambridge KET / PET', 'Acceso a EducationUSA Advising'],
    schedule: ['09:00 – 10:00', '15:00 – 16:00', '16:00 – 17:00', '18:00 – 19:00'],
    photo: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80',
  },
  adults: {
    label: 'Jóvenes y Adultos',
    age: '15+ años',
    dur: 'Múltiples niveles',
    blurb: 'Inglés con el reconocido libro TOP NOTCH, de éxito comprobado internacionalmente. Para universitarios y profesionales con horarios flexibles.',
    bullets: ['Libro TOP NOTCH (éxito internacional)', 'Modalidad presencial e híbrida', 'TOEFL PBT & iBT prep oficial', 'ECCE & ECPE prep especializada', 'Conversation Club semanal', 'Sábados intensivos disponibles'],
    schedule: ['07:00 – 08:30', '08:30 – 10:00', '17:00 – 18:30', '18:30 – 20:00', '20:00 – 21:30'],
    photo: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80',
  },
};

const LEVELS = ['A1','A1+','A2','A2+','B1','B1+','B2','B2+','C1','C2'];

const COLOR_MAP = { kids: '#B22234', teens: '#C9A961', adults: '#0A2540', special: '#5B8C5A' };
const TAG_LABELS = { kids: 'Niños', teens: 'Adolesc.', adults: 'Adultos', special: 'Cultura' };

const CALENDAR_WEEKS = {
  Mayo: [
    { d: 10, tag: 'special', title: 'Quechua para extranjeros' },
    { d: 12, tag: 'kids',    title: 'Apertura Kinder bilingüe' },
    { d: 18, tag: 'adults',  title: 'Inicio de Clases · 6º Periodo' },
    { d: 22, tag: 'adults',  title: 'Feria de Universidades' },
    { d: 28, tag: 'special', title: 'Conversation Club' },
  ],
  Junio: [
    { d:  2, tag: 'kids',    title: 'Eval. trimestral · Niños' },
    { d:  9, tag: 'teens',   title: 'Cambridge KET mock test' },
    { d: 14, tag: 'adults',  title: 'TOEFL prep intensivo' },
    { d: 15, tag: 'adults',  title: 'Inicio de Clases · 7º Periodo' },
    { d: 15, tag: 'special', title: 'Festival Cine Indie USA' },
    { d: 21, tag: 'teens',   title: 'Debate Club · Final' },
    { d: 26, tag: 'kids',    title: 'Show de fin de ciclo' },
  ],
  Julio: [
    { d:  4, tag: 'special', title: '★ Independence Day · USA250' },
    { d:  8, tag: 'adults',  title: 'IELTS prep intensivo' },
    { d:  9, tag: 'adults',  title: 'Inicio de Clases · 8º Periodo' },
    { d: 19, tag: 'teens',   title: 'Inscripciones FCE' },
    { d: 25, tag: 'adults',  title: 'Workshop Business English' },
  ],
};

/* ══════════════════════════════════
   COUNTDOWN
   ══════════════════════════════════ */
(function initCountdown() {
  const TARGET = new Date('2026-07-04T00:00:00');
  const dd = document.getElementById('cd-d');
  const hh = document.getElementById('cd-h');
  const mm = document.getElementById('cd-m');
  const ss = document.getElementById('cd-s');
  if (!dd) return;

  function update() {
    const diff = Math.max(0, TARGET - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    dd.textContent = String(d).padStart(2,'0');
    hh.textContent = String(h).padStart(2,'0');
    mm.textContent = String(m).padStart(2,'0');
    ss.textContent = String(s).padStart(2,'0');
  }
  update();
  setInterval(update, 1000);
})();

/* ══════════════════════════════════
   HEADER LOGO FALLBACK
   ══════════════════════════════════ */
(function initLogo() {
  const img = document.getElementById('header-logo-img');
  const fb  = document.getElementById('header-logo-fallback');
  if (!img || !fb) return;
  img.onerror = function () {
    img.style.display = 'none';
    fb.style.display = 'grid';
  };
})();

/* ══════════════════════════════════
   PROGRAMS TABS
   ══════════════════════════════════ */
(function initPrograms() {
  const tabBtns  = document.querySelectorAll('.prog-tab');
  const panels   = document.querySelectorAll('.prog-panel');

  function renderPanel(id) {
    const p = PROGRAMS[id];
    if (!p) return;

    const panel = document.getElementById('panel-' + id);
    if (!panel) return;

    // Photo
    const photo = panel.querySelector('.prog-photo');
    if (photo) photo.style.backgroundImage = `url(${p.photo})`;

    const photoLabel = panel.querySelector('.prog-photo-label');
    if (photoLabel) photoLabel.textContent = 'Inglés para ' + p.label.toLowerCase();

    // Blurb
    const blurb = panel.querySelector('.prog-blurb');
    if (blurb) blurb.textContent = p.blurb;

    // Bullets
    const bulletsEl = panel.querySelector('.prog-bullets');
    if (bulletsEl) {
      bulletsEl.innerHTML = p.bullets.map(b =>
        `<div class="prog-bullet"><span class="prog-bullet-star">★</span>${b}</div>`
      ).join('');
    }

    // Levels
    const levelsEl = panel.querySelector('.prog-levels');
    if (levelsEl) {
      levelsEl.innerHTML = LEVELS.map((lv, i) =>
        `<span class="level-badge ${i < 3 ? 'filled' : ''}">${lv}</span>`
      ).join('');
    }

    // Schedules
    const schedListEl = panel.querySelector('.sched-list');
    if (schedListEl) {
      schedListEl.innerHTML = p.schedule.map(s =>
        `<div class="sched-item">${s}</div>`
      ).join('');
    }
  }

  function activateTab(id) {
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.prog === id);
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.id === 'panel-' + id);
    });
    renderPanel(id);
  }

  // Initial render for all panels
  Object.keys(PROGRAMS).forEach(id => renderPanel(id));

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.prog));
  });

  // Default
  activateTab('teens');
})();

/* ══════════════════════════════════
   CALENDAR
   ══════════════════════════════════ */
(function initCalendar() {
  let currentMonth  = 'Mayo';
  let currentFilter = 'Todos';

  const monthBtns   = document.querySelectorAll('.cal-month-btn');
  const filterBtns  = document.querySelectorAll('.cal-filter-btn');
  const eventsEl    = document.getElementById('cal-events-list');
  const emptyEl     = document.getElementById('cal-empty');

  function renderEvents() {
    const events = CALENDAR_WEEKS[currentMonth] || [];
    const visible = events.filter(e =>
      currentFilter === 'Todos' || e.tag === currentFilter
    );

    if (!eventsEl) return;
    eventsEl.innerHTML = '';

    if (visible.length === 0) {
      if (emptyEl) emptyEl.classList.add('visible');
    } else {
      if (emptyEl) emptyEl.classList.remove('visible');
      visible.forEach(e => {
        const color = COLOR_MAP[e.tag] || '#0A2540';
        const label = TAG_LABELS[e.tag]  || e.tag;
        const row = document.createElement('div');
        row.className = 'cal-event';
        row.innerHTML = `
          <div class="cal-event-day">${String(e.d).padStart(2,'0')}</div>
          <div class="cal-event-tag" style="color:${color}">
            <span class="cal-tag-dot" style="background:${color}"></span>
            ${label}
          </div>
          <div class="cal-event-title">${e.title}</div>
          <span class="cal-event-link">Ver →</span>
        `;
        eventsEl.appendChild(row);
      });
    }
  }

  monthBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentMonth = btn.dataset.month;
      monthBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderEvents();
    });
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentFilter = btn.dataset.filter;
      filterBtns.forEach(b => b.classList.toggle('active', b === btn));
      renderEvents();
    });
  });

  renderEvents();
})();

/* ══════════════════════════════════
   CALENDAR MODAL
   ══════════════════════════════════ */
(function initCalendarModal() {
  const openBtn  = document.getElementById('cal-open-modal');
  const modal    = document.getElementById('cal-modal');
  const closeBtn = document.getElementById('cal-modal-close');
  if (!openBtn || !modal || !closeBtn) return;

  openBtn.addEventListener('click', () => modal.classList.add('open'));
  closeBtn.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('open');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('open');
  });
})();

/* ══════════════════════════════════
   INSCRIPTION FORM
   ══════════════════════════════════ */
(function initInscription() {
  const progBtns = document.querySelectorAll('.prog-sel-btn');
  const schedBtns = document.querySelectorAll('.sched-opt-btn');
  const modeBtns = document.querySelectorAll('.mode-btn');
  const schedContainer = document.getElementById('form-sched-list');

  let activeProg = 'teens';

  function updateSchedules(progId) {
    if (!schedContainer) return;
    const p = PROGRAMS[progId];
    if (!p) return;
    schedContainer.innerHTML = p.schedule.slice(0, 3).map((s, i) =>
      `<button class="sched-opt-btn${i === 0 ? ' active' : ''}" type="button">${s}</button>`
    ).join('');
    // Re-bind events for new buttons
    schedContainer.querySelectorAll('.sched-opt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        schedContainer.querySelectorAll('.sched-opt-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  progBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      progBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeProg = btn.dataset.prog;
      updateSchedules(activeProg);
    });
  });

  schedBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      schedBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Init schedules
  updateSchedules(activeProg);

  // Form submission placeholder
  const form = document.getElementById('inscription-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias! Nos comunicaremos contigo en menos de 24 horas para confirmar tu inscripción.');
    });
  }
})();
