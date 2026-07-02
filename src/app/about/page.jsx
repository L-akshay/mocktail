import Navbar from "../../components/Navbar.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";

export const metadata = {
  title: "私たちについて | Velvet Pour",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="inner-page noisy">
        <div className="inner-page-content">
          <p className="eyebrow">Velvet Pourについて</p>
          <h1>一杯の余韻まで、丁寧に設計するバーです。</h1>
          <p>
            Velvet Pourは、香り、温度、氷、グラス、余韻までを一つの体験として組み立てるクラフトカクテルバーです。
            季節の果実やハーブを使い、クラシックの骨格を大切にしながら、日本らしい繊細さで仕上げています。
          </p>
          <div className="story-grid">
            <div>
              <h2>素材</h2>
              <p>旬の柑橘、香草、自家製シロップを中心に、毎日の状態を見ながら仕込みます。</p>
            </div>
            <div>
              <h2>技術</h2>
              <p>シェイク、ステア、ビルドの一つひとつを、香りが最もきれいに立つ瞬間へ合わせます。</p>
            </div>
            <div>
              <h2>空間</h2>
              <p>黒を基調にした落ち着いた空間で、会話にも一人の時間にも馴染む夜を用意しています。</p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
