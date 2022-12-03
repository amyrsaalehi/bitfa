import AnalysisCard from "src/components/Home/AnalysisCard";
import TechnicalImage from "src/images/Technical.png";
import FundamentalImage from "src/images/Fundamental.png";
import Carousel, { CarouselArrowType } from "src/components/Shared/Carousel";

const analysisCards = [
  {
    title: "تحلیل تکنیکال",
    image: TechnicalImage,
    links: [
      {
        title: "مشاهده تحلیل های تکنیکال",
        href: "/analysis/technical",
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
    ],
  },
];

export default function Analytics() {
  return (
    <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-2 mt-8 min-h-[500px]">
      <h2 className="divider f-bold text-3xl md:text-4xl my-0">تحلیل‌ها</h2>
      {/* <div className="w-full flex gap-8 justify-evenly">
        {analysisCards.map((props) => (
          <AnalysisCard key={props.title} {...props} />
        ))}
      </div> */}
      <Carousel arrow={CarouselArrowType.NO_ARROW}>
        {analysisCards.map((props) => (
          <AnalysisCard key={props.title} {...props} />
        ))}
      </Carousel>
    </div>
  );
}
