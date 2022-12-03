import Link from "next/link";
import Carousel from "src/components/Shared/Carousel";
import VideoCard from "src/components/Videos/VideoCard";

export default function News() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-2 mt-8 min-h-[250px]">
      <h2 className="divider f-bold text-3xl md:text-4xl my-0">ویدیو‌ها</h2>
      <Carousel>
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="carousel-item w-[300px] h-[170px]">
              <VideoCard />
            </div>
          ))}
      </Carousel>
      {/* <div className="flex justify-center">
        <Link
          href={"/news"}
          className="btn btn-block md:btn-wide btn-primary btn-outline mt-4"
        >
          مشاهده بیشتر ویدیو‌ها
        </Link>
      </div> */}
    </div>
  );
}
