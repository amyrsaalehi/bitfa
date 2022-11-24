import CoinCard from "src/components/Analysis/CoinCard";
import Layout from "src/components/Layout";
import BitcoinImage from "src/images/Bitcoin.png";
import EthereumImage from "src/images/Ethereum.png";
import CardanoImage from "src/images/Cardano.png";
import BinanceImage from "src/images/Binance.png";
import DodgeImage from "src/images/Dodge.png";
import ShibaImage from "src/images/Shiba.png";
import AtmosImage from "src/images/Atmos.png";
import PolygonImage from "src/images/Polygon.png";

const analysisCards = [
  {
    title: "بیتکوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: BitcoinImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال بیتکوین",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "اتریوم",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: EthereumImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال اتریوم",
        href: "/analysis/technical/ethereum",
      },
    ],
  },
  {
    title: "کاردانو",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: CardanoImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال کاردانو",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "بایننس کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: BinanceImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال بایننس کوین",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "دوج کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: DodgeImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال دوج کوین",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "شیبا",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: ShibaImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال شیبا",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "اتمس",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AtmosImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال اتمس",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "پالیگان",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: PolygonImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال پالیگان",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
];

export default function Fundamental() {
  return (
    <Layout title={"تحلیل فاندانتال"}>
      <div className="flex flex-col py-24">
        <h1 className="f-bold text-center text-4xl">تحلیل فاندانتال</h1>
        <div className="flex justify-center items-center gap-2 flex-wrap mt-12 px-2">
          {analysisCards.map((props) => (
            <CoinCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
