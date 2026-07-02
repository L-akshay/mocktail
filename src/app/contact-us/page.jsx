import LegalPage from "../../components/LegalPage.jsx";

export const metadata = {
  title: "お問い合わせ | Velvet Pour",
};

export default function ContactUsPage() {
  return (
    <LegalPage
      eyebrow="連絡先"
      title="お問い合わせ"
      sections={[
        ["店舗", "東京都渋谷区ラキュ通り456 #404"],
        ["電話", "03-5555-9876"],
        ["メール", "hello@velvetpour.jp"],
      ]}
    />
  );
}
