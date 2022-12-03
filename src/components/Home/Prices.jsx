import Link from "next/link";
// import { isMobile } from "react-device-detect";
import Table from "src/components/CoinsPrice/Table";
import Carousel, { CarouselArrowType } from "src/components/Shared/Carousel";
// import useUISafe from "src/helpers/useUISafe";
import BitcoinImage from "src/images/Bitcoin.png";
import PriceCard from "./PriceCard";

const list = [
  {
    image: BitcoinImage,
    name: "بیت‌کوین",
    usdPrice: "112,030,000",
    rialPrice: "۶۳۷,۳۲۲,۰۰۰",
    volume: "۲۷ میلیارد دلار",
    marketCap: "۳۱.۱ میلیارد دلار",
    daily: 20,
    weekly: -12.3,
    route: "bitcoin",
  },
  {
    image: BitcoinImage,
    name: "اتریوم",
    usdPrice: "112,030,000",
    rialPrice: "۶۳۷,۳۲۲,۰۰۰",
    volume: "۲۷ میلیارد دلار",
    marketCap: "۳۱.۱ میلیارد دلار",
    daily: 20,
    weekly: -12.3,
    route: "bitcoin",
  },
  {
    image: BitcoinImage,
    name: "سولانا",
    usdPrice: "112,030,000",
    rialPrice: "۶۳۷,۳۲۲,۰۰۰",
    volume: "۲۷ میلیارد دلار",
    marketCap: "۳۱.۱ میلیارد دلار",
    daily: 20,
    weekly: -12.3,
    route: "bitcoin",
  },
];

export default function Prices() {
  // const mounted = useUISafe();

  // if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2 bg-base-100 md:bg-base-200 px-4 pb-4">
      {/* <h2 className="f-bold text-2xl md:text-3xl text-center">
        لیست قیمت رمزارز‌ها
      </h2> */}
      <div className="hidden md:block">
        <Carousel arrow={CarouselArrowType.NO_ARROW}>
          {Array(8)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="carousel-item w-[250px]">
                <PriceCard />
              </div>
            ))}
        </Carousel>
      </div>
      <div className="block md:hidden">
        <Table items={list} />
      </div>
      {/* {!isMobile ? (
        <Carousel arrow={CarouselArrowType.REGULAR}>
          {Array(8)
            .fill(0)
            .map((_, idx) => (
              <div key={idx} className="carousel-item w-[250px]">
                <PriceCard />
              </div>
            ))}
        </Carousel>
      ) : (
        <Table items={list} />
      )} */}
      <div className="flex justify-center md:justify-end px-4">
        <Link href={"/coins"} className="btn btn-block md:btn-wide btn-primary">
          مشاهده همه رمزارز‌ها
        </Link>
      </div>
    </div>
  );
}
