import Image from "next/image";
import Carousel from "src/components/Shared/Carousel";
import ArticleImage from "src/images/Article.png";

export default function Elections() {
  return (
    <div className="flex flex-col gap-2 bg-[#212121] pt-8 mt-8 min-h-[290px]">
      <div className="flex items-center rounded-full gap-2">
        <div className="w-[100px] md:w-[150px] h-1 bg-primary"></div>
        <h2 className="f-bold text-2xl md:text-3xl text-primary">
          منتخب بیتفا
        </h2>
      </div>
      <Carousel>
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className="carousel-item w-[300px]">
              <figure className="relative">
                <Image
                  src={ArticleImage}
                  alt={"اولین ایتم"}
                  width={300}
                  height={170}
                  placeholder="blur"
                  className="rounded-3xl aspect-video shadow-lg"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </figure>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
