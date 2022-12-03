import Carousel, { CarouselArrowType } from "src/components/Shared/Carousel";
import QuickAccessCard from "./QuickAccessCard";

export default function QuickAccess() {
  return (
    <div className="flex flex-col gap-2 bg-base-200 mt-8 px-4 pb-4 ">
      <Carousel arrow={CarouselArrowType.NO_ARROW}>
        {Array(8)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="carousel-item w-[100px]">
              <QuickAccessCard />
            </div>
          ))}
      </Carousel>
    </div>
  );
}
