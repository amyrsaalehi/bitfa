import AnalysisCard from "src/components/Analysis/AnalysisCard";
import Layout from "src/components/Layout";
import TechnicalImage from "src/images/Technical.png";
import FundamentalImage from "src/images/Fundamental.png";
import Link from "next/link";

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
        title: "مشاهده تحلیل تکنیکال بیت‌کوین",
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
      <div className="container flex flex-col py-20">
        <div className="breadcrumbs mt-2">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li className="text-base-content/60">تحلیل رمزارز‌ها</li>
          </ul>
        </div>
        <h1 className="f-fat text-center text-4xl">تحلیل رمزارز‌ها</h1>
        <p className="text-center mt-4">
          طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو هستند که
          محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما
          نمیدهد
        </p>
        <div className="flex justify-center items-center gap-4 flex-wrap md:flex-nowrap mt-12">
          {analysisCards.map((props) => (
            <AnalysisCard key={props.title} {...props} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
