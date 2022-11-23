import CoinCard from "src/components/Analysis/CoinCard";
import Layout from "src/components/Layout";
import AnalysisImage from "src/images/Form-3.png";
import BitcoinImage from "src/images/Bitcoin.png";
import EthereumImage from "src/images/Ethereum.png";

const analysisCards = [
  {
    title: "بیتکوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: BitcoinImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال بیتکوین",
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
        title: "مشاهده تحلیل های فاندامنتال اتریوم",
        href: "/analysis/technical/ethereum",
      },
    ],
  },
  {
    title: "کاردانو",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AnalysisImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال کاردانو",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "بایننس کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AnalysisImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال بایننس کوین",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "دوج کوین",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AnalysisImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال دوج کوین",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "شیبا",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AnalysisImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال شیبا",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "سولانا",
    description: "آخرین تحلیل در ۲۰ آبان ۱۴۰۱",
    image: AnalysisImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال سولانا",
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
