import "../index.css";
import { DM_Serif_Text, Mona_Sans } from "next/font/google";

const monoSans = Mona_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-mona-sans",
  display: "swap",
});

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata = {
  title: "Velvet Pour | 東京のクラフトカクテルバー",
  description:
    "Velvet Pourは、季節の素材と繊細な技術で仕上げる東京のクラフトカクテルバーです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={`${monoSans.variable} ${dmSerifText.variable}`}>
      <body>{children}</body>
    </html>
  );
}
