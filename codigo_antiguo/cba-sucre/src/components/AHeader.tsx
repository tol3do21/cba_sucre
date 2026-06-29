"use client";

import { CBA } from "@/lib/data";

const NAV = [
  { label: "Inicio",           href: "#"                },
  { label: "Quiénes Somos",   href: "#nosotros"        },
  { label: "Programas",       href: "#programas"       },
  { label: "Calendario",      href: "#calendario"      },
  { label: "Becas",           href: "#becas"           },
  { label: "USA 250",         href: "#usa250"          },
  { label: "Contacto",        href: "#contacto"        },
];

export function AHeader() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "#0A2540", color: "#fff",
      borderBottom: "3px solid #B22234",
    }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 16,
        padding: "14px clamp(20px,4vw,56px)",
      }}>

        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#fff", flexShrink: 0 }}>
          <img src="/logos/logo-cba.png" alt="CBA Logo" style={{
            width: 38, height: 38,
            objectFit: "contain",
            background: "#fff",
            borderRadius: "50%",
            border: "2px solid #B22234",
            flexShrink: 0,
          }} onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fb = e.currentTarget.parentElement?.querySelector('.logo-fallback') as HTMLDivElement;
            if (fb) fb.style.display = 'grid';
          }} />
          <div className="logo-fallback" style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "#fff", border: "2px solid #B22234",
            display: "none", placeItems: "center",
            fontFamily: "var(--font-playfair),Georgia,serif",
            fontWeight: 900, fontSize: 18, color: "#0A2540",
            flexShrink: 0,
          }}>C</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "var(--font-playfair),Georgia,serif", fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>
              Centro Boliviano Americano
            </div>
            <div style={{ fontSize: 10, letterSpacing: 2, opacity: 0.65, textTransform: "uppercase", whiteSpace: "nowrap" }}>
              Sucre · Bolivia · Est. 1962
            </div>
          </div>
        </a>

        {/* Nav */}
        <nav style={{ display: "flex", gap: "clamp(10px,1.4vw,24px)", flexWrap: "nowrap", overflow: "hidden" }}>
          {NAV.map((item) => (
            <a key={item.href} href={item.href} style={{
              color: "#fff", textDecoration: "none",
              fontSize: 12, fontWeight: 500, letterSpacing: 0.3,
              opacity: 0.88, whiteSpace: "nowrap",
            }}>{item.label}</a>
          ))}
        </nav>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
          <a href={CBA.sistema} target="_blank" rel="noopener noreferrer" style={{
            background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.35)",
            padding: "8px 14px", fontSize: 11, letterSpacing: 1,
            textTransform: "uppercase", textDecoration: "none",
            whiteSpace: "nowrap",
          }}>Sistema académico</a>
          <a href="#inscripcion" style={{
            background: "#B22234", color: "#fff",
            padding: "8px 16px", fontSize: 11, letterSpacing: 1,
            textTransform: "uppercase", fontWeight: 700,
            textDecoration: "none", whiteSpace: "nowrap",
          }}>Inscríbete</a>
        </div>

      </div>
    </header>
  );
}
