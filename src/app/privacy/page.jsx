import LegalPage from "../../components/LegalPage.jsx";

export const metadata = {
  title: "プライバシーポリシー | Velvet Pour",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="個人情報"
      title="プライバシーポリシー"
      sections={[
        ["取得する情報", "お問い合わせ時に、お名前、メールアドレス、電話番号など必要な情報をお預かりする場合があります。"],
        ["利用目的", "お預かりした情報は、予約確認、お問い合わせ対応、サービス改善のために使用します。"],
        ["管理", "個人情報は適切に管理し、法令に基づく場合を除き、本人の同意なく第三者へ提供しません。"],
      ]}
    />
  );
}
