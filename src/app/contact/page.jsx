import Navbar from "../../components/Navbar.jsx";
import Contact from "../../components/Contact.jsx";
import SiteFooter from "../../components/SiteFooter.jsx";

export const metadata = {
  title: "お問い合わせ | Velvet Pour",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="route-spacer" />
      <Contact />
      <SiteFooter />
    </main>
  );
}
