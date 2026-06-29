import type { Metadata } from "next";
import { Playfair_Display, Inter, Archivo_Black } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Centro Boliviano Americano · Sucre",
  description:
    "Tendiendo puentes entre culturas desde 1962. Programas de inglés, EducationUSA, Fulbright y eventos America 250 en Sucre, Bolivia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} ${archivoBlack.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
