const navLinks = [
  { id: "cocktails", title: "カクテル", href: "/cocktails" },
  { id: "about", title: "私たちについて", href: "/about" },
  { id: "art", title: "技術", href: "/art" },
  { id: "menu", title: "メニュー", href: "/menu" },
  { id: "contact", title: "お問い合わせ", href: "/contact" },
];

const cocktailLists = [
  { name: "チャペルヒル・シラーズ", country: "AU", detail: "ボトル", price: "1,500円" },
  { name: "カテナ・マルベック", country: "AU", detail: "ボトル", price: "7,400円" },
  { name: "ライノ・ペールエール", country: "CA", detail: "750 ml", price: "3,000円" },
  { name: "アイリッシュ・ギネス", country: "IE", detail: "600 ml", price: "4,300円" },
];

const mockTailLists = [
  { name: "トロピカル・ブルーム", country: "JP", detail: "グラス", price: "1,500円" },
  { name: "パッションミント", country: "JP", detail: "グラス", price: "1,700円" },
  { name: "シトラス・グロウ", country: "CA", detail: "750 ml", price: "3,000円" },
  { name: "ラベンダー・フィズ", country: "IE", detail: "600 ml", price: "4,300円" },
];

const profileLists = [
  { imgPath: "/images/profile1.png" },
  { imgPath: "/images/profile2.png" },
  { imgPath: "/images/profile3.png" },
  { imgPath: "/images/profile4.png" },
];

const featureLists = [
  "均整のとれたブレンド",
  "最後まで美しいガーニッシュ",
  "いつでも冷たく澄んだ一杯",
  "シェイクとステアの確かな技術",
];

const goodLists = [
  "厳選した素材",
  "シグネチャーの技法",
  "目の前で仕上げる所作",
  "弾けるようなフレッシュ感",
];

const storeInfo = {
  heading: "店舗情報",
  address: "東京都渋谷区ラキュ通り456 #404",
  contact: {
    phone: "03-5555-9876",
    email: "hello@velvetpour.jp",
  },
};

const openingHours = [
  { day: "月 - 木", time: "11:00 - 24:00" },
  { day: "金", time: "11:00 - 26:00" },
  { day: "土", time: "9:00 - 26:00" },
  { day: "日", time: "9:00 - 25:00" },
];

const socials = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "X", icon: "/images/x.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

const allCocktails = [
  {
    id: 1,
    name: "クラシック・モヒート",
    image: "/images/drink1.png",
    title: "シンプルな素材に、鮮やかな余韻。",
    description:
      "ミント、ライム、ラムの香りをすっきり重ねた定番の一杯。暑い夜にも会話の始まりにも、軽やかに寄り添います。",
  },
  {
    id: 2,
    name: "ラズベリー・モヒート",
    image: "/images/drink2.png",
    title: "甘酸っぱさが弾ける、華やかなクラシック。",
    description:
      "ラズベリーの果実味とミントの清涼感を合わせ、甘さを控えめに整えました。香りの立ち上がりが印象的です。",
  },
  {
    id: 3,
    name: "ヴァイオレット・ブリーズ",
    image: "/images/drink3.png",
    title: "静かな夜に似合う、透明感のある味わい。",
    description:
      "花のニュアンスと柑橘の輪郭を重ね、すっきりとした後味に。ゆっくり味わいたい夜におすすめです。",
  },
  {
    id: 4,
    name: "キュラソー・モヒート",
    image: "/images/drink4.png",
    title: "丁寧に作り、心地よく注ぐ一杯。",
    description:
      "ブルーキュラソーの明るい香りに、ライムとミントの爽やかさを合わせました。祝いの席にもよく映えます。",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  allCocktails,
};
