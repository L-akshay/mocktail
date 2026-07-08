import Link from "next/link";
import { socials } from "../../constants/index.js";

const legalLinks = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/contact-us", label: "お問い合わせ" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer noisy">
      <img src="/images/footer-left-leaf.png" alt="" className="footer-leaf footer-leaf-left" loading="lazy" />
      <img src="/images/footer-right-leaf.png" alt="" className="footer-leaf footer-leaf-right" loading="lazy" />

      <div className="site-footer-inner">
        <div>
          <Link href="/" className="footer-brand">
            <img src="/images/logo.png" alt="Velvet Pour" loading="lazy" />
            <span>Velvet Pour</span>
          </Link>
          <p>香り、温度、余韻まで美しく整えるクラフトカクテルバー。</p>
        </div>

        <nav aria-label="フッターリンク">
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer-socials">
          {socials.map((social) => (
            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <img src={social.icon} alt="" loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
