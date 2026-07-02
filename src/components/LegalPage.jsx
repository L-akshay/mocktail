import Navbar from "./Navbar.jsx";
import SiteFooter from "./SiteFooter.jsx";

export default function LegalPage({ eyebrow, title, sections }) {
  return (
    <main>
      <Navbar />
      <section className="inner-page noisy legal-page">
        <div className="inner-page-content">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="legal-list">
            {sections.map(([heading, body]) => (
              <section key={heading}>
                <h2>{heading}</h2>
                <p>{body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
