import CoinCard from "src/components/Analysis/CoinCard";
import Layout from "src/components/Layout";

import BitcoinImage from "src/images/Bitcoin.png";
import EthereumImage from "src/images/Ethereum.png";
import TetherImage from "src/images/Tether.png";
import CardanoImage from "src/images/Cardano.png";
import BinanceImage from "src/images/Binance.png";
import DodgeImage from "src/images/Dodge.png";
import ShibaImage from "src/images/Shiba.png";
import AtmosImage from "src/images/Atmos.png";
import PolygonImage from "src/images/Polygon.png";
import Link from "next/link";

const analysisCards = [
  {
    title: "بیت‌کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: BitcoinImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال بیت‌کوین",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
  {
    title: "اتریوم",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: EthereumImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال اتریوم",
        href: "/analysis/fundamental/ethereum",
      },
    ],
  },
  {
    title: "تتر",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: TetherImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال تتر",
        href: "/analysis/fundamental/tether",
      },
    ],
  },
  {
    title: "کاردانو",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: CardanoImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال کاردانو",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
  {
    title: "بایننس کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: BinanceImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال بایننس کوین",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
  {
    title: "دوج کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: DodgeImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال دوج کوین",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
  {
    title: "شیبا",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: ShibaImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال شیبا",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
  {
    title: "اتمس",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AtmosImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال اتمس",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
  {
    title: "پالیگان",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: PolygonImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال پالیگان",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
];

export default function Fundamental() {
  return (
    <Layout title={"تحلیل فاندامنتال"}>
      <div className="flex flex-col py-24">
        <div className="container breadcrumbs mb-8">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/analysis">تحلیل رمزارز‌ها</Link>
            </li>
            <li className="text-base-content/60">تحلیل فاندامنتال</li>
          </ul>
        </div>
        <h1 className="f-fat text-center text-4xl">تحلیل فاندامنتال</h1>
        <p className="text-center mt-4">
          طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
          محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
          نمیدهد
        </p>
        <div className="flex justify-center items-center gap-2 flex-wrap mt-12 px-2">
          {analysisCards.map((props) => (
            <CoinCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
