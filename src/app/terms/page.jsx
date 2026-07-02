import LegalPage from "../../components/LegalPage.jsx";

export const metadata = {
  title: "利用規約 | Velvet Pour",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="法的情報"
      title="利用規約"
      sections={[
        ["ご利用について", "本サイトはVelvet Pourの店舗情報、メニュー、連絡先をお伝えするために運営しています。掲載内容は予告なく変更される場合があります。"],
        ["予約と来店", "ご予約やお問い合わせへの回答は、店舗の営業時間や混雑状況によりお時間をいただくことがあります。"],
        ["禁止事項", "本サイトの画像、文章、デザインを無断で複製、転載、商用利用することを禁じます。"],
      ]}
    />
  );
}
