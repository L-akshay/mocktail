import Navbar from "../../components/Navbar.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";
import { cocktailLists, mockTailLists } from "../../../constants/index.js";

export const metadata = {
  title: "カクテル | Velvet Pour",
};

export default function CocktailsPage() {
  return (
    <main>
      <Navbar />
      <section className="inner-page noisy">
        <div className="inner-page-content">
          <p className="eyebrow">メニュー</p>
          <h1>香りとバランスで選ぶ、Velvet Pourの定番。</h1>
          <div className="menu-columns">
            <MenuList title="人気のカクテル" items={cocktailLists} />
            <MenuList title="人気のモクテル" items={mockTailLists} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function MenuList({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map(({ name, country, detail, price }) => (
          <li key={name}>
            <span>
              <strong>{name}</strong>
              <small>
                {country} | {detail}
              </small>
            </span>
            <b>{price}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
