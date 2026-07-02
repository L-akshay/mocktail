import Navbar from "../../components/Navbar.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";
import { featureLists, goodLists } from "../../../constants/index.js";

export const metadata = {
  title: "技術 | Velvet Pour",
};

export default function ArtPage() {
  return (
    <main>
      <Navbar />
      <section className="inner-page art-page noisy">
        <div className="inner-page-content">
          <p className="eyebrow">技術</p>
          <h1>クラフトは、静かな集中から生まれます。</h1>
          <p>
            香りを開く順番、氷が溶ける速度、グラスに残る余韻。Velvet Pourでは、見えにくい工程まで整えることで、
            一杯の印象をなめらかにつないでいます。
          </p>
          <div className="story-grid">
            {[...goodLists, ...featureLists].map((item) => (
              <div key={item}>
                <h2>{item}</h2>
                <p>素材の個性を尊重し、口に含んだ瞬間から最後の香りまで美しく続くように仕上げます。</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
