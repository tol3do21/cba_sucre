# Handoff: CBA Sucre — Home Page

> **Nota importante:** Los archivos HTML/JSX de este paquete son **referencias de diseño** creadas como prototipo interactivo — no código de producción para copiar directamente. La tarea del desarrollador es **recrear estos diseños en el entorno tecnológico existente del proyecto** (React, Next.js, Vue, etc.) usando sus patrones y librerías establecidas. Si no existe un entorno aún, se recomienda Next.js + Tailwind CSS.

---

## Resumen

Prototipo **high-fidelity** del home del Centro Boliviano Americano de Sucre. Diseño editorial "Embassy Classic" — institucional, elegante y bilingüe (ES). Cubre el flujo completo de la página principal: hero especial America 250, programas de inglés, calendario académico, agenda de eventos, sección Fulbright/EducationUSA, formulario de inscripción, historia y footer.

---

## Fidelidad

**Alta fidelidad (hifi).** El prototipo tiene colores, tipografía, espaciado e interacciones finales. El desarrollador debe reproducirlo píxel a píxel usando las librerías del proyecto. Las interacciones (tabs de programas, filtros del calendario, selección de horario) son funcionales en el prototipo y deben serlo también en producción.

---

## Tokens de diseño

### Colores

| Token | Hex | Uso |
|---|---|---|
| `navy` | `#0A2540` | Fondo primario, texto en fondo claro, botones secundarios |
| `navyDeep` | `#071A30` | Footer, fondos profundos |
| `red` | `#B22234` | Acento primario, CTAs principales, bordes decorativos |
| `redDeep` | `#8E1A28` | Hover del rojo |
| `cream` | `#F5EFE0` | Fondo de secciones alternas, formulario |
| `creamDeep` | `#EBE2CC` | Hover del cream |
| `gold` | `#C9A961` | Acento terciario, labels en fondo navy |
| `ink` | `#1A1A1A` | Texto body en fondos claros |
| `muted` | `#5B6470` | Texto secundario/labels |

### Tipografía

| Familia | Pesos | Uso |
|---|---|---|
| `Playfair Display` | 400, 700, 900 · Regular + Italic | Todos los títulos (h1–h4), pull quotes, elementos decorativos |
| `Inter` | 400, 500, 600, 700, 800 | Body, labels, navegación, botones, UI |
| `Archivo Black` | 400 | Importada pero no usada en este prototipo — reservar para futuro |

**Google Fonts URL:**
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Inter:wght@400;500;600;700;800&family=Archivo+Black&display=swap
```

### Espaciado

El diseño está construido sobre una cuadrícula de `1440px` de ancho total con `padding` lateral de `56px` en desktop. Internamente usa CSS Grid y Flexbox con `gap` en múltiplos de 8px (8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 30, 36, 40, 44, 50, 56, 60, 70, 80, 90).

### Bordes y sombras

- **Sin border-radius** — el diseño usa esquinas perfectamente cuadradas en toda la UI (aesthetic editorial/institucional deliberado).
- **Box shadow principal:** `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)` (en la vista móvil sobre el panel contenedor).
- **Regla decorativa:** `4px solid #B22234` — borde superior en header, paneles, tarjetas activas.

---

## Estructura de la página

La página es un scroll largo de una sola columna. Orden de secciones de arriba a abajo:

```
1. AHeader         — Navegación institucional sticky
2. AAnnouncement   — Banner de inscripciones abiertas
3. AHero           — Hero America 250 con countdown
4. A2Programs      — Selector de programas (tabs)
5. A2Calendar      — Calendario académico interactivo
6. A2Events        — Agenda de eventos / America 250
7. A2Fulbright     — Becas y EducationUSA
8. A2Inscription   — Formulario de pre-inscripción
9. A2About         — Historia institucional (timeline)
10. A2Footer       — Footer con contacto y enlaces
```

---

## Secciones detalladas

### 1. `AHeader` — Navegación

**Layout:** `flex` row, `space-between`, `padding: 18px 56px`, `background: #0A2540`, `border-bottom: 4px solid #B22234`.

**Izquierda:** Logo circular (46×46px, fondo blanco, borde rojo 3px, letra "C" Playfair 22px) + nombre institucional en 2 líneas.
- Línea 1: "Centro Boliviano Americano" · Playfair Display 700 · 17px
- Línea 2: "Sucre · Bolivia · Est. 1962" · Inter · 11px · `letter-spacing: 2px` · `opacity: 0.7` · uppercase

**Centro:** Nav links `gap: 30px`, Inter 500 13px, color `#fff`. Items: Programas, Calendario, Eventos, USA250, Becas, Nosotros, Contacto. "Programas" tiene `border-bottom: 2px solid #C9A961` (estado activo).

**Derecha:** 2 botones:
- "Sistema académico" — transparent, borde `rgba(255,255,255,0.3)`, padding `9px 16px`, 12px uppercase, letter-spacing 1
- "Inscríbete" — background `#B22234`, sin borde, padding `9px 18px`, 12px uppercase bold

---

### 2. `AAnnouncement` — Banner

**Layout:** `flex` row `space-between`, `padding: 14px 56px`, `background: #F5EFE0`, `border-bottom: 1px solid rgba(0,0,0,0.06)`.

**Izquierda:** Badge `NUEVO` (fondo rojo, texto blanco, 10px, letter-spacing 2) + texto Inter 13px color `#1A1A1A`.
Texto: *"Inscripciones abiertas para el ciclo **Mayo – Julio 2026**. Niveles disponibles para todas las edades."*

**Derecha:** Link "Inscribirme →" · Inter 12px · color `#0A2540` · bold · uppercase · letter-spacing 1.

---

### 3. `AHero` — Hero America 250

**Layout:** Grid 2 columnas `1.1fr 0.9fr`, `gap: 60px`, `padding: 70px 56px 130px`, `background: #0A2540`.

**Fondo decorativo:** Patrón SVG de estrellas (★ de 5 puntas) en tile de 60×60px, `opacity: 0.18`, color `#fff`. Estrellas definidas con path SVG en `<pattern>`.

**Franja de colores en bottom:** 70px de alto, 3 bandas horizontales iguales: rojo / blanco / rojo (franjas estilo bandera USA).

**Columna izquierda:**
- Badge pill: background `#B22234`, texto "★ EDICIÓN ESPECIAL · 2026", 11px, letter-spacing 3, bold
- `<h1>` Playfair Display 900, 96px, line-height 0.92, letter-spacing -2.5:
  - "America"
  - Segunda línea: *"two-fifty"* (italic, color gold) + "desde Sucre" (Inter 18px, uppercase, opacity 0.75)
- Párrafo body 18px, line-height 1.55, opacity 0.85, max-width 520px
- 2 botones en row gap 14px:
  - "Ver agenda America 250 →" — fondo blanco, texto navy, 13px, letter-spacing 2, bold uppercase, padding `16px 26px`
  - "Inscríbete a clases" — transparent, borde `rgba(255,255,255,0.4)`, mismas dimensiones

**Columna derecha — Countdown widget:**
- Contenedor: borde `1px solid rgba(255,255,255,0.2)`, padding 18px, `background: rgba(255,255,255,0.04)`, `backdrop-filter: blur(2px)`
- Label "⎯ COUNTDOWN ⎯" · 11px · letter-spacing 3 · gold
- Subtítulo "Independence Day · 4 de julio, 2026" · Playfair 18px
- Grid 4 columnas (DÍAS / HRS / MIN / SEG): fondo `#071A30`, borde `1px solid rgba(255,255,255,0.1)`, número Playfair 38px 900, label 9px letter-spacing 2 opacity 0.6
- Pie de texto 12px, opacity 0.7

**Medallón flotante:** 124×124px círculo, `background: #B22234`, posición `top: -22px, right: -22px`, rotado -8deg, `border: 5px double #F5EFE0`, box-shadow dramática. Interior: "1776" + "250" (Playfair italic 40px) + "2026".

---

### 4. `A2Programs` — Programas de inglés

**Background:** `#F5EFE0`, `padding: 70px 56px`.

**Header centrado:**
- Eyebrow: "★ ★ ★  PROGRAMAS DE INGLÉS  ★ ★ ★" · 11px · letter-spacing 4 · `#B22234` · bold
- H2: "Una clase para *cada* edad." · Playfair 72px · navy · letter-spacing -2 · `<em>` en italic
- Subtítulo italic 14px muted, max-width 560px

**Tabs (4 columnas):** Grid `repeat(4, 1fr)`, `border: 1px solid #0A2540`, sin gap.

Cada tab (`<button>`):
- Estado inactivo: `background: #fff`, color navy
- Estado activo: `background: #0A2540`, color white
- Borde derecho entre tabs: `1px solid` navy (o rgba blanco si activo)
- Padding `30px 24px`
- Línea roja en top cuando activo: `position: absolute; top: -1px; height: 4px; background: #B22234`
- Contenido por tab:
  - "NIVEL · 0N" · 10px · letter-spacing 3 · opacity 0.7
  - Nombre del programa · Playfair 34px italic 900
  - Rango de edad · Playfair 13px italic
  - Separador horizontal
  - Row: duración (izq, opacity 0.7) + precio (der, bold, rojo si inactivo / gold si activo)

**Panel expandido (detail):** Grid `0.9fr 1.4fr 0.9fr`, `border: 1px solid #0A2540`, `border-top: none`, `background: #fff`.

- **Col 1 (foto):** `background: url(...) center/cover`, min-height 380px. Overlay `linear-gradient(180deg, rgba(10,37,64,0.2), rgba(10,37,64,0.6))`. Label bottom-left: italic white Playfair 16px.
- **Col 2 (detalle):** padding `36px`, border laterales. Pull quote Playfair italic 26px navy, margin-bottom 22px. Bullets en grid `1fr 1fr`, cada uno con ★ rojo 11px + texto 13px. Bajo bullets: nivel badges CEFR (A1–C2), primeros 3 con fondo navy sólido.
- **Col 3 (horarios):** padding `30px 28px`. Label "HORARIOS" 10px. Cada horario: padding `10px 12px`, `background: #F5EFE0`, `border-left: 3px solid #B22234`, 12px navy. Botón "Inscribirme →" ancho completo, fondo rojo. Nota "Cupos limitados · 14 por aula" italic centered muted.

**Programas (datos desde `PROGRAMS`):**
| ID | Label | Edad | Duración | Precio |
|---|---|---|---|---|
| kids | Niños | 6–11 años | 10 niveles · 2 años | Bs. 450 / mes |
| teens | Adolescentes | 12–16 años | 12 niveles · 2½ años | Bs. 520 / mes |
| adults | Adultos | 17+ años | 14 niveles · 3 años | Bs. 580 / mes |
| special | Especiales | Todas las edades | Cursos cortos · 4–12 sem. | Desde Bs. 380 |

---

### 5. `A2Calendar` — Calendario académico

**Background:** `#fff`, `padding: 80px 56px`, `border-top: 1px solid #0A2540`.

**Layout:** Grid `0.8fr 1.4fr`, gap 50px.

**Columna izquierda:** Eyebrow rojo + H2 Playfair 64px ("Ciclo *Mayo — Julio*") + párrafo italic. Filtros de programa (5 botones):
- "Todos los programas" (navy)
- "Niños 6–11" (rojo `#B22234`)
- "Adolescentes 12–16" (gold `#C9A961`)
- "Adultos 17+" (navy)
- "Cursos especiales" (verde `#5B8C5A`)

Cada filtro: `flex row gap 12px`, dot de color 10×10 redondo, borde, hover con `background: #F5EFE0`.

**Columna derecha:** 3 tabs mes (Mayo / Junio / Julio), Playfair italic 26px. Tab activo navy con línea roja superior.

Bajo tabs: lista de eventos, `border: 1px solid #0A2540`. Cada fila grid `80px 90px 1fr auto`:
- Día: Playfair italic 38px bold navy
- Tag de programa: dot + label uppercase 10px letter-spacing 1.5
- Título: Playfair 19px bold navy
- "Detalles →" rojo 11px bold

**Estado:** `filter` (Todos/kids/teens/adults/special) × `cycle` (Mayo/Junio/Julio) — filtrado en cliente.

---

### 6. `A2Events` — Agenda de eventos

**Background:** `#0A2540`, `padding: 90px 56px`. Patrón estrellas SVG `opacity: 0.16`.

**Header centrado:** Eyebrow gold "★ ★ ★  AGENDA AMERICA 250  ★ ★ ★" + H2 Playfair 72px: "Un año de *celebraciones*." (em en gold).

**Layout principal:** Grid `1.6fr 1fr`, gap 24px.

**Artículo destacado (Independence Day):**
- Background `#B22234` con overlay `linear-gradient` sobre imagen Unsplash (fiesta)
- min-height 460px, padding `44px`
- Badge "★ EVENTO ESTELAR" (fondo blanco, texto rojo)
- Fecha: Playfair 22px italic
- H3 Playfair 900 56px, line-height 0.98, letter-spacing -1.5: "Independence Day / *The Big 250*"
- Párrafo italic Playfair 17px
- Footer row con lugar, nota de entrada y botón "Reservar →" (fondo blanco, texto rojo)

**Sidebar (3 eventos menores):**
- Flex column, gap 12px. Cada uno `background: rgba(255,255,255,0.06)`, borde `rgba(255,255,255,0.15)`, padding 22px.
- Badge tag en gold (fondo gold, texto navy) + fecha italic Playfair
- H4 Playfair 22px, descripción 12px, lugar 11px con ícono

**Eventos (datos desde `EVENTS`):**
| Fecha | Tag | Título | Lugar |
|---|---|---|---|
| 04 JUL 2026 | USA250 | Independence Day · The Big 250 | Patio CBA · Calle Calvo 301 |
| 22 MAY 2026 | EducationUSA | Feria de Universidades Americanas | Auditorio CBA |
| 15 JUN 2026 | Cine | Festival de Cine Indie Americano | Sala de Cine CBA |
| 30 ABR 2026 | Fulbright | Información Becas Fulbright 2027 | Sala 3 · 18:30 |

---

### 7. `A2Fulbright` — Becas y EducationUSA

**Background:** `#F5EFE0`, `padding: 90px 56px`.

**Layout:** Grid `1fr 1.1fr`, gap 60px, items centrados.

**Columna izquierda:**
- Eyebrow rojo "★ EDUCATIONUSA ADVISING · BECAS"
- H2 Playfair 64px "Tu camino a una *universidad* en EE.UU." (em en rojo)
- Pull quote: `border-left: 3px solid #B22234`, padding-left 18px, Playfair italic 21px. Cita de exalumna Fulbright.
- Párrafo 14.5px, line-height 1.7
- CTA: "Solicitar asesoría gratuita →" — fondo navy, blanco, padding `16px 28px`

**Columna derecha — Grid de métricas 2×2:** `border: 1px solid #0A2540`.

| Stat | Label | Background |
|---|---|---|
| 120+ | Becarios Fulbright desde 1962 | `#B22234` |
| 38 | Universidades aliadas | `#0A2540` |
| TOEFL | Centro autorizado iBT | `#0A2540` |
| IELTS | Preparación oficial | `#B22234` |

Cada celda: padding `44px 32px`, min-height 200px, número Playfair 64px 900 italic (o normal si texto largo), label 13px. Número de orden `01/04` top-right, 9px, opacity 0.55.

---

### 8. `A2Inscription` — Formulario de inscripción

**Background:** `#fff`, `padding: 90px 56px`, bordes navy arriba y abajo.

**Layout:** Grid `0.85fr 1.4fr`, gap 60px.

**Columna izquierda (pitch):**
- Eyebrow rojo + H2 Playfair 60px "Reserva tu cupo *en minutos*."
- Párrafo 15px, line-height 1.7
- Lista de 3 beneficios: ★ rojo + título Playfair 16px navy + descripción 12px muted, separados por border

**Columna derecha — Formulario:**
Contenedor: `background: #F5EFE0`, padding `44px`, `border: 1px solid #0A2540`.

Header del form: Playfair italic 30px "Formulario de inscripción" + label "CICLO MAYO – JUL 2026", `border-bottom: 2px solid #0A2540`.

**Bloque 1 — Datos personales:** Grid `1fr 1fr`, gap 14px. 4 campos:
- Nombre completo (placeholder: "María Camila Rojas")
- Fecha de nacimiento (placeholder: "DD / MM / AAAA")
- Correo electrónico (placeholder: "tu@email.com")
- Celular / WhatsApp (placeholder: "+591 7...")

Cada campo: label 10px bold navy, input mock con `background: #fff`, `border: 1px solid rgba(10,37,64,0.2)`, padding `12px 14px`, texto placeholder gris.

**Bloque 2 — Programa:** Grid `repeat(4,1fr)`, gap 8px. Cards seleccionables: fondo navy + blanco si activo. Nombre Playfair italic 18px + rango de edad 10px.

**Bloque 3 — Horario y modalidad:** Grid `1.6fr 1fr`, gap 16px.
- Horarios: grid `1fr 1fr 1fr`, cada uno con padding `10px 12px`, borde navy si seleccionado
- Modalidad: flex row. Opciones: Presencial / Híbrido / En línea. Presencial activo con fondo cream

**Submit row:** flex space-between. Nota de privacidad italic 12px muted + botón "Enviar inscripción ★" fondo rojo, padding `16px 32px`.

---

### 9. `A2About` — Historia institucional

**Background:** `#F5EFE0`, `padding: 90px 56px`.

**Header centrado:** Eyebrow rojo + H2 Playfair 72px "Más de *60 años* tendiendo puentes."

**Timeline horizontal (6 hitos):** Grid `repeat(6,1fr)`, gap 18px. Línea base double (2 líneas navy, `top: 36px` y `top: 39px`, 1px c/u).

Cada hito:
- Dot: 18×18px círculo centrado, `position: absolute; top: 28px`. Navy para históricos, rojo para el último (2026).
- Año: Playfair italic 900 34px, centrado, letter-spacing -1
- Título: Playfair 700 16px, rojo, centrado
- Descripción: Inter 12px, centrado, line-height 1.5

| Año | Hito |
|---|---|
| 1962 | Fundación |
| 1985 | Kinder bilingüe |
| 1998 | Acreditación |
| 2010 | EducationUSA |
| 2020 | Híbrido |
| 2026 | America 250 (dot rojo) |

---

### 10. `A2Footer` — Pie de página

**Background:** `#071A30`. Regla decorativa top: 6px grosor, `background: #B22234` con bordes laterales y box-shadow inset.

**Masthead repetido (centrado):** Eyebrow gold "★  EST. 1962  ★" + "The Bolivian–American" Playfair italic 38px + "·  C · B · A  ·  S U C R E  ·" Playfair 14px letter-spacing 8.

**Grid 4 columnas** `1.2fr 1fr 1fr 1fr`, gap 40px:
| Col | Contenido |
|---|---|
| Quiénes somos | Párrafo descripción 13px + íconos sociales (F, Ig, Yt, in, X) 32×32px |
| Visítanos | Dirección Playfair italic + horarios Inter |
| Contacto | Teléfono, email, WhatsApp |
| Enlaces | Lista: Sistema académico, Bolsa de trabajo, Voluntariado USA, Biblioteca digital, Reglamento |

**Copyright bar:** `padding: 16px 56px`, `border-top: 1px solid rgba(255,255,255,0.1)`, flex space-between, 11px opacity 0.6 italic.

---

## Interacciones y comportamiento

| Componente | Interacción | Descripción |
|---|---|---|
| `A2Programs` | Click en tab de programa | Cambia `active` state → refresca panel de detalle y estilo del tab |
| `A2Calendar` | Click en mes (Mayo/Junio/Julio) | Cambia `cycle` → filtra lista de eventos |
| `A2Calendar` | Click en filtro de programa | Cambia `filter` → filtra lista de eventos del mes activo |
| Formulario | Click en card de programa | Selección visual (navy vs. blanco) |
| Formulario | Click en horario | Selección visual (borde navy) |
| Formulario | Click en modalidad | Selección visual (cream vs. blanco) |
| Header | Sticky positioning | `position: sticky; top: 0; z-index: 50` |

**Animaciones:** El prototipo no usa animaciones de transición — los cambios de estado son inmediatos. En producción se puede agregar `transition: all 150ms ease` en tabs y filtros.

---

## Gestión de estado

Cada componente interactivo es independiente. Estados necesarios:

```js
// A2Programs
const [activeProgram, setActiveProgram] = useState("teens"); // "kids" | "teens" | "adults" | "special"

// A2Calendar
const [cycle, setCycle] = useState("Mayo"); // "Mayo" | "Junio" | "Julio"
const [filter, setFilter] = useState("Todos"); // "Todos" | "kids" | "teens" | "adults" | "special"
```

No hay fetching de datos. Todo el contenido está hardcodeado en `shared-data.jsx` (ver sección Assets).

---

## Imágenes

Todas las imágenes provienen de **Unsplash** (libre de derechos). En producción reemplazar con imágenes institucionales del CBA:

| Uso | URL actual |
|---|---|
| Niños (foto de programa) | `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80` |
| Adolescentes | `https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&q=80` |
| Adultos | `https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80` |
| Especiales | `https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=900&q=80` |
| Hero eventos (Independence Day) | `https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80` |

---

## Responsivo

El prototipo es **desktop-first** a 1440px. La vista móvil (`CBA Sucre - Móvil.html`) escala el diseño de escritorio con `transform: scale()` para preview; **no es un diseño móvil nativo**. El desarrollador deberá crear breakpoints responsive para producción. Sugerencia:

- `< 768px` (mobile): stack en columna, nav colapsada a hamburguesa, tabs de programas en carousel horizontal, grid de estadísticas 2×2 → 1×4
- `768–1024px` (tablet): reducir columnas a 2, padding lateral a 24px
- `≥ 1440px`: diseño completo del prototipo

---

## Archivos de referencia

| Archivo | Descripción |
|---|---|
| `CBA Sucre.html` | Entry point de escritorio — abre en navegador a 1440px+ |
| `CBA Sucre - Móvil.html` | Vista escalada para móvil |
| `shared-data.jsx` | Todos los datos de contenido (CBA info, PROGRAMS, EVENTS, NEWS) |
| `direction-a-top.jsx` | AHeader, AHero, AAnnouncement + estilos base |
| `direction-a2-top.jsx` | A2Programs + tokens a2Styles |
| `direction-a2-rest.jsx` | A2Calendar, A2Events, A2Fulbright, A2Inscription, A2About, A2Footer + componente raíz DirectionA2 |

---

## Información de contacto institucional (para el CMS / backend)

```
Institución:  Centro Boliviano Americano
Ciudad:       Sucre, Bolivia
Dirección:    Calle Calvo #301 esq. Potosí
Teléfono:     +591 (4) 644 1608
Email:        info@cbasucre.org
Horarios:     Lun–Vie 8:00–20:00 · Sáb 9:00–13:00
Fundación:    1962
```
