import Navbar from "../../components/Navbar.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";
import Menu from "../../components/Menu.jsx";

export const metadata = {
  title: "ドリンクメニュー | Velvet Pour",
};

export default function MenuPage() {
  return (
    <main>
      <Navbar />
      <div className="route-spacer" />
      <Menu />
      <SiteFooter />
    </main>
  );
}
