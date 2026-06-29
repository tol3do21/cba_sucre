import { AHeader } from "@/components/AHeader";
import { AAnnouncement } from "@/components/AAnnouncement";
import { AHero } from "@/components/AHero";
import { A2About } from "@/components/A2About";
import { A2Programs } from "@/components/A2Programs";
import { A2Calendar } from "@/components/A2Calendar";
import { A2Events } from "@/components/A2Events";
import { A2Fulbright } from "@/components/A2Fulbright";
import { A2Inscription } from "@/components/A2Inscription";
import { A2Footer } from "@/components/A2Footer";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        color: "#1A1A1A",
        background: "#F5EFE0",
        minWidth: 320,
      }}
    >
      <AHeader />
      <AAnnouncement />
      <AHero />
      <A2About />
      <A2Programs />
      <A2Calendar />
      <A2Events />
      <A2Fulbright />
      <A2Inscription />
      <A2Footer />
    </div>
  );
}
