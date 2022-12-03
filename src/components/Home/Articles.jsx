import ArticleCard from "src/components/Articles/ArticleCard";
import Carousel from "src/components/Shared/Carousel";

export default function Articles() {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-2 mt-16 min-h-[360px]">
      <h2 className="divider f-bold text-3xl md:text-4xl my-0">مقالات</h2>
      <Carousel>
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="carousel-item w-[300px] h-[300px]">
              <ArticleCard />
            </div>
          ))}
      </Carousel>
      {/* <div className="flex justify-center">
        <Link
          href={"/articles"}
          className="btn btn-block md:btn-wide btn-primary btn-outline mt-4"
        >
          مشاهده بیشتر مقالات
        </Link>
      </div> */}
    </div>
  );
}
