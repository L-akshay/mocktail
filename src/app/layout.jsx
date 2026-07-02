import "../index.css";

export const metadata = {
  title: "Velvet Pour | 東京のクラフトカクテルバー",
  description:
    "Velvet Pourは、季節の素材と繊細な技術で仕上げる東京のクラフトカクテルバーです。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
