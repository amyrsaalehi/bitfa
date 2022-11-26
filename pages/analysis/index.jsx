import AnalysisCard from "src/components/Analysis/AnalysisCard";
import Layout from "src/components/Layout";
import TechnicalImage from "src/images/Technical.png";
import FundamentalImage from "src/images/Fundamental.png";

const analysisCards = [
  {
    title: "تحلیل تکنیکال",
    image: TechnicalImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال",
        href: "/analysis/technical",
      },
      {
        title: "مشاهده تحلیل تکنیکال بیتکوین",
        href: "/analysis/technical/bitcoin",
      },
    ],
  },
  {
    title: "تحلیل فاندامنتال",
    image: FundamentalImage,
    links: [
      {
        title: "مشاهده تحلیل های فاندامنتال",
        href: "/analysis/fundamental",
      },
      {
        title: "مشاهده تحلیل فاندامنتال ارز های برتر",
        href: "/analysis/fundamental/bitcoin",
      },
    ],
  },
];

export default function AnalysisPage() {
  return (
    <Layout title={"تحلیل رمزارز ها"}>
      <div className="flex flex-col py-20">
        <h1 className="f-bold text-center text-4xl">تحلیل رمزارز ها</h1>
        <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap mt-12">
          {analysisCards.map((props) => (
            <AnalysisCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
