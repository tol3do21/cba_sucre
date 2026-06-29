// CBA Sucre — shared content
const CBA = {
  name: "Centro Boliviano Americano",
  city: "Sucre",
  short: "CBA Sucre",
  taglineEs: "Tendiendo puentes entre culturas desde 1962",
  address: "Calle Calvo #301 esq. Potosí",
  phone: "+591 (4) 644 1608",
  email: "info@cbasucre.org",
  hours: "Lun – Vie · 8:00 – 20:00  ·  Sáb · 9:00 – 13:00",
};

const USA250 = {
  title: "AMERICA 250",
  subtitle: "Celebrando 250 años de los Estados Unidos",
  date: "4 de julio, 2026",
  blurb:
    "Un año entero de conciertos, exhibiciones, conferencias y la fiesta de la independencia más grande de Chuquisaca. Bienvenidos al sesquicentenario del bicentenario.",
};

const PROGRAMS = [
  {
    id: "kids",
    label: "Niños",
    ageRange: "6 – 11 años",
    duration: "10 niveles · 2 años",
    blurb:
      "Inglés a través del juego, canciones y proyectos. Grupos pequeños con docentes certificados.",
    bullets: [
      "Currícula Cambridge YLE",
      "Máximo 14 estudiantes por aula",
      "Material didáctico incluido",
      "Reporte de progreso trimestral",
    ],
    schedule: ["Lun & Mié · 16:00 – 17:30", "Mar & Jue · 16:00 – 17:30", "Sábados · 9:00 – 12:00"],
    price: "Bs. 450 / mes",
    photo:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
  },
  {
    id: "teens",
    label: "Adolescentes",
    ageRange: "12 – 16 años",
    duration: "12 niveles · 2½ años",
    blurb:
      "Combina inglés académico, cultura pop y preparación para exámenes Cambridge KET / PET / FCE.",
    bullets: [
      "Prep. Cambridge KET / PET / FCE",
      "Proyectos colaborativos y debates",
      "Acceso a EducationUSA Advising",
      "Clubes de cine, robótica y debate",
    ],
    schedule: ["Lun & Mié · 17:45 – 19:15", "Mar & Jue · 17:45 – 19:15", "Sábados · 14:00 – 17:00"],
    price: "Bs. 520 / mes",
    photo:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80",
  },
  {
    id: "adults",
    label: "Adultos",
    ageRange: "17+ años",
    duration: "14 niveles · 3 años",
    blurb:
      "Universitarios y profesionales. Inglés general, conversación, negocios y preparación TOEFL / IELTS.",
    bullets: [
      "TOEFL iBT & IELTS prep oficial",
      "English for Business",
      "Conversation Club semanal",
      "Modalidad presencial e híbrida",
    ],
    schedule: ["Lun a Vie · 7:00 – 8:30", "Lun a Vie · 19:00 – 20:30", "Sábados · 9:00 – 13:00"],
    price: "Bs. 580 / mes",
    photo:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
  },
  {
    id: "special",
    label: "Especiales",
    ageRange: "Todas las edades",
    duration: "Cursos cortos · 4 a 12 sem.",
    blurb:
      "Cursos intensivos de verano, español para extranjeros, quechua, conversación y kinder bilingüe.",
    bullets: [
      "Español & Quechua para extranjeros",
      "Kinder bilingüe (3 – 5 años)",
      "Intensivos de verano",
      "Clases corporativas in-company",
    ],
    schedule: ["Verano: Lun a Vie · 9:00 – 12:00", "Quechua: Sáb · 10:00 – 12:00", "Kinder: Lun a Vie · 8:30 – 12:30"],
    price: "Desde Bs. 380",
    photo:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=80",
  },
];

const EVENTS = [
  {
    date: "04 JUL 2026",
    tag: "USA250",
    title: "Independence Day · The Big 250",
    place: "Patio CBA · Calle Calvo 301",
    desc: "Concierto, food trucks, fuegos artificiales y la ceremonia oficial con la Embajada de EE.UU.",
  },
  {
    date: "22 MAY 2026",
    tag: "EducationUSA",
    title: "Feria de Universidades Americanas",
    place: "Auditorio CBA",
    desc: "12 universidades de EE.UU. presentan programas, becas y proceso de admisión. Entrada libre.",
  },
  {
    date: "15 JUN 2026",
    tag: "Cine",
    title: "Festival de Cine Indie Americano",
    place: "Sala de Cine CBA",
    desc: "Una semana de cine independiente: Sundance hits, documentales y Q&A con directores invitados.",
  },
  {
    date: "30 ABR 2026",
    tag: "Fulbright",
    title: "Información Becas Fulbright 2027",
    place: "Sala 3 · 18:30",
    desc: "Conoce los requisitos para postular a la beca más prestigiosa del gobierno de EE.UU.",
  },
];

const NEWS = [
  { tag: "Inscripciones", title: "Inscripciones abiertas para el ciclo Mayo–Julio 2026", when: "Hoy" },
  { tag: "USA250", title: "CBA Sucre será sede oficial de la celebración America 250", when: "Hace 3 días" },
  { tag: "Becas", title: "5 estudiantes del CBA ganaron beca Fulbright 2026", when: "Hace 1 semana" },
];

Object.assign(window, { CBA, USA250, PROGRAMS, EVENTS, NEWS });
